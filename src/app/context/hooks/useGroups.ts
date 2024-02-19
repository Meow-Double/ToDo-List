import { useContext } from 'react';

import { GroupContext } from '../components/groupContext';

export const useGroups = () => {
  return useContext(GroupContext);
};
