/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Swizzle (eject) : applique la localisation des items dont le `to` est une clé
 * de customFields.urls (main, invite…), comme le swizzle Navbar/Content le fait
 * pour la navbar desktop. Sans ça, le menu mobile rendrait `to="invite"` tel
 * quel (lien cassé).
 */

import React, {type ReactNode} from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import NavbarItem, {type Props as NavbarItemConfig} from '@theme/NavbarItem';

import {localizeNavbarItemUrl} from '@site/src/utils/links';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

// The primary menu displays the navbar items
export default function NavbarMobilePrimaryMenu(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();
  const {
    siteConfig: {
      customFields: {urls},
    },
    i18n: {currentLocale},
  } = useDocusaurusContext();

  const items = useNavbarItems();

  return (
    <ul className="menu__list">
      {items.map((item, i) => (
        <NavbarItem
          mobile
          {...localizeNavbarItemUrl(
            item,
            urls as Record<string, Record<string, string>>,
            currentLocale,
          )}
          onClick={() => mobileSidebar.toggle()}
          key={i}
        />
      ))}
    </ul>
  );
}
