import { useContext } from "react";
import { ItemsContext } from "../createContext";

export const useTasks = () => {
    return useContext(ItemsContext);
  };
  