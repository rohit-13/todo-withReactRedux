import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Tasks from "./components/Tasks";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Tabs />
      <TodoForm />
      <Tasks />
    </div>
  );
}

export default App;
