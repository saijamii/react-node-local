import React from "react";

export default function Edu(props) {
  return (
    <div>
      <div className="text">
        <h4> Course Name : {props && props.Course}</h4>
        <h4>Institution Name : {props && props.inst} </h4>
        <h4> University/ Board :{props && props.uni} </h4>
        <h4> Year of Passing :{props && props.pass} </h4>
        <h4>Percentage Or C.G.P.A : {props && props.cgp} </h4>
      </div>
    </div>
  );
}
