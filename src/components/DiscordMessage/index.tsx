import { useState } from "react";
import type { DiscordMessageData } from "./types";
import Embed from "./Embed";
import ComponentRenderer from "./ComponentRenderer";
import styles from "./styles.module.css";

const DEFAULT_AVATAR =
  "https://cdn.discordapp.com/embed/avatars/0.png";

export default function DiscordMessage({
  message,
  pages,
}: {
  message: DiscordMessageData;
  pages?: Record<string, DiscordMessageData>;
}) {
  const [currentPage, setCurrentPage] = useState<string | null>(null);
  const pageKeys = pages ? new Set([...Object.keys(pages), "__back__"]) : new Set<string>();

  const current = currentPage && pages?.[currentPage] ? pages[currentPage] : message;
  const { author, content, embeds, components } = current;

  const handleNavigate = (customId: string) => {
    if (customId === "__back__") {
      setCurrentPage(null);
    } else if (pageKeys.has(customId)) {
      setCurrentPage(customId);
    }
  };

  return (
    <div className={styles.message}>
      <img
        className={styles.avatar}
        src={author.avatar || DEFAULT_AVATAR}
        alt={author.username}
        loading="lazy"
      />
      <div className={styles.body}>
        <div className={styles.header}>
          <span className={styles.username}>{author.username}</span>
          {author.bot && (
            <span className={styles.appBadge}>
              <svg className={styles.appBadgeCheck} viewBox="0 0 16 16" aria-hidden="true">
                <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor" />
              </svg>
              APP
            </span>
          )}
        </div>

        {content && <div className={styles.content}>{content}</div>}

        {embeds && embeds.length > 0 && (
          <div className={styles.embedsWrapper}>
            {embeds.map((embed, i) => (
              <Embed key={i} embed={embed} />
            ))}
          </div>
        )}

        {components && components.length > 0 && (
          <div className={styles.componentsWrapper}>
            {components.map((component, i) => (
              <ComponentRenderer
                key={i}
                component={component}
                navigableIds={pageKeys}
                onNavigate={handleNavigate}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
