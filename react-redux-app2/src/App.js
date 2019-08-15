import React from "react";
import "./App.css";
import PlayerList from "./components/PlayerList";
import { getData } from "./actions/index";

function App() {
  return (
    <div className="App">
      <h1>Generate Basketball Player Cards</h1>
      <PlayerList />
    </div>
  );
}

export default App;
