import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-success text-white p-4" style={{ height: '100vh' }}>
      <h2 className="text-center mb-5">Admin Panel</h2>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link text-white">Dashboard</Link>
          <Link to="/modalform" className="nav-link text-white">ModalForm</Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link text-white">Products</Link>
        </li>
        <li className="nav-item">
          <Link to="/orders" className="nav-link text-white">Orders</Link>
        </li>
        <li className="nav-item">
          <Link to="/users" className="nav-link text-white">Users</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
