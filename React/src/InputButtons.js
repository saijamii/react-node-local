import React, { useState } from "react";
import Buttons from "./Buttons";
import "./App.css";

export default function InputButtons(props) {
  const [show, setShow] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dob, setDob] = useState("");
  const [door, setDoor] = useState("");
  const [phone, setPhone] = useState("");

  const [course, setCourse] = useState("");
  const [inst, setInst] = useState("");
  const [uni, setUni] = useState("");
  const [pass, setPass] = useState("");
  const [cgp, setCgp] = useState("");

  const [year, setYear] = useState("");
  const [company, setCompany] = useState("");
  const [desi, setDesi] = useState("");
  const [exp, setExp] = useState("");

  const onSubmitForm = () => {
    setShow(!show);
  };

  const addForm = () => {
    console.log("working ");
  };
  return (
    <div>
      <center>{show ? null : <h1> Fill Presonal Details</h1>}</center>

      {show ? (
        <Buttons
        className="buttons"
          onSubmit={onSubmitForm}
          fname={firstname}
          lname={lastname}
          dob={dob}
          door={door}
          phone={phone}
          Course={course}
          inst={inst}
          uni={uni}
          pass={pass}
          cgp={cgp}
          year={year}
          company={company}
          desi={desi}
          exp={exp}
        />
      ) : (
        <center>
          <div className="inputForm">
            <br />
            <b>
              <label> First Name </label>
            </b>
            <input
              className="form--box"
              type="text "
              placeholder=" Enter your First Name"
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
            />
            <br /> <br />
            <b>
              <label> Last Name </label>
            </b>
            <input
              className="form--box"
              type="text "
              placeholder=" Enter your Last Name"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
            />
            <br /> <br />
            <b>
              <label> Date of Birth </label>
            </b>
            <input
              className="form--box"
              type="date"
              onChange={(e) => setDob(e.target.value)}
              value={dob}
            />
            <br /> <br />
            <b>
              <label> Door Number </label>
            </b>
            <input
              className="form--box"
              type="number "
              placeholder=" Enter your Door Number"
              onChange={(e) => setDoor(e.target.value)}
              value={door}
            />
            <br /> <br />
            <b>
              <label> Phone Number </label>
            </b>
            <input
              className="form--box"
              type="text "
              placeholder=" Enter your Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <center>
              <h1> Fill Educational Details </h1>{" "}
            </center>
            <br /> <br />
            <b>
              <label> Course </label>
            </b>
            /
            <input
              className="form--box"
              type="text"
              placeholder="Course Name"
              onChange={(e) => setCourse(e.target.value)}
              value={course}
            />
            <br /> <br />
            <b>
              <label> Institution </label>
            </b>
            <input
              className="form--box"
              type="text"
              placeholder=" Enter your  Institution Name"
              onChange={(e) => setInst(e.target.value)}
              value={inst}
            />
            <br /> <br />
            <b>
              <label> University/ Board </label>
            </b>
            <input
              className="form--box"
              type="text"
              placeholder=" Enter your University/ Board"
              onChange={(e) => setUni(e.target.value)}
              value={uni}
            />
            <br /> <br />
            <b>
              <label> Year of Passing </label>
            </b>
            <input
              className="form--box"
              type="text"
              placeholder="Enter your Year of Passing "
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />
            <br /> <br />
            <b>
              <label> Percentage Or C.G.P.A </label>
            </b>
            <input
              className="form--box"
              type="number"
              placeholder=" Enter your Percentage Or C.G.P.A "
              onChange={(e) => setCgp(e.target.value)}
              value={cgp}
            />
            <br />
            <br />
            <button onClick={addForm}>Add Form </button>
            <br /> <br />
            <center>
              <h1> Fill Career Details </h1>
            </center>
            <center>
              <br /> <br />
              <b>
                <label> Year </label>
              </b>
              <input
                className="form--box"
                type="number"
                placeholder=" Enter  Year"
                onChange={(e) => setYear(e.target.value)}
                value={year}
              />{" "}
            </center>
            <br />
            <b>
              <label> Company Name </label>
            </b>
            <input
              className="form--box"
              type="text"
              placeholder=" Enter your Company Name "
              onChange={(e) => setCompany(e.target.value)}
              value={company}
            />
            <br /> <br />
            <b>
              <label> DESIGNATION </label>
            </b>
            <input
              className="form--box"
              type="text"
              placeholder=" Enter your Designation "
              onChange={(e) => setDesi(e.target.value)}
              value={desi}
            />
            <br /> <br />
            <b>
              <label> Total Years of Experiense </label>
            </b>
            <input
              className="form--box"
              type="number"
              placeholder=" Enter your Total Years of Experiense"
              onChange={(e) => setExp(e.target.value)}
              value={exp}
            />
            <br /> <br />
            <button onClick={onSubmitForm}> SUBMIT DATA </button>
          </div>
        </center>
      )}
    </div>
  );
}
