import { useState } from "react";
import { translate } from "@docusaurus/Translate";
import type { DiscordMessageData } from "./types";
import Embed from "./Embed";
import ComponentRenderer from "./ComponentRenderer";
import { formatDiscordMarkdown } from "./markdown";
import styles from "./styles.module.css";

const DEFAULT_AVATAR =
  "https://cdn.discordapp.com/embed/avatars/0.png";

export interface ThreadLastMessage {
  username: string;
  avatar?: string;
  bot?: boolean;
  content: string;
  when?: string;
}

/** Indicateur de fil replié sous le message (comme l'intégration Discord) :
 *  nom + compteur en bleu, et aperçu du dernier message, sans ouvrir le fil. */
export interface ThreadData {
  name: string;
  messageCount: number;
  lastMessage?: ThreadLastMessage;
}

function Thread({ thread }: { thread: ThreadData }) {
  const last = thread.lastMessage;
  return (
    <div className={styles.thread}>
      <div className={styles.threadSpine} aria-hidden />
      <div className={styles.threadCard}>
        <div className={styles.threadHeader}>
          <span className={styles.threadName}>{thread.name}</span>
          <span className={styles.threadCount}>
            {translate(
              { id: "mockup.thread.messages", message: "{count} messages" },
              { count: thread.messageCount }
            )}
            {" ›"}
          </span>
        </div>
        {last && (
          <div className={styles.threadLast}>
            <img
              className={styles.threadAvatar}
              src={last.avatar || DEFAULT_AVATAR}
              alt={last.username}
              loading="lazy"
            />
            {last.bot && (
              <span className={styles.threadAppBadge}>
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor" />
                </svg>
                APP
              </span>
            )}
            <span className={styles.threadLastAuthor}>{last.username}</span>
            <svg className={styles.threadReplyArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path d="M4 17v-2a4 4 0 0 1 4-4h11m0 0-4-4m4 4-4 4" />
            </svg>
            <span className={styles.threadLastContent}>{last.content}</span>
            {last.when && <span className={styles.threadWhen}>{last.when}</span>}
          </div>
        )}
      </div>
    </div>
  );
}

export default function DiscordMessage({
  message,
  pages,
  actions,
  thread,
}: {
  message: DiscordMessageData;
  pages?: Record<string, DiscordMessageData>;
  /* Boutons interactifs sans navigation : la callback est appelée au clic
     (toggles des mockups de configuration). */
  actions?: Record<string, () => void>;
  thread?: ThreadData;
}) {
  const [currentPage, setCurrentPage] = useState<string | null>(null);
  const pageKeys = pages ? new Set([...Object.keys(pages), "__back__"]) : new Set<string>();
  if (actions) {
    for (const key of Object.keys(actions)) pageKeys.add(key);
  }

  const current = currentPage && pages?.[currentPage] ? pages[currentPage] : message;
  const { content, embeds, components } = current;

  const handleNavigate = (customId: string) => {
    if (actions?.[customId]) {
      actions[customId]();
    } else if (customId === "__back__") {
      setCurrentPage(null);
    } else if (pages?.[customId]) {
      setCurrentPage(customId);
    }
  };

  return (
    <div className={styles.message}>
      <div className={styles.body}>
        {content && <div className={styles.content}>{formatDiscordMarkdown(content)}</div>}

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

        {thread && <Thread thread={thread} />}
      </div>
    </div>
  );
}
