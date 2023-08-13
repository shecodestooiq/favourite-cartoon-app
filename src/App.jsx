import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";
import React from "react";
import DoctorSignin from "./components/DoctorSignin";
import PatientForm from "./components/PatientForm";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<DoctorSignin />} /> */}
        <Route path="/" element={<PatientForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
