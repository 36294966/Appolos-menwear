import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, XCircle, ShoppingCart, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';

import TwoPiece1 from '../../Assets/Suits/twopiece1.jpg';
import TwoPiece2 from '../../Assets/Suits/twopiece2.jpg';
import TwoPiece3 from '../../Assets/Suits/twopiece3.jpg';
import TwoPiece4 from '../../Assets/Suits/twopiece4.jpg';
import TwoPiece5 from '../../Assets/Suits/twopiece5.jpg';
import TwoPiece7 from '../../Assets/Suits/twopiece7.jpg';
import TwoPiece8 from '../../Assets/Suits/twopiece8.jpg';
import TwoPiece9 from '../../Assets/Suits/twopiece9.jpg';

const PaymentPopup = ({ item, selectedSize, onClose }) => {
  const [amount, setAmount] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const paymentDetails = {
    paybill: '542542',
    account: '378179'
  };

  const generatePaymentFile = () => {
    const content = `TWO PIECE SUIT PURCHASE\n------------------------\nItem: ${item?.name}\nProduct ID: ${item?.id}\nSize: ${selectedSize}\nPaybill: ${paymentDetails.paybill}\nAccount: ${paymentDetails.account}\nAmount Paid: Ksh ${amount || '________'}\nStandard Price: Ksh ${item?.price?.toLocaleString()}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `suit_payment_${item?.id}.txt`;
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
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                <span className="font-medium text-lg">Paybill:</span>
                <span className="font-mono text-blue-600 font-bold text-lg">{paymentDetails.paybill}</span>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                <span className="font-medium text-lg">Account:</span>
                <span className="font-mono text-blue-600 font-bold text-lg">{paymentDetails.account}</span>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-lg">Standard Price:</span>
                  <span className="font-mono text-green-600 font-bold text-lg">Ksh ${item?.price?.toLocaleString()}</span>
                </div>
              </div>
              <input
                type="number"
                placeholder="Enter amount (Ksh)"
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-lg"
                value={amount}
                onChange={(e) => setAmount(e.target.value.replace(/\D/g, ''))}
                min="11000"
              />
            </div>

            <div className="flex gap-4 mt-4">
              <button
                onClick={generatePaymentFile}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 text-lg"
              >
                <CheckCircle className="w-5 h-5" />
                Confirm Payment
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 text-lg"
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

const TwoPieceSuits = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedSuit, setSelectedSuit] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedSizeForSuit, setSelectedSizeForSuit] = useState({});
  const [showSizeError, setShowSizeError] = useState(false);
  const [errorSuitId, setErrorSuitId] = useState(null);
  const [lastSelectedSuit, setLastSelectedSuit] = useState(null);
  const timeoutRef = useRef(null);

  const twoPieceSuits = [
    { id: 1, name: 'Executive Two-Piece Suit ⭐⭐⭐⭐⭐', image: TwoPiece1, price: 11000 },
    { id: 2, name: 'Modern Classic Two-Piece Suit ⭐⭐⭐⭐⭐', image: TwoPiece2, price: 11000 },
    { id: 3, name: 'Premium Two-Piece Suit ⭐⭐⭐⭐⭐', image: TwoPiece3, price: 11000 },
    { id: 4, name: 'Business Two-Piece Suit ⭐⭐⭐⭐⭐', image: TwoPiece4, price: 11000 },
    { id: 5, name: 'Super Classic Two-Piece Suit⭐⭐⭐⭐⭐', image: TwoPiece5, price: 11000 },
    { id: 7, name: 'Modern Two-Piece Suit⭐⭐⭐⭐⭐', image: TwoPiece7, price: 11000 },
    { id: 8, name: 'Premium Two-Piece Suit⭐⭐⭐⭐⭐', image: TwoPiece8, price: 11000 },
    { id: 9, name: 'Elegant Two-Piece Suit⭐⭐⭐⭐⭐', image: TwoPiece9, price: 11000 }
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

  // Auto-uncheck after 30 seconds of inactivity
  useEffect(() => {
    if (lastSelectedSuit) {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Set new timeout to uncheck after 30 seconds
      timeoutRef.current = setTimeout(() => {
        setSelectedSizeForSuit(prev => {
          const newState = {...prev};
          delete newState[lastSelectedSuit];
          return newState;
        });
        setLastSelectedSuit(null);
      }, 30000); // 30 seconds
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [lastSelectedSuit]);

  const handleSizeSelection = (suitId, size) => {
    // If a different suit was previously selected, uncheck it
    if (lastSelectedSuit && lastSelectedSuit !== suitId) {
      setSelectedSizeForSuit(prev => {
        const newState = {...prev};
        delete newState[lastSelectedSuit];
        return {...newState, [suitId]: size};
      });
    } else {
      setSelectedSizeForSuit(prev => ({...prev, [suitId]: size}));
    }
    
    setLastSelectedSuit(suitId);
    setErrorSuitId(null); // clear error state on size selection
    
    // Reset the timeout for auto-uncheck
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setSelectedSizeForSuit(prev => {
        const newState = {...prev};
        delete newState[suitId];
        return newState;
      });
      setLastSelectedSuit(null);
    }, 30000);
  };

  const handleAddToCart = (item) => {
    if (!selectedSizeForSuit[item.id]) {
      setErrorSuitId(item.id);
      setShowSizeError(true);
      setTimeout(() => {
        setShowSizeError(false);
        setErrorSuitId(null);
      }, 3000);
      return;
    }
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = {
      ...item,
      size: selectedSizeForSuit[item.id],
      addedAt: new Date().toISOString()
    };
    const updatedCart = [...storedCart, newItem];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('storage'));
    // Reset size selection for this suit
    setSelectedSizeForSuit(prev => ({ ...prev, [item.id]: null }));
    setLastSelectedSuit(null);
    alert(`${item.name} (Size: ${selectedSizeForSuit[item.id]}) added to cart`);
  };

  const handlePurchase = (item) => {
    if (!selectedSizeForSuit[item.id]) {
      setErrorSuitId(item.id);
      setShowSizeError(true);
      setTimeout(() => {
        setShowSizeError(false);
        setErrorSuitId(null);
      }, 3000);
      return;
    }
    setSelectedSuit(item);
    setShowPayment(true);
    
    // Clear the timeout when proceeding to purchase
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const cartTotal = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    return storedCart.reduce((sum, item) => sum + item.price, 0);
  };

  const handlePrevClick = (id) => {
    const sizeSelector = document.getElementById(`size-selector-${id}`);
    if (sizeSelector) sizeSelector.scrollBy({ left: -100, behavior: 'smooth' });
  };

  const handleNextClick = (id) => {
    const sizeSelector = document.getElementById(`size-selector-${id}`);
    if (sizeSelector) sizeSelector.scrollBy({ left: 100, behavior: 'smooth' });
  };

  return (
    <section className="p-6 sm:p-10 bg-gray-50 min-h-screen">
      {/* Blinking Banner */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-center text-xl font-bold p-6 rounded-xl mb-8 animate-pulse mt-24 mx-4">
        <p>Hurry up! Limited time offer! Get your premium two-piece suits today! 💯 super wool fading free</p>
      </div>

      {/* Size Error Popup */}
      {showSizeError && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          <span>Please select a size before proceeding!</span>
        </div>
      )}

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

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {twoPieceSuits.map((suit) => (
          <article
            key={suit.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative"
          >
            <div className="aspect-square bg-gray-100 p-5 flex items-center justify-center">
              <img
                src={suit.image}
                alt={suit.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5 text-center space-y-4">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-bold text-gray-900">{suit.name}</h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-xl text-blue-600 font-bold">Ksh {suit.price}</p>
              
              {/* Size Selection */}
              <div className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2">Select Size:</div>
              <div className="flex justify-center items-center mb-2">
                <button
                  onClick={() => handlePrevClick(suit.id)}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 hover:text-gray-800"
                >
                  <ChevronLeft />
                </button>
                <div
                  id={`size-selector-${suit.id}`}
                  className="size-selector flex gap-2 overflow-x-auto py-2 max-w-[180px] scrollbar-hide"
                >
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelection(suit.id, size)}
                      className={`px-4 py-2 rounded-lg border-2 min-w-[44px] transition-all ${
                        selectedSizeForSuit[suit.id] === size 
                          ? 'bg-blue-600 text-white border-blue-600' 
                          : errorSuitId === suit.id 
                            ? 'border-red-500 bg-red-50 animate-pulse' 
                            : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => handleNextClick(suit.id)}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 hover:text-gray-800"
                >
                  <ChevronRight />
                </button>
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={() => handlePurchase(suit)}
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Purchase Now
                </button>
                <button
                  onClick={() => handleAddToCart(suit)}
                  className="w-full bg-green-600 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
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
          item={selectedSuit}
          selectedSize={selectedSizeForSuit[selectedSuit.id]}
          onClose={() => {
            setShowPayment(false);
            setSelectedSuit(null);
            // Reset size selection after purchase
            setSelectedSizeForSuit(prev => ({ ...prev, [selectedSuit.id]: null }));
            setLastSelectedSuit(null);
          }}
        />
      )}
    </section>
  );
};

export default TwoPieceSuits;