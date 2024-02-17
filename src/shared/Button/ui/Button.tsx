import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

// import PlusIcon from '../../../assets/icons/plus.svg?react';
import cx from 'classix';

import styles from './Button.module.css';

type Props = { onClick?: () => void } & ButtonHTMLAttributes<PropsWithChildren>;

// enum ButtonVariant = {
//   Primary = 0,
// }

export const Button: FC<Props> = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={cx(...[styles.button, className])}>
      {children}
    </button>
  );
};
