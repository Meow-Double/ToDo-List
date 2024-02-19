import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import PlusIcon from 'assets/icons/plus.svg?react';

import styles from './AsideMenu.module.css';

import { Input, Button } from 'shared';
import { useTasks } from 'app/context/hooks/useTasks';

export interface FormTypes extends FieldValues {
  text: string;
}

export const AsideMenu = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState(-1);

  const { items } = useTasks();

  const onClickGroup = (index: number) => {
    setActiveItem(index);
  };

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
    console.log(data);
  };

  if (!items.length) {
    return <span>Подождите, грузит...</span>;
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.inputBlock}>
        {/* {errors?.text && <span>Заполни блять поле!!!</span>} */}
        <Input name="text" register={register} rules={{ required: true }} />
        <Button className={styles.addButton}>
          <PlusIcon />
        </Button>
      </form>
      <h2 className={styles.title}>Your groups:</h2>
      <ul className={styles.list}>
        {items?.map((obj, index) => (
          <li key={obj.id} className={activeItem === index ? styles.active : ''}>
            <button onClick={() => onClickGroup(index)}>text</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
