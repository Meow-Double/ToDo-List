import { useState } from 'react';

import styles from './InfoGroup.module.css';

import { doneTask } from 'app/utils/doneTask';
import { Form, InfoCard } from 'features';
import { Button, Modal } from 'shared';
import { useTasks } from 'app/context/hooks/useTasks';
import { ITasks } from 'app/context/config/Types';
import { useGroups } from 'app/context/hooks/useGroups';

export const InfoGroup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { tasks, error } = useTasks();
  const { groups, activeGroup } = useGroups();

  // if (error) {
  //   return <span>Ждите, идёт загрузка...</span>;
  // }

  const handleCheckbox = (id: number) => {
    const newTask = doneTask(tasks, id);

    console.log(newTask);
  };

  if (activeGroup === -1){
    return <span>Выберите группу</span>
  }

  return (
    <div>
      <div className={styles.titleBlock}>
        <h1>Group - {groups[activeGroup]?.text}</h1>
        <Button className={styles.buttonCreate} onClick={() => setIsOpen(true)}>
          Create task
        </Button>
      </div>
      <ul className={styles.list}>
        {!tasks.length ? (
          <span>Ваши таски отсуствуют</span>
        ) : (
          tasks.map((item: ITasks) => (
            <InfoCard
              key={item.id}
              {...item}
              onClick={(id: number) => handleCheckbox(id)}
            />
          ))
        )}
      </ul>
      {isOpen && (
        <Modal className={styles.modalBody} setIsOpen={setIsOpen}>
          <Form setIsOpen={setIsOpen} />
        </Modal>
      )}
    </div>
  );
};
