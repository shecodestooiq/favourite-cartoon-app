import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";
import { ToastContainer } from 'react-toastify';
// import { AlertContainer, alert } from 'react-custom-alert';


function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
