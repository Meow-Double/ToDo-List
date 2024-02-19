import DeleteIcon from '../../../assets/icons/delete.svg?react';
import EditIcon from '../../../assets/icons/edit.svg?react';

import styles from './InfoCard.module.css';

import { Checkbox } from 'shared';
import cx from 'classix';

export const InfoCard = ({ text, onClick, id, done }) => {
  const handleCheck = () => {
    onClick(id);
  };
  return (
    <li className={cx(styles.card, done && styles.blocked)}>
      <div>
        <div>
          <Checkbox text={text} onClick={handleCheck} />
        </div>
        <div>
          <div>date</div>
        </div>
      </div>
      <div>
        <EditIcon />
        <DeleteIcon />
      </div>
    </li>
  );
};
