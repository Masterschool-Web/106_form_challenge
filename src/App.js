import React  from "react";
import Form from "./Form"

function App() {
    const onSubmit = (e) => {
        //YOUR CODE HERE
    }
    return (
      <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: 20,
          }}
      >
        <Form onSubmit={onSubmit} />
      </div>
  );
}

export default App;