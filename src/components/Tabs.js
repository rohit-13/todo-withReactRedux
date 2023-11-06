import { useDispatch, useSelector } from "react-redux";
import { updateTab } from "../redux/actions/tabAction";

export default function Tabs() {
  const dispatch = useDispatch();
  const todoTab = useSelector((state) => state.tabData);

  function handleClick(event) {
    if (event.target.tagName === "LI") {
      dispatch(updateTab(event.target.textContent.toLowerCase()));
    }
  }

  return (
    <ul className="todo-tabs" onClick={handleClick}>
      <li key={"all"} className="todo-tab">
        All
        <div className={`${todoTab === "all" ? "todo-tab-active" : ""}`}></div>
      </li>
      <li key={"active"} className="todo-tab">
        Active
        <div
          className={`${todoTab === "active" ? "todo-tab-active" : ""}`}
        ></div>
      </li>
      <li key={"completed"} className="todo-tab">
        Completed
        <div
          className={`${todoTab === "completed" ? "todo-tab-active" : ""}`}
        ></div>
      </li>
    </ul>
  );
}
