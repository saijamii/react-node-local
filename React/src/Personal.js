import React from "react";

export default function Personal(props) {
  return (
    <div>
      <div className="text">
        <h4> First Name : {props && props.fname}</h4>
        <h4>Last Name : {props && props.lname} </h4>
        <h4> Date of Birth :{props && props.dob} </h4>
        <h4> Door Number :{props && props.door} </h4>
        <h4> Phone Number : {props && props.phone} </h4>
      </div>
    </div>
  );
}
