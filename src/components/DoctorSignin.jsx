import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function DoctorSignin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);

    setTimeout(() => {
      console.log("Form submitted successfully!");
      navigate("/patient-form"); 
    }, 2000); 
  };

  return (
    <div className="signin-container">
      <h1>Signup as a Doctor</h1>
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPass(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <center>
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </center>
      </form>
    </div>
  );
}

export default DoctorSignin;
