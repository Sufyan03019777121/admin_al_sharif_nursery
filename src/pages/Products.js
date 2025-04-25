import { useState } from 'react';
import ModalForm from '../components/ModalForm';

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Rose Plant', price: 300 },
    { id: 2, name: 'Tulip Plant', price: 250 },
  ]);

  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddProduct = (newProduct) => {
    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id ? { ...p, ...newProduct } : p
        )
      );
      setEditingProduct(null);
    } else {
      setProducts([...products, { ...newProduct, id: Date.now() }]);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    document.getElementById('openModalBtn').click();
  };

  return (
    <div className="container mt-4">
      <h1 className="text-primary">Products</h1>

      {/* <button
        className="btn btn-success mb-3"
        data-bs-toggle="modal"
        data-bs-target="#productModal"
        id="openModalBtn"
      >
        Add Product
      </button> */}

      <ModalForm onAdd={handleAddProduct} editingProduct={editingProduct} />

      <table className="table table-striped table-bordered shadow-sm">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Price (Rs.)</th>
            <th style={{ width: '150px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
