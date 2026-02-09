import type { Component } from "./types";
import styles from "./styles.module.css";

function ChevronDown() {
  return (
    <svg
      className={styles.selectChevron}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      className={styles.buttonLinkIcon}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.9348 4.06519 21 5.375 21H18.625C19.9348 21 21 19.9348 21 18.625V14H19V19H5V5H10Z" />
      <path d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg className={styles.fileIcon} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM6 20V4H13V9H18V20H6Z" />
    </svg>
  );
}

function renderEmoji(emoji: { name: string; id?: string; animated?: boolean }) {
  if (emoji.id) {
    const ext = emoji.animated ? "gif" : "png";
    return (
      <img
        className={styles.buttonEmoji}
        src={`https://cdn.discordapp.com/emojis/${emoji.id}.${ext}`}
        alt={emoji.name}
        loading="lazy"
      />
    );
  }
  return <span className={styles.buttonEmojiUnicode}>{emoji.name}</span>;
}

function SelectMenu({
  placeholder,
  disabled,
}: {
  placeholder: string;
  disabled?: boolean;
}) {
  return (
    <div className={styles.select} data-disabled={disabled || undefined}>
      <span className={styles.selectPlaceholder}>{placeholder}</span>
      <ChevronDown />
    </div>
  );
}

export default function ComponentRenderer({
  component,
  navigableIds,
  onNavigate,
}: {
  component: Component;
  navigableIds?: Set<string>;
  onNavigate?: (customId: string) => void;
}) {
  switch (component.type) {
    // Action Row
    case 1:
      return (
        <div className={styles.actionRow}>
          {component.components.map((child, i) => (
            <ComponentRenderer key={i} component={child} navigableIds={navigableIds} onNavigate={onNavigate} />
          ))}
        </div>
      );

    // Button
    case 2: {
      const styleMap: Record<number, string> = {
        1: styles.buttonPrimary,
        2: styles.buttonSecondary,
        3: styles.buttonSuccess,
        4: styles.buttonDanger,
        5: styles.buttonLink,
      };

      const isLink = component.style === 5 && component.url;
      const isNavigable = !isLink && component.custom_id && navigableIds?.has(component.custom_id);
      const Tag = isLink ? "a" : "button";
      const extraProps =
        Tag === "a"
          ? {
              href: component.url,
              target: "_blank",
              rel: "noopener noreferrer",
            }
          : {};

      return (
        <Tag
          className={`${styles.button} ${styleMap[component.style] || styles.buttonSecondary} ${isNavigable ? styles.buttonNavigable : ""}`}
          disabled={component.disabled || undefined}
          onClick={isNavigable ? () => onNavigate?.(component.custom_id!) : undefined}
          {...extraProps}
        >
          {component.emoji && renderEmoji(component.emoji)}
          {component.label}
          {component.style === 5 && <ExternalLinkIcon />}
        </Tag>
      );
    }

    // String Select
    case 3:
      return (
        <SelectMenu
          placeholder={component.placeholder || "Faites une sélection"}
          disabled={component.disabled}
        />
      );

    // User Select
    case 5:
      return (
        <SelectMenu
          placeholder={
            component.placeholder || "Sélectionner un utilisateur"
          }
          disabled={component.disabled}
        />
      );

    // Role Select
    case 6:
      return (
        <SelectMenu
          placeholder={component.placeholder || "Sélectionner un rôle"}
          disabled={component.disabled}
        />
      );

    // Mentionable Select
    case 7:
      return (
        <SelectMenu
          placeholder={
            component.placeholder || "Faites une sélection"
          }
          disabled={component.disabled}
        />
      );

    // Channel Select
    case 8:
      return (
        <SelectMenu
          placeholder={component.placeholder || "Sélectionner un salon"}
          disabled={component.disabled}
        />
      );

    // Section
    case 9:
      return (
        <div className={styles.section}>
          <div className={styles.sectionContent}>
            {component.components.map((child, i) => (
              <ComponentRenderer key={i} component={child} navigableIds={navigableIds} onNavigate={onNavigate} />
            ))}
          </div>
          {component.accessory && (
            <div className={styles.sectionAccessory}>
              <ComponentRenderer component={component.accessory} navigableIds={navigableIds} onNavigate={onNavigate} />
            </div>
          )}
        </div>
      );

    // Text Display
    case 10:
      return <div className={styles.textDisplay}>{component.content}</div>;

    // Thumbnail
    case 11:
      return (
        <img
          className={styles.thumbnail}
          src={component.media.url}
          alt={component.description || ""}
          loading="lazy"
        />
      );

    // Media Gallery
    case 12: {
      const count = component.items.length;
      const gridClass =
        count === 1
          ? styles.mediaGallery1
          : count === 2
            ? styles.mediaGallery2
            : styles.mediaGallery3plus;

      return (
        <div className={`${styles.mediaGallery} ${gridClass}`}>
          {component.items.map((item, i) => (
            <div key={i} className={styles.mediaGalleryItem}>
              <img
                className={`${styles.mediaGalleryImage} ${item.spoiler ? styles.mediaGallerySpoiler : ""}`}
                src={item.media.url}
                alt={item.description || ""}
                loading="lazy"
              />
              {item.description && (
                <div className={styles.mediaGalleryDesc}>
                  {item.description}
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

    // Separator
    case 13: {
      const spacingClass =
        component.spacing === 2 ? styles.separatorSpacingLarge : "";
      const dividerClass =
        component.divider === false ? styles.separatorNoDivider : "";
      return (
        <hr
          className={`${styles.separator} ${spacingClass} ${dividerClass}`}
        />
      );
    }

    // File
    case 14:
      return (
        <div className={styles.file}>
          <FileIcon />
          <a
            className={styles.fileName}
            href={component.file.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {component.file.filename}
          </a>
        </div>
      );

    // Container
    case 17: {
      const borderColor = component.accent_color
        ? `#${component.accent_color.toString(16).padStart(6, "0")}`
        : undefined;

      return (
        <div
          className={styles.container}
          style={borderColor ? { borderLeftColor: borderColor } : undefined}
        >
          {component.components.map((child, i) => (
            <ComponentRenderer key={i} component={child} navigableIds={navigableIds} onNavigate={onNavigate} />
          ))}
        </div>
      );
    }

    default:
      return null;
  }
}
