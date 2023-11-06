import { useSelector, useDispatch } from "react-redux";
import { updateTask, deleteTask } from "../redux/actions/taskAction";

export default function Task(props) {
  const { task } = props;

  const dispatch = useDispatch();
  const todoTab = useSelector((state) => state.tabData);

  function handleChange(event) {
    var updatedTask = { ...task, isCompleted: event.target.checked };
    dispatch(updateTask(updatedTask.id, updatedTask));
  }

  function handleClick() {
    dispatch(deleteTask(task.id));
  }

  return (
    <li className="todo-task-container">
      <div className="todo-task">
        <input
          className="todo-task-input"
          name="todo-task-input"
          type="checkbox"
          checked={task.isCompleted}
          onChange={handleChange}
        />
        <span className="todo-task-label">{task.description}</span>
      </div>
      {todoTab === "completed" && (
        <i
          className="todo-task-delete ri-delete-bin-line"
          onClick={handleClick}
        />
      )}
    </li>
  );
}
