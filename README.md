# RaidProtect Docs

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm i
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Use translation

```
$ npm run write-translations -- --locale <locale>
```

This command regenerates translation files in `i18n/<locale>` directory.

### Version

To publish a new stable version (e.g. `3.4.0`), snapshot the current docs:

```
$ npm run docusaurus docs:version <version>
```

This creates `versioned_docs/version-<version>/`, `versioned_sidebars/`, adds the
version to `versions.json`, and generates, for every locale,
`i18n/<locale>/docusaurus-plugin-content-docs/version-<version>.json` (labels) and
`version-<version>/` (content).

The command leaves several things to fix by hand. Checklist:

1. **Version labels** — in every `i18n/<locale>/docusaurus-plugin-content-docs/version-<version>.json`:
   - `version.label` → the display name (e.g. `Stable - <version>`). The command seeds
     non-default locales with the beta label (`Beta 🚧`) and the default locale (`fr`)
     with raw values, so all five locales need fixing.
   - `sidebar.sidebar.category.*` / `sidebar.sidebar.link.*` → for the default locale
     (`fr`) these come out as raw ids (`features`, `report`, …); copy the real
     translations from the same locale's `current.json`.
   - Rename the **previous** version's labels to a plain number (e.g. `3.3.3`), since it
     is no longer the displayed stable version.

2. **`docusaurus.config.ts`**:
   - `lastVersion` / `onlyIncludeVersions` are derived automatically from `versions.json`
     (first entry ≠ `beta`), so usually nothing to change. The stable label is built from
     `` `Stable - ${lastStableVersion}` ``.
   - **announcementBar** — update it in **two** places: `customFields.texts.announcementBar`
     (per-locale strings) and `themeConfig.announcementBar` (`id` + fallback `content`).

3. **Release blog article** — repoint its links from `/docs/beta/...` to `/docs/...` (stable).

4. **Versioned readme doccards** — the snapshot copies `/docs/beta/...` hrefs into
   `versioned_docs/version-<version>/readme.mdx` and each
   `i18n/<locale>/.../version-<version>/readme.mdx`; change them to `/docs/...` so the
   stable version links to stable pages (the `current` / beta readmes keep `/docs/beta/...`).

5. **Build every locale** to catch broken links:

   ```
   $ npm run build -- --locale fr   # then en, de, es, pt
   ```