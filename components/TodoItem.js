import React from "react";

const todoItem = props => {
  const { todo, index } = props;
  return (
    <li>
      <span className={todo.done ? "done" : ""}>{todo.title}</span>
      <input
        type="checkbox"
        onChange={event => props.toggleTodoDone(event, index)}
        checked={todo.done}
      />
      <button onClick={() => props.removeTodo(index)}>Remove</button>
    </li>
  );
};

export default todoItem;
