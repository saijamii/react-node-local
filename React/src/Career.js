import React from "react";

export default function Career(props) {
  return (
    <div>
      <div className="text">
        <h4> Year of Joining : {props && props.year}</h4>
        <h4> Company Name : {props && props.company} </h4>
        <h4> DESIGNATION :{props && props.desi} </h4>
        <h4> Total Years of Experiense :{props && props.exp} </h4>
      </div>
    </div>
  );
}
