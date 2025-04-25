import React  from "react";
import { useState } from "react";

const Users = () => {
    const [users] = useState([
      { id: 1, name: 'Admin', email: 'admin@example.com', status: 'Active' },
      { id: 2, name: 'User1', email: 'user1@example.com', status: 'Blocked' },
    ]);
  
    return (
      <div className="container mt-4">
        <h1 className="text-primary">Users</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Users;
  