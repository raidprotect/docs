import type { DiscordEmbed } from "./types";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

function intToHex(color: number): string {
  return `#${color.toString(16).padStart(6, "0")}`;
}

function formatTimestamp(ts: string): string {
  const d = new Date(ts);
  return d.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function formatInlineMarkdown(text: string): ReactNode[] {
  const result: ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // **bold**
    const boldMatch = remaining.match(/^\*\*(.+?)\*\*/);
    if (boldMatch) {
      result.push(<strong key={key++}>{boldMatch[1]}</strong>);
      remaining = remaining.slice(boldMatch[0].length);
      continue;
    }
    // *italic*
    const italicMatch = remaining.match(/^\*(.+?)\*/);
    if (italicMatch) {
      result.push(<em key={key++}>{italicMatch[1]}</em>);
      remaining = remaining.slice(italicMatch[0].length);
      continue;
    }
    // `code`
    const codeMatch = remaining.match(/^`(.+?)`/);
    if (codeMatch) {
      result.push(
        <code key={key++} style={{ background: "#1e1f22", padding: "0 4px", borderRadius: 3, fontSize: "85%" }}>
          {codeMatch[1]}
        </code>
      );
      remaining = remaining.slice(codeMatch[0].length);
      continue;
    }
    // #channel mention
    const channelMatch = remaining.match(/^#([\w\u00C0-\u024F-]+)/);
    if (channelMatch) {
      result.push(<span key={key++} className={styles.mention}>#{channelMatch[1]}</span>);
      remaining = remaining.slice(channelMatch[0].length);
      continue;
    }
    // @role or @user mention
    const mentionMatch = remaining.match(/^@([\w\u00C0-\u024F ]+)/);
    if (mentionMatch) {
      result.push(<span key={key++} className={styles.mention}>@{mentionMatch[1]}</span>);
      remaining = remaining.slice(mentionMatch[0].length);
      continue;
    }
    // plain char
    const nextSpecial = remaining.slice(1).search(/[*`#@]/);
    const chunk = nextSpecial === -1 ? remaining : remaining.slice(0, nextSpecial + 1);
    result.push(chunk);
    remaining = remaining.slice(chunk.length);
  }

  return result;
}

function formatDiscordMarkdown(text: string): ReactNode {
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
  let key = 0;

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
    }
  };

  for (const line of lines) {
    const quoteMatch = line.match(/^>\s?(.*)/);
    if (quoteMatch) {
      quoteBuffer.push(quoteMatch[1]);
    } else {
      flushQuote();
      result.push(
        <span key={key++}>
          {result.length > 0 && <br />}
          {formatInlineMarkdown(line)}
        </span>
      );
    }
  }

  flushQuote();
  return <>{result}</>;
}

export default function Embed({ embed }: { embed: DiscordEmbed }) {
  const pillColor = embed.color != null ? intToHex(embed.color) : "#202225";

  return (
    <div className={styles.embed}>
      <div
        className={styles.embedColorPill}
        style={{ backgroundColor: pillColor }}
      />

      <div className={styles.embedContent}>
        {embed.author && (
          <div className={styles.embedAuthor}>
            {embed.author.icon_url && (
              <img
                className={styles.embedAuthorIcon}
                src={embed.author.icon_url}
                alt=""
                loading="lazy"
              />
            )}
            {embed.author.url ? (
              <a
                className={styles.embedAuthorName}
                href={embed.author.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {embed.author.name}
              </a>
            ) : (
              <span className={styles.embedAuthorName}>
                {embed.author.name}
              </span>
            )}
          </div>
        )}

        {embed.title &&
          (embed.url ? (
            <a
              className={styles.embedTitle}
              href={embed.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {embed.title}
            </a>
          ) : (
            <div className={styles.embedTitle}>{embed.title}</div>
          ))}

        {embed.description && (
          <div className={styles.embedDescription}>{formatDiscordMarkdown(embed.description)}</div>
        )}

        {embed.fields && embed.fields.length > 0 && (
          <div className={styles.embedFields}>
            {embed.fields.map((field, i) => (
              <div
                key={i}
                className={`${styles.embedField} ${!field.inline ? styles.embedFieldWide : ""}`}
              >
                <div className={styles.embedFieldName}>{formatDiscordMarkdown(field.name)}</div>
                <div className={styles.embedFieldValue}>{formatDiscordMarkdown(field.value)}</div>
              </div>
            ))}
          </div>
        )}

        {embed.image && (
          <img
            className={styles.embedImage}
            src={embed.image.url}
            alt=""
            loading="lazy"
          />
        )}

        {embed.footer && (
          <div className={styles.embedFooter}>
            {embed.footer.icon_url && (
              <img
                className={styles.embedFooterIcon}
                src={embed.footer.icon_url}
                alt=""
                loading="lazy"
              />
            )}
            <span>{embed.footer.text}</span>
            {embed.timestamp && (
              <>
                <span className={styles.embedFooterSep}>•</span>
                <span>{formatTimestamp(embed.timestamp)}</span>
              </>
            )}
          </div>
        )}

        {!embed.footer && embed.timestamp && (
          <div className={styles.embedFooter}>
            <span>{formatTimestamp(embed.timestamp)}</span>
          </div>
        )}
      </div>

      {embed.thumbnail && (
        <img
          className={styles.embedThumbnail}
          src={embed.thumbnail.url}
          alt=""
          loading="lazy"
        />
      )}
    </div>
  );
}
