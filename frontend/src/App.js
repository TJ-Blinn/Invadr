import React from "react";
import axios from "axios";
import "./App.css";
import Register from "./components/Register";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import About from "./components/About";
<<<<<<< HEAD
import ZeldaTest from "./components/ZeldaTest";
=======
import Results from "./components/Results"
>>>>>>> b8810f6cb990139442dc917cc3c0fdb31a3a71d2
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {


  return (
    <Router>
      <Routes>
        <Route path="/test" element={<ZeldaTest />}></Route>
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
