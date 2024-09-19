import React from 'react';
import AdminPanel from './components/AdminPanel';
import './App.css';
import MainGraph from './components/MainGraph';
import TransactionCounter from './components/TransactionCounter'; // Import TransactionCounter

const App = () => {
  return (
    <div className="app-container">
      <AdminPanel />
      <div className="dashboard">
        <MainGraph />
        <TransactionCounter />
      </div>
    </div>
  );
};

export default App;
