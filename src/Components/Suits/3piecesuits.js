import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

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
  const sizes = ['44', '46', '48', '50', '52', '54', '56', '58', '60']; // Corrected size list

  useEffect(() => {
    const updateCart = () => {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(storedCart.length);
    };
    
    updateCart();
    window.addEventListener('storage', updateCart);
    return () => window.removeEventListener('storage', updateCart);
  }, []);

  const threePieceSuits = [
    { id: 1, name: 'Executive Three-Piece Suit', image: Photo1, price: 13000 },
    { id: 2, name: 'Classic fading free Three-Piece Suit', image: Photo2, price: 13000 },
    { id: 3, name: 'Premium Linen Three-Piece Suit', image: Photo3, price: 13000 },
    { id: 4, name: 'Classic Pinstripe Ensemble', image: Photo4, price: 13000 },
    { id: 5, name: 'Modern-Fit Three-Piece Suit', image: ThreePiece1, price: 13000 },
    { id: 6, name: 'Royal Navy Three-Piece Suit', image: ThreePiece2, price: 13000 },
    { id: 7, name: 'Designer Three-Piece Suit', image: ThreePiece3, price: 13000 },
    { id: 8, name: '💯Bespoke Three-piece Suit', image: ThreePiece4, price: 13000 },
    { id: 9, name: 'Executive Three-Piece Suit', image: ThreePiece5, price: 13000 },
    { id: 10, name: 'Luxurious Three-Piece Suit', image: ThreePiece6, price: 13000 },
    { id: 11, name: '💯Prestige Three-Piece Suit', image: ThreePiece7, price: 13000 },
    { id: 12, name: 'Elite Evening Three-piece Suit', image: ThreePiece8, price: 13000 },
    { id: 13, name: 'Glamorous Three-Piece Suit', image: ThreePiece9, price: 13000 },
    { id: 14, name: 'Sleek Business Three-Piece Suit', image: ThreePiece10, price: 13000 },
    { id: 15, name: '💯super wool fading Three-Piece Suit', image: ThreePiece11, price: 13000 },
    { id: 16, name: ' 💯Fashion Three-Piece Suit', image: ThreePiece12, price: 13000 }
  ];

  const handleAddToCart = (item) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = {
      ...item,
      addedAt: new Date().toISOString(),
      size: selectedSizeForSuit[item.id] || ''
    };
    const updatedCart = [...storedCart, newItem];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('storage'));
    alert(`${item.name} added to cart`);
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
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
                  className="size-selector flex gap-2 overflow-x-auto py-2"
                >
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSizeForSuit({ ...selectedSizeForSuit, [suit.id]: size })}
                      className={`px-4 py-2 rounded-lg border-2 ${selectedSizeForSuit[suit.id] === size ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
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
                    setSelectedSuit(suit);
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
          item={selectedSuit}
          selectedSize={selectedSizeForSuit[selectedSuit.id]}
          onClose={() => {
            setShowPayment(false);
            setSelectedSuit(null);
            setSelectedSizeForSuit({});
          }}
        />
      )}
    </section>
  );
};

export default ThreePieceSuits;
