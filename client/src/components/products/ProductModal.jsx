import "./ProductModal.css";
import { useState, useEffect } from "react";

function ProductModal({ closeModal , addProduct,updateProduct,selectedProduct,}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [vendor, setVendor] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [status, setStatus] = useState("Available");
  
  useEffect(() => {
  if (selectedProduct) {
    setName(selectedProduct.name);
    setCategory(selectedProduct.category);
    setVendor(selectedProduct.vendor);
    setPrice(selectedProduct.price);
    setStock(selectedProduct.stock);
    setStatus(selectedProduct.status);
  } else {
    setName("");
    setCategory("");
    setVendor("");
    setPrice("");
    setStock("");
    setStatus("Available");
  }
  }, [selectedProduct]);

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>Add Product</h2>

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="text"
          placeholder="Vendor"
          value={vendor}
          onChange={(e) => setVendor(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Stock Quantity"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />

        <select 
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Available</option>
          <option>Low Stock</option>
          <option>Out of Stock</option>
        </select>

        <div className="modal-buttons">

          <button onClick={closeModal}>
            Cancel
          </button>

          <button
            onClick={() => {
            const productData = {
            id: selectedProduct?.id,
            name,
            category,
            vendor,
            price,
            stock,
            status,
            };

            if (selectedProduct) {
              updateProduct(productData);
            } else {
              addProduct(productData);
            }
            }}
          >
          Save
          </button>

        </div>

      </div>

    </div>
  );
}



export default ProductModal;