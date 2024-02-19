import cx from 'classix';

import DeleteIcon from '../../../assets/icons/delete.svg?react';
import EditIcon from '../../../assets/icons/edit.svg?react';

import styles from './InfoCard.module.css';

import { Checkbox } from 'shared';
import { useTasks } from 'app/context/hooks/useTasks';

export const InfoCard = ({ text, onClick, id, done }) => {
  // const handleCheck = () => {
  //   onClick(id);
  // };

  const {deleteTask} = useTasks();

  return (
    <li className={cx(styles.card, done && styles.blocked)}>
      <div>
        <div>
          <Checkbox
            text={text}
            id={id}
            done={done}
            // onClick={handleCheck}
          />
        </div>
        {/* <div>
          <div>date</div>
        </div> */}
      </div>
      <div>
        {/* <EditIcon /> */}
        <button onClick={() => deleteTask(id)}>
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
};
