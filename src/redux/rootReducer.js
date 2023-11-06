import { combineReducers } from "redux";
import { tabData } from "./reducers/tabReducer";
import { taskData } from "./reducers/taskReducer";

export default combineReducers({
  tabData,
  taskData,
});
