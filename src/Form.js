import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = (props) => {
    const onSubmit = (e) => {
        e.preventDefault()
        props.onSubmit()
    }
    return (
        <form aria-label='form'
            style={{
                display: "flex",
                flexDirection: "column",
                border: "solid",
                padding: 10,
            }}
            onSubmit={onSubmit}
        >
            <h3>Login</h3>
            <Input value={props.username} onChange={props.onUsernameChange} />
            <Input value={props.password} onChange={props.onPasswordChange} />
            <Button value="Submit" style={{ alignSelf: "center" }}/>
        </form>
    );
}
export default Form