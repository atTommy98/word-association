import React from "react";
import { useState, useEffect } from "react";
import "interactjs";

import css from "./interactive.module.css";
import interact from "interactjs";

export default function Interactive({ data }) {
  let position = { x: 0, y: 0 };

  interact(".text").draggable({
    listeners: {
      start(event) {
        console.log(event.type, event.target);
      },
      move(event) {
        position.x += event.dx;
        position.y += event.dy;
        event.target.style.transform = `translate(${position.x}px, ${position.y}px`;
      },
    },
  });

  return (
    <div className={css.container}>
      <div className={css.image}>
        <img
          className={css.image}
          src={data.length > 1 ? data[0].url : ""}
        ></img>
      </div>
      <div class="text">
        <h1 className={css.text}>{data.length > 1 ? data[0].name : ""}</h1>
      </div>
      <div className={css.image}>
        <img
          className={css.image}
          src={data.length > 1 ? data[1].url : ""}
        ></img>
      </div>
    </div>
  );
}
