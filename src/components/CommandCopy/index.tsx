import {useEffect} from 'react';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

/**
 * Améliore les tableaux de la page « Liste des commandes » : au survol d'une
 * cellule de la première colonne (la commande), un petit bouton « copier »
 * apparaît pour copier la commande dans le presse-papiers (à coller dans
 * Discord). Le composant ne rend rien : il enrichit le DOM rendu par le MDX.
 *
 * À placer une fois en tête de chaque `commands.mdx`.
 */
export default function CommandCopy(): null {
  useEffect(() => {
    if (typeof document === 'undefined') {
      return undefined;
    }

    const copyLabel = translate({
      id: 'commands.copy.label',
      message: 'Copier la commande',
      description: 'Aria-label of the copy button on command cells',
    });

    const root = document.querySelector('.theme-doc-markdown') ?? document;
    const cells = Array.from(
      root.querySelectorAll<HTMLTableCellElement>('table tbody tr td:first-child'),
    );

    const cleanups: Array<() => void> = [];

    cells.forEach((cell) => {
      if (cell.dataset.cmdCopy) {
        return;
      }
      const command = cell.textContent?.trim() ?? '';
      if (!command) {
        return;
      }
      cell.dataset.cmdCopy = '1';
      cell.classList.add(styles.cell);

      const button = document.createElement('button');
      button.type = 'button';
      button.className = styles.button;
      button.setAttribute('aria-label', `${copyLabel} : ${command}`);
      button.title = copyLabel;
      button.innerHTML = COPY_ICON + CHECK_ICON;

      const handleClick = async (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        try {
          await navigator.clipboard.writeText(command);
          button.classList.add(styles.copied);
          window.setTimeout(() => button.classList.remove(styles.copied), 1200);
        } catch {
          /* presse-papiers indisponible (http, permissions…), on ignore */
        }
      };

      button.addEventListener('click', handleClick);
      cell.appendChild(button);

      cleanups.push(() => {
        button.removeEventListener('click', handleClick);
        button.remove();
        delete cell.dataset.cmdCopy;
        cell.classList.remove(styles.cell);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}

const COPY_ICON = `<svg class="${styles.icon} ${styles.iconCopy}" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;

const CHECK_ICON = `<svg class="${styles.icon} ${styles.iconCheck}" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>`;
