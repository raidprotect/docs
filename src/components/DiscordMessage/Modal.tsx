import { translate } from "@docusaurus/Translate";
import type { SelectOption } from "./types";
import { formatDiscordMarkdown } from "./markdown";
import ComponentRenderer from "./ComponentRenderer";
import styles from "./modal.module.css";

/* Modale Discord (composants Label type 18) : texte, champs de saisie,
 * sélecteurs, cases à cocher et envoi de fichier. */

export type ModalInput =
  | { kind: "select"; placeholder?: string; options: SelectOption[] }
  | { kind: "channel" | "role" | "user"; placeholder?: string; values?: string[] }
  | { kind: "text"; placeholder?: string; value?: string; paragraph?: boolean }
  | { kind: "checkbox"; options: Array<{ label: string; description?: string; checked?: boolean }> }
  | { kind: "file"; max?: number };

export type ModalItem =
  | { type: "text"; content: string }
  | { type: "field"; label: string; description?: string; required?: boolean; input: ModalInput };

export interface ModalData {
  title: string;
  items: ModalItem[];
}

function Input({ input }: { input: ModalInput }) {
  switch (input.kind) {
    case "select":
      return (
        <ComponentRenderer
          component={{ type: 3, custom_id: "modal-select", placeholder: input.placeholder, options: input.options }}
        />
      );
    case "channel":
    case "role":
    case "user": {
      const type = input.kind === "channel" ? 8 : input.kind === "role" ? 6 : 5;
      return (
        <ComponentRenderer
          component={{ type, custom_id: "modal-entity", placeholder: input.placeholder, values: input.values }}
        />
      );
    }
    case "text":
      return (
        <div className={`${styles.textInput} ${input.paragraph ? styles.paragraph : ""}`}>
          {input.value ? (
            <span className={styles.value}>{input.value}</span>
          ) : (
            <span className={styles.placeholder}>{input.placeholder}</span>
          )}
        </div>
      );
    case "checkbox":
      return (
        <div className={styles.checkboxes}>
          {input.options.map((o) => (
            <div key={o.label} className={styles.checkbox}>
              <span className={`${styles.box} ${o.checked ? styles.boxChecked : ""}`} aria-hidden>
                {o.checked && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                    <path d="M5 12l5 5 9-10" />
                  </svg>
                )}
              </span>
              <span className={styles.checkboxBody}>
                <span className={styles.checkboxLabel}>{o.label}</span>
                {o.description && <span className={styles.checkboxDesc}>{o.description}</span>}
              </span>
            </div>
          ))}
        </div>
      );
    case "file":
      return <div className={styles.file}>{translate({ id: "mockup.modal.file", message: "Glissez des fichiers ici" })}{input.max ? ` (${input.max} max)` : ""}</div>;
  }
}

export default function DiscordModal({ modal, onClose }: { modal: ModalData; onClose?: () => void }) {
  return (
    <div className={styles.modal} role="dialog" aria-label={modal.title} data-search-ignore>
      <div className={styles.header}>
        <img className={styles.appIcon} src="/img/logo.png" alt="" aria-hidden />
        <span className={styles.title}>{modal.title}</span>
        <button type="button" className={styles.close} onClick={onClose} aria-label={translate({ id: "mockup.modal.close", message: "Fermer" })}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
      <div className={styles.body}>
        {modal.items.map((item, i) =>
          item.type === "text" ? (
            <div key={i} className={styles.text}>{formatDiscordMarkdown(item.content)}</div>
          ) : (
            <div key={i} className={styles.field}>
              <div className={styles.label}>
                {item.label}
                {item.required && <span className={styles.required}>*</span>}
              </div>
              {item.description && <div className={styles.description}>{item.description}</div>}
              <Input input={item.input} />
            </div>
          )
        )}
      </div>
      <div className={styles.footer}>
        <button type="button" className={styles.cancel} onClick={onClose}>{translate({ id: "mockup.modal.cancel", message: "Annuler" })}</button>
        <button type="button" className={styles.submit} onClick={onClose}>{translate({ id: "mockup.modal.submit", message: "Envoyer" })}</button>
      </div>
    </div>
  );
}
