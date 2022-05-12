import React from "react";
import axios from "axios";
import "./App.css";
import Register from "./components/Register";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import About from "./components/About";
import Results from "./components/Results";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/results" element={<Results />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
