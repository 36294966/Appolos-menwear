import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Official1 from '../../Assets/Official/official1.jpg';
import Official2 from '../../Assets/Official/official2.jpg';
import Official3 from '../../Assets/Official/official3.jpg';
import Official4 from '../../Assets/Official/official4.jpg';
import Official5 from '../../Assets/Official/official5.jpg';
import Official6 from '../../Assets/Official/official6.jpg';

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

const Official = () => {
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);

  const officialShirts = [
    {
      id: 1,
      name: 'Formal White Shirt',
      image: Official1,
      price: 'Ksh 1,800',
    },
    {
      id: 2,
      name: 'Classic Blue Shirt',
      image: Official2,
      price: 'Ksh 1,800',
    },
    {
      id: 3,
      name: 'Striped Office Shirt',
      image: Official3,
      price: 'Ksh 1,800',
    },
    {
      id: 4,
      name: 'Office Shirt',
      image: Official4,
      price: 'Ksh 1,800',
    },
    {
      id: 5,
      name: 'Office Shirt',
      image: Official5,
      price: 'Ksh 1,800',
    },
    {
      id: 6,
      name: 'Office Shirt',
      image: Official6,
      price: 'Ksh 1,800',
    },
  ];

  return (
    <section className="p-10 bg-gray-100 min-h-screen relative">
      {showPayment && <PaymentPopup onClose={() => setShowPayment(false)} />}

      <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">Official Shirts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {officialShirts.map((shirt) => (
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
            <div className="p-5 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-900">{shirt.name}</h3>
              <p className="text-lg font-bold text-gray-700">{shirt.price}</p>
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

export default Official;
