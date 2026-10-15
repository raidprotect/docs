import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// Badges des titres, du sommaire et de la sidebar : infobulle au survol, l'étoile mène à /premium.
const BADGE_SELECTOR = '.badge-premium, .badge-experiment';

function premiumUrl(): string {
  const lang = document.documentElement.lang.split('-')[0];
  return lang && lang !== 'fr' ? `/${lang}/premium` : '/premium';
}

if (ExecutionEnvironment.canUseDOM) {
  document.addEventListener('mouseover', (event) => {
    const badge = (event.target as Element | null)?.closest?.(BADGE_SELECTOR);
    if (badge && !badge.getAttribute('title')) badge.setAttribute('title', badge.textContent?.trim() ?? '');
  });

  document.addEventListener(
    'click',
    (event) => {
      const badge = (event.target as Element | null)?.closest?.('.badge-premium');
      if (!badge) return;
      event.preventDefault();
      event.stopPropagation();
      window.location.assign(premiumUrl());
    },
    true,
  );
}
