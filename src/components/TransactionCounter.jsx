import React, { useState, useEffect } from 'react';
import './TransactionCounter.css'; // Ensure this file is properly linked

const TransactionCounter = () => {
  const [userCount, setUserCount] = useState(54025008); // Initial guess for users
  const [topCrypto, setTopCrypto] = useState('Bitcoin'); // Default to Bitcoin

  // List of some popular cryptocurrencies
  const cryptoList = ['Bitcoin', 'Ethereum'];

  useEffect(() => {
    // Function to update the user count every few seconds
    const updateCounter = () => {
      setUserCount(prevCount => prevCount + Math.floor(Math.random() * 10000) + 1000); // Increase by a random value
    };

    // Function to update the most used cryptocurrency every few seconds
    const updateTopCrypto = () => {
      const randomCrypto = cryptoList[Math.floor(Math.random() * cryptoList.length)];
      setTopCrypto(randomCrypto);
    };

    // Set intervals for user count and top cryptocurrency updates
    const userCountInterval = setInterval(updateCounter, 5000); // Update every 5 seconds
    const cryptoUpdateInterval = setInterval(updateTopCrypto, 7000); // Update cryptocurrency every 7 seconds

    return () => {
      clearInterval(userCountInterval); // Cleanup user count interval on component unmount
      clearInterval(cryptoUpdateInterval); // Cleanup cryptocurrency update interval
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="transaction-counter">
      <h2>Worldwide Crypto Transactions</h2>
      <p>{userCount.toLocaleString()} Active Users</p>
      <p>Most Used Crypto: <strong>{topCrypto}</strong></p> {/* Displaying the most used crypto */}
    </div>
  );
};

export default TransactionCounter;
