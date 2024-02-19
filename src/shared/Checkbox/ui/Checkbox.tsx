import { FC, PropsWithChildren, useState } from 'react';

import cx from 'classix';

import styles from './Checkbox.module.css';
import { useTasks } from 'app/context/hooks/useTasks';

type Props = {
  text?: string;
  id: number;
  done: boolean;
} & PropsWithChildren;

export const Checkbox: FC<Props> = ({ text, id, done }) => {
  const [checked, setChecked] = useState(done);

  const { handleDoneTask } = useTasks();
  const click = () => {
    setChecked((prev) => !prev);
    handleDoneTask(id);
  };

  return (
    <label className={styles.label}>
      <input className={styles.input} checked={checked} type="checkbox" onChange={click} />
      <span className={styles.checkbox} />
      <span className={cx(styles.text, checked && styles.checked)}>{text}</span>
    </label>
  );
};
