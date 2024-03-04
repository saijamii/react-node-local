import React from "react";
import error from "./Images/error.png";
export default function NoData() {
  return (
    <div
      style={{
        backgroundImage: `url(${"https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-9.png"})`,

        height: "45.5vw",
        width: "auto",
        backgroundSize: "contain",
      }}
    ></div>
  );
}
