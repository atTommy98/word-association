import React from "react";
import { useEffect } from "react";

import css from "./controls.module.css";

export default function Controls({ parentCallback }) {
  useEffect(() => {
    reset(fruits);
  }, []);

  function reset(fruits) {
    // Randomly select two objects
    let firstFruit = fruits[Math.floor(Math.random() * fruits.length)];
    let secondFruit = fruits[Math.floor(Math.random() * fruits.length)];

    // Ensure fruits selected are never the same
    while (secondFruit.name === firstFruit.name) {
      secondFruit = fruits[Math.floor(Math.random() * fruits.length)];
    }

    let data = [firstFruit, secondFruit];

    parentCallback(data);
  }

  const fruits = [
    {
      name: "Potato",
      url: "https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg",
    },
    {
      name: "Apple",
      url: "https://www.collinsdictionary.com/images/full/apple_158989157.jpg?version=4.0.211",
    },
    {
      name: "Pineapple",
      url: "https://www.firstchoiceproduce.com/wp-content/uploads/2020/03/pineapple.jpg",
    },
    {
      name: "Pear",
      url: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/11/06/17/pears3.jpg?width=1368&auto=webp&quality=75",
    },
  ];

  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => reset(fruits)}>
        RESET
      </button>
    </div>
  );
}
