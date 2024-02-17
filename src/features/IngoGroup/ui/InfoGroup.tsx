import { useEffect, useState } from 'react';

import axios from 'axios';

import styles from './InfoGroup.module.css';

import { Form, InfoCard } from 'features';
import { Button, Modal } from 'shared';

type TItems = { id: number; text: string; groupId: number; done: boolean };

export const InfoGroup = () => {
  const [items, setItems] = useState<TItems[]>([]);

  const fetchItems = async () => {
    const { data } = await axios.get<TItems[]>(
      'https://658b0e95ba789a96223860cb.mockapi.io/items',
    );

    setItems(data);

    return data;
  };

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  console.log(isOpen);

  return (
    <div>
      <div className={styles.titleBlock}>
        <h1>Group - Text 1</h1>
        <Button className={styles.buttonCreate} onClick={() => setIsOpen(true)}>
          Create task
        </Button>
      </div>
      <ul className={styles.list}>
        {items.map((item) => (
          <InfoCard key={item.id} {...item} />
        ))}
      </ul>
      {isOpen && (
        <Modal className={styles.modalBody} setIsOpen={setIsOpen}>
          <Form />
        </Modal>
      )}
    </div>
  );
};
