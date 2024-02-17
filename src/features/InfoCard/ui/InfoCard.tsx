import DeleteIcon from '../../../assets/icons/delete.svg?react';
import EditIcon from '../../../assets/icons/edit.svg?react';

import styles from './InfoCard.module.css';

import { Checkbox } from 'shared';

export const InfoCard = ({ text }) => {
  return (
    <li className={styles.card}>
      <div>
        <div>
          <Checkbox text={text} />
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
