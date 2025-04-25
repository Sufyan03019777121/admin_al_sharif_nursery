import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const AdminDashboard = ({}) => {
  // Loading products from localStorage
  const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

  const [products, setProducts] = useState(storedProducts);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });
  const [editMode, setEditMode] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  // Saving products to localStorage when they change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // Adding a new product
  const handleAdd = () => {
    const id = Date.now();
    if (newProduct.name.trim() === "" || newProduct.price.trim() === "") {
      alert("Please provide both name and price");
      return;
    }
    setProducts([
      ...products,
      { ...newProduct, id, views: 0, createdAt: new Date() },
    ]);
    setNewProduct({ name: "", price: "", description: "", image: null });
  };

  // Editing a product
  const handleEdit = (id) => {
    const productToEdit = products.find((p) => p.id === id);
    setNewProduct({
      name: productToEdit.name,
      price: productToEdit.price,
      description: productToEdit.description,
      image: productToEdit.image,
    });
    setEditMode(true);
    setEditProductId(id);
  };

  // Updating a product
  const handleUpdate = () => {
    const updatedProducts = products.map((product) =>
      product.id === editProductId ? { ...product, ...newProduct } : product
    );
    setProducts(updatedProducts);
    setNewProduct({ name: "", price: "", description: "", image: null });
    setEditMode(false);
    setEditProductId(null);
  };

  // Deleting a product
  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // Image upload function
  const handleImageUpload = (e) => {
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    setNewProduct({ ...newProduct, image: imageUrl });
  };

  const totalProducts = products.length;

  const viewData = {
    labels: products.map((p) => p.name),
    datasets: [
      {
        label: "Product Views",
        data: products.map((p) => p.views),
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
    ],
  };

  // Function to increase view count
  const handleIncreaseViewCount = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, views: product.views + 1 } : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Admin Dashboard</h2>

      {/* Product add or edit form */}
      <div className="mb-4">
        <input
          className="form-control mb-2"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          className="form-control mb-2"
          placeholder="Price"
          type="number"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Product Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <input
          className="form-control mb-2"
          type="file"
          onChange={handleImageUpload}
        />
        {editMode ? (
          <button className="btn btn-success" onClick={handleUpdate}>Update Product</button>
        ) : (
          <button className="btn btn-primary" onClick={handleAdd}>Add Product</button>
        )}
      </div>

      {/* Total products */}
      <div className="mb-4">
        <p>Total Products: {totalProducts}</p>
      </div>

      {/* Product view graph */}
      <div className="mb-4">
        <h4>Product View Counts</h4>
        <Line data={viewData} />
      </div>

      {/* Inspirational song */}
      <div className="mb-4">
        <h4>Inspirational :</h4>
        <p>"اگر آپ اپنے خوابوں کو حقیقت میں بدلنا چاہتے ہیں تو لگن اور ایمانداری سے کام کریں۔."</p>
        <audio controls>
          <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* Product list */}
      <ul className="list-group">
        {products.map((p) => (
          <li key={p.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{p.name} - Rs. {p.price}</span>
            <img
              src={p.image || "https://via.placeholder.com/50"} // Default image if no image
              alt={p.name}
              style={{ width: 50, height: 50, objectFit: "cover" }}
            />
            <button
              className="btn btn-info btn-sm"
              onClick={() => handleIncreaseViewCount(p.id)}
            >
              View
            </button>
            <button
              className="btn btn-warning btn-sm mr-2"
              onClick={() => handleEdit(p.id)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(p.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
