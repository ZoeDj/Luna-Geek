import React from "react";
import data from "../data";
import { Link } from "react-router-dom";
import "../App.css";

function HomePage(props) {
  return (
    <ul className="products">
      {data.products.map((product) => (
        <li>
          <div className="product">
            <Link to={"/products/" + product._id}>
              <img
                className="product-image"
                src={product.image}
                alt="sticker"
              />
            </Link>
            <div className="product-name">
              <Link to={"/products/" + product._id}>{product.name}</Link>
            </div>
            <div className="product-price">$ {product.price}</div>
            <div className="product-description">{product.description}</div>
            <div className="product-rating">
              {product.rating} Stars {product.numReviews} Reviewes
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default HomePage;
