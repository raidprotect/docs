import type { DiscordEmbed } from "./types";
import { formatDiscordMarkdown } from "./markdown";
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
