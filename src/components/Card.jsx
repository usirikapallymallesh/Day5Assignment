import React from "react";
import { useState } from "react";

const Card = (props) => {
  // console.log(props);
  const { subjectName, hours } = props;
  const [state, setState] = useState(hours);
  if (parseInt(state) < 0) {
    setState(0);
  }

  function increment() {
    setState(state + 1);
  }
  function decrement() {
    setState(state - 1);
  }

  return (
    <div
      style={{
        display: "flex",
        border: "2px solid black",
        padding: "0.2rem 2rem",
        width: "max-content",
        gap: "0.5rem",
        alignItems: "center",
        justifyContent: "center",
        margin: "0.5rem",
      }}
    >
      <h3>
        {subjectName} - {state} Hours
      </h3>
      <button
        onClick={increment}
        style={{
          cursor: "pointer",
          color: "white",
          backgroundColor: "green",
          padding: "0px 2rem ",
        }}
      >
        +
      </button>
      <button
        onClick={decrement}
        style={{
          cursor: "pointer",
          color: "white",
          backgroundColor: "green",
          padding: "0px 2rem ",
        }}
      >
        -
      </button>
    </div>
  );
};

export default Card;
