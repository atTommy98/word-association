import React from "react";
import { useState, useEffect } from "react";

import css from "./controls.module.css";

export default function Controls() {
  function handleClick() {
     console.log("click")
  }

  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => handleClick()}>
        RESET
      </button>
    </div>
  );
}
