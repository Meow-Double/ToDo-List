import { FC, PropsWithChildren, useState } from 'react';

import styles from './Checkbox.module.css';
import cx from 'classix';

type Props = {
  text?: string;
  onClick: () => void;
} & PropsWithChildren;

export const Checkbox: FC<Props> = ({ text, onClick }) => {
  const [checked, setChecked] = useState(false);

  const click = () => {
    onClick();
    setChecked((prev) => !prev);
  };

  return (
    <label className={styles.label}>
      <input className={styles.input} type="checkbox" onClick={click} />
      <span className={styles.checkbox}></span>
      <span className={cx(styles.text, checked && styles.checked)}>{text}</span>
    </label>
  );
};
