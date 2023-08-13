import React, { useContext } from "react";
import context from "../providers/PatientDataContext";

import { PatientDataProvider } from "../providers/PatientDataContext";

function PatientForm() {
  const { context } = useContext(context);

  return (
    <>
      <h1>Pateint data</h1>
      <PatientDataProvider>
        <form>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Name" />
          <input type="password" placeholder="password" />
          <button type="submit">Signup</button>
        </form>
      </PatientDataProvider>
    </>
  );
}

export default PatientForm;
