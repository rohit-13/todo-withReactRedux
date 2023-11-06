import { SET_TASKS } from "../constant";

export const taskData = (data = [], action) => {
  switch (action.type) {
    case SET_TASKS:
      return action.data;
    default:
      return data;
  }
};
