import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, ChevronLeft, ChevronRight, ShoppingCart, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images (ensure paths are correct)
import Photo1 from '../Assets/Appolo/photo1.jpeg';
import Photo2 from '../Assets/Appolo/photo2.jpeg';
import Photo3 from '../Assets/Appolo/photo3.jpeg';
import Photo4 from '../Assets/Appolo/photo4.jpg';

import ThreePiece1 from '../Assets/Suits/threepiece1.jpg';
import ThreePiece2 from '../Assets/Suits/threepiece2.jpg';
import ThreePiece3 from '../Assets/Suits/threepiece3.jpg';
import ThreePiece4 from '../Assets/Suits/threepiece4.jpg';

import TwoPiece1 from '../Assets/Suits/twopiece1.jpg';
import TwoPiece2 from '../Assets/Suits/twopiece2.jpg';
import TwoPiece3 from '../Assets/Suits/twopiece3.jpg';
import TwoPiece4 from '../Assets/Suits/twopiece4.jpg';
import TwoPiece5 from '../Assets/Suits/twopiece5.jpg';
import TwoPiece7 from '../Assets/Suits/twopiece7.jpg';
import TwoPiece8 from '../Assets/Suits/twopiece8.jpg';
import TwoPiece9 from '../Assets/Suits/twopiece9.jpg';

import Kaunda1 from '../Assets/Suits/Kaunda1.jpg';
import Kaunda2 from '../Assets/Suits/kaunda2.jpg';
import Kaunda3 from '../Assets/Suits/kaunda3.jpg';
import Kaunda4 from '../Assets/Suits/kaunda4.jpg';

import Tuxedo1 from '../Assets/Suits/tuxedo1.jpg';
import Tuxedo2 from '../Assets/Suits/tuxedo2.jpg';
import Tuxedo3 from '../Assets/Suits/tuxedo3.jpg';
import Tuxedo4 from '../Assets/Suits/tuxedo4.jpg';
import Tuxedo5 from '../Assets/Suits/tuxedo5.jpg';
import Tuxedo6 from '../Assets/Suits/tuxedo6.jpg';
import Tuxedo7 from '../Assets/Suits/tuxedo7.jpg';
import Tuxedo8 from '../Assets/Suits/tuxedo8.jpg';

import Official1 from '../Assets/Official/official1.jpg';
import Official2 from '../Assets/Official/official2.jpg';
import Official3 from '../Assets/Official/official3.jpg';
import Official4 from '../Assets/Official/official4.jpg';
import Official5 from '../Assets/Official/official5.jpg';
import Official6 from '../Assets/Official/official6.jpg';
import Official7 from '../Assets/Official/official7.jpg';
import Official8 from '../Assets/Official/official8.jpg';

import Jean1 from '../Assets/Jeans/jean1.jpeg';
import Jean2 from '../Assets/Jeans/jean2.jpeg';
import Jean3 from '../Assets/Jeans/jean3.jpeg';
import Jean4 from '../Assets/Jeans/jean4.jpg';
import Jean5 from '../Assets/Jeans/jean5.jpg';
import Jean6 from '../Assets/Jeans/jean6.jpg';
import Jean7 from '../Assets/Jeans/jean7.jpg';
import Jean8 from '../Assets/Jeans/jean8.jpg';
import Jean9 from '../Assets/Jeans/jean9.jpg';
import Jean10 from '../Assets/Jeans/jean10.jpg';
import Jean11 from '../Assets/Jeans/jean11.jpg';
import Jean12 from '../Assets/Jeans/jean12.jpg';
import Jean13 from '../Assets/Jeans/jean13.jpg';
import Jean14 from '../Assets/Jeans/jean14.jpg';
import Jean15 from '../Assets/Jeans/jean15.jpg';
import Jean16 from '../Assets/Jeans/jean16.jpg';

import Jacket1 from '../Assets/Jackets/jacket1.jpg';
import Jacket2 from '../Assets/Jackets/jacket2.jpg';
import Jacket3 from '../Assets/Jackets/jacket3.jpg';

