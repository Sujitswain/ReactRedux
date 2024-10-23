// src/App.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  updateProduct,
  deleteProduct,
  addProduct,
  selectAllProducts,
} from "../Store/reduxToolKitApi";

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const productStatus = useSelector((state) => state.products.status);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(addProduct(newProduct));
    setNewProduct({ name: "", price: "" });
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ ...editingProduct, ...newProduct }));
    setEditingProduct(null);
    setNewProduct({ name: "", price: "" });
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setNewProduct({ name: product.name, price: product.price });
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div>
      <h1>Product List</h1>
      {productStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price}
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </li>
            ))}
          </ul>

          <h2>{editingProduct ? "Update Product" : "Add Product"}</h2>
          <form
            onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
          >
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              required
            />
            <input
              type="number"
              placeholder="Product Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              required
            />
            <button type="submit">{editingProduct ? "Update" : "Add"}</button>
            {editingProduct && (
              <button type="button" onClick={() => setEditingProduct(null)}>
                Cancel
              </button>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default App;
