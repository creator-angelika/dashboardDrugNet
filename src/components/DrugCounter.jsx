import React, { useState, useEffect } from 'react';
import './DrugCounter.css'; // Ensure you style it appropriately

const DrugCasesCounter = () => {
  const [caseCount, setCaseCount] = useState(1025); // Initial number of drug cases

  useEffect(() => {
    const updateCaseCount = () => {
      setCaseCount(prevCount => prevCount + Math.floor(Math.random() * 10)); // Randomly increase the count
    };

    const caseCountInterval = setInterval(updateCaseCount, 5000); // Update every 5 seconds

    return () => clearInterval(caseCountInterval); // Cleanup on component unmount
  }, []);

  return (
    <div className="drug-cases-counter">
      <h2>Total Drug Cases Caught</h2>
      <p>{caseCount.toLocaleString()} Cases</p>
    </div>
  );
};

export default DrugCasesCounter;
