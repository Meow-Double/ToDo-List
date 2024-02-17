import styles from './Form.module.css';

import { Button, Input } from 'shared';

export const Form = () => {
  return (
    <form className={styles.from}>
      <label className={styles.label}>
        <span className={styles.title}>Name task</span>
        <Input className={styles.input} />
      </label>
      <label className={styles.label}>
        <span className={styles.title}>Date</span>
        <Input className={styles.input} />
      </label>
      <Button className={styles.button}>Create task</Button>
    </form>
  );
};
