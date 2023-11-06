import { UPDATE_TAB } from "../constant";

export const updateTab = (tab) => {
  return {
    type: UPDATE_TAB,
    data: tab,
  };
};