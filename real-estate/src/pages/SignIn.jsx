import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
      // console.log(e.target.value);
    }));
  }

  return (
    <section className="sign-in-heading">
      <h1>Sign in</h1>
      <div className="sign-in-container">
        <div className="signin-img-container">
          <img
            className="signin-img"
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="key"
          />
        </div>
        <div className="input-signin">
          <form className="signin-forms">
            <input
              type="email"
              className="textfld-signin"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />
            <div className="pass-signin">
              <input
                type={showPassword ? "text" : "password"}
                className="textfld-signin"
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
              />
              {showPassword ? (
                <FaEyeSlash
                  className="eye-signin"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <FaEye
                  className="eye-signin"
                  // onClick={setShowPassword(false)}
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className="sign-in-links">
              <p>
                Don't have an account?
                <Link to="/sign-up"> Register</Link>
              </p>
              <p>
                <Link to="/forgot-password" className="frgt-signin">
                  Forgot Password?
                </Link>
              </p>
            </div>
            <button type="submit" className="signin-btn">
              Sign in
            </button>
            <div className="or-sign-in">
              <div className="border"></div>
              <p className="or-content">OR</p>
              <div className="border"></div>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
