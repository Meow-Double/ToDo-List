import axios from 'axios';

import { IGroups, ITasks } from '../config/Types';

export const fetchItems = async () => {
  const { data } = await axios.get<IGroups[]>(
    'https://658b0e95ba789a96223860cb.mockapi.io/data',
  );
  return data;
};
