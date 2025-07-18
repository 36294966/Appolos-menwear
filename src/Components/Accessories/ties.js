import React, { useState } from 'react';
import Tie1 from '../../Assets/Ties/tie1.jpg';
import Tie2 from '../../Assets/Ties/tie2.jpg';
import Tie3 from '../../Assets/Ties/tie3.jpg';

// Payment Popup Component
const PaymentPopup = ({ onClose }) => {
  const paybillNumber = '542542';
  const accountNumber = '378179';
  const [amount, setAmount] = useState('');

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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80">
        <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
        <p className="mb-2">Paybill Number: {paybillNumber}</p>
        <p className="mb-2">Account Number: {accountNumber}</p>
        <input
          type="text"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleDownload}
          className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded mb-2"
        >
          Download Payment File
        </button>
        <button
          onClick={onClose}
          className="w-full bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Ties = () => {
  const [showPayment, setShowPayment] = useState(false);

  const ties = [
    {
      id: 1,
      name: 'Silk Tie - Black',
      image: Tie1,
      price: 'Ksh 900',
    },
    {
      id: 2,
      name: 'Polyester Tie - Brown',
      image: Tie2,
      price: 'Ksh 900',
    },
    {
      id: 3,
      name: 'Formal Tie - Classic',
      image: Tie3,
      price: 'Ksh 900',
    },
  ];

  return (
    <section className="p-10 bg-gray-100 min-h-screen relative">
      {showPayment && <PaymentPopup onClose={() => setShowPayment(false)} />}

      <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">Ties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ties.map((tie) => (
          <div
            key={tie.id}
            className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="h-64 w-full flex items-center justify-center bg-gray-200">
              <img
                src={tie.image}
                alt={tie.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="p-5 text-center flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 text-gray-900">{tie.name}</h3>
              <p className="text-lg font-bold mb-4 text-gray-700">{tie.price}</p>
              <button
                onClick={() => setShowPayment(true)}
                className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
              >
                Purchase
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ties;
