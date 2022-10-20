import React, {useState} from "react";
import Form from "./Form"

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [accounts, setAccounts] = useState([{ username: "oleg", password: "1234567" },]);

    const userExists = (user, pass) => {
        for (const account of accounts) {
            if (account.username == user && account.password == pass) {
                return true;
            }
        }
        return false;
    };

    const onSubmit = (e) => {
        if (userExists(username, password)) {
            alert("Logged in successfully! Hi, " + username + ".");
        } else if (username.length > 6 && password.length > 6) {
            setAccounts([...accounts, { username, password }]);
            alert("Registered & Logged in successfully! Welcome, " + username + ".");
        } else {
            alert("Username and password must be more than 6 characters.");
            return;
        }
        setUsername("");
        setPassword("");
    };

    const onUsernameChange = (e) => {
        e.target.value.length < 20
            ? setUsername(e.target.value)
            : alert("Username cannot exceed 20 characters.")
    }

    const onPasswordChange = (e) => {
        e.target.value.length < 20
            ? setPassword(e.target.value)
            : alert("Password cannot exceed 20 characters.")
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