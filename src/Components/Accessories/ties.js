import React, { useState } from 'react';

// Corrected image paths with consistent directory naming
import Tie1 from '../../Assets/Ties/tie1.jpg';
import Tie2 from '../../Assets/Ties/tie2.jpg';
import Tie3 from '../../Assets/Ties/tie3.jpg';
import Tie4 from '../../Assets/Ties/tie4.jpg';
import Tie5 from '../../Assets/Ties/tie5.jpg';
import Tie6 from '../../Assets/Ties/tie6.jpg';
import Tie7 from '../../Assets/Ties/tie7.jpg';
import Tie8 from '../../Assets/Ties/tie8.jpg';
import Tie9 from '../../Assets/Ties/tie9.jpg';

const PaymentPopup = ({ onClose }) => {
  const [amount, setAmount] = useState('');
  const paymentDetails = {
    paybill: '542542',
    account: '378179'
  };

  const handlePaymentFile = () => {
    const template = `Payment Instructions:\nPaybill: ${paymentDetails.paybill}\nAccount: ${paymentDetails.account}\nAmount: ${amount || '____'}`;
    const file = new Blob([template], { type: 'text/plain' });
    const fileURL = URL.createObjectURL(file);
    
    const tempLink = document.createElement('a');
    tempLink.href = fileURL;
    tempLink.download = 'tie_payment.txt';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    URL.revokeObjectURL(fileURL);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-2xl w-[95%] max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Complete Purchase</h2>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <span className="font-medium">Paybill:</span>
            <span className="font-mono text-blue-600 font-bold">{paymentDetails.paybill}</span>
          </div>
          
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <span className="font-medium">Account:</span>
            <span className="font-mono text-blue-600 font-bold">{paymentDetails.account}</span>
          </div>
          
          <input
            type="number"
            placeholder="Enter amount (Ksh)"
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={handlePaymentFile}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold transition-all duration-200 transform hover:scale-[1.02]"
          >
            Download Instructions
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 rounded-lg font-bold transition-all duration-200 transform hover:scale-[1.02]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Ties = () => {
  const [showPayment, setShowPayment] = useState(false);

  const tiesCollection = [
    { id: 1, image: Tie1, name: 'Silk Luxury Black', price: 'Ksh 900' },
    { id: 2, image: Tie2, name: 'Vintage Brown Polyester', price: 'Ksh 900' },
    { id: 3, image: Tie3, name: 'Classic Navy Formal', price: 'Ksh 900' },
    { id: 4, image: Tie4, name: 'Burgundy Slim Fit', price: 'Ksh 900' },
    { id: 5, image: Tie5, name: 'Geometric Pattern Blue', price: 'Ksh 900' },
    { id: 6, image: Tie6, name: 'Silver Striped Modern', price: 'Ksh 900' },
    { id: 7, image: Tie7, name: 'Floral Silk Design', price: 'Ksh 900' },
    { id: 8, image: Tie8, name: 'Executive Charcoal', price: 'Ksh 900' },
    { id: 9, image: Tie9, name: 'Double Windsor Red', price: 'Ksh 900' }
  ];

  return (
    <section className="p-6 sm:p-10 bg-gray-50 min-h-screen">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Premium Neckwear Collection
        </h1>
        <p className="text-gray-600 text-lg">
          Elevate your professional appearance with our curated ties
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tiesCollection.map((tie) => (
          <article 
            key={tie.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-square bg-gray-100 p-5 flex items-center justify-center">
              <img
                src={tie.image}
                alt={tie.name}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5 text-center space-y-4">
              <h3 className="text-xl font-bold text-gray-900">{tie.name}</h3>
              <p className="text-blue-600 font-bold text-xl">{tie.price}</p>
              <button
                onClick={() => setShowPayment(true)}
                className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Purchase Now
              </button>
            </div>
          </article>
        ))}
      </div>

      {showPayment && <PaymentPopup onClose={() => setShowPayment(false)} />}
    </section>
  );
};

export default Ties;
