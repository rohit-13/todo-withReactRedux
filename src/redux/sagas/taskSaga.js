import { takeEvery, put } from "redux-saga/effects";
import {
  GET_TASKS,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  DELETE_COMPLETED_TASKS,
  SET_TASKS,
} from "../constant";
import ApiService from "../../services/ApiService";

function* getTasks() {
  try {
    let tasks = yield ApiService.getTodos();
    yield put({ type: SET_TASKS, data: tasks });
  } catch {
    yield put({ type: SET_TASKS, data: [] });
  }
}

function* addTask(action) {
  try {
    yield ApiService.createTodo(action.data);
    let updatedTasks = yield ApiService.getTodos();
    yield put({ type: SET_TASKS, data: updatedTasks });
  } catch {}
}

function* updateTask(action) {
  try {
    let { id, task } = action.data;
    yield ApiService.updateTodo(id, task);
    let updatedTasks = yield ApiService.getTodos();
    yield put({ type: SET_TASKS, data: updatedTasks });
  } catch {}
}

function* deleteTask(action) {
  try {
    yield ApiService.deleteTodo(action.data);
    let updatedTasks = yield ApiService.getTodos();
    yield put({ type: SET_TASKS, data: updatedTasks });
  } catch {}
}

function* deleteCompletedTasks(action) {
  try {
    let completedTasks = action.data;
    yield completedTasks.forEach((task) => {
      ApiService.deleteTodo(task.id);
    });
    yield put({ type: SET_TASKS, data: [] });
  } catch {}
}

function* taskSaga() {
  yield takeEvery(GET_TASKS, getTasks);
  yield takeEvery(ADD_TASK, addTask);
  yield takeEvery(UPDATE_TASK, updateTask);
  yield takeEvery(DELETE_TASK, deleteTask);
  yield takeEvery(DELETE_COMPLETED_TASKS, deleteCompletedTasks);
}

export default taskSaga;
