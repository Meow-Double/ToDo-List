import axios from "axios";
import { IGroups } from "../config/Types";

export const fetchItems = () => {
  return axios
    .get<IGroups[]>('https://658b0e95ba789a96223860cb.mockapi.io/data')
    .then((res) => res.data);
};
