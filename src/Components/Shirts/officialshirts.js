import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ShoppingCart } from 'lucide-react';
import Official1 from '../../Assets/Official/official1.jpg';
import Official2 from '../../Assets/Official/official2.jpg';
import Official3 from '../../Assets/Official/official3.jpg';
import Official4 from '../../Assets/Official/official4.jpg';
import Official5 from '../../Assets/Official/official5.jpg';
import Official6 from '../../Assets/Official/official6.jpg';
import Official7 from '../../Assets/Official/official7.jpg';
import Official8 from '../../Assets/Official/official8.jpg';
import Official9 from '../../Assets/Official/official9.jpg';
import Official10 from '../../Assets/Official/official10.jpg';
import Official11 from '../../Assets/Official/official11.jpg';
import Official12 from '../../Assets/Official/official12.jpg';
import Official13 from '../../Assets/Official/official13.jpg';
import Official14 from '../../Assets/Official/official14.jpg';
import Official15 from '../../Assets/Official/official15.jpg';
import Official16 from '../../Assets/Official/official16.jpg';

// Payment Popup Component
const PaymentPopup = ({ item, onClose }) => {
  const [amount, setAmount] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const paymentDetails = {
    paybill: '542542',
    account: '378179',
  };

  const generatePaymentFile = () => {
    const content = `OFFICIAL SHIRT PURCHASE\n---------------------\nItem: ${item?.name}\nProduct ID: ${item?.id}\nPaybill: ${paymentDetails.paybill}\nAccount: ${paymentDetails.account}\nAmount Paid: Ksh ${amount || '________'}\nStandard Price: Ksh ${item?.price}`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `shirt_payment_${item?.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setPaymentSuccess(true);
    setTimeout(onClose, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg w-[95%] max-w-md space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center gap-2">
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
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <span className="font-medium text-sm sm:text-base">Paybill:</span>
                <span className="font-mono text-blue-600 font-bold">{paymentDetails.paybill}</span>
              </div>

              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <span className="font-medium text-sm sm:text-base">Account:</span>
                <span className="font-mono text-blue-600 font-bold">{paymentDetails.account}</span>
              </div>

              <div className="bg-green-50 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm sm:text-base">Standard Price:</span>
                  <span className="font-mono text-green-600 font-bold">Ksh {item?.price?.toLocaleString()}</span>
                </div>
              </div>

              <input
                type="number"
                placeholder="Enter amount (Ksh)"
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="1800"
              />
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={generatePaymentFile}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Confirm Payment
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
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

// Main Official Component
const Official = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedShirt, setSelectedShirt] = useState(null);
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

  const shirts = [
    { id: 1, image: Official1, name: 'Presidential Shirt', price: 3000 },
    { id: 2, image: Official2, name: 'Presidential Shirt', price: 3000 },
    { id: 3, image: Official3, name: 'Presidential Shirt', price: 3000 },
    { id: 4, image: Official4, name: 'Premium Cotton Blend', price: 1800 },
    { id: 5, image: Official5, name: 'French Cuff Formal', price: 1800 },
    { id: 6, image: Official6, name: 'Slim Fit Office Shirt', price: 1800 },
    { id: 7, image: Official7, name: 'Double Cuff Business', price: 1800 },
    { id: 8, image: Official8, name: 'Designer Collar Shirt', price: 1800 },
    { id: 9, image: Official9, name: 'Executive Checkered', price: 1800 },
    { id: 10, image: Official10, name: 'Silk Blend Formal', price: 1800 },
    { id: 11, image: Official11, name: 'Premium Twill Shirt', price: 1800 },
    { id: 12, image: Official12, name: 'Classic Spread Collar', price: 1800 },
    { id: 13, image: Official13, name: 'Luxury Official Shirt', price: 1800 },
    { id: 14, image: Official14, name: 'Sophistic Official Shirt', price: 1800 },
    { id: 15, image: Official15, name: 'Classic Official Shirt', price: 1800},
    { id: 16, image: Official16, name: 'Exclusive Official Shirt', price: 1800}
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
    alert(`${item.name} added to cart`);
  };

  const cartTotal = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return storedCart.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <section className="p-4 sm:p-6 bg-gray-50 min-h-screen mt-8">
      {/* Cart Button */}
      <div className="fixed top-16 right-4 z-40">
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
                        <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{item.name}</p>
                          <p className="text-xs text-gray-500">
                            Added: {new Date(item.addedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-bold">Ksh {item.price.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Total:</span>
                    <span className="font-bold">Ksh {(cartTotal() + 200).toLocaleString()}</span>
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

      <header className="bg-gradient-to-r from-green-600 via-red-500 to-yellow-500 text-white p-6 mb-8 rounded-xl shadow-lg text-center mt-12">
        <h1 className="text-3xl sm:text-4xl font-bold">Welcome to Official Shirts Collection</h1>
        <p className="text-lg sm:text-xl mt-2">High-quality shirts for professional occasions 💯 super wool fading free</p>
      </header>

      {/* Shirt Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {shirts.map((shirt) => (
          <article 
            key={shirt.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="aspect-square bg-gray-100 p-5 flex items-center justify-center">
              <img
                src={shirt.image}
                alt={shirt.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5 text-center space-y-4">
              <h3 className="text-xl sm:text-lg font-bold text-gray-900">{shirt.name}</h3>
              <p className="text-blue-600 font-bold text-xl">Ksh {shirt.price.toLocaleString()}</p>
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setSelectedShirt(shirt);
                    setShowPayment(true);
                  }}
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Purchase Now
                </button>
                <button
                  onClick={() => handleAddToCart(shirt)}
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

      {showPayment && (
        <PaymentPopup 
          item={selectedShirt}
          onClose={() => {
            setShowPayment(false);
            setSelectedShirt(null);
          }}
        />
      )}
    </section>
  );
};

export default Official;





