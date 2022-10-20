import React from "react";

const Button = (props) => {
    return (
        <button style={{ alignSelf: "center" }}>
            { props.value }
        </button>
    )
}

export default Button