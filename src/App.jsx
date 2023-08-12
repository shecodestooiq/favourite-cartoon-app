import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";

import FavoriteCartoonsPage from "./components/FavouritePage";
// import { AlertContainer, alert } from 'react-custom-alert';

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<FavoriteCartoonsPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
