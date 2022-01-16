import logo from "./logo.svg";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import Styles from "./App.module.css";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";

Amplify.configure(awsconfig);

function App() {
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
