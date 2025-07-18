import React, { useState } from 'react';
import Jean1 from '../../Assets/Jeans/jean1.jpeg';
import Jean2 from '../../Assets/Jeans/jean2.jpeg';
import Jean3 from '../../Assets/Jeans/jean3.jpeg';
import Jean4 from '../../Assets/Jeans/jean4.jpg';
import Jean5 from '../../Assets/Jeans/jean5.jpg';
import Jean6 from '../../Assets/Jeans/jean6.jpg';

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

const Jeans = () => {
  const [showPayment, setShowPayment] = useState(false);

  const jeansList = [
    {
      id: 1,
      name: 'Classic Jeans',
      image: Jean1,
      price: 'Ksh 2,000',
    },
    {
      id: 2,
      name: 'Fit Jeans',
      image: Jean2,
      price: 'Ksh 2,000',
    },
    {
      id: 3,
      name: 'Slim Fit Jeans',
      image: Jean3,
      price: 'Ksh 2,000',
    },
    {
      id: 4,
      name: 'Relaxed Jeans',
      image: Jean4,
      price: 'Ksh 2,000',
    },
    {
      id: 5,
      name: 'Bootcut Jeans',
      image: Jean5,
      price: 'Ksh 2,000',
    },
    {
      id: 6,
      name: 'Skinny Jeans',
      image: Jean6,
      price: 'Ksh 2,000',
    },
  ];

  return (
    <section className="p-10 bg-gray-100 min-h-screen relative">
      {showPayment && <PaymentPopup onClose={() => setShowPayment(false)} />}

      <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">Jeans</h2>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-8">
        {jeansList.map((jean) => (
          <div
            key={jean.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="h-80 w-full flex items-center justify-center bg-gray-200">
              <img
                src={jean.image}
                alt={jean.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-bold mb-2 text-gray-900">{jean.name}</h3>
              <p className="text-lg font-bold mb-4 text-gray-700">{jean.price}</p>
              <button
                onClick={() => setShowPayment(true)}
                className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded w-full"
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

export default Jeans;
