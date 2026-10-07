import "./ProductTable.css";


function ProductTable({ products,search,setSearch,openModal,editProduct,deleteProduct, }) {
  return (
    <div className="product-card">

      <div className="product-header">
        <h2>Product List</h2>
        <button onClick={openModal}>Add Product</button>
      </div>

      <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Vendor</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.vendor}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.status}</td>
              <td>
                <button
                onClick={() => editProduct(product)}
                >
                ✏️
                </button>

                <button
                  onClick={() => deleteProduct(product.id)}
                  >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default ProductTable;