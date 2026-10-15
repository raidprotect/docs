import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// Badges des titres, du sommaire et de la sidebar : infobulle au survol, l'étoile mène à /premium.
const BADGE_SELECTOR = '.badge-premium, .badge-experiment';

let tooltip: HTMLDivElement | null = null;

function premiumUrl(): string {
  const lang = document.documentElement.lang.split('-')[0];
  return lang && lang !== 'fr' ? `/${lang}/premium` : '/premium';
}

function findBadge(target: EventTarget | null, selector = BADGE_SELECTOR): Element | null {
  return (target as Element | null)?.closest?.(selector) ?? null;
}

function showTooltip(badge: Element): void {
  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.className = 'feature-badge-tooltip';
    tooltip.setAttribute('role', 'tooltip');
    document.body.appendChild(tooltip);
  }
  const rect = badge.getBoundingClientRect();
  tooltip.textContent = badge.textContent?.trim() ?? '';
  tooltip.style.left = `${rect.left + rect.width / 2}px`;
  tooltip.style.top = `${rect.top - 6}px`;
  tooltip.classList.add('feature-badge-tooltip--visible');
}

function hideTooltip(): void {
  tooltip?.classList.remove('feature-badge-tooltip--visible');
}

if (ExecutionEnvironment.canUseDOM) {
  document.addEventListener('mouseover', (event) => {
    const badge = findBadge(event.target);
    if (badge) showTooltip(badge);
    else hideTooltip();
  });
  document.addEventListener('scroll', hideTooltip, true);

  document.addEventListener(
    'click',
    (event) => {
      if (!findBadge(event.target, '.badge-premium')) return;
      event.preventDefault();
      event.stopPropagation();
      hideTooltip();
      window.location.assign(premiumUrl());
    },
    true,
  );
}

export function onRouteDidUpdate(): void {
  hideTooltip();
}
