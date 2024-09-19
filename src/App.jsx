import React from 'react';
import AdminPanel from './components/AdminPanel';
import './App.css';
import MainGraph from './components/MainGraph';
import TransactionCounter from './components/TransactionCounter';
import SmallCharts from './components/SmallCharts';
import DrugCasesCounter from './components/DrugCounter';

const App = () => {
  return (
    <div className="app-container">
      <AdminPanel />
      <div className='grid'>
        <div className="dashboard">
          <MainGraph />
        </div>
        <div className="transaction-section">
          <div className="transaction-counter-wrapper">
            <TransactionCounter />
          </div>
          <div className="transaction-counter-wrapper">
            <DrugCasesCounter />
          </div>
        </div>
        <div className="dashdown">
          <SmallCharts />
          <SmallCharts />
          <SmallCharts />
          <SmallCharts />
        </div>
      </div>
    </div>
  );
};

export default App;
