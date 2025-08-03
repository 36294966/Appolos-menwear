import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ShoppingCart } from 'lucide-react';

// Import socks images
import Socks1 from '../../Assets/Accessories/socks1.jpg';
import Socks2 from '../../Assets/Accessories/socks2.jpg';
import Socks3 from '../../Assets/Accessories/socks3.jpg';

const PaymentPopup = ({ item, onClose }) => {
  const [amount, setAmount] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const paymentDetails = {
    paybill: '542542',
    account: '378179'
  };

  const generatePaymentFile = () => {
    const content = `
Payment Details
---------------
Item: ${item?.name}
Paybill Number: ${paymentDetails.paybill}
Account Number: ${paymentDetails.account}
Amount: Ksh ${amount || '________'}
`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `sock_payment_${item?.id}.txt`;
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
              Payment Verified!
            </>
          ) : (
            `${item?.name} Purchase`
          )}
        </h2>

        {!paymentSuccess ? (
          <>
            {/* Payment details similar to official.js */}
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                <span className="font-medium">Paybill:</span>
                <span className="font-mono text-blue-600 font-bold">{paymentDetails.paybill}</span>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                <span className="font-medium">Account:</span>
                <span className="font-mono text-blue-600 font-bold">{paymentDetails.account}</span>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Standard Price:</span>
                  <span className="font-mono text-green-600 font-bold">Ksh {item?.price?.toLocaleString()}</span>
                </div>
              </div>
              <input
                type="number"
                placeholder="Enter amount (Ksh)"
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min={item?.price}
              />
            </div>
            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button
                onClick={generatePaymentFile}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Confirm Payment
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
              >
                <XCircle className="w-5 h-5" />
                Cancel
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-green-600">
            <p>Transaction receipt downloaded successfully</p>
            <p className="text-sm text-gray-500 mt-2">Closing automatically...</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Socks = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  // Sync cart count with localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(storedCart.length);
    };
    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    return () => window.removeEventListener('storage', updateCartCount);
  }, []);

  const socksItems = [
    { id: 1, name: 'Comfortable Cotton Socks - White', image: Socks1, price: 300 },
    { id: 2, name: 'Formal Dress Socks - Black', image: Socks2, price: 300 },
    { id: 3, name: 'Colorful Crew Socks', image: Socks3, price: 300 },
  ];

  const handleAddToCart = (item) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = {
      ...item,
      addedAt: new Date().toISOString()
    };
    const updatedCart = [...storedCart, newItem];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <section className="p-6 sm:p-10 bg-gray-50 min-h-screen">
      {/* Payment Popup */}
      {showPayment && (
        <PaymentPopup
          onClose={() => {
            setShowPayment(false);
            setSelectedItem(null);
          }}
          item={selectedItem}
        />
      )}

      {/* Cart Indicator */}
      <div className="fixed top-4 right-4 z-40">
        <button
          className="relative bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition"
          onClick={() => alert('Implement cart modal similar to belt.js')}
        >
          <ShoppingCart className="w-6 h-6 text-gray-700" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Premium Socks Collection
        </h1>
        <p className="text-blue-800 font-bold text-xl">
          High-quality socks for ultimate comfort and style
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {socksItems.map((sock) => (
          <article
            key={sock.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-square bg-gray-100 p-5 flex items-center justify-center">
              <img
                src={sock.image}
                alt={sock.name}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5 text-center space-y-4">
              <h3 className="text-xl font-bold text-gray-900">{sock.name}</h3>
              <p className="text-blue-600 font-bold text-xl">Ksh {sock.price}</p>
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setSelectedItem(sock);
                    setShowPayment(true);
                  }}
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Purchase Now
                </button>
                <button
                  onClick={() => {
                    handleAddToCart(sock);
                    alert(`${sock.name} added to cart`);
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Socks;