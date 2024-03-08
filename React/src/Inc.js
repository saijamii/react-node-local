import React, { useState } from "react";

export default function Inc() {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <center>
        <h1 style={{ fontSize: "30px" }}>{count}</h1>
        <button
          style={{ padding: "15px", marginRight: "30px" }}
          onMouseMove={inc}
        >
          +
        </button>
        <button
          style={{ padding: "15px", marginLeft: "30px" }}
          onMouseMove={dec}
        >
          -
        </button>
      </center>
    </div>
  );
}
