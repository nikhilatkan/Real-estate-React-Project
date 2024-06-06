import React, { useState } from "react";
import "./SignIn.css";

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <h1 className="page-title">Sign In</h1>
      <div className="container">
        <div className="image-container">
          <img className="realtor-home-image" src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357" alt="img" />
        </div>
        <div className="form-container-wrapper">
          <form className="form-container">
            <div>
              <input type="text" value={email} onChange={(e) => { setFormData((data) => { }) }} />
            </div>
            <div>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn;
