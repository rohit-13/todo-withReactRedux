import {
  GET_TASKS,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  DELETE_COMPLETED_TASKS,
} from "../constant";

export const getTasks = () => {
  return {
    type: GET_TASKS,
  };
};

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    data: task,
  };
};

export const updateTask = (taskId, task) => {
  return {
    type: UPDATE_TASK,
    data: { id: taskId, task },
  };
};

export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    data: taskId,
  };
};

export const deleteCompletedTasks = (tasks) => {
  return {
    type: DELETE_COMPLETED_TASKS,
    data: tasks,
  };
};
