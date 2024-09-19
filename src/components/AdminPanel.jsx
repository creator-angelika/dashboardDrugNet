import React from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <div className="user-info">
        <img src="user.jpg" alt="User Logo" className="user-logo" />
        <p className="user-greeting">Hi Admin</p>
      </div>
      <ul>
        <li>Dashboard</li>
        <li>Settings</li>
        <li>Notifications</li>
        <li>Users</li>
        <li>Reports</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default AdminPanel;
