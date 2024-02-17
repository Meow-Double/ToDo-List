import styles from './Home.module.css';

import { AsideMenu, InfoGroup } from 'features';

export const Home = (): JSX.Element => {
  return (
    <div className={styles.window}>
      <AsideMenu />
      <div className="container">
        <InfoGroup />
      </div>
    </div>
  );
};
