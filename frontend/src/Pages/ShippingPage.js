import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { saveShipping } from "../actions/cartActions";

function ShippingPage(props) {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const { loading, userInfo, error } = saveShipping;
  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping(address, city, zipCode, country));
  };
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <h2>Shipping</h2>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </li>
          <li>
            <label htmlFor="name">Address</label>
            <input
              type="address"
              name="address"
              id="address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="name">City</label>
            <input
              type="city"
              name="city"
              id="city"
              onChange={(e) => setCity(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="name">Zip Code</label>
            <input
              type="zipCode"
              name="zipCode"
              id="zipCode"
              onChange={(e) => setZipCode(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="name">Country</label>
            <input
              type="country"
              name="country"
              id="country"
              onChange={(e) => setCountry(e.target.value)}
            />
          </li>
          <li>
            <button type="button" className="primary-button">
              Continue
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}
export default ShippingPage;
