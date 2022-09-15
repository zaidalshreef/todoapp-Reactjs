import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function addtodo(todo) {
    setTodoList((value) => [...value, { todo, completed: false }]);
    setTodo("");
  }

  function removeTask(id) {
    setTodoList((value) => value.filter((todo, index) => index !== id));
  }

  function completeTask(id) {
    setTodoList((value) => value.map((todo, index) => { 
     return  index === id ? { ...todo, completed: true } : todo 
    }));
  }
  return (
    <div className="App">
      <h1 className="App-title">Todo list</h1>
      <div className="Add-Task">
        <input
          className="App-Todo-input"
          type="text"
          value={todo}
          placeholder="task..."
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="App-Todo-button" onClick={() => addtodo(todo)}>
          submit
        </button>
      </div>
      <ul className="App-Todo-list">
        {todoList.map((todo, index) => (
          <li className="App-Todo-item" key={index}>
            <span>{todo.todo}</span>
            <div className="App-Todo-buttons">
              <button
                className="App-Task-Remove"
                onClick={() => completeTask(index)}
              >
                {todo.completed ? "Completed" : "Not-Completed"}
              </button>
              <button
                className="App-Task-Remove"
                onClick={() => removeTask(index)}
              >
                remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
