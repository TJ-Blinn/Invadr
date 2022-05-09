import React from "react";
import "./App.css";
import "./styles/register.css";
import Register from "./components/Register";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />}></Route>
        </Routes>

        <Routes>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
