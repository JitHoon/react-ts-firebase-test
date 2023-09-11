import "./App.css";
import React from "react";
import createTestDoc from "./modules/CreateDoc";
import createTestImg from "./modules/CreateImg";

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={createTestDoc}>
          create test doc
        </button>
        <input type="file" onChange={(e) => createTestImg(e)} />
      </header>
    </div>
  );
}

export default App;
