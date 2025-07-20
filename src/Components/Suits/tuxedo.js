import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle } from 'lucide-react';
import Tuxedo1 from '../../Assets/Suits/tuxedo1.jpg';
import Tuxedo2 from '../../Assets/Suits/tuxedo2.jpg';
import Tuxedo3 from '../../Assets/Suits/tuxedo3.jpg';
import Photo4 from '../../Assets/Appolo/photo4.jpg';
import Photo5 from '../../Assets/Appolo/photo5.jpg';
import Photo6 from '../../Assets/Appolo/photo6.jpg';

const PaymentPopup = ({ onClose }) => {
  const paybillNumber = '542542';
  const accountNumber = '378179';
  const [amount, setAmount] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleDownload = () => {
    const content = `
Payment Details
---------------
Item: Tuxedo Dinner
Paybill: ${paybillNumber}
Account: ${accountNumber}
Amount: ${amount || '[Enter amount here]'}
Standard Price: Ksh 12,000
`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'tuxedo_payment.txt';
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
            'Purchase Tuxedo Dinner'
          )}
        </h2>

        {!paymentSuccess ? (
          <>
            <div className="mb-4 space-y-2">
              <p className="text-sm font-medium">Paybill: {paybillNumber}</p>
              <p className="text-sm font-medium">Account: {accountNumber}</p>
              <p className="text-green-600 font-bold">Price: Ksh 12,000</p>
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

const Tuxedo = () => {
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);

  const tuxedoSuits = [
    { id: 1, image: Tuxedo1 },
    { id: 2, image: Tuxedo2 },
    { id: 3, image: Tuxedo3 }
  ];

  const photos = [Photo4, Photo5, Photo6];

  return (
    <section className="p-10 bg-gray-50 min-h-screen relative">
      {showPayment && <PaymentPopup onClose={() => setShowPayment(false)} />}

      <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">
        Tuxedo Dinner Collection
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {tuxedoSuits.map((suit) => (
          <div
            key={suit.id}
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="h-64 w-full bg-gray-100 p-4 flex items-center justify-center">
              <img
                src={suit.image}
                alt="Tuxedo Dinner"
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Tuxedo Dinner</h3>
              <p className="text-lg font-semibold mb-4 text-blue-600">Ksh 12,000</p>
              <button
                onClick={() => setShowPayment(true)}
                className="mt-2 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-full transition-colors duration-200 flex items-center justify-center gap-2 mx-auto"
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
            <div className="h-72 w-full bg-gray-100 p-2 flex items-center justify-center">
              <img
                src={photo}
                alt={`Tuxedo Style ${index + 1}`}
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tuxedo;