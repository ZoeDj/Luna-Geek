import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { saveShipping } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

function ShippingPage(props) {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, city, zipCode, country }));
    props.history.push("payment");
  };
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <h2>Shipping</h2>
            <li>
              <label htmlFor="address">Address</label>
              <input
                type="address"
                name="address"
                id="address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="city">City</label>
              <input
                type="city"
                name="city"
                id="city"
                onChange={(e) => setCity(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="zipCode">Zip Code</label>
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
              <button type="submit" className="primary-button">
                Continue
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
export default ShippingPage;