const PaymentPopup = ({ item, selectedSize, onClose, immediateSuccess }) => {
  const [amount, setAmount] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const paymentDetails = {
    paybill: '542542',
    account: '378179',
    standardPrice: 13000,
  };

  // Handle immediate success if the prop is true
  useEffect(() => {
    if (immediateSuccess) {
      setPaymentSuccess(true);
      setTimeout(() => {
        // Save to cart or handle post payment if needed
        // For now, just close popup
        onClose();
      }, 1500);
    }
  }, [immediateSuccess, onClose]);

  const handlePaymentConfirm = () => {
    if (paymentSuccess) {
      // Already successful, just close
      onClose();
      return;
    }
    // Prepare payment receipt file
    const content = `SUIT PURCHASE
-------------------------
Item: ${item?.name}
Product ID: ${item?.id}
Size: ${selectedSize}
Paybill: ${paymentDetails.paybill}
Account: ${paymentDetails.account}
Amount Paid: ${amount || '________'}
Standard Price: Ksh ${item?.price?.toLocaleString()}`;
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
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg text-sm sm:text-base">
                <span className="font-medium">Paybill:</span>
                <span className="font-mono text-blue-600 font-bold">{paymentDetails.paybill}</span>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg text-sm sm:text-base">
                <span className="font-medium">Account:</span>
                <span className="font-mono text-blue-600 font-bold">{paymentDetails.account}</span>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="font-medium">Standard Price:</span>
                  <span className="font-mono text-green-600 font-bold">Ksh {item?.price?.toLocaleString()}</span>
                </div>
              </div>
              <input
                type="number"
                placeholder="Enter amount (Ksh)"
                className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent text-sm sm:text-base"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="flex gap-4 mt-4">
              <button
                onClick={handlePaymentConfirm}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <CheckCircle className="w-5 h-5" /> Confirm Payment
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 sm:py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <XCircle className="w-5 h-5" /> Cancel
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-green-600 text-sm sm:text-base">
            <p>Transaction receipt downloaded successfully</p>
            <p className="mt-2">Closing automatically...</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Home = () => {
  const [cartCount, setCartCount] = useState(0);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSizeForSuit, setSelectedSizeForSuit] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [immediateSuccess, setImmediateSuccess] = useState(false); // added for instant success

  const sizes = ['44', '46', '48', '50', '52', '54', '56', '58', '60'];
  const sizeScrollRefs = useRef({});

  useEffect(() => {
    const updateCart = () => {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(storedCart.length);
    };
    updateCart();
    window.addEventListener('storage', updateCart);
    return () => window.removeEventListener('storage', updateCart);
  }, []);

  // Data arrays
  const threePieceSuits = [
    { id: 1, name: 'Executive Three-Piece Suit', image: Photo1, price: 13000 },
    { id: 2, name: 'Classic Fading Free Three-Piece Suit', image: Photo2, price: 13000 },
    { id: 3, name: 'Premium Linen Three-Piece Suit', image: Photo3, price: 13000 },
    { id: 4, name: 'Classic Pinstripe Ensemble', image: Photo4, price: 13000 },
    { id: 5, name: 'Modern-Fit Three-Piece Suit', image: ThreePiece1, price: 13000 },
    { id: 6, name: 'Royal Navy Three-Piece Suit', image: ThreePiece2, price: 13000 },
    { id: 7, name: 'Luxury Three-Piece Suit', image: ThreePiece3, price: 13000 },
    { id: 8, name: 'Modern Three-Piece Suit', image: ThreePiece4, price: 13000 },
  ];

  const twoPieceSuits = [
    { id: 1, name: 'Executive Two-Piece Suit', image: TwoPiece1, price: 11000 },
    { id: 2, name: 'Modern Classic Two-Piece Suit', image: TwoPiece2, price: 11000 },
    { id: 3, name: 'Premium Two-Piece Suit', image: TwoPiece3, price: 11000 },
    { id: 4, name: 'Business Two-Piece Suit', image: TwoPiece4, price: 11000 },
    { id: 5, name: '💯 Super Classic Two-Piece Suit', image: TwoPiece5, price: 11000 },
    { id: 7, name: 'Modern Two-Piece Suit', image: TwoPiece7, price: 11000 },
    { id: 8, name: 'Premium Two-Piece Suit', image: TwoPiece8, price: 11000 },
    { id: 9, name: 'Elegant Two-Piece Suit', image: TwoPiece9, price: 11000 },
  ];

  const tuxedoSuits = [
    { id: 1, name: 'Classic Tuxedo Dinner Suit', image: Tuxedo1, price: 15000 },
    { id: 2, name: 'Royal Tuxedo Dinner Suit', image: Tuxedo2, price: 15000 },
    { id: 3, name: 'Elegant Tuxedo Dinner Suit', image: Tuxedo3, price: 15000 },
    { id: 4, name: 'Luxury Tuxedo Dinner Suit', image: Tuxedo4, price: 15000 },
    { id: 5, name: 'Elegant Tuxedo Dinner Suit', image: Tuxedo5, price: 15000 },
    { id: 6, name: 'Classic Tuxedo Dinner Suit', image: Tuxedo6, price: 15000 },
    { id: 7, name: 'Designer Tuxedo Dinner Suit', image: Tuxedo7, price: 15000 },
    { id: 8, name: 'Glamorous Tuxedo Dinner Suit', image: Tuxedo8, price: 15000 },
  ];

  const kaundaSuits = [
    { id: 1, name: 'Classic Kaunda Suit', image: Kaunda1, price: 14000 },
    { id: 2, name: 'Royal Kaunda Suit', image: Kaunda2, price: 14000 },
    { id: 3, name: 'Modern Kaunda Suit', image: Kaunda3, price: 14000 },
    { id: 4, name: 'Elegant Kaunda Suit', image: Kaunda4, price: 14000 },
  ];

  const officialShirts = [
    { id: 1, name: 'Presidential Official Shirt', image: Official1, price: 3000 },
    { id: 2, name: 'Presidential Official Shirt', image: Official2, price: 3000 },
    { id: 3, name: 'Presidential Official Shirt', image: Official3, price: 3000 },
    { id: 4, name: 'Presidential Official Shirt', image: Official4, price: 1800 },
    { id: 5, name: 'Classic Official Shirt', image: Official5, price: 1800 },
    { id: 6, name: 'Premium Official Shirt', image: Official6, price: 1800 },
    { id: 7, name: 'Classic Official Shirt', image: Official7, price: 1800 },
    { id: 8, name: 'Premium  Official Shirt', image: Official8, price: 1800 },
  ];

  const jeansProducts = [
    { id: 1, image: Jean1, name: 'Slim Fit jean', price: 2000 },
    { id: 2, image: Jean2, name: 'Vintage Jean', price: 2000 },
    { id: 3, image: Jean3, name: 'Ripped Skinny Jeans', price: 2000 },
    { id: 4, image: Jean4, name: 'Classic Straight Leg', price: 2000 },
    { id: 5, image: Jean5, name: 'High Super Jean', price: 2000 },
    { id: 6, image: Jean6, name: 'Black Stretch jean', price: 2000 },
    { id: 7, image: Jean7, name: 'Classic Jean', price: 2000 },
    { id: 8, image: Jean8, name: 'Tapered Cargo Jeans', price: 2000 },
    { id: 9, image: Jean9, name: '💯 Flare Jeans', price: 2000 },
    { id: 10, image: Jean10, name: 'Selvedge Denim', price: 2000 },
    { id: 11, image: Jean11, name: '💯 Super Jeans', price: 2000 },
    { id: 12, image: Jean12, name: 'Stretch Skinny Fit', price: 2000 },
    { id: 13, image: Jean13, name: 'Mid Wash Denim', price: 2000 },
    { id: 14, image: Jean14, name: 'Slim Fit Jogger', price: 2000 },
    { id: 15, image: Jean15, name: 'Premium Jeans', price: 2000 },
    { id: 16, image: Jean16, name: 'Dark Blue Jeans', price: 2000 },
  ];

  // handleAddToCart, handlePrevClick, handleNextClick, handleSizeSelect, cartTotal...
  const handleAddToCart = (item) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = {
      ...item,
      size: item.category !== 'jeans' ? (selectedSizeForSuit[item.id] || 'Not Selected') : 'N/A',
      addedAt: new Date().toISOString(),
    };
    localStorage.setItem('cart', JSON.stringify([...storedCart, newItem]));
    window.dispatchEvent(new Event('storage'));
    alert(`${item.name} added to cart`);
    // Reset selected size after adding
    if (item.category !== 'jeans') {
      setSelectedSizeForSuit((prev) => ({
        ...prev,
        [item.id]: undefined,
      }));
    }
  };

  const handlePrevClick = (id) => {
    const sizeScrollRef = sizeScrollRefs.current[id];
    if (sizeScrollRef) sizeScrollRef.scrollBy({ left: -100, behavior: 'smooth' });
  };
  const handleNextClick = (id) => {
    const sizeScrollRef = sizeScrollRefs.current[id];
    if (sizeScrollRef) sizeScrollRef.scrollBy({ left: 100, behavior: 'smooth' });
  };
  const handleSizeSelect = (suitId, size) => {
    setSelectedSizeForSuit((prev) => ({
      ...prev,
      [suitId]: prev[suitId] === size ? undefined : size,
    }));
  };
  const cartTotal = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return storedCart.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <section className="p-6 sm:p-10 bg-gray-50 min-h-screen">
      {/* =================== 1. Three Piece Suits =================== */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl p-6 text-center font-bold rounded-xl mb-8 animate-blink mt-24 mx-4">
        <p>Hurry Up! Limited Time Only! 💯 Super Wool Free Fading ThreePiece Suits – Get Yours Today!</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {threePieceSuits.map((suit) => (
          <div key={suit.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-64 w-full bg-gray-100 p-4 flex items-center justify-center">
              <img src={suit.image} alt={suit.name} className="w-full h-full object-contain rounded-lg" loading="lazy" />
            </div>
            <div className="p-5 text-center space-y-4">
              <h3 className="text-xl font-bold">{suit.name}</h3>
              <p className="text-lg font-semibold text-blue-600">Ksh {suit.price}</p>
              {/* Sizes in horizontal scrollable row */}
              <div className="flex flex-col items-start space-y-2">
                <span className="text-sm sm:text-base md:text-lg font-medium">Select Sizes</span>
                <div className="flex space-x-2 overflow-x-auto pb-2 w-full">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(suit.id, size)}
                      className={`px-3 sm:px-4 md:px-5 py-1 sm:py-2 rounded-lg border-2 text-xs sm:text-sm md:text-base ${selectedSizeForSuit[suit.id] === size ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-300'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              {/* Buttons */}
              <div className="space-y-2 mt-4">
                <button
                  onClick={() => {
                    setSelectedItem(suit);
                    setImmediateSuccess(true);
                    setShowPayment(true);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base"
                >
                  <CheckCircle className="w-5 h-5" /> Purchase Now
                </button>
                <button
                  onClick={() => handleAddToCart(suit)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base"
                >
                  <ShoppingCart className="w-5 h-5" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* View More for 3-piece suits */}
      <div className="flex justify-end mt-6 mb-8">
        <Link to="/suits/3piecesuits" className="text-xl font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-2">
          <span>View More</span> <ChevronRight className="w-6 h-6" />
        </Link>
      </div>

      {/* 2. Two Piece Suits */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl p-6 text-center font-bold rounded-xl mb-8 animate-blink mt-8 mx-4">
        <p>Hurry Up! Limited Time Only! 💯 Super Wool Free Fading Two-Piece Suits – Get Yours Today!</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {twoPieceSuits.map((suit) => (
          <div key={suit.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-64 w-full bg-gray-100 p-4 flex items-center justify-center">
              <img src={suit.image} alt={suit.name} className="w-full h-full object-contain rounded-lg" loading="lazy" />
            </div>
            <div className="p-5 text-center space-y-4">
              <h3 className="text-xl font-bold">{suit.name}</h3>
              <p className="text-lg font-semibold text-blue-600">Ksh {suit.price}</p>
              {/* Sizes in horizontal scrollable row */}
              <div className="flex flex-col items-start space-y-2">
                <span className="text-sm sm:text-base md:text-lg font-medium">Select Sizes</span>
                <div className="flex space-x-2 overflow-x-auto pb-2 w-full">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(suit.id, size)}
                      className={`px-3 sm:px-4 md:px-5 py-1 sm:py-2 rounded-lg border-2 text-xs sm:text-sm md:text-base ${selectedSizeForSuit[suit.id] === size ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-300'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              {/* Buttons */}
              <div className="space-y-2 mt-4">
                <button
                  onClick={() => {
                    setSelectedItem(suit);
                    setImmediateSuccess(true);
                    setShowPayment(true);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base"
                >
                  <CheckCircle className="w-5 h-5" /> Purchase Now
                </button>
                <button
                  onClick={() => handleAddToCart(suit)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base"
                >
                  <ShoppingCart className="w-5 h-5" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* View More for 2-piece suits */}
      <div className="flex justify-end mt-6 mb-8">
        <Link to="/suits/2piecesuits" className="text-xl font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-2">
          <span>View More</span> <ChevronRight className="w-6 h-6" />
        </Link>
      </div>

      {/* 3. Tuxedo Dinner Suits */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl p-6 text-center font-bold rounded-xl mb-8 animate-blink mt-8 mx-4">
        <p>Hurry Up! Limited Time Only! 💯 Fading Free Tuxedo Dinner Suits – Get Yours Today!</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {tuxedoSuits.map((suit) => (
          <div key={suit.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-64 w-full bg-gray-100 p-4 flex items-center justify-center">
              <img src={suit.image} alt={suit.name} className="w-full h-full object-contain rounded-lg" loading="lazy" />
            </div>
            <div className="p-5 text-center space-y-4">
              <h3 className="text-xl font-bold">{suit.name}</h3>
              <p className="text-lg font-semibold text-blue-600">Ksh {suit.price}</p>
              {/* Sizes in horizontal scroll row */}
              <div className="flex flex-col items-start space-y-2">
                <span className="text-sm sm:text-base md:text-lg font-medium">Select Sizes</span>
                <div className="flex space-x-2 overflow-x-auto pb-2 w-full">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(suit.id, size)}
                      className={`px-3 sm:px-4 md:px-5 py-1 sm:py-2 rounded-lg border-2 text-xs sm:text-sm md:text-base ${selectedSizeForSuit[suit.id] === size ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-300'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              {/* Buttons */}
              <div className="space-y-2 mt-4">
                <button
                  onClick={() => {
                    setSelectedItem(suit);
                    setImmediateSuccess(true);
                    setShowPayment(true);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base"
                >
                  <CheckCircle className="w-5 h-5" /> Purchase Now
                </button>
                <button
                  onClick={() => handleAddToCart(suit)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base"
                >
                  <ShoppingCart className="w-5 h-5" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* View More for tuxedo suits */}
      <div className="flex justify-end mt-6 mb-8">
        <Link to="/suits/tuxedo" className="text-xl font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-2">
          <span>View More</span> <ChevronRight className="w-6 h-6" />
        </Link>
      </div>

      {/* 4. Kaunda Suits */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl p-6 text-center font-bold rounded-xl mb-8 animate-blink mt-8 mx-4">
        <p>Hurry Up! Limited Time Only! 💯 Fading Free Kaunda Suits – Get Yours Today!</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {kaundaSuits.map((suit) => (
          <div key={suit.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-64 w-full bg-gray-100 p-4 flex items-center justify-center">
              <img src={suit.image} alt={suit.name} className="w-full h-full object-contain rounded-lg" loading="lazy" />
            </div>
            <div className="p-5 text-center space-y-4">
              <h3 className="text-xl font-bold">{suit.name}</h3>
              <p className="text-lg font-semibold text-blue-600">Ksh {suit.price.toLocaleString()}</p>
              {/* Size selection row */}
              <div className="flex flex-col items-start space-y-2">
                <span className="text-sm sm:text-base md:text-lg font-medium">Select Sizes</span>
                <div className="flex space-x-2 overflow-x-auto pb-2 w-full">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(suit.id, size)}
                      className={`px-3 sm:px-4 md:px-5 py-1 sm:py-2 rounded-lg border-2 text-xs sm:text-sm md:text-base ${selectedSizeForSuit[suit.id] === size ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-300'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              {/* Buttons */}
              <div className="space-y-2 mt-4">
                <button
                  onClick={() => {
                    setSelectedItem(suit);
                    setImmediateSuccess(true);
                    setShowPayment(true);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" /> Purchase Now
                </button>
                <button
                  onClick={() => handleAddToCart(suit)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* View More for Kaunda suits */}
      <div className="flex justify-end mt-6 mb-8">
        <Link to="/suits/kaunda" className="text-xl font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-2">
          <span>View More</span> <ChevronRight className="w-6 h-6" />
        </Link>
      </div>

      {/* 5. Official Shirts */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl p-6 text-center font-bold rounded-xl mb-8 animate-blink mt-8 mx-4">
        <p>Hurry Up! Limited Time Only! 💯 Official Shirts – Get Yours Today!</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {officialShirts.map((shirt) => (
          <div key={shirt.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-64 w-full bg-gray-100 p-4 flex items-center justify-center">
              <img src={shirt.image} alt={shirt.name} className="w-full h-full object-contain rounded-lg" loading="lazy" />
            </div>
            <div className="p-5 text-center space-y-4">
              <h3 className="text-xl font-bold">{shirt.name}</h3>
              <p className="text-lg font-semibold text-blue-600">Ksh {shirt.price}</p>
              {/* Buttons */}
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setSelectedItem(shirt);
                    setImmediateSuccess(true);
                    setShowPayment(true);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" /> Purchase Now
                </button>
                <button
                  onClick={() => handleAddToCart(shirt)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* View More for official shirts */}
      <div className="flex justify-end mt-6 mb-8">
        <Link to="/shirts/official" className="text-xl font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-2">
          <span>View More</span> <ChevronRight className="w-6 h-6" />
        </Link>
      </div>

      {/* 6. Jeans Collection */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl p-6 text-center font-bold rounded-xl mb-8 animate-blink mt-8 mx-4">
        <p>Hurry up! Limited time. 💯 premium Jean collection.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {jeansProducts.map((jean) => (
          <div key={jean.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
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
              {/* Buttons */}
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setSelectedItem(jean);
                    setImmediateSuccess(true);
                    setShowPayment(true);
                  }}
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" /> Purchase
                </button>
                <button
                  onClick={() => handleAddToCart(jean)}
                  className="w-full bg-green-600 hover:bg-green-800 text-white py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* View More Button at bottom of Jeans collection */}
      <div className="flex justify-end mt-6 mb-8">
        <Link to="/jeans" className="text-xl font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-2">
          <span>View More</span> <ChevronRight className="w-6 h-6" />
        </Link>
      </div>

      {/* Cart modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white w-80 max-h-[80vh] overflow-y-auto p-4 rounded-lg shadow-lg relative">
            <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={() => setIsCartOpen(false)}>✕</button>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 flex-wrap gap-x-2">
              <ShoppingCart className="w-6 h-6" /> Your Cart ({cartCount})
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
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{item.name}</p>
                          <p className="text-xs text-gray-500">Added: {new Date(item.addedAt).toLocaleDateString()}</p>
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

      {/* Payment Popup */}
      {showPayment && selectedItem && (
        <PaymentPopup
          item={selectedItem}
          selectedSize={selectedSizeForSuit[selectedItem.id]}
          immediateSuccess={immediateSuccess}
          onClose={() => {
            setShowPayment(false);
            setSelectedItem(null);
            setImmediateSuccess(false);
            setSelectedSizeForSuit((prev) => ({
              ...prev,
              [selectedItem.id]: undefined,
            }));
          }}
        />
      )}
    </section>
  );
};

export default Home;