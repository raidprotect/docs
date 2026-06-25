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
