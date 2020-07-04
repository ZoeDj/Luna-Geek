import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../actions/userActions";

function SigninPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <h2>Sign-In</h2>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="password">Password</label>
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
