# Assets de la maquette d'identité (IdentityMockup)

Chaque identité qui défile dans la maquette de profil Discord est pilotée par
des fichiers déposés ici (plus d'auto-génération depuis la liste des serveurs).

Servis à l'URL `/img/identity/<fichier>`.

## Fichiers par identité

Pour chaque identité, un `slug` en kebab-case (ex. `cyrilmp4`, `nationsglory`) :

| Rôle      | Fichier                 | Format | Dimensions conseillées                     |
| --------- | ----------------------- | ------ | ------------------------------------------ |
| Avatar    | `<slug>-avatar.webp`    | WebP   | 240×240 px, carré (recadré en cercle)      |
| Bannière  | `<slug>-banner.webp`    | WebP   | 660×168 px (2× de la zone 330×84, cover)   |
| Nom       | `<slug>-name.svg`       | SVG    | texte vectorisé, fond transparent, cadré serré |

### Le nom en SVG

- Texte **converti en tracés** (outlines) : aucune police externe requise.
- Couleur, effet et police **déjà intégrés** dans le SVG.
- Fond **transparent**, cadrage **serré** sur les glyphes, une seule ligne.
- `viewBox` défini (le SVG est redimensionné à ~26 px de haut, largeur auto).

### Exception RaidProtect (slug `raidprotect`)

- **Pas d'avatar webp** : on garde la pp SVG existante (`/img/rp-mark.svg`).
- Bannière `raidprotect-banner.webp` et nom `raidprotect-name.svg` comme les autres.
