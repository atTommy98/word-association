import React from "react";
import { useState, useEffect } from "react";

import css from "./interactive.module.css";

export default function Interactive({data}) {

  console.log(data);

  return (
    <div className={css.container}>
      <div className={css.image}>
        <img className={css.image} src={data.length > 1 ? data[0].url : ""}></img>
      </div>
      <div className={css.text}>
        <h1>{data.length > 1 ? data[0].name : ""}</h1>
      </div>
      <div className={css.image}>
        <img className={css.image} src={data.length > 1 ? data[1].url : ""}></img>
      </div>
    </div>
  );
}
