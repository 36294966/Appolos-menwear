import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Image imports
import ThreePiece1 from '../../Assets/Suits/threepiece1.jpg';
import ThreePiece2 from '../../Assets/Suits/threepiece2.jpg';
import ThreePiece3 from '../../Assets/Suits/threepiece3.jpg';
import Threepiece4 from '../../Assets/Suits/threepiece4.jpg';
import Threepiece5 from '../../Assets/Suits/threepiece5.jpg';
import Threepiece6 from '../../Assets/Suits/threepiece6.jpg';
import Threepiece7 from '../../Assets/Suits/threepiece7.jpg';
import Threepiece8 from '../../Assets/Suits/threepiece8.jpg';
import Threepiece9 from '../../Assets/Suits/threepiece9.jpg';

import Photo4 from '../../Assets/Appolo/photo4.jpg';
import Photo5 from '../../Assets/Appolo/photo5.jpg';
import Photo6 from '../../Assets/Appolo/photo6.jpg';

const PaymentFileGenerator = ({ onClose }) => {
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

const ThreePieceSuits = () => {
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);

  const threePieceSuits = [
    { id: 1, image: ThreePiece1, price: 'Ksh 13,000' },
    { id: 2, image: ThreePiece2, price: 'Ksh 13,000' },
    { id: 3, image: ThreePiece3, price: 'Ksh 13,000' },
    { id: 4, image: Threepiece4, price: 'Ksh 13,000' },
    { id: 5, image: Threepiece5, price: 'Ksh 13,000' },
    { id: 6, image: Threepiece6, price: 'Ksh 13,000' },
    { id: 7, image: Threepiece7, price: 'Ksh 13,000' },
    { id: 8, image: Threepiece8, price: 'Ksh 13,000' },
    { id: 9, image: Threepiece9, price: 'Ksh 13,000' }
  ];

  const photos = [Photo4, Photo5, Photo6];

  return (
    <section className="p-10 bg-gray-100 min-h-screen relative">
      {showPayment && <PaymentFileGenerator onClose={() => setShowPayment(false)} />}

      {/* Image Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg aspect-square"
          >
            <img
              src={photo}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Products Section */}
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">
        Three Piece Suits Collection
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {threePieceSuits.map((suit) => (
          <div
            key={suit.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="h-96 p-4 flex items-center justify-center bg-gray-50">
              <img
                src={suit.image}
                alt="Three Piece Suit"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="p-6 text-center space-y-4">
              <h3 className="text-xl font-bold">Three Piece Suit</h3>
              <p className="text-lg font-bold text-blue-600">{suit.price}</p>
              <button
                onClick={() => setShowPayment(true)}
                className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-colors"
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

export default ThreePieceSuits;


