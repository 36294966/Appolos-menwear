import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

// Main jeans images
import Jean1 from '../../Assets/Jeans/jean1.jpeg';
import Jean2 from '../../Assets/Jeans/jean2.jpeg';
import Jean3 from '../../Assets/Jeans/jean3.jpeg';
import Jean4 from '../../Assets/Jeans/jean4.jpg';
import Jean5 from '../../Assets/Jeans/jean5.jpg';
import Jean6 from '../../Assets/Jeans/jean6.jpg';
import Jean7 from '../../Assets/Jeans/jean7.jpg';
import Jean8 from '../../Assets/Jeans/jean8.jpg';
import Jean9 from '../../Assets/Jeans/jean9.jpg';
import Jean10 from '../../Assets/Jeans/jean10.jpg';
import Jean11 from '../../Assets/Jeans/jean11.jpg';
import Jean12 from '../../Assets/Jeans/jean12.jpg';

const PaymentPopup = ({ onClose }) => {
  const paybillNumber = '542542';
  const accountNumber = '378179';
  const [amount, setAmount] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

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
              Payment Complete!
            </>
          ) : (
            'Payment Details'
          )}
        </h2>

        {!paymentSuccess ? (
          <>
            <p className="mb-2">Paybill Number: {paybillNumber}</p>
            <p className="mb-2">Account Number: {accountNumber}</p>
            <input
              type="text"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <div className="space-y-2">
              <button
                onClick={handleDownload}
                className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                PAY NOW
              </button>
              <button
                onClick={onClose}
                className="w-full bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded flex items-center justify-center gap-2"
              >
                <XCircle className="w-5 h-5" />
                Close
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-green-600 text-sm">
            Receipt downloaded successfully
          </p>
        )}
      </div>
    </div>
  );
};

const Jeans = () => {
  const [showPayment, setShowPayment] = useState(false);

  const jeansProducts = [
    { id: 1, image: Jean1, price: 'Ksh 2,000' },
    { id: 2, image: Jean2, price: 'Ksh 2,000' },
    { id: 3, image: Jean3, price: 'Ksh 2,000' },
    { id: 4, image: Jean4, price: 'Ksh 2,000' },
    { id: 5, image: Jean5, price: 'Ksh 2,000' },
    { id: 6, image: Jean6, price: 'Ksh 2,000' },
    { id: 7, image: Jean7, price: 'Ksh 2,000' },
    { id: 8, image: Jean8, price: 'Ksh 2,000' },
    { id: 9, image: Jean9, price: 'Ksh 2,000' },
    { id: 10, image: Jean10, price: 'Ksh 2,000' },
    { id: 11, image: Jean11, price: 'Ksh 2,000' },
    { id: 12, image: Jean12, price: 'Ksh 2,000' }
  ];

  return (
    <section className="p-10 bg-gray-100 min-h-screen relative">
      {showPayment && <PaymentPopup onClose={() => setShowPayment(false)} />}

      <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">
        Classic Jeans Collection
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jeansProducts.map((jean) => (
          <div
            key={jean.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="h-80 p-4 flex items-center justify-center bg-gray-50">
              <img
                src={jean.image}
                alt="Classic Jean"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="p-6 text-center space-y-4">
              <h3 className="text-xl font-bold">Classic Jean</h3>
              <p className="text-lg font-bold text-blue-600">{jean.price}</p>
              <button
                onClick={() => setShowPayment(true)}
                className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
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
