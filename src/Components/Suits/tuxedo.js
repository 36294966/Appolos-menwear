import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

// Import tuxedo images
import Tuxedo1 from '../../Assets/Suits/tuxedo1.jpg';
import Tuxedo2 from '../../Assets/Suits/tuxedo2.jpg';
import Tuxedo3 from '../../Assets/Suits/tuxedo3.jpg';
import Tuxedo5 from '../../Assets/Suits/tuxedo5.jpg';
import Tuxedo6 from '../../Assets/Suits/tuxedo6.jpg';
import Tuxedo7 from '../../Assets/Suits/tuxedo7.jpg';
import Tuxedo8 from '../../Assets/Suits/tuxedo8.jpg';
import Tuxedo9 from '../../Assets/Suits/tuxedo9.jpg'; // New tuxedo added

const PaymentPopup = ({ item, selectedSize, onClose }) => {
  const [amount, setAmount] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const paymentDetails = {
    paybill: '542542',
    account: '378179',
    standardPrice: 12000,
  };

  const handlePaymentConfirmation = () => {
    const content = `TUXEDO DINNER PURCHASE\n-----------------------\nItem: ${item?.name}\nProduct ID: ${item?.id}\nSize: ${selectedSize}\nPaybill: ${paymentDetails.paybill}\nAccount: ${paymentDetails.account}\nAmount Paid: Ksh ${amount || '________'}\nStandard Price: Ksh ${paymentDetails.standardPrice.toLocaleString()}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `tuxedo_payment_${item?.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setPaymentSuccess(true);
    setTimeout(onClose, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
          {paymentSuccess ? (
            <>
              <CheckCircle className="w-8 h-8 text-green-500" />
              Payment Verified!
            </>
          ) : (
            'Tuxedo Dinner Purchase'
          )}
        </h2>

        {!paymentSuccess ? (
          <>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <span className="font-medium text-sm">Paybill:</span>
                <span className="font-mono text-blue-600 font-bold">{paymentDetails.paybill}</span>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <span className="font-medium text-sm">Account:</span>
                <span className="font-mono text-blue-600 font-bold">{paymentDetails.account}</span>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">Standard Price:</span>
                  <span className="font-mono text-green-600 font-bold">Ksh {paymentDetails.standardPrice.toLocaleString()}</span>
                </div>
              </div>
              <input
                type="number"
                placeholder="Enter amount (Ksh)"
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                value={amount}
                onChange={(e) => setAmount(e.target.value.replace(/\D/g, ''))}
                min="12000"
              />
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={handlePaymentConfirmation}
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

const Tuxedo = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedTuxedo, setSelectedTuxedo] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedSizeForTuxedo, setSelectedSizeForTuxedo] = useState({});

  const tuxedoSuits = [
    { id: 1, name: ' Velvet Tuxedo Suit ⭐⭐⭐⭐⭐', image: Tuxedo1, price: 15000 },
    { id: 2, name: 'Midnight Tuxedo  Suit ⭐⭐⭐⭐⭐', image: Tuxedo2, price: 15000 },
    { id: 3, name: 'Ensemble Tuxedo Suit ⭐⭐⭐⭐⭐', image: Tuxedo3, price: 15000 },
    { id: 4, name: 'Classic Tuxedo Suit ⭐⭐⭐⭐⭐', image: Tuxedo5, price: 15000 },
    { id: 5, name: 'Slim Tuxedo Suit ⭐⭐⭐⭐⭐', image: Tuxedo6, price: 15000 },
    { id: 6, name: 'Designer Tuxedo Set ⭐⭐⭐⭐⭐', image: Tuxedo7, price: 15000 },
    { id: 7, name: 'Royal Dinner Suit ⭐⭐⭐⭐⭐', image: Tuxedo8, price: 15000 },
    { id: 8, name: 'Premium Tuxedo Suit ⭐⭐⭐⭐⭐', image: Tuxedo9, price: 15000 }, // Added new tuxedo
  ];

  const sizes = ['44', '46', '48', '50', '52', '54', '56', '58', '60'];

  useEffect(() => {
    const updateCart = () => {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(storedCart.length);
    };

    updateCart();
    window.addEventListener('storage', updateCart);
    return () => window.removeEventListener('storage', updateCart);
  }, []);

  const handleAddToCart = (item) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = {
      ...item,
      size: selectedSizeForTuxedo[item.id] || 'Not Selected',
      addedAt: new Date().toISOString(),
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

  const handlePrevClick = (id) => {
    const sizeSelector = document.getElementById(`size-selector-${id}`);
    sizeSelector.scrollBy({ left: -100, behavior: 'smooth' });
  };

  const handleNextClick = (id) => {
    const sizeSelector = document.getElementById(`size-selector-${id}`);
    sizeSelector.scrollBy({ left: 100, behavior: 'smooth' });
  };

  return (
    <section className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Blinking Banner */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-center text-xl sm:text-2xl font-bold p-6 rounded-xl mb-8 animate-pulse mt-24 mx-4">
        <p>Hurry up! Limited time offer! Get your premium tuxedo dinner suits today 💯 super wool fading free!</p>
      </div>

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
            <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
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
                          <p className="text-xs text-gray-500">Size: {item.size}</p>
                        </div>
                      </div>
                      <p className="text-sm font-bold">Ksh {item.price}</p>
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

      {/* Tuxedo Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {tuxedoSuits.map((suit) => (
          <div
            key={suit.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="h-64 w-full bg-gray-100 p-4 flex items-center justify-center">
              <img
                src={suit.image}
                alt={suit.name}
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-5 text-center space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">{suit.name}</h3>
              <p className="text-md sm:text-lg font-semibold text-blue-600">Ksh {suit.price.toLocaleString()}</p>
              {/* Size Selection */}
              <div className="text-sm sm:text-md font-semibold mb-2">Select Size:</div>
              <div className="flex justify-center items-center mb-2">
                <button
                  onClick={() => handlePrevClick(suit.id)}
                  className="text-lg sm:text-xl text-gray-600 hover:text-gray-800"
                >
                  <ChevronLeft />
                </button>
                <div
                  id={`size-selector-${suit.id}`}
                  className="size-selector flex gap-2 overflow-x-auto py-2"
                >
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSizeForTuxedo({ ...selectedSizeForTuxedo, [suit.id]: size })}
                      className={`px-4 py-2 rounded-lg border-2 ${selectedSizeForTuxedo[suit.id] === size ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => handleNextClick(suit.id)}
                  className="text-lg sm:text-xl text-gray-600 hover:text-gray-800"
                >
                  <ChevronRight />
                </button>
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setSelectedTuxedo(suit);
                    setShowPayment(true);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Purchase Now
                </button>
                <button
                  onClick={() => handleAddToCart(suit)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showPayment && (
        <PaymentPopup 
          item={selectedTuxedo}
          selectedSize={selectedSizeForTuxedo[selectedTuxedo.id]}
          onClose={() => {
            setShowPayment(false);
            setSelectedTuxedo(null);
            setSelectedSizeForTuxedo({});
          }}
        />
      )}
    </section>
  );
};

export default Tuxedo;
