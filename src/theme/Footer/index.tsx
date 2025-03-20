/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';

import {useThemeConfig} from '@docusaurus/theme-common';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';
import { Column } from './Column';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Footer(): ReactNode {
  const {
    siteConfig: { customFields: { texts, urls } },
    i18n: { currentLocale }
  } = useDocusaurusContext();


  const {footer} = useThemeConfig();
  if (!footer) {
    return null;
  }
  const {copyright, links, logo, style} = footer;

  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="footer-decoration-one"></div>
      <div className="container container-fluid footer__grid">
        <div className="margin-bottom--sm footer__details">
          <FooterLogo logo={logo}/>
          <div className="footer__description">
            <p dangerouslySetInnerHTML={{__html: texts['footer'][currentLocale]}} />
            <a rel="noopener noreferrer" href={urls['geranium'][currentLocale]} target="_blank" className="link-block w-inline-block">
              <img width="20" height="20" alt="A geranium icon, representing an Easter egg." src="https://cdn.prod.website-files.com/677fbd67c3c9318f7fb56659/67dad91a179182e9f2d018a2_icon-geranium.svg" loading="lazy" />
            </a>
          </div>
          <div className="footer-social-list">
            <a href="https://discord.com/invite/raidprotect" target="_blank" className="social-link w-inline-block">
              <img loading="eager" src="/img/discord.svg" alt="Logo Discord" className="social-icon" />
            </a>
            <a href="https://x.com/raidprotect" target="_blank" className="social-link w-inline-block">
              <img loading="eager" src="/img/x.svg" alt="Logo X (Twitter)" className="social-icon" />
            </a>
            <a href="https://github.com/raidprotect" target="_blank" className="social-link w-inline-block">
              <img loading="eager" src="/img/github.svg" alt="Logo GitHub" className="social-icon" />
            </a>
          </div>
        </div>
        {links.map((column, i) => (
          <Column key={i} column={column} />
        ))}
      </div>

      {copyright && (
          <div className="footer__bottom">
            <FooterCopyright copyright={copyright} />
          </div>
      )}
    </footer>
  );
}

export default React.memo(Footer);
