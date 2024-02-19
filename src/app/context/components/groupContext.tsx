import { PropsWithChildren, createContext, useEffect, useState } from 'react';

import { IGroups } from '../config/Types';
import { fetchItems } from '../api/getGroup';
import axios from 'axios';

export const GroupContext: React.Context<any> = createContext({
  groups: [] as IGroups[],
  loading: false,
});

export const GroupContextProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [groups, setGroups] = useState<IGroups[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await fetchItems();
      setGroups(result);
      setLoading(false);
    })();
  }, []);
// -------------------------------------------------------------
  const fetchAddGroup = async (obj: { text: string }) => {
    await axios.post<{ text: string }>(
      'https://658b0e95ba789a96223860cb.mockapi.io/data',
      obj,
    );
    setLoading(true);
    const result = await fetchItems();
    setGroups(result);
    setLoading(false);
  };
// -------------------------------------------------------------
  return (
    <GroupContext.Provider value={{ loading, groups, fetchAddGroup }}>
      {children}
    </GroupContext.Provider>
  );
};
