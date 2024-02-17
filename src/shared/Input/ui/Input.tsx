import { type FC, InputHTMLAttributes, PropsWithChildren } from 'react';

import cx from 'classix';

import styles from './Input.module.css';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { FormTypes } from 'features';

// type Props = {
//   register: UseFormRegister<FormTypes>;
//   // name:string;
// }  & InputHTMLAttributes<PropsWithChildren>;

// type InputProps<T extends FieldValues> = {
//   name: Path<T>;
//   placeholder?: string;
//   register: UseFormRegister<T>;
// } & InputHTMLAttributes<PropsWithChildren>;

interface InputProps
  // extends Partial<Pick<UseFormMethods, 'register' | 'errors'>>,
  extends InputT {
  rules?: FieldValues;
  register: UseFormRegister<FormTypes>
  name: string;
  type?: 'text' | 'email' | 'number';
}

type InputT = InputHTMLAttributes<PropsWithChildren>;

export const Input: FC<InputProps> = ({
  className,
  register,
  name,
  rules = {},
  type,
}): JSX.Element => {
  return (
    <input
      className={cx(...[className, styles.input])}
      placeholder="Enter a name"
      type={type ? type : 'text'}
      // {...register(name)}
      // name={name}
      // ref={register && register(rules)}
    />
  );
};

