import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/NotFound/Content';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function NotFoundContent({className}: Props): ReactNode {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className={clsx("col col--6 col--offset-3", styles.container404)}>
          <Heading as="h1" className={styles.title404}>
            <Translate
              id="theme.NotFound.title"
              description="The title of the 404 page">
              Error 
            </Translate>
            <span className={styles.gradient}>404</span>
          </Heading>
          <p>
            <Translate
              id="theme.NotFound.p1"
              description="The first paragraph of the 404 page">
              The page you are looking for does not exist or has been moved.
            </Translate>
          </p>
          <div className={styles.buttonList}>
            {/* "btn-primary button-row w-button" */}
            <a href="/" className={clsx(styles.primaryButton, styles.button)}>
              <Translate
                id="theme.NotFound.backToHome"
                description="Back to home button on 404 page">
                Back To Home
              </Translate>
            </a>
            <a id="btn-back" rel="noopener noreferrer" href="#" className={clsx(styles.secondaryButton, styles.button)} onClick={(e) => {
              e.preventDefault()
              window.history.back()
            }}>
              <Translate
                id="theme.NotFound.goBack"
                description="Back to previous page button on 404 page">
                Go back
              </Translate>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
