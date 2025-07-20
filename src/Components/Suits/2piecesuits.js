import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import TwoPiece1 from '../../Assets/Suits/twopiece1.jpg';
import TwoPiece2 from '../../Assets/Suits/twopiece2.jpg';
import TwoPiece3 from '../../Assets/Suits/twopiece3.jpg';
import Photo4 from '../../Assets/Appolo/photo4.jpg';
import Photo5 from '../../Assets/Appolo/photo5.jpg';
import Photo6 from '../../Assets/Appolo/photo6.jpg';

const PaymentFileGenerator = ({ item, onClose }) => {
  const paybillNumber = '542542';
  const accountNumber = '378179';
  const [amount, setAmount] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleDownload = () => {
    const content = `
Payment Details
---------------
Item: Two Piece Suit
Paybill: ${paybillNumber}
Account: ${accountNumber}
Amount: ${amount || '[Enter amount here]'}
Standard Price: ${item?.price || 'Ksh 11,000'}
`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'two_piece_payment.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setPaymentSuccess(true);
    setTimeout(onClose, 1500);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          {paymentSuccess ? (
            <>
              <CheckCircle className="w-6 h-6 text-green-500" />
              Payment Verified!
            </>
          ) : (
            'Two Piece Suit Purchase'
          )}
        </h2>

        {!paymentSuccess ? (
          <>
            <div className="mb-4 space-y-2">
              <p className="text-sm font-medium">Paybill: {paybillNumber}</p>
              <p className="text-sm font-medium">Account: {accountNumber}</p>
              <p className="text-green-600 font-bold">Price: {item?.price || 'Ksh 11,000'}</p>
            </div>
            <input
              type="text"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full mb-4 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="flex flex-col gap-2">
              <button
                onClick={handleDownload}
                className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Confirm Payment
              </button>
              <button
                onClick={onClose}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
              >
                <XCircle className="w-5 h-5" />
                Cancel
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-green-600 text-sm font-medium">
            Payment details downloaded successfully
          </p>
        )}
      </div>
    </div>
  );
};

const TwoPieceSuits = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedSuit, setSelectedSuit] = useState(null);

  const twoPieceSuits = [
    { id: 1, image: TwoPiece1, price: 'Ksh 11,000' },
    { id: 2, image: TwoPiece2, price: 'Ksh 11,000' },
    { id: 3, image: TwoPiece3, price: 'Ksh 11,000' }
  ];

  const photos = [Photo4, Photo6, Photo5];

  return (
    <section className="p-10 bg-gray-50 min-h-screen relative">
      {showPayment && (
        <PaymentFileGenerator 
          item={selectedSuit}
          onClose={() => {
            setShowPayment(false);
            setSelectedSuit(null);
          }}
        />
      )}

      <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">
        Premium Two Piece Suits
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {twoPieceSuits.map((suit) => (
          <div
            key={suit.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden group"
          >
            <div className="h-64 w-full flex items-center justify-center bg-gray-100 p-4">
              <img
                src={suit.image}
                alt="Two Piece Suit"
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Two Piece Suit</h3>
              <p className="text-lg font-bold mb-4 text-blue-600">{suit.price}</p>
              <button
                onClick={() => {
                  setSelectedSuit(suit);
                  setShowPayment(true);
                }}
                className="mt-2 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-full transition-colors flex items-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Purchase Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {photos.map((photo, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-[1.02] duration-300"
          >
            <div className="h-64 w-full flex items-center justify-center bg-gray-100 p-2">
              <img 
                src={photo} 
                alt="Style Inspiration" 
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TwoPieceSuits;