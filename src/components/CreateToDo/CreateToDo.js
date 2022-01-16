import React from "react";
import Button from "../Button/Button";
import Styles from "./CreateToDo.module.css";

const CreateTodo = ({
  name,
  description,
  onNameChange,
  onDescriptionChange,
  onCreate,
}) => (
  <div className={Styles.container}>
    <input
      onChange={(event) => onNameChange("name", event.target.value)}
      className={Styles.input}
      value={name}
      placeholder="Name"
    />
    <input
      onChange={(event) =>
        onDescriptionChange("description", event.target.value)
      }
      className={Styles.input}
      value={description}
      placeholder="Description"
    />
    <Button onClick={onCreate}>Create Todo</Button>
  </div>
);

export default CreateTodo;
