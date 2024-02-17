import { FC } from 'react';

import styles from './Checkbox.module.css';

type Props = {
  text?: string;
};
export const Checkbox: FC<Props> = ({ text }) => {
  return (
    <label className={styles.label}>
      <input className={styles.input} type="checkbox" />
      <span className={styles.checkbox} />
      {text}
    </label>
  );
};
