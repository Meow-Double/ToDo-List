import axios from "axios";
import { ITasks } from "../config/Types";

export const fetchTasks = () => {
  return axios
    .get<ITasks[]>('https://658b0e95ba789a96223860cb.mockapi.io/items')
    .then((res) => res.data);
};
