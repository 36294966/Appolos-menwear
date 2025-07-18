import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Cassual1 from '../../Assets/Cassual/cassual1.jpg';
import Cassual2 from '../../Assets/Cassual/cassual2.jpg';
import Cassual3 from '../../Assets/Cassual/cassual3.jpg';

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

const Cassual = () => {
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);

  const casualShirts = [
    {
      id: 1,
      name: 'Men Casual Shirt',
      image: Cassual1,
      price: 'Ksh 1,700',
    },
    {
      id: 2,
      name: 'Men Casual Shirt',
      image: Cassual2,
      price: 'Ksh 1,700',
    },
    {
      id: 3,
      name: 'Men Casual Shirt',
      image: Cassual3,
      price: 'Ksh 1,700',
    },
  ];

  return (
    <section className="p-10 bg-gray-100 min-h-screen relative">
      {showPayment && <PaymentPopup onClose={() => setShowPayment(false)} />}

      <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">Casual Shirts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {casualShirts.map((shirt) => (
          <div
            key={shirt.id}
            className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="h-64 w-full flex items-center justify-center bg-gray-200">
              <img
                src={shirt.image}
                alt={shirt.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-5 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{shirt.name}</h3>
              <p className="text-lg text-gray-700 font-semibold">{shirt.price}</p>
              <button
                onClick={() => setShowPayment(true)}
                className="mt-4 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
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

export default Cassual;
