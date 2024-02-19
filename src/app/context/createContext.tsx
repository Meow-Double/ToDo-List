import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { fetchItems } from './api/getGroup';
import { IGroups, ITasks } from './config/Types';
import { fetchTasks } from './api/getTasks';
import axios from 'axios';

export const ItemsContext: React.Context<any> = createContext({
  items: [] as IGroups[],
  tasks: [] as ITasks[],
  loading: false,
});

export function ContextProveder({ children }: PropsWithChildren) {
  const [loading, setLoading] = useState<boolean>(true);
  const [items, setItems] = useState<IGroups[]>([]);
  const [tasks, setTasks] = useState<ITasks[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await fetchItems();
      setItems(result);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const tasks = await fetchTasks();
      setTasks(tasks);
    })();
  }, []);

  const AddTask = async (data: Record<string, string>) => {
    const obj = {
      id: Number(tasks.length) + 1,
      text: data.task,
      done: false,
      groupId: 1,
    };
    await axios.post('https://658b0e95ba789a96223860cb.mockapi.io/items', obj);
    const task = await fetchTasks();
    setTasks(task);
  };

  const deleteTask = () => {
    axios.delete('https://658b0e95ba789a96223860cb.mockapi.io/items', obj);
  }

  return (
    <ItemsContext.Provider value={{ loading, items, tasks, AddTask }}>
      {children}
    </ItemsContext.Provider>
  );
}
