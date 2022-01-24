import logo from "./logo.svg";
import Controls from "./components/controls/controls.js";
import Interactive from "./components/interactive/interactive.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="controls">
        <Controls></Controls>
      </div>
      <div className="interactive">
        <Interactive></Interactive>
      </div>
    </div>
  );
}

export default App;
