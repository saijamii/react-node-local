import React, { useState } from "react";
import Personal from "./Personal";
import Edu from "./Edu";
import Career from "./Career";
import "./App.css";

function Buttons(props) {
  const [show, setShow] = useState("HOMEPAGE");

  const onClickForm = () => {
    props && props.onSubmit();
  };

  return (
    <div>
      <center>
        <h1 className="head">{show}</h1>
        {/* <h2>{props && props.name}</h2> */}

        <button
          className="form"
          onClick={() => {
            onClickForm();
          }}
        >
          Form
        </button>

        {show === "HOMEPAGE" ? (
          <div>
            <button
              className="buttons"
              onClick={() => {
                setShow("Personal Info");
              }}
            >
              PERSONAL INFO
            </button>
            <br />
            <button
              className="buttons"
              onClick={() => {
                setShow("Educational Info");
              }}
            >
              EDUCATIONAL INFO
            </button>
            <br />

            <button
              className="buttons"
              onClick={() => {
                setShow("Career Info ");
              }}
            >
              CAREER INFO
            </button>
          </div>
        ) : show === "Personal Info" ? (
          // <h4> {props.firstname} : {props.setFirstname}</h4>

          <Personal
            fname={props && props.fname}
            lname={props && props.lname}
            dob={props && props.dob}
            door={props && props.door}
            phone={props && props.phone}
          />
        ) : show === "Educational Info" ? (
          <Edu
            Course={props && props.course}
            inst={props && props.inst}
            uni={props && props.uni}
            pass={props && props.pass}
            cgp={props && props.cgp}
          />
        ) : (
          <Career
            year={props && props.year}
            company={props && props.company}
            desi={props && props.desi}
            exp={props && props.exp}
          />
        )}

        {show === "HOMEPAGE" ? (
          <h1></h1>
        ) : (
          <button
            className="form"
            onClick={() => {
              setShow("HOMEPAGE");
            }}
          >
            HOMEPAGE
          </button>
        )}
      </center>
    </div>
  );
}

export default Buttons;
