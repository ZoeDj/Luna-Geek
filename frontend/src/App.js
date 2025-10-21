import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import SigninPage from "./Pages/SigninPage";
import RegisterPage from "./Pages/RegisterPage";
import ProductsPage from "./Pages/ProductsPage";
import ShippingPage from "./Pages/ShippingPage";
import PaymentPage from "./Pages/PaymentPage";
import PlaceOrderPage from "./Pages/PlaceOrderPage";
import { useSelector } from "react-redux";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  let words = [
    "______________________________Just go for it and put yourself out there",
    "______________________________Recognize and embrace your uniqueness",
  ];

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">
              <img
                className="logo"
                src="./luna-geek.png"
                alt="logo"
                height="70vmax"
              ></img>
            </Link>
          </div>
          <div className="header-links">
            <a href="/cart">Cart</a>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link href="#">Admin</Link>
                <Link to="/products">Products</Link>
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <BrowserRouter>
            <Link to="products">Products</Link>

            <Link to="stickers">Stickers</Link>

            <Link to="buttons">Buttons</Link>

            <Link to="shirts">Shirts</Link>
          </BrowserRouter>
        </aside>
        <main className="main">
          <div>
            <svg className="wave" viewBox="0 0 1440 320">
              <path
                id="MyPath"
                fill="#453bff"
                fillOpacity="1"
                d="M0,256L80,218.7C160,181,320,107,480,112C640,117,800,203,960,240C1120,277,1280,267,1360,261.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
              />

              <text className="word">
                <textPath href="#MyPath">
                  {words[Math.floor(Math.random() * words.length)]}
                  {/* ______________________________ encourages women and girls to
                  embrace their uniqueness and awesomeness */}
                </textPath>
              </text>
            </svg>
          </div>

          <div className="content">
            <Route path="/products" component={ProductsPage} />
            <Route path="/stickers" component={ProductsPage} />
            <Route path="/buttons" component={ProductsPage} />
            <Route path="/shirts" component={ProductsPage} />
            <Route path="/shipping" component={ShippingPage} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/placeorder" component={PlaceOrderPage} />
            <Route path="/signin" component={SigninPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/cart/:id?" component={CartPage} />
            <Route path="/" exact={true} component={HomePage} />
          </div>
        </main>
        <footer className="footer">All rights reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
