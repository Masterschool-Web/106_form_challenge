import React from "react";

const Input = (props) => {
    return (
        <input
            value={props.value}
            type="text"
            onChange={props.onChange}
            style={{ marginBottom: 5 }}
        />
    )
}

export default Input