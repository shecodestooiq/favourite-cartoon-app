import React, { createContext, useState } from "react";

const PatientDataContext = createContext();

export function PatientDataProvider({ children }) {
  const [patientData, setPatientData] = useState({
    name: "",
    age: 0,
    diseases: "",
    phoneNumber: "",
  });
  const updatePatientData = (updatedData) => {
    setPatientData((prevData) => ({ ...prevData, ...updatedData }));
  };
  return (
    <PatientDataContext.Provider value={{ patientData, updatePatientData }}>
      {children}
    </PatientDataContext.Provider>
  );
}

export default PatientDataContext; // Export the context, not the component
