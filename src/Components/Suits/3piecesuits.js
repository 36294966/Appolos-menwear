import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, XCircle, ShoppingCart, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';

// Import suit images
import Photo1 from '../../Assets/Appolo/photo1.jpeg';
import Photo2 from '../../Assets/Appolo/photo2.jpeg';
import Photo3 from '../../Assets/Appolo/photo3.jpeg';
import Photo4 from '../../Assets/Appolo/photo4.jpg';
import ThreePiece1 from '../../Assets/Suits/threepiece1.jpg';
import ThreePiece2 from '../../Assets/Suits/threepiece2.jpg';
import ThreePiece3 from '../../Assets/Suits/threepiece3.jpg';
import ThreePiece4 from '../../Assets/Suits/threepiece4.jpg';
import ThreePiece5 from '../../Assets/Suits/threepiece5.jpg';
import ThreePiece6 from '../../Assets/Suits/threepiece6.jpg';
import ThreePiece7 from '../../Assets/Suits/threepiece7.jpg';
import ThreePiece8 from '../../Assets/Suits/threepiece8.jpg';
import ThreePiece9 from '../../Assets/Suits/threepiece9.jpg';
import ThreePiece10 from '../../Assets/Suits/threepiece10.jpg';
import ThreePiece11 from '../../Assets/Suits/threepiece11.jpg';
import ThreePiece12 from '../../Assets/Suits/threepiece12.jpg';
import ThreePiece13 from '../../Assets/Suits/threepiece13.jpg';
import ThreePiece14 from '../../Assets/Suits/threepiece14.jpg';
import ThreePiece15 from '../../Assets/Suits/threepiece15.jpg';
import ThreePiece16 from '../../Assets/Suits/threepiece16.jpg';
import ThreePiece17 from '../../Assets/Suits/threepiece17.jpg';
import ThreePiece18 from '../../Assets/Suits/threepiece18.jpg';
import ThreePiece19 from '../../Assets/Suits/threepiece19.jpg';
import ThreePiece20 from '../../Assets/Suits/threepiece20.jpg';
import ThreePiece21 from '../../Assets/Suits/threepiece21.jpg';
import ThreePiece22 from '../../Assets/Suits/threepiece22.jpg';
import ThreePiece23 from '../../Assets/Suits/threepiece23.jpg';
import ThreePiece24 from '../../Assets/Suits/threepiece24.jpg';
import ThreePiece25 from '../../Assets/Suits/threepiece25.jpg';
import ThreePiece26 from '../../Assets/Suits/threepiece26.jpg';
import ThreePiece27 from '../../Assets/Suits/threepiece27.jpg';
import ThreePiece28 from '../../Assets/Suits/threepiece28.jpg';
import ThreePiece29 from '../../Assets/Suits/threepiece29.jpg';
import ThreePiece30 from '../../Assets/Suits/threepiece30.jpg';
import ThreePiece31 from '../../Assets/Suits/threepiece31.jpg';
import ThreePiece32 from '../../Assets/Suits/threepiece32.jpg';

