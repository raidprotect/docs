/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {PageMetadata, useThemeConfig} from '@docusaurus/theme-common';
import {DEFAULT_SEARCH_TAG} from '@docusaurus/theme-common/internal';
import {useLocation} from '@docusaurus/router';
import {applyTrailingSlash} from '@docusaurus/utils-common';
import SearchMetadata from '@theme/SearchMetadata';

// TODO move to SiteMetadataDefaults or theme-common ?
// Useful for i18n/SEO
// See https://developers.google.com/search/docs/advanced/crawling/localized-versions
// See https://github.com/facebook/docusaurus/issues/3317
function AlternateLangHeaders(): ReactNode {
  const {
    siteConfig: {url: siteUrl},
    i18n: {currentLocale, defaultLocale, localeConfigs},
  } = useDocusaurusContext();
  const {pathname} = useLocation();

  const currentLocaleConfig = localeConfigs[currentLocale]!;
  const currentLocaleBase = currentLocaleConfig.baseUrl; // ex: '/en/', '/'
  const currentHtmlLang = currentLocaleConfig.htmlLang;

  // Le useAlternatePageUtils de Docusaurus utilise pathname.replace(baseUrl, '')
  // pour extraire le suffixe, ce qui échoue si le pathname est `/en` (sans slash
  // final) alors que baseUrl du locale courant est `/en/`. Résultat : suffixe
  // `/en` concaténé tel quel à la base de chaque locale, d'où des liens en
  // double slash (`https://raidprotect.bot//en`). On strip ici manuellement en
  // tolérant l'absence du slash de fin.
  let suffix: string;
  if (pathname.startsWith(currentLocaleBase)) {
    suffix = pathname.slice(currentLocaleBase.length);
  } else if (
    currentLocaleBase.endsWith('/') &&
    pathname === currentLocaleBase.slice(0, -1)
  ) {
    suffix = '';
  } else {
    suffix = pathname.replace(/^\//, '');
  }

  const buildUrl = (locale: string): string => {
    const base = localeConfigs[locale]!.baseUrl;
    return `${siteUrl}${base}${suffix}`;
  };

  // HTML lang is a BCP 47 tag, but the Open Graph protocol requires
  // using underscores instead of dashes.
  // See https://ogp.me/#optional
  // See https://en.wikipedia.org/wiki/IETF_language_tag)
  const bcp47ToOpenGraphLocale = (code: string): string =>
    code.replace('-', '_');

  // Note: it is fine to use both "x-default" and "en" to target the same url
  // See https://www.searchviu.com/en/multiple-hreflang-tags-one-url/
  return (
    <Head>
      {Object.entries(localeConfigs).map(([locale, {htmlLang}]) => (
        <link
          key={locale}
          rel="alternate"
          href={buildUrl(locale)}
          hrefLang={htmlLang}
        />
      ))}
      <link
        rel="alternate"
        href={buildUrl(defaultLocale)}
        hrefLang="x-default"
      />

      <meta
        property="og:locale"
        content={bcp47ToOpenGraphLocale(currentHtmlLang)}
      />
      {Object.values(localeConfigs)
        .filter((config) => currentHtmlLang !== config.htmlLang)
        .map((config) => (
          <meta
            key={`meta-og-${config.htmlLang}`}
            property="og:locale:alternate"
            content={bcp47ToOpenGraphLocale(config.htmlLang)}
          />
        ))}
    </Head>
  );
}

// Default canonical url inferred from current page location pathname
function useDefaultCanonicalUrl() {
  const {
    siteConfig: {
      url: siteUrl,
      baseUrl,
      trailingSlash,
      customFields: {excludedCanonical},
    },
  } = useDocusaurusContext();

  // TODO using useLocation().pathname is not a super idea
  // See https://github.com/facebook/docusaurus/issues/9170
  const {pathname} = useLocation();

  let canonicalPathname = applyTrailingSlash(useBaseUrl(pathname), {
    trailingSlash,
    baseUrl,
  });

  // Les pages de la doc bêta (/docs/beta/…, et /<locale>/docs/beta/…) sont
  // canonicalisées vers leur équivalent stable (/docs/…, servi à la racine de la
  // version) pour éviter le contenu dupliqué bêta/stable côté SEO. La langue est
  // préservée. Les chemins listés dans customFields.excludedCanonical (pages
  // exclusives à la bêta) gardent leur propre canonical.
  const betaPathRegex = /^(\/(?:en|de|es|pt))?\/docs\/beta(\/|$)/;

  if (
    betaPathRegex.test(canonicalPathname) &&
    !(excludedCanonical as string[]).includes(pathname)
  ) {
    canonicalPathname = canonicalPathname.replace(
      betaPathRegex,
      (_match: string, lang: string | undefined, tail: string) =>
        `${lang ?? ''}/docs${tail}`,
    );
  }

  return siteUrl + canonicalPathname;
}

// TODO move to SiteMetadataDefaults or theme-common ?
function CanonicalUrlHeaders({permalink}: {permalink?: string}) {
  const {
    siteConfig: {url: siteUrl},
  } = useDocusaurusContext();
  const defaultCanonicalUrl = useDefaultCanonicalUrl();

  const canonicalUrl = permalink
    ? `${siteUrl}${permalink}`
    : defaultCanonicalUrl;
  return (
    <Head>
      <meta property="og:url" content={canonicalUrl} />
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}

export default function SiteMetadata(): ReactNode {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();

  // TODO maybe move these 2 themeConfig to siteConfig?
  // These seems useful for other themes as well
  const {metadata, image: defaultImage} = useThemeConfig();

  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {defaultImage && <PageMetadata image={defaultImage} />}

      <CanonicalUrlHeaders />

      <AlternateLangHeaders />

      <SearchMetadata tag={DEFAULT_SEARCH_TAG} locale={currentLocale} />

      {/*
        It's important to have an additional <Head> element here, as it allows
        react-helmet to override default metadata values set in previous <Head>
        like "twitter:card". In same Head, the same meta would appear twice
        instead of overriding.
      */}
      <Head>
        {/* Yes, "metadatum" is the grammatically correct term */}
        {metadata.map((metadatum, i) => (
          <meta key={i} {...metadatum} />
        ))}
      </Head>
    </>
  );
}
