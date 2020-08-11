import React, { useEffect, useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { saveProduct } from "../actions/productActions";

function ProductsPage(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [description, setDescription] = useState("");
  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      //
    };
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct({
        name,
        price,
        image,
        category,
        description,
        countInStock,
      })
    );
  };
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <h2>Create Product</h2>
          <li>
            {loadingSave && <div>Loading...</div>}
            {errorSave && <div>{errorSave}</div>}
          </li>
          <li>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              id="image"
              onChange={(e) => setImage(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="description">Description</label>
            <input
              type="textarea"
              name="description"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="category">Category</label>
            <input
              type="text"
              name="category"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="countInStock">In Stock</label>
            <input
              type="number"
              name="countInStock"
              id="countInStock"
              onChange={(e) => setCountInStock(e.target.value)}
            />
          </li>

          <li>
            <button type="submit" className="primary-button">
              Create
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}
export default ProductsPage;
