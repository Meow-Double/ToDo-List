import { useEffect, useState } from 'react';

import styles from './AsideMenu.module.css';

import { GroupCard, GroupForm } from 'features';
import { useGroups } from 'app/context/hooks/useGroups';
import { IGroups } from 'app/context/config/Types';
import { useTasks } from 'app/context/hooks/useTasks';

export const AsideMenu = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState(-1);

  const { groups, setActiveGroup, loading } = useGroups();
  const { fetchTasks } = useTasks();

  const handleActive = (index: number) => {
    setActiveItem(index);
    setActiveGroup(index);
  };

  useEffect(() => {
    if (activeItem >= 0) {
      fetchTasks(activeItem);
    }
  }, [activeItem]);

  const renderGroupCard = () => {
    return groups?.map((obj: IGroups, index: number) => (
      <GroupCard
        key={obj.id}
        onClick={handleActive}
        index={index}
        activeItem={activeItem}
        {...obj}
      />
    ));
  };
  
  return (
    <div className={styles.wrapper}>
      <GroupForm />
      <h2 className={styles.title}>Your groups:</h2>
      {groups.length ? (
        <ul className={styles.list}>{renderGroupCard()}</ul>
      ) : loading ? (
        <span>Загрузка ...</span>
      ) : (
        <span>Отсуствуют группы</span>
      )}
    </div>
  );
};
