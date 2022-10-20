import React, {useState} from "react";
import Form from "./Form"

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [accounts, setAccounts] = useState([{ username: "oleg", password: "111111" },]);

    const onSubmit = (e) => {
        alert('submit')
        //YOUR CODE HERE
    }

    const onUsernameChange = (e) => {
        alert('username')
        // YOUR CODE HERE
    }

    const onPasswordChange = (e) => {
        alert('password')

        // YOUR CODE HERE
    }
    return (
      <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: 20,
          }}
      >
        <Form username={username} password={password} onSubmit={onSubmit} onUsernameChange={onUsernameChange} onPasswordChange={onPasswordChange}/>
      </div>
  );
}

export default App;