import React, { useState } from 'react';
import Leather1 from '../../Assets/Jackets/jacket1.jpg';
import Leather2 from '../../Assets/Jackets/jacket2.jpg';
import Leather3 from '../../Assets/Jackets/jacket3.jpg';

// Payment Modal Component
const PaymentPopup = ({ onClose, item }) => {
  const paybillNumber = '542542';
  const accountNumber = '378179';
  const [amount, setAmount] = useState(item?.price?.replace('Ksh ', '') || '');

  const handleDownload = () => {
    const content = `
Payment Details
---------------
Item: ${item?.name}
Paybill Number: ${paybillNumber}
Account Number: ${accountNumber}
Amount: Ksh ${amount || '[Enter amount here]'}
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
        <p className="mb-2 font-semibold">Item: {item?.name}</p>
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

const Leather = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const leathers = [
    {
      id: 1,
      name: 'Leather Jacket - Black',
      image: Leather1,
      price: 'Ksh 3,500',
    },
    {
      id: 2,
      name: 'Leather Jacket - Brown',
      image: Leather2,
      price: 'Ksh 3,500',
    },
    {
      id: 3,
      name: 'Leather Jacket - Classic',
      image: Leather3,
      price: 'Ksh 3,500',
    },
  ];

  const handlePurchase = (item) => {
    setSelectedItem(item);
    setShowPayment(true);
  };

  return (
    <section className="p-10 bg-gray-100 min-h-screen relative">
      {showPayment && (
        <PaymentPopup
          onClose={() => {
            setShowPayment(false);
            setSelectedItem(null);
          }}
          item={selectedItem}
        />
      )}

      <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">Leather Jackets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leathers.map((leather) => (
          <div
            key={leather.id}
            className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="h-64 w-full flex items-center justify-center bg-gray-200">
              <img
                src={leather.image}
                alt={leather.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-5 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-900">{leather.name}</h3>
              <p className="text-lg font-semibold mb-4 text-gray-700">{leather.price}</p>
              <button
                onClick={() => handlePurchase(leather)}
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

export default Leather;

