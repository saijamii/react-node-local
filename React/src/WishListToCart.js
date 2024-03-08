import React, { useState } from "react";

export default function WishListToCart() {
  const [type, setType] = useState("");
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  const tempVar1 = () => {
    if (type.length === 0) {
      return;
    }
    setData([...data, type]);
    setType("");
  };

  const tempVar2 = (selected) => {
    setCart([...cart, selected]);
    // console.log("selected",selected, "previou ..cart", ...cart);
  };

  return (
    <div className="">
      <center>
        <div className="yellow">
          <h1> No.of Items in Whislist : {data.length}</h1>
          <input
            className="box"
            type="text"
            onChange={(event) => setType(event.target.value)}
            value={type}
          />

          <button className="btn" onClick={tempVar1}>
            {" "}
            Add to Whislist{" "}
          </button>

          {data.map((d, i) => (
            <div
              key={i}
              onClick={() => {
                tempVar2(d);
              }}
            >
              <h1
                className={cart.includes(d) ? "strike" : "bnoStrikelack"}
                style={{ color: cart.includes(d) ? "green" : "black" }}
              >
                {d}
              </h1>
            </div>
          ))}
        </div>

        <div className="cart">
          <h1>No.of Items in Cart : {cart.length}</h1>
          {/* <h2> List of Item(s) : {cart.join(" , ")} </h2> */}
          <h2>
            List of Item(s) :
            {cart.map((c) => (
              <h2>{c}</h2>
            ))}
          </h2>
        </div>
      </center>
    </div>
  );
}
