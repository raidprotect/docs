/**
 * Construit une URL vers un endpoint de redirection du domaine (ex: `/invite`,
 * `/appointment`) en préservant la locale courante.
 *
 * Ces chemins ne sont pas des pages du site Docusaurus : ce sont des règles de
 * redirection gérées côté domaine, qui existent pour chaque langue. On préfixe
 * donc par la locale courante, sauf pour la langue par défaut (fr) qui n'a pas
 * de préfixe — exactement comme les liens internes localisés du site.
 *
 * @param siteUrl URL absolue du site (siteConfig.url), sans slash final.
 * @param currentLocale Locale active (siteConfig i18n.currentLocale).
 * @param defaultLocale Locale par défaut (i18n.defaultLocale).
 * @param path Chemin commençant par un slash, ex: `/invite`.
 */
export function localizedRedirectUrl(
  siteUrl: string,
  currentLocale: string,
  defaultLocale: string,
  path: string,
): string {
  const prefix = currentLocale === defaultLocale ? '' : `/${currentLocale}`;
  return `${siteUrl}${prefix}${path}`;
}

type UrlsMap = Record<string, Record<string, string>>;

/**
 * Localise un item de navbar dont le `to` est une clé de `customFields.urls`
 * (ex: `main`, `invite`) : remplace la clé par l'URL de la locale courante.
 *
 * Renvoie une copie (pas de mutation de l'objet de config, partagé entre les
 * rendus desktop et mobile). Pour un chemin interne, on cadre l'état « actif »
 * sur l'URL exacte (sinon un `to="/"` matcherait toutes les routes) ; pour une
 * URL absolue (lien externe, ex: redirection de domaine), pas d'état actif.
 */
export function localizeNavbarItemUrl<T>(
  item: T,
  urls: UrlsMap,
  currentLocale: string,
): T {
  const key = (item as {to?: string}).to;
  if (!key || !urls[key]) {
    return item;
  }
  const resolved = urls[key][currentLocale] ?? key;
  const next = {...item, to: resolved} as T & {activeBaseRegex?: string};
  if (resolved.startsWith('/')) {
    const escaped = resolved
      .replace(/\/$/, '')
      .replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    next.activeBaseRegex = `^${escaped || ''}/?$`;
  }
  return next;
}
