import { type FC } from 'react';
import styles from './GroupCard.module.css';
import cx from 'classix';

type Props = {
  index: number;
  activeItem: number;
  onClick: (index: number) => void;
  text: string;
};

export const GroupCard: FC<Props> = ({ onClick, index, activeItem, text }) => {
  const handleCardActive = () => {
    onClick(index);
  };
  return (
    <li className={styles.card}>
      <button
        onClick={handleCardActive}
        className={cx(styles.button, index === activeItem && styles.active)}
      >
        {text}
      </button>
    </li>
  );
};
