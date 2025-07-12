import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import type {Props} from '@theme/AnnouncementBar/Content';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function AnnouncementBarContent(props: Props): ReactNode {
  const {
    siteConfig: { customFields: { texts } },
    i18n: { currentLocale }
  } = useDocusaurusContext();

  return (
    <div
      {...props}
      className={clsx(styles.content, props.className)}
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: texts['announcementBar'][currentLocale]}}
    />
  );
}
