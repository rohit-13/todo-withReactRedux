import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCompletedTasks, getTasks } from "../redux/actions/taskAction";
import Task from "./Task";

export default function Tasks() {
  const todoTab = useSelector((state) => state.tabData);
  const tasks = useSelector((state) => state.taskData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  var todos =
    todoTab === "all"
      ? tasks
      : tasks.filter((task) => {
          return todoTab === "active" ? !task.isCompleted : task.isCompleted;
        });

  const todoTasks = todos.map((task) => {
    return <Task key={task.id} task={task} todoTab={todoTab} />;
  });

  function deleteAllCompletedTasks() {
    let completedTasks = tasks.filter((task) => task.isCompleted);
    dispatch(deleteCompletedTasks(completedTasks));
  }

  return (
    <div className="todo-tasks-container">
      <ul className="todo-tasks">{todoTasks}</ul>
      {todoTab === "completed" && todos.length >= 1 && (
        <div
          className="todo-tasks-delete-all"
          onClick={deleteAllCompletedTasks}
        >
          <i className="todo-tasks-delete-icon ri-delete-bin-line" />
          <span className="todo-tasks-delete-text">delete all</span>
        </div>
      )}
    </div>
  );
}
