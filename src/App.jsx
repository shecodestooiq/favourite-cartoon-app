import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";
import React from "react";
import DoctorSignin from "./components/DoctorSignin";
import PatientForm from "./components/PatientForm";
import { PatienDataProvider } from "./providers/PatientDataContext";

function App() {
  return (
    // <PatienDataProvider>
      // <h1>sh</h1>
    // </PatienDataProvider>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DoctorSignin />} />
        <Route path="/patient-form" element={<PatientForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
