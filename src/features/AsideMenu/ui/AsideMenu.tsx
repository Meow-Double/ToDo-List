import { useEffect, useState } from 'react';

import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';

import PlusIcon from '../../../assets/icons/plus.svg?react';

import styles from './AsideMenu.module.css';

import { Input, Button } from 'shared';

// import cx from "classix";

type GroupItems = {
  id: number;
  text: string;
};

export type FormTypes = {
  text: string;
};

export const AsideMenu = (): JSX.Element => {
  const [array, setArray] = useState<GroupItems[]>([]);
  const [activeItem, setActiveItem] = useState(-1);

  const fetchGroup = async () => {
    const { data } = await axios.get<GroupItems[]>(
      'https://658b0e95ba789a96223860cb.mockapi.io/data',
    );

    setArray(data);

    return data;
  };

  useEffect(() => {
    fetchGroup();
  }, []);

  const onClickGroup = (index: number) => {
    setActiveItem(index);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormTypes>();

  const onSubmit: SubmitHandler<FormTypes> = (data: FormTypes) => {
    console.log(data);
  };

  // console.log({ ...register('text') });

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.inputBlock}>
        {errors?.text && <span>Hello</span>}
        <Input name="text" register={register} rules={{ required: true }} />
        <Button className={styles.addButton}>
          <PlusIcon />
        </Button>
      </form>
      <h2 className={styles.title}>Your groups:</h2>
      <ul className={styles.list}>
        {array.map((obj, index) => (
          <li key={obj.id} className={activeItem === index ? styles.active : ''}>
            <button onClick={() => onClickGroup(index)}>text</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
