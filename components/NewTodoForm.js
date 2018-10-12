import React from "react";

const newTodoForm = props => {
  return (
    <form onSubmit={props.formSubmitted}>
      <label htmlFor="newTodo"> New Todo</label>
      <input onChange={props.newTodoChanged} value={props.newTodo} />
      <button type="submit"> Add Todo</button>
    </form>
  );
};

export default newTodoForm;
