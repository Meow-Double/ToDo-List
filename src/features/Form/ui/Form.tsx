import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './Form.module.css';

import { Button, Input } from 'shared';
import { useTasks } from 'app/context/hooks/useTasks';
import { FC } from 'react';
import { useGroups } from 'app/context/hooks/useGroups';
// import { addTask } from 'app/context/api/getTasks';

export const Form: FC<{ setIsOpen: (bool: boolean) => void }> = ({ setIsOpen }) => {
  const { handleSubmit, register } = useForm();

  const { addTask } = useTasks();
  const { activeGroup } = useGroups();

  const onSubmit: SubmitHandler<any> = (data) => {
    const obj = {
      text: data.task,
      groupId: activeGroup + 1,
    };
    addTask(obj);
    setIsOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.from}>
      <label className={styles.label}>
        <span className={styles.title}>Name task</span>
        <Input
          className={styles.input}
          name="task"
          register={register}
          rules={{ required: true }}
        />
      </label>
      <Button className={styles.button}>Create task</Button>
    </form>
  );
};
