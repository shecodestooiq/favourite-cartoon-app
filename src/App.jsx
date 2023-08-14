import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";
import React from "react";
import DoctorSignin from "./components/DoctorSignin";
import PatientForm from "./components/PatientForm";
import { PatientDataProvider } from "./providers/PatientDataContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DoctorSignin />} />
        <Route
          path="/patient-form"
          element={
            <PatientDataProvider>
              <PatientForm />
            </PatientDataProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
