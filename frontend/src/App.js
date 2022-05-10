import React from "react";
import "./App.css";
import Register from "./components/Register";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/navigation" element={<Navigation />}></Route> */}
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>

        {/* Temp solution to display Nav Bar using fragments */}
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <Homepage />
            </>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
