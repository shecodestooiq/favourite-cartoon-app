import React, { createContext, useState } from "react";

const context = createContext();

export function PatientDataProvider({ children }) {
  const [patientData, setPatientData] = useState({
    name: "",
    age: 0,
    diseases: "",
    phoneNumber: "",
  });
  return (
    <PatientDataProvider value={{patientData}}>{children}</PatientDataProvider>
  );
}

export default context;
