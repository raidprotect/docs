// Discord API types for message rendering

export interface DiscordEmoji {
  name: string;
  id?: string;
  animated?: boolean;
}

// --- Embed ---

export interface DiscordEmbedAuthor {
  name: string;
  url?: string;
  icon_url?: string;
}

export interface DiscordEmbedField {
  name: string;
  value: string;
  inline?: boolean;
}

export interface DiscordEmbedFooter {
  text: string;
  icon_url?: string;
}

export interface DiscordEmbedImage {
  url: string;
}

export interface DiscordEmbedThumbnail {
  url: string;
}

export interface DiscordEmbed {
  title?: string;
  description?: string;
  url?: string;
  color?: number;
  timestamp?: string;
  author?: DiscordEmbedAuthor;
  thumbnail?: DiscordEmbedThumbnail;
  image?: DiscordEmbedImage;
  footer?: DiscordEmbedFooter;
  fields?: DiscordEmbedField[];
}

// --- Components ---

export interface ActionRow {
  type: 1;
  components: Component[];
}

export interface Button {
  type: 2;
  style: 1 | 2 | 3 | 4 | 5;
  label?: string;
  custom_id?: string;
  url?: string;
  emoji?: DiscordEmoji;
  disabled?: boolean;
}

export interface SelectOption {
  label: string;
  value: string;
  description?: string;
  emoji?: DiscordEmoji;
  default?: boolean;
}

export interface StringSelect {
  type: 3;
  custom_id: string;
  placeholder?: string;
  options: SelectOption[];
  disabled?: boolean;
}

export interface UserSelect {
  type: 5;
  custom_id: string;
  placeholder?: string;
  disabled?: boolean;
}

export interface RoleSelect {
  type: 6;
  custom_id: string;
  placeholder?: string;
  disabled?: boolean;
}

export interface MentionableSelect {
  type: 7;
  custom_id: string;
  placeholder?: string;
  disabled?: boolean;
}

export interface ChannelSelect {
  type: 8;
  custom_id: string;
  placeholder?: string;
  disabled?: boolean;
}

export interface TextDisplay {
  type: 10;
  content: string;
}

export interface Thumbnail {
  type: 11;
  media: { url: string };
  description?: string;
}

export interface Section {
  type: 9;
  components: TextDisplay[];
  accessory?: Thumbnail | Button;
}

export interface MediaGalleryItem {
  media: { url: string };
  description?: string;
  spoiler?: boolean;
}

export interface MediaGallery {
  type: 12;
  items: MediaGalleryItem[];
}

export interface Separator {
  type: 13;
  divider?: boolean;
  spacing?: 1 | 2;
}

export interface File {
  type: 14;
  file: { url: string; filename: string };
}

export interface Container {
  type: 17;
  accent_color?: number;
  components: Component[];
}

export type Component =
  | ActionRow
  | Button
  | StringSelect
  | UserSelect
  | RoleSelect
  | MentionableSelect
  | ChannelSelect
  | Section
  | TextDisplay
  | Thumbnail
  | MediaGallery
  | Separator
  | File
  | Container;

// --- Message ---

export interface DiscordAuthor {
  username: string;
  avatar?: string;
  bot?: boolean;
}

export interface DiscordMessageData {
  content?: string;
  author: DiscordAuthor;
  embeds?: DiscordEmbed[];
  components?: Component[];
}
