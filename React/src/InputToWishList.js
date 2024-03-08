import React from "react";
import { useState } from "react";

export default function InputToWishList() {
  const [fruit, setFruit] = useState("");
  const [basket, setBasket] = useState([]);
  const [addToCart, setAddToCart] = useState([]);

  const saveToBasket = () => {
    let fruits = basket;
    fruits.push(fruit);
    setBasket(fruits);
    setFruit("");
  };

  return (
    <div className="objects">
      <center>
        <input onChange={(e) => setFruit(e.target.value)} value={fruit} />
        <button onClick={() => saveToBasket()}>Add to WishList</button>
        <div style={{ background: "cyan" }}>
          <h4>WishListed Items : {basket.length}</h4>
          {basket.map((f, i) => (
            <div key={i}>
              <h1>{f}</h1>
            </div>
          ))}
        </div>
      </center>
    </div>
  );
}
