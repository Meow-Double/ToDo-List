import { FC, HtmlHTMLAttributes, PropsWithChildren } from 'react';

import cx from 'classix';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

const modal: HTMLElement | null = document.getElementById('modal');

type Props = {
  setIsOpen: ({}: boolean) => void;
} & HtmlHTMLAttributes<PropsWithChildren>;

export const Modal: FC<Props> = ({ children, setIsOpen, className }) => {
  return (
    <>
      {modal &&
        createPortal(
          <div className={styles.window} onClick={() => setIsOpen(false)}>
            <div
              className={cx(...[className, styles.body])}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          </div>,
          modal,
        )}
    </>
  );
};
