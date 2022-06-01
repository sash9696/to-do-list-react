import React, { useState } from "react";
import "./App.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleChange = ({ target }) => {
    setTodoText(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList((arr) => [...arr, todoText]);
    // setTodoList([...todoList, todoText]);
    // todoList.push(todoText)
    setTodoText("");
  };
  const deleteTodo = (index) => {
    todoList.splice(index, 1);
    setTodoList((arr) => [...arr, todoText]);
    //alternative
    // setTodoList((arr) => [...arr, ]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label className="todoLabel">What do you want to do today?</label>
        <br />
        <input
          className="input"
          type="text"
          value={todoText}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <input className="button" type="submit" value="Submit" />
      </form>
      {todoList.map(
        (td, index) =>
          td !== "" && (
            <>
              <div className="todo">
                <br />
                <input key={index} type="checkbox" />
                <label>{td}</label>
                <IconButton key={index} onClick={() => deleteTodo(index)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            </>
          )
      )}
    </div>
  );
}

export default App;
