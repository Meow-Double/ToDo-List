import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './Form.module.css';

import { Button, Input } from 'shared';

import { useTasks } from 'app/context/hooks/useTasks';

export const Form = ({ setIsOpen }) => {
  const { handleSubmit, register } = useForm();

  const { AddTask } = useTasks();

  const onSubmit: SubmitHandler<any> = (data) => {
    AddTask(data);
    setIsOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.from}>
      <label className={styles.label}>
        <span className={styles.title}>Name task</span>
        <Input className={styles.input} name="task" register={register} />
      </label>
      <label className={styles.label}>
        <span className={styles.title}>Date</span>
        <Input className={styles.input} />
      </label>
      <Button className={styles.button}>Create task</Button>
    </form>
  );
};
