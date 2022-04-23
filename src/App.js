import { useState } from "react";

import Title from "components/Title";
import Input from "components/Input";
import ToDoList from "components/TodoList";
import "App.css";

function App() {
  const [todoList, setToDoList] = useState([]);

  return (
    <div className="App">
      <Title />
      <Input todoList={todoList} setToDoList={setToDoList} />
      <ToDoList todoList={todoList} setToDoList={setToDoList} />
    </div>
  );
}

export default App;
