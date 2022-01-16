import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "@aws-amplify/api";
import { listTodos } from "./graphql/queries";
import { createTodo, deleteTodo, updateTodo } from "./graphql/mutations";
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

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>My Amplify App</h1>
          <Authenticator>
            {({ signOut, user }) => (
              <div>
                <p>Hey {user.username}, welcome to my app!</p>
                <button className={Styles.btn} onClick={signOut}>
                  Sign out
                </button>
              </div>
            )}
          </Authenticator>
        </header>
      </div>
    </>
  );
}

export default App;
