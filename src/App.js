import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Users from './pages/Users';
import ModalForm from './components/ModalForm';

const App = () => {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1">
          <Header />
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/modalform" element={<ModalForm />} />
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
