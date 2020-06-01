import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
import "../App.css";

function ProductPage(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  return (
    <div>
      <div className="back-to-products">
        <Link to="/">Back to Products</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product" />
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h3>{product.name}</h3>
            </li>
            <li>
              {product.rating} Stars {product.numReviews} Reviews
            </li>
            <li>Price: $ {product.price}</li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Price: $ {product.price}</li>
            <li>Status: {product.status}</li>
            <li>
              Qty:
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </select>
            </li>
            <li>
              <button>Add to Card</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ProductPage;
