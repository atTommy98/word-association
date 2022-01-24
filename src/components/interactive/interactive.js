import React from "react";
import { useState, useEffect } from "react";

import css from "./interactive.module.css";

export default function Interactive() {
  const fruits = [
    {
      name: "Potato",
      url: "",
    },
    {
      name: "Apple",
      url: "",
    },
    {
      name: "Pineapple",
      url: "",
    },
    {
      name: "Pear",
      url: "",
    },
  ];

  let word = "";

  function pickRandomObjects(fruits) {
    // Randomly select two objects
    let firstFruit = fruits[Math.floor(Math.random() * fruits.length)];
    let secondFruit = fruits[Math.floor(Math.random() * fruits.length)];

    // Ensure fruits selected are never the same
    while (secondFruit.name === firstFruit.name) {
      secondFruit = fruits[Math.floor(Math.random() * fruits.length)];
    }
  }

  return (
    <div className={css.container}>
      <div className={css.image}>
        <img></img>
      </div>
      <div onClick={() => pickRandomObjects(fruits)} className={css.text}>
        <h1>POTATO</h1>
      </div>
      <div className={css.image}>
        <img url></img>
      </div>
    </div>
  );
}
