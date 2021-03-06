import "./styles.css";
import React, { useState } from "react";

var shoppingList = ["shoes", "joggers", "cap", "jacket", "socks"];

let boldValue = "lighter";

export default function App() {
  function getEvenOdd(index) {
    if (index % 2 === 0) {
      return "white";
    }
    return "red";
  }

  function getTextColor(index) {
    if (index % 2 != 0) {
      return "blue";
    }
    return "red";
  }

  function onClickHandler(event) {
    //  boldValue = "bolder";
    //  console.log("Clicked", item);
    console.log("boldValue", event.target.value);
    event.target.style.fontWeight = "bold";
  }

  const val = function (item, index) {
    return (
      <li
        style={{
          backgroundColor: getEvenOdd(index),
          color: getTextColor(index),
          padding: "1rem"
        }}
        onClick={onClickHandler}
      >
        {item}
      </li>
    );
  };

  return (
    <div className="App">
      <h1>Print my array as a list using map function</h1>
      <ul>{shoppingList.map(val)}</ul>
    </div>
  );
}
