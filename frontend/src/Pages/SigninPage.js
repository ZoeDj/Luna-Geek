import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";

function SigninPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      //
    };
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <h2>Sign-In</h2>
          <li>
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <li>
            <button type="submit" className="primary-button">
              Signin
            </button>
          </li>
          <li className="register-question">New to LunaGeek?</li>
          <li>
            <button className="secondary-button">
              <Link className="register-button" to="/register">
                Create Account
              </Link>
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}
export default SigninPage;
