import PlusIcon from 'assets/icons/plus.svg?react';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './GroupForm.module.css';

import { Button, Input } from 'shared';
import { FormTypes } from '../config/Types';
import { useGroups } from 'app/context/hooks/useGroups';

export const GroupForm = () => {
  const { fetchAddGroup } = useGroups();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormTypes>({
    defaultValues: {
      text: '',
    },
  });

  const onSubmit: SubmitHandler<FormTypes> = (data: FormTypes) => {
    const obj = {
      text: data.text,
    };
    fetchAddGroup(obj);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.inputBlock}>
      {/* {errors?.text && <span>Заполни блять поле!!!</span>} */}
      <Input name="text" register={register} rules={{ required: true }} />
      <Button className={styles.addButton}>
        <PlusIcon />
      </Button>
    </form>
  );
};
