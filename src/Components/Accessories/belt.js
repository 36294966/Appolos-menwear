import React, { useState } from 'react';
import { CheckCircle, XCircle, ShoppingCart } from 'lucide-react';

import Belt1 from '../../Assets/Accessories/belt1.jpg';
import Belt2 from '../../Assets/Accessories/belt2.jpg';
import Belt3 from '../../Assets/Accessories/belt3.jpg';
import Belt4 from '../../Assets/Accessories/belt4.jpg';
import Belt5 from '../../Assets/Accessories/belt5.jpg';
import Belt6 from '../../Assets/Accessories/belt6.jpg';

const PaymentPopup = ({ onClose, item }) => {
  const paybillNumber = '542542';
  const accountNumber = '378179';
  const [amount, setAmount] = useState(item?.price?.replace('Ksh ', '') || '');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

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
    link.download = 'belt_payment.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setPaymentSuccess(true);
    setTimeout(onClose, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-2xl w-[95%] max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2 mb-4">
          {paymentSuccess ? (
            <>
              <CheckCircle className="w-8 h-8 text-green-500" />
              Payment Verified!
            </>
          ) : (
            'Payment Details'
          )}
        </h2>

        {!paymentSuccess ? (
          <>
            {/* Payment info styled similar to official.js */}
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                <span className="font-medium">Paybill:</span>
                <span className="font-mono text-blue-600 font-bold">{paybillNumber}</span>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                <span className="font-medium">Account:</span>
                <span className="font-mono text-blue-600 font-bold">{accountNumber}</span>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Price:</span>
                  <span className="font-mono text-green-600 font-bold">Ksh {item?.price.replace('Ksh ', '')}</span>
                </div>
              </div>
              <input
                type="number"
                placeholder="Enter amount (Ksh)"
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleDownload}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                PAY NOW
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-black py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              >
                <XCircle className="w-5 h-5" />
                Close
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-green-600">
            <p>Receipt downloaded successfully</p>
            <p className="text-sm mt-2">Closing automatically...</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Belt = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const belts = [
    { id: 1, image: Belt1, name: 'Premium Leather Belt', price: 'Ksh 2,000' },
    { id: 2, image: Belt2, name: 'Premium Black Belt', price: 'Ksh 2,000' },
    { id: 3, image: Belt3, name: 'Premium Leather Belt', price: 'Ksh 2,000' },
    { id: 4, image: Belt4, name: 'Premium Leather Belt', price: 'Ksh 2,000' },
    { id: 5, image: Belt5, name: 'Premium Leather Belt', price: 'Ksh 2,000' },
    { id: 6, image: Belt6, name: 'Premium Leather Belt', price: 'Ksh 2,000' },
  ];

  const handlePurchase = (item) => {
    setSelectedItem(item);
    setShowPayment(true);
  };

  const handleAddToCart = (item) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = {
      ...item,
      price: parseFloat(item.price.replace('Ksh ', '').replace(',', '')),
    };
    localStorage.setItem('cart', JSON.stringify([...storedCart, newItem]));
    window.dispatchEvent(new Event('storage'));
    alert(`${item.name} added to cart`);
  };

  return (
    <section className="p-6 sm:p-10 bg-gray-50 min-h-screen">
      {showPayment && (
        <PaymentPopup
          onClose={() => {
            setShowPayment(false);
            setSelectedItem(null);
          }}
          item={selectedItem}
        />
      )}

      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Professional Belts Collection
        </h1>
        <p className="text-blue-800 font-bold text-xl">
          High-quality leather belts for complete professional attire
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {belts.map((belt) => (
          <article
            key={belt.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-square bg-gray-100 p-5 flex items-center justify-center">
              <img
                src={belt.image}
                alt={belt.name}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5 text-center space-y-4">
              <h3 className="text-xl font-bold text-gray-900">{belt.name}</h3>
              <p className="text-blue-600 font-bold text-xl">{belt.price}</p>
              {/* Purchase Button */}
              <button
                onClick={() => handlePurchase(belt)}
                className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Purchase Now
              </button>
              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(belt)}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Belt;