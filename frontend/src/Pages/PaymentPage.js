import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { savePayment } from "../actions/cartActions";
import CheckoutSteps from "../constants/CheckoutSteps";

function PaymentPage(props) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const { loading, userInfo, error } = savePayment;
  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push("placeorder");
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <h2>Payment</h2>
            <li>
              <input
                type="radio"
                name="paymentMethod"
                id="paymentMethod"
                value="PayPal"
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></input>
              <label htmlFor="paymentMethod">PayPal</label>
            </li>

            <li>
              <button type="submit" className="primary-button" on>
                Continue
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
export default PaymentPage;
