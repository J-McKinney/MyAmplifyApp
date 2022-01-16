import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "@aws-amplify/api";
import { listTodoLists } from "./graphql/queries";
import {
  createTodoList,
  deleteTodoList,
  updateTodoList,
} from "./graphql/mutations";
import ToDoList from "./components/ToDoList/ToDoList";
import CreateToDo from "./components/CreateToDo/CreateToDo";
import Spinner from "react-bootstrap/Spinner";
import Styles from "./App.module.css";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";

Amplify.configure(awsconfig);

const initialState = { name: "", description: "" };

function App() {
  const [formState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([]);
  const [apiError, setApiError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTodos();
    // console.log(Amplify.API.Auth.user.attributes.email)
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchTodos() {
    setIsLoading(true);
    try {
      const todoData = await API.graphql(graphqlOperation(listTodoLists));
      const todos = todoData.data.listTodoLists.items;
      setTodos(todos);
      setApiError(null);
    } catch (error) {
      console.error("Failed to fetch to-do list:", error);
      setApiError(error);
    } finally {
      setIsLoading(false);
    }
  }
  // async function fetchTodos() {
  //   const apiData = await API.graphql({ query: listTodoLists });
  //   setTodos(apiData.data.listTodoLists.items);
  // }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) {
        return;
      }
      const todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createTodoList, { input: todo }));
      setApiError(null);
    } catch (error) {
      console.error("Failed to create to-do item:", error);
      setApiError(error);
    }
  }

  async function removeTodo(id) {
    try {
      await API.graphql(graphqlOperation(deleteTodoList, { input: { id } }));
      setTodos(todos.filter((todo) => todo.id !== id));
      setApiError(null);
    } catch (error) {
      console.error("Failed to delete to-do item:", error);
      setApiError(error);
    }
  }

  async function onItemUpdate(todo) {
    try {
      await API.graphql(
        graphqlOperation(updateTodoList, {
          input: {
            name: todo.name,
            description: todo.description,
            id: todo.id,
          },
        })
      );
      setApiError(null);
    } catch (error) {
      console.error("Failed to update to-do item:", error);
      setApiError(error);
    }
  }

  const errorMessage = apiError && (
    <p className={Styles.errorText}>
      {apiError.errors.map((error) => (
        <p>{error.message}</p>
      ))}
    </p>
  );

  if (isLoading) {
    // return "Loading...";
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "50vh",
        }}
      >
        <Spinner
          style={{
            height: "200px",
            width: "200px",
            color: "#282c34",
            borderWidth: "25px",
          }}
          animation="border"
          variant="dark"
        />
        <h1 style={{ color: "#282c34", fontSize: "20px", fontWeight: "bold" }}>
          Loading...
        </h1>
        ;
      </div>
    );
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>My Amplify To Do App</h1>
          <Authenticator>
            {({ signOut, user }) => (
              <div>
                <p>Hey {user.attributes.email}, welcome to my app!</p>
                <button className={Styles.btn} onClick={signOut}>
                  Sign out
                </button>
                <div className={Styles.container}>
                  {errorMessage};
                  <div className={Styles.grid}>
                    <ToDoList
                      todos={todos}
                      onRemoveTodo={removeTodo}
                      onItemUpdate={onItemUpdate}
                    />
                    <CreateToDo
                      description={formState.description}
                      name={formState.name}
                      onCreate={addTodo}
                      onDescriptionChange={setInput}
                      onNameChange={setInput}
                    />
                  </div>
                </div>
              </div>
            )}
          </Authenticator>
        </header>
      </div>
    </>
  );
}

export default App;
