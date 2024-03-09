import React from "react";
import { useState } from "react";
import "./App.css";
export default function ObjectsOfArray() {
  const [fruits, setFruits] = useState([]);
  const [employee, setEmployee] = useState([]);

  const showFruits = () => {
    let f = ["Apple", "Mango", "Banana", "Grapes"];
    setFruits(f);
  };

  const showEmployees = () => {
    let e = [
      {
        name: "Shyam",
        age: "20",
        city: "Vizag",
      },
      {
        name: "Sai",
        age: "22",
        city: "Delhi",
      },
      {
        name: "James",
        age: "24",
        city: "Mumbai",
      },
      {
        name: "Sravani",
        age: "22",
        city: "Hyd",
      },
      {
        name: "Reshmi",
        city: "Hyd",
        state: "Andhraradesh",
      },
    ];
    setEmployee(e);
  };

  return (
    <div className="objects">
      <center>
        {employee.map((f) => (
          <div style={{ background: "pink" }}>
            <h1>{f.name}</h1>
            <h3>{f["age"]}</h3>
            <h4>{f.city}</h4>
            <h4>{f.state}</h4>
          </div>
        ))}

        <button onClick={() => showEmployees()}>Employees API Call</button>

        <hr></hr>

        <h1>{fruits.join(",")}</h1>

        {fruits.map((e) => (
          <h1>{e}</h1>
        ))}

        <button onClick={() => showFruits()}>Show Fruits</button>
      </center>
    </div>
  );
}
