import { PropsWithChildren, createContext, useState } from 'react';

import { ITasks } from '../config/Types';
import { fetchGetTasks } from '../api/getTasks';
import axios from 'axios';

export const TaskContext: React.Context<any> = createContext({
  tasks: [] as ITasks[],
  loading: false,
});

export const TaskContextProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [error, setError] = useState(false);

  const fetchTasks = async (groupId: number) => {
    const search = groupId >= 0 ? `?groupId=${groupId + 1}` : '';
    setLoading(true);
    const data = await fetchGetTasks(search);
    if (data) {
      setTasks(data);
      setError(false);
    } else {
      setTasks([]);
      setError(true);
    }
    setLoading(false);
  };

  const handleDoneTask = (id: number) => {
    const currentTask = tasks.find((task) => task.id === id);
    const oldTasks = tasks.filter((task) => task.id !== id);

    const newTask = {
      ...currentTask,
      done: !currentTask?.done,
    };
    setTasks([...oldTasks, newTask]);
    axios.put(`https://658b0e95ba789a96223860cb.mockapi.io/items/${id}`, newTask);
  };

  const addTask = async (obj) => {
    await axios.post('https://658b0e95ba789a96223860cb.mockapi.io/items', obj);
    // fetchTasks(obj.groupId - 1);
    obj.id = tasks.length + 1;
    setTasks((prev) => [...prev, obj]);
  };

  const deleteTask = async (id: number) => {
    await axios.delete(`https://658b0e95ba789a96223860cb.mockapi.io/items/${id}`);
    fetchTasks(tasks[0].groupId - 1);
  };

  return (
    <TaskContext.Provider
      value={{ loading, tasks, fetchTasks, error, handleDoneTask, addTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
