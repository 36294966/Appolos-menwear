import React, { useState } from 'react';

const PaymentFileGenerator = () => {
  const paybillNumber = '542542';
  const accountNumber = '378179';

  const [amount, setAmount] = useState('');
  const [showCard, setShowCard] = useState(false);

const handleDownload = () => {
const content = `
Payment Details
---------------
Paybill Number: ${paybillNumber}
Account Number: ${accountNumber}
Amount: ${amount || '[Enter amount here]'}
`;
const blob = new Blob([content], { type: 'text/plain' });
const url = URL.createObjectURL(blob);
const link = document.createElement('a');

    link.href = url;
    link.download = 'payment_paybill.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePurchaseClick = () => {
    setShowCard(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Generate Payment Paybill File</h1>
      
      {/* Input for amount */}
      <input
        type="text"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded w-64"
      />

      {/* Purchase button */}
      {!showCard && (
        <button
          onClick={handlePurchaseClick}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Purchase
        </button>
      )}

      {/* Show card with details after clicking purchase */}
      {showCard && (
        <div className="mt-6 w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
          <p className="mb-2">Paybill Number: {paybillNumber}</p>
          <p className="mb-2">Account Number: {accountNumber}</p>
          <p className="mb-4">Amount: {amount || '[Enter amount here]'}</p>
          
          {/* Download button */}
          <button
            onClick={handleDownload}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Download Payment File
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentFileGenerator;