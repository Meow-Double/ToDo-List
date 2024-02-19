import { type FC, InputHTMLAttributes, PropsWithChildren } from 'react';

import cx from 'classix';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

import styles from './Input.module.css';

export type Props = {
  type?: TypeEnum;
  register?: UseFormRegister<FieldValues>;
  name?: string;
  rules?: RegisterOptions;
} & InputHTMLAttributes<PropsWithChildren>;

enum TypeEnum {
  Text = 'text',
  Number = 'number',
  Email = 'email',
}

export const Input: FC<Props> = ({
  className,
  name,
  rules,
  register,
  type = TypeEnum.Text,
}): JSX.Element => {
  return (
    <input
      className={cx(...[styles.input, className])}
      placeholder="Enter a name"
      type={type}
      {...(name && register ? { ...register(name, rules) } : null)}
    />
  );
};
