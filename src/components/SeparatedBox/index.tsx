import React, {type ReactNode} from 'react';
import styles from './styles.module.css';

export default function SeparatedBox({
  children
}: {
  children: ReactNode;
}): ReactNode {
  return (
    <div className={styles.box}>
      {children}
    </div>
  );
}