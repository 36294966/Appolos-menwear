import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ShoppingCart } from 'lucide-react';
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
import Jean13 from '../../Assets/Jeans/jean13.jpg';
import Jean14 from '../../Assets/Jeans/jean14.jpg';
import Jean15 from '../../Assets/Jeans/jean15.jpg';
import Jean16 from '../../Assets/Jeans/jean16.jpg';

const PaymentPopup = ({ onClose, item }) => {
  const paybillNumber = '542542';
  const accountNumber = '378179';
  const [amount, setAmount] = useState(item?.price || '');
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
    link.download = 'jeans_payment.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setPaymentSuccess(true);
    setTimeout(onClose, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-6 sm:p-8 rounded-2xl w-[95%] max-w-md space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
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
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-gray-50 p-3 sm:p-4 rounded-lg">
                <span className="font-medium text-sm sm:text-base">Paybill:</span>
                <span className="font-mono text-blue-600 font-bold">{paybillNumber}</span>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-3 sm:p-4 rounded-lg">
                <span className="font-medium text-sm sm:text-base">Account:</span>
                <span className="font-mono text-blue-600 font-bold">{accountNumber}</span>
              </div>
              <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm sm:text-base">Price:</span>
                  <span className="font-mono text-green-600 font-bold">Ksh {item?.price}</span>
                </div>
              </div>
              <input
                type="number"
                placeholder="Enter amount (Ksh)"
                className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="flex gap-3 sm:gap-4 mt-4">
              <button
                onClick={handleDownload}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                PAY NOW
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-black py-2 sm:py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <XCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                Close
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-green-600">
            <p>Receipt downloaded successfully</p>
            <p className="text-sm sm:text-base mt-2">Closing automatically...</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Jeans = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const updateCart = () => {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(storedCart.length);
    };
    updateCart();
    window.addEventListener('storage', updateCart);
    return () => window.removeEventListener('storage', updateCart);
  }, []);

  const jeansProducts = [
    { id: 1, image: Jean1, name: 'Slim Fit jean ⭐⭐⭐⭐⭐', price: 2000 },
    { id: 2, image: Jean2, name: 'Vintage Jean ⭐⭐⭐⭐⭐', price: 2000 },
    { id: 3, image: Jean3, name: 'Ripped Skinny Jeans ⭐⭐⭐⭐⭐', price: 2000 },
    { id: 4, image: Jean4, name: 'Classic Straight Leg ⭐⭐⭐⭐⭐', price: 2000 },
    { id: 5, image: Jean5, name: 'High Super Jean ⭐⭐⭐⭐⭐', price: 2000 },
    { id: 6, image: Jean6, name: 'Black Stretch Jean ⭐⭐⭐⭐⭐', price: 2000 },
    { id: 7, image: Jean7, name: 'Classic Jean ⭐⭐⭐⭐⭐', price: 2000 },
    { id: 8, image: Jean8, name: 'Tapered Cargo Jeans ⭐⭐⭐⭐⭐', price: 2000 },
    { id: 9, image: Jean9, name: 'Flare Jeans ⭐⭐⭐⭐⭐', price: 2000 },
    { id: 10, image: Jean10, name: 'Selvedge Denim ⭐⭐⭐⭐⭐', price: 2000 },
    { id: 11, image: Jean11, name: 'Super Jeans ⭐⭐⭐⭐⭐', price: 2000 },
    { id: 12, image: Jean12, name: 'Stretch Skinny Fit ⭐⭐⭐⭐⭐', price: 2000 },
    { id: 13, image: Jean13, name: 'Mid Wash Denim ⭐⭐⭐⭐⭐', price: 2000 },
    { id: 14, image: Jean14, name: 'Slim Fit Jogger ⭐⭐⭐⭐⭐', price: 2000 },
    { id: 15, image: Jean15, name: 'Premium Jeans ⭐⭐⭐⭐⭐', price: 2000 },
    { id: 16, image: Jean16, name: 'Dark Blue Jeans ⭐⭐⭐⭐⭐', price: 2000 }
  ];

  const handleAddToCart = (item) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = {
      ...item,
      addedAt: new Date().toISOString(),
    };
    localStorage.setItem('cart', JSON.stringify([...storedCart, newItem]));
    window.dispatchEvent(new Event('storage'));
    alert(`${item.name} added to cart`);
  };

  const cartTotal = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return storedCart.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <section className="p-10 bg-gray-100 text-center font-extrabold text-2xl min-h-screen relative">
      {/* Advertisement Card */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-black p-6 rounded-xl mb-8 animate-pulse mt-24">
        <p className="text-sm sm:text-base md:text-lg lg:text-2xl">Hurry up! Limited time. 💯 Super wool fading free premium Jean collection.</p>
      </div>

      {/* Cart Indicator */}
      <div className="fixed top-4 right-4 z-40">
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition"
        >
          <ShoppingCart className="w-6 h-6 text-gray-700" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white w-80 max-h-[80vh] overflow-y-auto p-4 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setIsCartOpen(false)}
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <ShoppingCart className="w-6 h-6" />
              Your Cart ({cartCount})
            </h3>
            {cartCount === 0 ? (
              <p className="text-gray-600">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4">
                  {JSON.parse(localStorage.getItem('cart') || '[]').map((item, index) => (
                    <div key={index} className="pb-2 border-b flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{item.name}</p>
                          <p className="text-xs text-gray-500">
                            Added: {new Date(item.addedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-bold">Ksh {item.price}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Total:</span>
                    <span className="font-bold">Ksh {cartTotal()}</span>
                  </div>
                  <button
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded transition"
                    onClick={() => {
                      alert('Proceed to checkout');
                      setIsCartOpen(false);
                    }}
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8">
        {jeansProducts.map((jean) => (
          <div
            key={jean.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <div className="h-64 p-4 flex items-center justify-center bg-gray-50">
              <img
                src={jean.image}
                alt={jean.name}
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-6 text-center space-y-2">
              <h3 className="text-xl font-bold mb-1">{jean.name}</h3>
              <p className="text-lg font-bold text-blue-600 mb-2">Ksh {jean.price.toLocaleString()}</p>
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setSelectedItem(jean);
                    setShowPayment(true);
                  }}
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 sm:py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <CheckCircle className="w-5 h-5" />
                  Purchase Now
                </button>
                <button
                  onClick={() => handleAddToCart(jean)}
                  className="w-full bg-green-600 hover:bg-green-800 text-white font-semibold py-2 sm:py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
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

export default Jeans;
