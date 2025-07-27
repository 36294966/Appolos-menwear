import React, { useState } from 'react';
import { CheckCircle, XCircle, ShoppingCart } from 'lucide-react';

import Belt1 from '../../Assets/Accessories/belt1.jpg';
import Belt2 from '../../Assets/Accessories/belt2.jpg';
import Belt3 from '../../Assets/Accessories/belt3.jpg';
import Belt4 from '../../Assets/Accessories/belt4.jpg';
import Belt5 from '../../Assets/Accessories/belt5.jpg';
import Belt6 from '../../Assets/Accessories/belt6.jpg';

const PaymentPopup = ({ onClose, item }) => {
  const [amount, setAmount] = useState(item?.price?.replace('Ksh ', '') || '');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const paymentDetails = {
    paybill: '542542',
    account: '378179'
  };

  const generatePaymentFile = () => {
    const content = `Payment Instructions:
Item: ${item?.name}
Paybill: ${paymentDetails.paybill}
Account: ${paymentDetails.account}
Amount: Ksh ${amount || '________'}`;
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
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          {paymentSuccess ? (
            <>
              <CheckCircle className="w-8 h-8 text-green-500" />
              Payment Confirmed!
            </>
          ) : (
            'Complete Purchase'
          )}
        </h2>

        {!paymentSuccess ? (
          <>
            <div className="space-y-4">
              <p className="font-semibold text-lg text-center">{item?.name}</p>
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
                onClick={generatePaymentFile}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                PAY NOW
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 rounded-lg font-bold transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <XCircle className="w-5 h-5" />
                Close
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-green-600 font-medium">
            Payment instructions downloaded successfully
          </p>
        )}
      </div>
    </div>
  );
};

const Belt = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const belts = [
    { id: 1, image: Belt1, name: 'Premium Leather Belt', price: 'Ksh 2,000' },
    { id: 2, image: Belt2, name: 'Premium Black Belt', price: 'Ksh 2,000' },
    { id: 3, image: Belt3, name: 'Premium Leather Belt', price: 'Ksh 2,000' },
    { id: 4, image: Belt4, name: 'Premium Leather Belt', price: 'Ksh 2,000' },
    { id: 5, image: Belt5, name: 'Premium Leather Belt', price: 'Ksh 2,000' },
    { id: 6, image: Belt6, name: 'Premium Leather Belt', price: 'Ksh 2,000' }
  ];

  const handlePurchase = (item) => {
    setSelectedItem(item);
    setShowPayment(true);
  };

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    alert(`${item.name} added to cart`);
  };

  return (
    <section className="p-6 sm:p-10 bg-gray-50 min-h-screen">
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
              <button
                onClick={() => handlePurchase(belt)}
                className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Purchase Now
              </button>
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

      {showPayment && selectedItem && (
        <PaymentPopup
          onClose={() => {
            setShowPayment(false);
            setSelectedItem(null);
          }}
          item={selectedItem}
        />
      )}
    </section>
  );
};

export default Belt;
