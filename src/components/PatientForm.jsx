import React, { useContext, useState } from "react";
import PatientDataContext from "../providers/PatientDataContext";

function PatientForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [diseases, setDiseases] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { patientData, updatePatientData } = useContext(PatientDataContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    updatePatientData({
      ...patientData,
      name,
      age,
      diseases,
      phoneNumber,
    });

    setName("");
    setAge("");
    setDiseases("");
    setPhoneNumber("");
  };

  return (
    <div className="signin-container">
      <h1 className="form-title">Patient Data</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Diseases:</label>
          <input
            type="text"
            value={diseases}
            onChange={(e) => setDiseases(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Phone number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <center>
          <button type="submit" className="submit-button">
            Add Patient Data
          </button>
        </center>
      </form>
    </div>
  );
}

export default PatientForm;
