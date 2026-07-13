import type { ReactNode } from "react";
import styles from "./styles.module.css";

/* Rendu markdown Discord partagé entre les embeds et les Text Display (V2).
 * Sous-ensemble : **gras**, *italique*, `code`, mentions #salon / @rôle,
 * citations > et >>>, titres ###, sous-texte -# , icônes inline ![](/img/…)
 * (équivalent des emojis custom du bot, servies depuis static/img/icons). */

export function formatInlineMarkdown(text: string): ReactNode[] {
  const result: ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // ![](/img/...) ou ![](https://cdn...) : icône inline (emoji custom du bot)
    const iconMatch = remaining.match(/^!\[\]\(((?:\/|https:\/\/)[^)]+)\)/);
    if (iconMatch) {
      result.push(<img key={key++} className={styles.inlineIcon} src={iconMatch[1]} alt="" aria-hidden loading="lazy" />);
      remaining = remaining.slice(iconMatch[0].length);
      continue;
    }
    // **bold** (contenu re-parsé : code, mentions et icônes imbriqués)
    const boldMatch = remaining.match(/^\*\*(.+?)\*\*/);
    if (boldMatch) {
      result.push(<strong key={key++}>{formatInlineMarkdown(boldMatch[1])}</strong>);
      remaining = remaining.slice(boldMatch[0].length);
      continue;
    }
    // *italic*
    const italicMatch = remaining.match(/^\*(.+?)\*/);
    if (italicMatch) {
      result.push(<em key={key++}>{formatInlineMarkdown(italicMatch[1])}</em>);
      remaining = remaining.slice(italicMatch[0].length);
      continue;
    }
    // `code`
    const codeMatch = remaining.match(/^`(.+?)`/);
    if (codeMatch) {
      result.push(
        <code key={key++} className={styles.inlineCode}>
          {codeMatch[1]}
        </code>
      );
      remaining = remaining.slice(codeMatch[0].length);
      continue;
    }
    // #channel mention
    const channelMatch = remaining.match(/^#([\wÀ-ɏ-]+)/);
    if (channelMatch) {
      result.push(<span key={key++} className={styles.mention}>#{channelMatch[1]}</span>);
      remaining = remaining.slice(channelMatch[0].length);
      continue;
    }
    // @role or @user mention
    const mentionMatch = remaining.match(/^@([\wÀ-ɏ]+)/);
    if (mentionMatch) {
      result.push(<span key={key++} className={styles.mention}>@{mentionMatch[1]}</span>);
      remaining = remaining.slice(mentionMatch[0].length);
      continue;
    }
    // plain char
    const nextSpecial = remaining.slice(1).search(/[*`#@!]/);
    const chunk = nextSpecial === -1 ? remaining : remaining.slice(0, nextSpecial + 1);
    result.push(chunk);
    remaining = remaining.slice(chunk.length);
  }

  return result;
}

export function formatDiscordMarkdown(text: string): ReactNode {
  // Handle >>> (multi-line blockquote): everything after >>> is quoted
  const multiQuoteIdx = text.indexOf(">>>");
  if (multiQuoteIdx !== -1) {
    const before = text.slice(0, multiQuoteIdx);
    const quoted = text.slice(multiQuoteIdx + 3).replace(/^\s/, "");
    return (
      <>
        {before && formatDiscordMarkdown(before)}
        <div className={styles.blockquote}>
          {formatDiscordLines(quoted)}
        </div>
      </>
    );
  }

  return formatDiscordLines(text);
}

function formatDiscordLines(text: string): ReactNode {
  const lines = text.split("\n");
  const result: ReactNode[] = [];
  let quoteBuffer: string[] = [];
  let codeBuffer: string[] | null = null;
  let key = 0;
  // Une ligne rendue en bloc (titre, sous-texte, citation) crée déjà son
  // retour à la ligne : la ligne suivante ne doit pas ajouter de <br>.
  let prevBlock = false;

  const flushQuote = () => {
    if (quoteBuffer.length > 0) {
      result.push(
        <div key={key++} className={styles.blockquote}>
          {quoteBuffer.map((line, i) => (
            <span key={i}>
              {formatInlineMarkdown(line)}
              {i < quoteBuffer.length - 1 && <br />}
            </span>
          ))}
        </div>
      );
      quoteBuffer = [];
      prevBlock = true;
    }
  };

  for (const line of lines) {
    // ```bloc de code``` (une ligne ou fence multi-lignes)
    const singleCode = line.match(/^```(.+)```$/);
    if (singleCode) {
      flushQuote();
      result.push(<pre key={key++} className={styles.codeBlock}>{singleCode[1]}</pre>);
      prevBlock = true;
      continue;
    }
    if (codeBuffer !== null) {
      if (line.startsWith("```")) {
        result.push(<pre key={key++} className={styles.codeBlock}>{codeBuffer.join("\n")}</pre>);
        codeBuffer = null;
        prevBlock = true;
      } else {
        codeBuffer.push(line);
      }
      continue;
    }
    if (line.startsWith("```")) {
      flushQuote();
      codeBuffer = [];
      continue;
    }

    const quoteMatch = line.match(/^>\s?(.*)/);
    if (quoteMatch) {
      quoteBuffer.push(quoteMatch[1]);
      continue;
    }
    flushQuote();

    // #, ## et ### headings (display: block, pas de <br> cumulé)
    const headingMatch = line.match(/^(#{1,3})\s+(.*)/);
    if (headingMatch) {
      const levelClass = headingMatch[1].length === 1
        ? styles.mdH1
        : headingMatch[1].length === 2
          ? styles.mdH2
          : "";
      result.push(
        <span key={key++} className={`${styles.mdHeading} ${levelClass}`}>
          {formatInlineMarkdown(headingMatch[2])}
        </span>
      );
      prevBlock = true;
      continue;
    }

    // -# small subtext (display: block, pas de <br> cumulé)
    const smallMatch = line.match(/^-#\s+(.*)/);
    if (smallMatch) {
      result.push(
        <span key={key++} className={styles.mdSmall}>
          {formatInlineMarkdown(smallMatch[1])}
        </span>
      );
      prevBlock = true;
      continue;
    }

    result.push(
      <span key={key++}>
        {result.length > 0 && !prevBlock && <br />}
        {formatInlineMarkdown(line)}
      </span>
    );
    prevBlock = false;
  }

  flushQuote();
  return <>{result}</>;
}
