import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/actions/taskAction";

export default function TodoForm() {
  const dispatch = useDispatch();
  const todoTab = useSelector((state) => state.tabData);

  const [formData, setFormData] = useState({
    description: "",
    isCompleted: false,
  });

  function handleChange(event) {
    const { value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, description: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.description.length) {
      dispatch(addTask(formData));
    }
    setFormData({ description: "", isCompleted: false });
  }

  return (
    <>
      {todoTab !== "completed" && (
        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            className="todo-input"
            type="text"
            placeholder="add details"
            name="todo-input"
            value={formData.description}
            onChange={handleChange}
          />
          <input className="todo-submit" type="submit" value="Add" />
        </form>
      )}
    </>
  );
}
