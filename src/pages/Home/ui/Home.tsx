import { GroupContextProvider, TaskContextProvider } from 'app';
import styles from './Home.module.css';

import { AsideMenu, InfoGroup } from 'widgets';

export const Home = (): JSX.Element => {
  return (
    <div className={styles.window}>
      <TaskContextProvider>
        <GroupContextProvider>
          <AsideMenu />
        </GroupContextProvider>

        <div className="container">
          <InfoGroup />
        </div>
      </TaskContextProvider>
    </div>
  );
};
