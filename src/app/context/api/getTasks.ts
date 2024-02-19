import axios from 'axios';
import { ITasks } from '../config/Types';

export const fetchGetTasks = async (search: string) => {
  try {
    const { data } = await axios.get<ITasks[]>(
      `https://658b0e95ba789a96223860cb.mockapi.io/items${search}`,
    );

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};


