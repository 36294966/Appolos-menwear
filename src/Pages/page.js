import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, ChevronLeft, ChevronRight, ShoppingCart, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import your images here...
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

const PaymentPopup = ({ item, selectedSize, onClose }) => {
  const [amount, setAmount] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const paymentDetails = {
    paybill: '542542',
    account: '378179',
    standardPrice: 13000,
  };

  const handlePaymentConfirmation = () => {
    const content = `SUIT PURCHASE
-------------------------
Item: ${item?.name}
Product ID: ${item?.id}
Size: ${selectedSize}
Paybill: ${paymentDetails.paybill}
Account: ${paymentDetails.account}
Amount Paid: Ksh ${amount || '________'}
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
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="flex gap-4 mt-4">
              <button
                onClick={handlePaymentConfirmation}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" /> Confirm Payment
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
              >
                <XCircle className="w-5 h-5" /> Cancel
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

const Home = () => {
  // **Declare only once here**
  const [cartCount, setCartCount] = useState(0);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSizeForSuit, setSelectedSizeForSuit] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  const sizes = ['44', '46', '48', '50', '52', '54', '56', '58', '60'];

  // Refs for size scroll containers
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

  // Data arrays (unchanged)
  const threePieceSuits = [
    { id: 1, name: 'Executive Three-Piece Suit', image: Photo1, price: 13000 },
    { id: 2, name: 'Classic Fading Free Three-Piece Suit', image: Photo2, price: 13000 },
    { id: 3, name: 'Premium Linen Three-Piece Suit', image: Photo3, price: 13000 },
    { id: 4, name: 'Classic Pinstripe Ensemble', image: Photo4, price: 13000 },
    { id: 5, name: 'Modern-Fit Three-Piece Suit', image: ThreePiece1, price: 13000 },
    { id: 6, name: 'Royal Navy Three-Piece Suit', image: ThreePiece2, price: 13000 },
    { id: 7, name: 'Luxury Three-Piece Suit', image: ThreePiece3, price: 13000 },
    { id: 8, name: 'Sleek Modern Three-Piece Suit', image: ThreePiece4, price: 13000 },
  ];

  const twoPieceSuits = [
    { id: 1, name: 'Executive Two-Piece Suit', image: TwoPiece1, price: 11000 },
    { id: 2, name: 'Modern Classic Two-Piece Suit', image: TwoPiece2, price: 11000 },
    { id: 3, name: 'Premium Two-Piece Suit', image: TwoPiece3, price: 11000 },
    { id: 4, name: 'Business Two-Piece Suit', image: TwoPiece4, price: 12000 },
    { id: 5, name: '💯 Super Classic Two-Piece Suit', image: TwoPiece5, price: 12000 },
    { id: 7, name: 'Modern Two-Piece Suit', image: TwoPiece7, price: 13000 },
    { id: 8, name: 'Premium Two-Piece Suit', image: TwoPiece8, price: 14000 },
    { id: 9, name: 'Elegant Two-Piece Suit', image: TwoPiece9, price: 14500 },
  ];

  const tuxedoSuits = [
    { id: 1, name: 'Classic Tuxedo Dinner Suit', image: Tuxedo1, price: 15000 },
    { id: 2, name: 'Royal Tuxedo Dinner Suit', image: Tuxedo2, price: 15500 },
    { id: 3, name: 'Premium Tuxedo Dinner Suit', image: Tuxedo3, price: 16000 },
    { id: 4, name: 'Luxury Tuxedo Dinner Suit', image: Tuxedo4, price: 16500 },
    { id: 5, name: 'Elegant Tuxedo Dinner Suit', image: Tuxedo5, price: 17000 },
    { id: 6, name: 'Exclusive Tuxedo Dinner Suit', image: Tuxedo6, price: 17500 },
    { id: 7, name: 'Designer Tuxedo Dinner Suit', image: Tuxedo7, price: 18000 },
    { id: 8, name: 'Glamorous Tuxedo Dinner Suit', image: Tuxedo8, price: 18500 },
  ];

  const kaundaSuits = [
    { id: 1, name: 'Classic Kaunda Suit', image: Kaunda1, price: 10000 },
    { id: 2, name: 'Royal Kaunda Suit', image: Kaunda2, price: 11000 },
    { id: 3, name: 'Modern Kaunda Suit', image: Kaunda3, price: 12000 },
    { id: 4, name: 'Elegant Kaunda Suit', image: Kaunda4, price: 12500 },
  ];

  const officialShirts = [
    { id: 1, name: 'White Official Shirt', image: Official1, price: 2500 },
    { id: 2, name: 'Blue Official Shirt', image: Official2, price: 2700 },
    { id: 3, name: 'Black Official Shirt', image: Official3, price: 2900 },
    { id: 4, name: 'Red Official Shirt', image: Official4, price: 2800 },
    { id: 5, name: 'Grey Official Shirt', image: Official5, price: 3000 },
    { id: 6, name: 'Green Official Shirt', image: Official6, price: 3200 },
    { id: 7, name: 'Yellow Official Shirt', image: Official7, price: 3300 },
    { id: 8, name: 'Pink Official Shirt', image: Official8, price: 3400 },
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

  // **Handle Add to Cart**
  const handleAddToCart = (item) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = {
      ...item,
      size: item.category !== 'jeans' ? (selectedSizeForSuit[item.id] || 'Not Selected') : 'N/A',
      addedAt: new Date().toISOString()
    };
    localStorage.setItem('cart', JSON.stringify([...storedCart, newItem]));
    window.dispatchEvent(new Event('storage'));
    alert(`${item.name} added to cart`);
  };

  // **Scroll handlers for size arrows**
  const handlePrevClick = (id) => {
    const ref = sizeScrollRefs.current[id];
    if (ref) ref.scrollBy({ left: -150, behavior: 'smooth' });
  };
  const handleNextClick = (id) => {
    const ref = sizeScrollRefs.current[id];
    if (ref) ref.scrollBy({ left: 150, behavior: 'smooth' });
  };

  // **Handle size selection**
  const handleSizeSelect = (suitId, size) => {
    setSelectedSizeForSuit(prev => ({
      ...prev,
      [suitId]: prev[suitId] === size ? undefined : size,
    }));
  };

  // **Calculate Cart Total**
  const cartTotal = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return storedCart.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <section className="p-6 sm:p-10 bg-gray-50 min-h-screen space-y-16">

      {/* -- Three Piece Suits -- */}
      <div>
        {/* Banner with label */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl p-6 text-center font-bold rounded-xl mt-24 mb-8 animate-blink mx-4">
          <p>Hurry Up! Limited Time Only! 💯 Super Wool Free Fading ThreePiece Suits – Get Yours Today!</p>
        </div>
        {/* Card moves down slightly */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 -mt-4">
          {threePieceSuits.map((suit) => (
            <div key={suit.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
              <div className="h-64 bg-gray-100 p-4 flex items-center justify-center">
                <img src={suit.image} alt={suit.name} className="w-full h-full object-contain rounded-lg" />
              </div>
              {/* Size selection with label and arrows */}
              <div className="p-4 text-center relative">
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Select Size</h4>
                {/* Arrows and scrollable sizes */}
                <div className="flex items-center justify-center mb-2">
                  <button onClick={() => handlePrevClick(suit.id)} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 mr-2" aria-label="Scroll left">
                    <ChevronLeft />
                  </button>
                  <div className="flex space-x-2 overflow-x-auto scrollbar-hide" ref={(el) => (sizeScrollRefs.current[suit.id] = el)}>
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => handleSizeSelect(suit.id, size)}
                        className={`px-4 py-2 rounded-lg border-2 ${selectedSizeForSuit[suit.id] === size ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <button onClick={() => handleNextClick(suit.id)} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 ml-2" aria-label="Scroll right">
                    <ChevronRight />
                  </button>
                </div>
                {/* Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setSelectedItem(suit);
                      setShowPayment(true);
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-800 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" /> Purchase Now
                  </button>
                  <button
                    onClick={() => handleAddToCart(suit)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View More button */}
        <div className="flex justify-end mt-6 mb-8">
          <Link to="/suits/3piecesuits" className="text-xl font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-2">
            <span>View More</span> <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* -- Two Piece Suits -- */}
      <div>
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl p-6 text-center font-bold rounded-xl mb-8 mx-4">
          <p>Hurry Up! Limited Time Only! 💯 Super Wool Free Fading Two-Piece Suits – Get Yours Today!</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {twoPieceSuits.map((suit) => (
            <div key={suit.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
              <div className="h-64 bg-gray-100 p-4 flex items-center justify-center">
                <img src={suit.image} alt={suit.name} className="w-full h-full object-contain rounded-lg" />
              </div>
              {/* Size selection with label and arrows */}
              <div className="p-4 text-center">
                <h4 className="font-semibold mb-2">Select Size</h4>
                {/* Arrows */}
                <div className="flex items-center justify-center mb-2">
                  <button onClick={() => handlePrevClick(suit.id)} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 mr-2" aria-label="Scroll left">
                    <ChevronLeft />
                  </button>
                  {/* Size buttons scroll container */}
                  <div className="flex space-x-2 overflow-x-auto scrollbar-hide" ref={(el) => (sizeScrollRefs.current[suit.id] = el)}>
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => handleSizeSelect(suit.id, size)}
                        className={`px-4 py-2 rounded-lg border-2 ${selectedSizeForSuit[suit.id] === size ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <button onClick={() => handleNextClick(suit.id)} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 ml-2" aria-label="Scroll right">
                    <ChevronRight />
                  </button>
                </div>
                {/* Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setSelectedItem(suit);
                      setShowPayment(true);
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-800 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" /> Purchase Now
                  </button>
                  <button
                    onClick={() => handleAddToCart(suit)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View More button */}
        <div className="flex justify-end mt-6 mb-8">
          <Link to="/suits/two-piecesuits" className="text-xl font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-2">
            <span>View More</span> <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* -- Tuxedo Dinner Suits -- */}
      <div>
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl p-6 text-center font-bold rounded-xl mb-8 mx-4">
          <p>Hurry Up! Limited Time Only! 💯 Fading Free Tuxedo Dinner Suits – Get Yours Today!</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tuxedoSuits.map((suit) => (
            <div key={suit.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
              <div className="h-64 bg-gray-100 p-4 flex items-center justify-center">
                <img src={suit.image} alt={suit.name} className="w-full h-full object-contain rounded-lg" />
              </div>
              {/* Size selection with label and arrows */}
              <div className="p-4 text-center">
                <h4 className="font-semibold mb-2">Select Size</h4>
                {/* Arrows */}
                <div className="flex items-center justify-center mb-2">
                  <button onClick={() => handlePrevClick(suit.id)} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 mr-2" aria-label="Scroll left">
                    <ChevronLeft />
                  </button>
                  {/* Size buttons scroll container */}
                  <div className="flex space-x-2 overflow-x-auto scrollbar-hide" ref={(el) => (sizeScrollRefs.current[suit.id] = el)}>
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => handleSizeSelect(suit.id, size)}
                        className={`px-4 py-2 rounded-lg border-2 ${selectedSizeForSuit[suit.id] === size ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <button onClick={() => handleNextClick(suit.id)} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 ml-2" aria-label="Scroll right">
                    <ChevronRight />
                  </button>
                </div>
                {/* Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setSelectedItem(suit);
                      setShowPayment(true);
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-800 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" /> Purchase Now
                  </button>
                  <button
                    onClick={() => handleAddToCart(suit)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View More button */}
        <div className="flex justify-end mt-6 mb-8">
          <Link to="/suits/tuxedo" className="text-xl font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-2">
            <span>View More</span> <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* -- Kaunda Suits -- */}
      <div>
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl p-6 text-center font-bold rounded-xl mb-8 mt-8 mx-4">
          <p>Hurry Up! Limited Time Only! 💯 Fading Free Kaunda Suits – Get Yours Today!</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {kaundaSuits.map((suit) => (
            <div key={suit.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
              <div className="h-64 bg-gray-100 p-4 flex items-center justify-center">
                <img src={suit.image} alt={suit.name} className="w-full h-full object-contain rounded-lg" />
              </div>
              {/* Size selection with label and arrows */}
              <div className="p-4 text-center">
                <h4 className="font-semibold mb-2">Select Size</h4>
                {/* Arrows */}
                <div className="flex items-center justify-center mb-2">
                  <button onClick={() => handlePrevClick(suit.id)} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 mr-2" aria-label="Scroll left">
                    <ChevronLeft />
                  </button>
                  {/* Size buttons scroll container */}
                  <div className="flex space-x-2 overflow-x-auto scrollbar-hide" ref={(el) => (sizeScrollRefs.current[suit.id] = el)}>
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => handleSizeSelect(suit.id, size)}
                        className={`px-4 py-2 rounded-lg border-2 ${selectedSizeForSuit[suit.id] === size ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <button onClick={() => handleNextClick(suit.id)} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 ml-2" aria-label="Scroll right">
                    <ChevronRight />
                  </button>
                </div>
                {/* Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setSelectedItem(suit);
                      setShowPayment(true);
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-800 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" /> Purchase Now
                  </button>
                  <button
                    onClick={() => handleAddToCart(suit)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View More button */}
        <div className="flex justify-end mt-6 mb-8">
          <Link to="/suits/kaunda" className="text-xl font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-2">
            <span>View More</span> <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* -- Official Shirts -- */}
      <div>
        {/* Label */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl p-6 text-center font-bold rounded-xl mb-8 mt-8 mx-4">
          <p>Hurry Up! Limited Time Only! 💯 Official Shirts – Get Yours Today!</p>
        </div>
        {/* Items grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {officialShirts.map((shirt) => (
            <div key={shirt.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
              <div className="h-64 w-full bg-gray-100 p-4 flex items-center justify-center">
                <img src={shirt.image} alt={shirt.name} className="w-full h-full object-contain rounded-lg" />
              </div>
              {/* Buttons */}
              <div className="p-4 text-center space-y-2">
                <button
                  onClick={() => {
                    setSelectedItem(shirt);
                    setShowPayment(true);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-800 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" /> Purchase Now
                </button>
                <button
                  onClick={() => handleAddToCart(shirt)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* View More */}
        <div className="flex justify-end mt-6 mb-8">
          <Link to="/shirts/official" className="text-xl font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-2">
            <span>View More</span> <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* -- Jeans Collection -- */}
      <div>
        {/* Label */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl p-6 text-center font-bold rounded-xl mb-8 mt-8 mx-4">
          <p>Hurry up! Limited time. 💯 premium Jean collection.</p>
        </div>
        {/* Items grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {jeansProducts.map((jean) => (
            <div key={jean.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
              <div className="h-64 p-4 flex items-center justify-center bg-gray-50">
                <img src={jean.image} alt={jean.name} className="w-full h-full object-cover rounded-lg" />
              </div>
              {/* Item info and buttons */}
              <div className="p-6 text-center space-y-2">
                <h3 className="text-xl font-bold mb-1">{jean.name}</h3>
                <p className="text-lg font-bold mb-2 text-blue-600">Ksh {jean.price.toLocaleString()}</p>
                {/* Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setSelectedItem(jean);
                      setShowPayment(true);
                    }}
                    className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" /> Purchase
                  </button>
                  <button
                    onClick={() => handleAddToCart(jean)}
                    className="w-full bg-green-600 hover:bg-green-800 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View More Button */}
        <div className="flex justify-end mt-6 mb-8">
          <Link to="/jeans" className="text-xl font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-2">
            <span>View More</span> <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white w-80 max-h-[80vh] overflow-y-auto p-4 rounded-lg relative">
            <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={() => setIsCartOpen(false)}>✕</button>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <ShoppingCart className="w-6 h-6" /> Your Cart ({cartCount})
            </h3>
            {cartCount === 0 ? (
              <p className="text-gray-600">Your cart is empty</p>
            ) : (
              <>
                {JSON.parse(localStorage.getItem('cart'))?.map((item, index) => (
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

      {/* Payment Popup (your existing component) */}
      {showPayment && selectedItem && (
        <PaymentPopup
          item={selectedItem}
          selectedSize={selectedSizeForSuit[selectedItem.id]}
          onClose={() => {
            setShowPayment(false);
            setSelectedItem(null);
          }}
        />
      )}
    </section>
  );
};

export default Home;