const PaymentPopup = ({ onClose, item, selectedSize }) => {
  const [amount, setAmount] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const paymentDetails = {
    paybill: '542542',
    account: '378179',
    standardPrice: 13000
  };

  const handlePaymentConfirmation = () => {
    const content = `THREE PIECE SUIT PURCHASE\n-------------------------\nItem: ${item?.name}\nProduct ID: ${item?.id}\nSize: ${selectedSize}\nPaybill: ${paymentDetails.paybill}\nAccount: ${paymentDetails.account}\nAmount Paid: Ksh ${amount || '________'}\nStandard Price: Ksh ${paymentDetails.standardPrice.toLocaleString()}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `three_piece_payment_${item?.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setPaymentSuccess(true);
    setTimeout(onClose, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-md space-y-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
          {paymentSuccess ? (
            <>
              <CheckCircle className="w-6 h-6 text-green-500" />
              Payment Verified!
            </>
          ) : (
            'Three Piece Suit Purchase'
          )}
        </h2>

        {!paymentSuccess ? (
          <>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-gray-50 p-2 sm:p-3 rounded-lg">
                <span className="font-medium text-xs sm:text-sm">Paybill:</span>
                <span className="font-mono text-blue-600 font-bold text-xs sm:text-sm">{paymentDetails.paybill}</span>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-2 sm:p-3 rounded-lg">
                <span className="font-medium text-xs sm:text-sm">Account:</span>
                <span className="font-mono text-blue-600 font-bold text-xs sm:text-sm">{paymentDetails.account}</span>
              </div>
              <div className="bg-green-50 p-2 sm:p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-xs sm:text-sm">Standard Price:</span>
                  <span className="font-mono text-green-600 font-bold text-xs sm:text-sm">Ksh {paymentDetails.standardPrice.toLocaleString()}</span>
                </div>
              </div>
              <input
                type="number"
                placeholder="Enter amount (Ksh)"
                className="w-full p-2 sm:p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent text-xs sm:text-sm"
                value={amount}
                onChange={(e) => setAmount(e.target.value.replace(/\D/g, ''))}
                min="13000"
              />
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={handlePaymentConfirmation}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-xs sm:text-base"
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                Confirm Payment
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 sm:py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-xs sm:text-base"
              >
                <XCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                Cancel
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-green-600">
            <p>Transaction receipt downloaded successfully</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">Closing automatically...</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ThreePieceSuits = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedSuit, setSelectedSuit] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedSizeForSuit, setSelectedSizeForSuit] = useState({});
  const [showSizeError, setShowSizeError] = useState(false);
  const [errorSuitId, setErrorSuitId] = useState(null);
  const [checkedItem, setCheckedItem] = useState(null);
  const timeoutRef = useRef(null);
  
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

  // Effect to automatically uncheck after 5 seconds of inactivity
  useEffect(() => {
    if (checkedItem) {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Set new timeout to uncheck after 5 seconds
      timeoutRef.current = setTimeout(() => {
        setCheckedItem(null);
        setSelectedSizeForSuit(prev => {
          const newState = {...prev};
          delete newState[checkedItem];
          return newState;
        });
      }, 5000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [checkedItem]);

  const threePieceSuits = [
    { id: 1, name: 'Executive Three-Piece Suit ⭐⭐⭐⭐⭐', image: Photo1, price: 13000 },
    { id: 2, name: 'Classic fading free Three-Piece Suit ⭐⭐⭐⭐⭐', image: Photo2, price: 13000 },
    { id: 3, name: 'Premium Linen Three-Piece Suit ⭐⭐⭐⭐⭐', image: Photo3, price: 13000 },
    { id: 4, name: 'Classic Pinstripe Ensemble ⭐⭐⭐⭐⭐', image: Photo4, price: 13000 },
    { id: 5, name: 'Modern-Fit Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece1, price: 13000 },
    { id: 6, name: 'Royal Navy Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece2, price: 13000 },
    { id: 7, name: 'Designer Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece3, price: 13000 },
    { id: 8, name: 'Bespoke Three-piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece4, price: 13000 },
    { id: 9, name: 'Executive Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece5, price: 13000 },
    { id: 10, name: 'Luxurious Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece6, price: 13000 },
    { id: 11, name: 'Prestige Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece7, price: 13000 },
    { id: 12, name: 'Elite Evening Three-piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece8, price: 13000 },
    { id: 13, name: 'Glamorous Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece9, price: 13000 },
    { id: 14, name: 'Sleek Business Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece10, price: 13000 },
    { id: 15, name: 'super wool fading Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece11, price: 13000 },
    { id: 16, name: ' Fashion Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece12, price: 13000 },
    { id: 17, name: 'Opulence Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece14, price: 13000 },
    { id: 18, name: 'Sophistication Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece15, price: 13000 },
    { id: 19, name: 'Couture ClassicsThree-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece16, price: 13000 },
    { id: 20, name: 'Dignity Collection Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece17, price: 13000 },
    { id: 21, name: 'Vanguard Elite Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece18, price: 13000 },
    { id: 22, name: 'Summit Suits Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece19, price: 13000 },
    { id: 23, name: 'Executive Edge Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece20, price: 13000 },
    { id: 24, name: 'Eminence Collection Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece21, price: 13000 },
    { id: 25, name: 'Refined Royalty Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece22, price: 13000 },
    { id: 26, name: 'Pinnacle Series Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece23, price: 13000 },
    { id: 27, name: 'Urban Aristocrat Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece24, price: 13000 },
    { id: 28, name: 'Noble AttireThree-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece25, price: 13000 },
    { id: 29, name: 'Legacy Luxe Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece26, price: 13000 },
    { id: 30, name: 'Signature Sovereign Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece27, price: 13000 },
    { id: 31, name: 'Majesty Mode Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece28, price: 13000 },
    { id: 32, name: 'Imperial Attire Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece29, price: 13000 },
    { id: 33, name: 'Monarch Line Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece30, price: 13000 },
    { id: 34, name: 'Crown & Confidence Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece31, price: 13000 },
    { id: 35, name: 'Virtue Vogue Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece32, price: 13000 },
    { id: 36, name: 'Fashion Three-Piece Suit ⭐⭐⭐⭐⭐', image: ThreePiece13, price: 13000 },
  ];

  const handleSizeSelect = (itemId, size) => {
    // If a different item was previously checked, uncheck it
    if (checkedItem && checkedItem !== itemId) {
      setSelectedSizeForSuit(prev => {
        const newState = {...prev};
        delete newState[checkedItem];
        return newState;
      });
    }
    
    // Set the new checked item
    setCheckedItem(itemId);
    setSelectedSizeForSuit(prev => ({ ...prev, [itemId]: size }));
    
    // Reset the timeout for auto-uncheck
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setCheckedItem(null);
      setSelectedSizeForSuit(prev => {
        const newState = {...prev};
        delete newState[itemId];
        return newState;
      });
    }, 5000);
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
    setSelectedSizeForSuit(prev => ({...prev, [item.id]: null}));
    
    // Clear the checked item after adding to cart
    setCheckedItem(null);
    
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
    
    // Clear the checked item after proceeding to purchase
    setCheckedItem(null);
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
    <section className="p-6 sm:p-10 bg-gray-50 min-h-screen">
      {/* Size Error Popup */}
      {showSizeError && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          <span>Please select a size before proceeding!</span>
        </div>
      )}

      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-center text-sm sm:text-lg font-semibold p-4 rounded-xl mb-8 animate-pulse mt-24 mx-4">
        <p>Hurry up! Limited time offer! Get your premium three-piece suits today! 💯 super wool fading free</p>
      </div>

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
              <div className="space-y-4">
                {JSON.parse(localStorage.getItem('cart') || '[]').map((item, index) => (
                  <div key={index} className="pb-2 border-b flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-lg"
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
            )}
          </div>
        </div>
      )}

      {/* Suit Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-6">
        {threePieceSuits.map((suit) => (
          <div
            key={suit.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="h-80 sm:h-96 p-2 sm:p-4 flex items-center justify-center bg-gray-50">
              <img
                src={suit.image}
                alt={suit.name}
                className="w-full h-full object-contain rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-6 text-center space-y-4">
              <h3 className="text-lg sm:text-xl font-bold">{suit.name}</h3>
              <p className="text-md sm:text-lg font-bold text-blue-600">Ksh {suit.price}</p>
              
              {/* Size Selection */}
              <div className="text-xs sm:text-sm font-semibold mb-2">Select Size:</div>
              <div className="flex justify-center items-center mb-2">
                <button
                  onClick={() => handlePrevClick(suit.id)}
                  className="text-lg sm:text-xl text-gray-600 hover:text-gray-800"
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
                      onClick={() => handleSizeSelect(suit.id, size)}
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
                  className="text-lg sm:text-xl text-gray-600 hover:text-gray-800"
                >
                  <ChevronRight />
                </button>
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={() => handlePurchase(suit)}
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
          item={selectedSuit}
          selectedSize={selectedSizeForSuit[selectedSuit.id]}
          onClose={() => {
            setShowPayment(false);
            setSelectedSuit(null);
            // Reset size selection after purchase
            setSelectedSizeForSuit(prev => ({...prev, [selectedSuit.id]: null}));
          }}
        />
      )}
    </section>
  );
};

export default ThreePieceSuits;
