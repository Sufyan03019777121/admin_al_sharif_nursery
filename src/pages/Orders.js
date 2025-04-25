import React  from "react";
import { useState } from "react";

const Orders = () => {
    const [orders] = useState([
      { id: 'ORD001', customer: 'Ali', status: 'Pending', total: 800 },
      { id: 'ORD002', customer: 'Sara', status: 'Shipped', total: 1200 },
      { id: 'ORD003', customer: 'Sarang', status: 'Shipped', total: 1200 },
    ]);
  
    return (
      <div className="container mt-4">
        <h1 className="text-primary">Orders</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.status}</td>
                <td>Rs. {order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Orders;
  