import React from "react";
import { useState } from "react";

export default function App() {
  const [fruits, setFruits] = useState(["Apple", "Mango", "Banana", "Orange"]);
  const [selectedFruit, setselectedFruit] = useState("");

  return (
    <center>
      {fruits.map((fruit) => (
        <div
          style={{ background: fruit === selectedFruit ? "pink" : "white" }}
          onClick={() => setselectedFruit(fruit)}
        >
          <h1>{fruit}</h1>
        </div>
      ))}

      <hr></hr>
      <h1>Selected fruit {selectedFruit}</h1>
    </center>
  );
}
