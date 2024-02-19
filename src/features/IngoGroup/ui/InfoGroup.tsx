import { useEffect, useState } from 'react';

import axios from 'axios';

import styles from './InfoGroup.module.css';

import { Form, InfoCard } from 'features';
import { Button, Modal } from 'shared';
import { useTasks } from 'app/context/hooks/useTasks';
import { doneTask } from 'app/utils/doneTask';

export const InfoGroup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { tasks } = useTasks();

  if (!tasks.length) {
    return <span>Ждите, идёт загрузка...</span>;
  }

  const handleCheckbox = (id) => {
    const newTask = doneTask(tasks, id);
    console.log(newTask);
  };

  return (
    <div>
      <div className={styles.titleBlock}>
        <h1>Group - Text 1</h1>
        <Button className={styles.buttonCreate} onClick={() => setIsOpen(true)}>
          Create task
        </Button>
      </div>
      <ul className={styles.list}>
        {tasks.map((item) => (
          <InfoCard key={item.id} {...item} onClick={(id) => handleCheckbox(id)} />
        ))}
      </ul>
      {isOpen && (
        <Modal className={styles.modalBody} setIsOpen={setIsOpen}>
          <Form setIsOpen={setIsOpen} />
        </Modal>
      )}
    </div>
  );
};
