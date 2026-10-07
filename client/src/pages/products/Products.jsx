import { useState } from "react";
import ProductTable from "../../components/products/ProductTable";
import ProductModal from "../../components/products/ProductModal";

function Products() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Dell OptiPlex",
      category: "Desktop",
      vendor: "Dell",
      price: "₹45,000",
      stock: 15,
      status: "Available",
    },
    {
      id: 2,
      name: "HP LaserJet",
      category: "Printer",
      vendor: "HP",
      price: "₹18,500",
      stock: 8,
      status: "Available",
    },
    {
      id: 3,
      name: "Lenovo ThinkPad",
      category: "Laptop",
      vendor: "Lenovo",
      price: "₹82,000",
      stock: 5,
      status: "Low Stock",
    },
  ]);
  const addProduct = (newProduct) => {
  setProducts([
    ...products,
    {
      id: products.length + 1,
      ...newProduct,
    },
  ]);
  setShowModal(false);
  };
  
  const editProduct = (product) => {
   setSelectedProduct(product);
   setShowModal(true);
  };
  
  const updateProduct = (updatedProduct) => {
  setProducts(
    products.map((product) =>
      product.id === updatedProduct.id
        ? updatedProduct
        : product
    )
  );
  setShowModal(false);
  setSelectedProduct(null);
  };
  
  const deleteProduct = (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this product?"
  );

  if (!confirmDelete) return;

  setProducts(
    products.filter((product) => product.id !== id)
  );
  };
  
  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Products</h1>

      <ProductTable
          products={filteredProducts}
          search={search}
          setSearch={setSearch}
          openModal={() => {
          setSelectedProduct(null);
          setShowModal(true);
          }}
          editProduct={editProduct}
          deleteProduct={deleteProduct}
      />

      {showModal && (
        <ProductModal
        closeModal={() => {
        setShowModal(false);
        setSelectedProduct(null);
        }}
        addProduct={addProduct}
        updateProduct={updateProduct}
        selectedProduct={selectedProduct}
        />
      )}
    </>
  );
}

export default Products;