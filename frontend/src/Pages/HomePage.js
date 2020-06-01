import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

function HomePage(props) {
  // definding hook
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("api/products");
      setProduct(data);
    };
    fetchData();
    return () => {
      //
    };
  }, []);
  return (
    <ul className="products">
      {products.map((product) => (
        <li key={product._id}>
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
