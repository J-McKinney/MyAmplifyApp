### npx create-react-app

### npm install

### setup repo

### npm install -g @aws-amplify/cli

### amplify configure

### aws console will open

### press enter in terminal

### select region you will deploy to

### press enter in terminal

### specify username same as repo

### press enter in terminal

### aws console will open new tab

### need Programmatic Access

### click Next: Permissions

### Administrator Access Job Functions

### click Next: Tags

### click Next: Review

### click Create: User

### copy Access Key ID somewhere

### copy Secret Access Key somewhere

### in terminal again press enter

### copy and paste access key id

### press enter

### copy and paste secret access key

### press enter

### enter profile name same as repo again

### press enter

### in terminal, amplify init

### press enter

### name for project, default

### press enter

### project information/configuration, default

### press y then enter

### select authentication

### AWS profile

### press enter

### please choose the profile you want to use

### default, press enter

### wait until it initializes

### in the terminal, amplify add auth

### choose Default Configuration

### sign in as Username

### settings No, I Am Done.

### wait for it to initialize

### in the terminal, amplify push

### wait until it initializes

### are you sure, press y

### wait until it initializes

### this takes a few minutes too

### aws-exports.js file has now changed a bit, added more stuff

### and, import Amplify from "aws-amplify";

### and, import awsconfig from "./aws-exports";

### import { Authenticator } from "@aws-amplify/ui-react";

### and, import "@aws-amplify/ui-react/styles.css";

### and, under the style sheet add, Amplify.configure(awsconfig);

### add, <Authenticator>

### {({ signOut, user }) => (

### <div>

### <p>Hey {user.username}, welcome to my app!</p>

### <button>Sign out</button>

### </div>

### )}

### </Authenticator>

### in the terminal, npm install aws-amplify @aws-amplify/ui-react

### wait until it initializes

### run npm start and test

### And, Style It BeDazzled!!!! LOL

### in the terminal, amplify add api

### select, GraphQL

### press enter to conflict

### select, single object with fields

### edit the schema

### choose your default editor

### choose the code generation language target, Javascript

### enter the file name pattern of graphql..., src/graphql/**/*.js

### do you want to generate/update all graphql operations, yes

### enter max statement depth, 2

### wait to initialize

### this creates a graphql folder with mutations.js, queries.js, schema.json, subscriptions.js

### 