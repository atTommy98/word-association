import React from "react";
import { useState, useEffect } from "react";
import "interactjs";
import useSound from "use-sound";
import correct from "../../sounds/correct.mp3"

import css from "./interactive.module.css";
import interact from "interactjs";

export default function Interactive({ data }) {
  let position = { x: 0, y: 0 };

  const [playOn] = useSound(correct, {volume: 0.25});

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

  interact("img").dropzone({
    ondrop: function (e) {
      console.log("Drop!")
      playOn();
    },
  });

  return (
    <div className={css.container}>
      <div className={css.image} class="image">
        <img
          className={css.image}
          src={data.length > 1 ? data[0].url : ""}
        ></img>
      </div>
      <div class="text">
        <h1 className={css.text}>{data.length > 1 ? data[0].name : ""}</h1>
      </div>
      <div className={css.image} class="image">
        <img
          className={css.image}
          src={data.length > 1 ? data[1].url : ""}
        ></img>
      </div>
    </div>
  );
}
