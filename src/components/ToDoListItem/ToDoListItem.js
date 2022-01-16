import React, { useState } from "react";
import Button from "../Button/Button";
import Styles from "./ToDoListItem.module.css";

const TodoListItem = ({ todo, onRemoveTodo, onItemUpdate }) => {
  const { name: todoName, description: todoDescription, id } = todo;

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(todoName);
  const [description, setDescription] = useState(todoDescription);

  const onEditButtonClick = () => {
    if (isEditing) {
      const updatedTodo = { ...todo, name, description };
      onItemUpdate(updatedTodo);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.textContainer}>
        {isEditing ? (
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        ) : (
          <span className={Styles.todoName}>{name}</span>
        )}
        {isEditing ? (
          <input
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        ) : (
          <span className={Styles.todoDescription}>{description}</span>
        )}
      </div>
      <div className={Styles.buttonContainer}>
        <Button onClick={onEditButtonClick}>
          {isEditing ? "Save" : "Edit"}
        </Button>
        {!isEditing && <Button onClick={() => onRemoveTodo(id)}>Delete</Button>}
      </div>
    </div>
  );
};

export default TodoListItem;
