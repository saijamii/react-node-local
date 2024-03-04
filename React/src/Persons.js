import React from "react";
import { useState } from "react";

function Persons() {
  const [fruit, setFruit] = useState([]);

  const showFruit = () => {
    let f = [
      {
        title: "test1",
        body: "test1@g.com",
      },
      {
        title: "test2",
        body: "test2@g.com",
      },
    ];

    setFruit(f);
  };

  const showApiData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setFruit(json));
  };

  return (
    <div>
      {fruit.map((json) => (
        <div>
          <h3>Name : {json.title}</h3>
          <h4>E-mail : {json.body} </h4>
          <hr></hr>
        </div>
      ))}

      <button
        style={{ marginBottom: "80px" }}
        onClick={() => {
          showFruit();
        }}
      >
        Get Local Data
      </button>

      <button
        onClick={() => {
          showApiData();
        }}
      >
        Get API Data
      </button>
    </div>
  );
}
export default Persons;
