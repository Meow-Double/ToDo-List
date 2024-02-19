export const doneTask = (state, id) => {
  const tasks = state.filter((task) => task.id !== id);
  const current = state.find((task) => task.id === id);
  const obj = {
    ...current,
    done: !current.done,
  };
  const newTasks = [...tasks, obj];
  return newTasks;
};
