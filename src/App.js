import Controls from "./components/controls/controls.js";
import Interactive from "./components/interactive/interactive.js";

import React, { useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  function handleCallback(childData) {
    setData(childData);
  }

  return (
    <div className="App">
      <div className="controls">
        <Controls parentCallback={handleCallback}></Controls>
      </div>
      <div className="interactive">
        <Interactive data={data}></Interactive>
      </div>
    </div>
  );
}

export default App;
