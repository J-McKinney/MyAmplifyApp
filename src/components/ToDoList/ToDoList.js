import React from "react";
import TodoListItem from "../ToDoListItem/ToDoListItem";
import Styles from "./ToDoList.module.css";

const TodoList = ({ todos, onRemoveTodo, onItemUpdate }) => {
  return (
    <div className={Styles.container}>
      <h2>Your To-Dos For The Day</h2>
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <TodoListItem
            key={todo.id ? todo.id : index}
            todo={todo}
            onRemoveTodo={onRemoveTodo}
            onItemUpdate={onItemUpdate}
          />
        ))
      ) : (
        <p>Please Add Something To Do!</p>
      )}
    </div>
  );
};

export default TodoList;
