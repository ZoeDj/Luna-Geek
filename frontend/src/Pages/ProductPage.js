import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
import "../App.css";

function ProductPage(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  return (
    <div>
      <div>
        <Link to="/">Back to Products</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img sec={product.image} alt="product"></img>
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              <h5>
                {product.rating} Stars ({product.numReview} Reviews)
              </h5>
            </li>
            <li>
              <b>${product.price}</b>
            </li>
            <li>
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ProductPage;
