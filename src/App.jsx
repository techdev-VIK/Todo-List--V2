import AppName from "./Components/AppName";
import TodoInput from "./Components/TodoInput";
import TodoItems from "./Components/TodoItems";

import "./App.css";

function App() {
  const items = [
    {
      task: "Buy Milk",
      date: "10/1/2024",
    },
    {
      task: "Attend Event",
      date: "10/1/2024",
    },
  ];
  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <TodoInput></TodoInput>
        <TodoItems items={items}></TodoItems>
      </center>
    </>
  );
}

export default App;
