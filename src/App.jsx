import { useState } from "react";
import "./App.css";

function App() {
  const [todo, settodo] = useState("");
  const [todoList, settodoList] = useState([]);

  function addtodo(todo) {
    settodoList((value) => [...value, todo]);
    settodo("");
  }

  function removeTask(id) {
     settodoList((value) => value.filter((todo,index) => index !== id));
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
          onChange={(e) => settodo(e.target.value)}
        />
        <button className="App-Todo-button" onClick={() => addtodo(todo)}>
          submit
        </button>
      </div>
      <ul className="App-Todo-list">
        {todoList.map((todo, index) => (
          <li className="App-Todo-item" key={index}>
           <span>{todo}</span> <button className="App-Task-Remove" onClick={()=>removeTask(index)}>
                remove
              </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
