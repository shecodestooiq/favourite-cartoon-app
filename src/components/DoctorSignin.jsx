import React, { useState } from "react";
import { Link } from "react-router-dom";

function DoctorSignin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleSubmit = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} />
        <input type="text" placeholder="Name" value={name} />
        <input type="password" placeholder="password" value={password} />
        <Link to="/patient-form">
          {/* TODO: handle validation */}
          <button type="submit">Signup</button>
        </Link>
      </form>
    </>
  );
}

export default DoctorSignin;
