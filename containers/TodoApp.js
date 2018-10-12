import React, { Component } from "react";
import { connect } from "react-redux";

import NewTodoForm from "../components/NewTodoForm";
import TodoList from "../components/TodoList";

class TodoApp extends Component {
  formSubmitted = event => {
    event.preventDefault();

    this.props.onAddTodo({
      title: this.props.newTodo,
      done: false
    });
    this.props.onNewTodoChanged("");
  };

  toggleTodoDone = (event, index) => {
    this.props.onToggleTodoDone({
      index,
      checked: event.target.checked
    });
  };

  render() {
    const {
      message,
      newTodo,
      todos,
      onNewTodoChanged,
      onRemoveTodo,
      onAllDone
    } = this.props;
    return (
      <div className="App">
        <h3>{message}</h3>
        <NewTodoForm
          newTodo={newTodo}
          formSubmitted={this.formSubmitted}
          newTodoChanged={event => onNewTodoChanged(event.target.value)}
        />
        <button onClick={onAllDone}>All Done</button>
        <TodoList
          todos={todos}
          toggleTodoDone={this.toggleTodoDone}
          removeTodo={onRemoveTodo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.message,
    newTodo: state.newTodo,
    todos: state.todos
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onNewTodoChanged: newTodo =>
      dispatch({ type: "NEW_TODO_CHANGED", newTodo: newTodo }),
    onAddTodo: todo => dispatch({ type: "ADD_TODO", todo: todo }),
    onToggleTodoDone: toggle =>
      dispatch({ type: "TOGGLE_TODO_DONE", toggle: toggle }),
    onRemoveTodo: index => dispatch({ type: "REMOVE_TODO", index: index }),
    onAllDone: () => dispatch({ type: "ALL_DONE" })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
