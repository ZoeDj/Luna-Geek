import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import { createOrder } from "../actions/orderActions";

function PlaceOrderPage(props) {
  const cart = useSelector((state) => state.cart);
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  const { cartItems, shipping, payment } = cart;
  if (!shipping.address) {
    props.history.push("/shipping");
  } else if (!payment.paymentMethod) {
    props.history.push("/payment");
  }

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 50 ? 0 : 3;
  const taxPrice = Math.round(0.07 * itemsPrice * 100) / 100;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const dispatch = useDispatch();

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cartItems,
        shipping,
        payment,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      })
    );
  };

  useEffect(() => {
    if (success) {
      props.history.push("/order/" + order._id);
    }
  }, [success]);

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="placeorder">
        <div className="placeorder-info">
          <div>
            <h3>Shipping</h3>
            <div>
              {cart.shipping.address}, {cart.shipping.city},
              {cart.shipping.zipCode}, {cart.shipping.country}
            </div>
          </div>
          <div>
            <h3>Payment</h3>
            <div>Payment Method: {cart.payment.paymentMethod} </div>
            <div>
              <ul className="cart-list-container">
                <li>
                  <h3>Shopping Cart</h3>
                  <div>Price</div>
                </li>
                {cartItems.length === 0 ? (
                  <div>Cart is empty</div>
                ) : (
                  cartItems.map((item, item_id) => (
                    <li>
                      <div className="cart-image">
                        <img src={item.image} alt="product" key="item_id" />
                      </div>
                      <div className="cart-name">
                        <Link to={"/product/" + item.product}>{item.name}</Link>
                      </div>
                      <div>Qty:{item.qty}</div>

                      <div className="cart-price">${item.price}</div>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="placeorder-action">
          <ul>
            <li>
              <button
                className="primary-button"
                disabled={cartItems.length === 0}
                onClick={placeOrderHandler}
              >
                Place Order
              </button>
            </li>
            <li>
              <h3>Order Summary</h3>
            </li>
            <li>
              <div>Items</div>
              <div>${itemsPrice}</div>
            </li>
            <li>
              <div>Shipping</div>
              <div>${shippingPrice}</div>
            </li>
            <li>
              <div>Tax</div>
              <div>${taxPrice}</div>
            </li>
            <li>
              <div>Total</div>
              <div>${totalPrice}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default PlaceOrderPage;
