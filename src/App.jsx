import { useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
