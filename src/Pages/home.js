import React, { useState, useEffect } from 'react';
import { CheckCircle, ChevronRight, ShoppingCart, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import all images as needed
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

import Tuxedo1 from '../Assets/Suits/tuxedo1.jpg';
import Tuxedo2 from '../Assets/Suits/tuxedo2.jpg';
import Tuxedo3 from '../Assets/Suits/tuxedo3.jpg';
import Tuxedo4 from '../Assets/Suits/tuxedo4.jpg';
import Tuxedo5 from '../Assets/Suits/tuxedo5.jpg';
import Tuxedo6 from '../Assets/Suits/tuxedo6.jpg';
import Tuxedo7 from '../Assets/Suits/tuxedo7.jpg';
import Tuxedo8 from '../Assets/Suits/tuxedo8.jpg';

import Kaunda1 from '../Assets/Suits/Kaunda1.jpg';
import Kaunda2 from '../Assets/Suits/kaunda2.jpg';
import Kaunda3 from '../Assets/Suits/kaunda3.jpg';
import Kaunda4 from '../Assets/Suits/kaunda4.jpg';

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
import jean10 from '../Assets/Jeans/jean10.jpg';
import Jean11 from '../Assets/Jeans/jean11.jpg';
import Jean12 from '../Assets/Jeans/jean12.jpg';

import Jacket1 from '../Assets/Jackets/jacket1.jpg';
import Jacket2 from '../Assets/Jackets/jacket2.jpg';
import Jacket3 from '../Assets/Jackets/jacket3.jpg';
import Jacket4 from '../Assets/Jackets/jacket4.webp';

import Belt5 from '../Assets/Accessories/belt5.jpg';
import Belt6 from '../Assets/Accessories/belt6.jpg';
import Belt7 from '../Assets/Accessories/belt7.jpg';
import Belt8 from '../Assets/Accessories/belt8.jpg';

const Home = () => {
  // State variables
  const [cartCount, setCartCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [paymentImmediate, setPaymentImmediate] = useState(false);
  const [selectedSizeForSuit, setSelectedSizeForSuit] = useState({});
  const [hoveredItemId, setHoveredItemId] = useState(null); // Track which item is hovered

  const Sizes = ['44', '46', '48', '50', '52', '54', '56', '58', '60'];

  // Handle adding to cart
  const handleAddToCart = (item) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = {
      ...item,
      size: item.category !== 'jeans' && item.category !== 'jacket' && item.category !== 'belt' ? (selectedSizeForSuit[item.id] || 'Not Selected') : 'N/A',
      addedAt: new Date().toISOString(),
    };
    localStorage.setItem('cart', JSON.stringify([...storedCart, newItem]));
    window.dispatchEvent(new Event('storage'));
    alert(`${item.name} added to cart`);
  };

  // Update cart count
  useEffect(() => {
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(cart.length);
    };
    updateCart();
    window.addEventListener('storage', updateCart);
    return () => window.removeEventListener('storage', updateCart);
  }, []);

  // Data arrays for products
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
    { id: 1, name: 'Velvet Tuxedo Suit', image: Tuxedo1, price: 15000 },
    { id: 2, name: 'Midnight Tuxedo Suit', image: Tuxedo2, price: 15000 },
    { id: 3, name: 'Ensemble Tuxedo Suit', image: Tuxedo3, price: 15000 },
    { id: 4, name: 'Classic Tuxedo Suit', image: Tuxedo4, price: 15000 },
    { id: 5, name: 'Slim Tuxedo Suit', image: Tuxedo5, price: 15000 },
    { id: 6, name: 'Designer Tuxedo Set', image: Tuxedo6, price: 15000 },
    { id: 7, name: 'Royal Dinner Suit', image: Tuxedo7, price: 15000 },
    { id: 8, name: 'Premium Tuxedo Suit', image: Tuxedo8, price: 15000 },
  ];

  const kaundaSuits = [
    { id: 1, name: 'Classic Kaunda Suit', image: Kaunda1, price: 14000 },
    { id: 2, name: 'Royal Kaunda Suit', image: Kaunda2, price: 14000 },
    { id: 3, name: 'Modern Kaunda Suit', image: Kaunda3, price:14000 },
    { id: 4, name: 'Elegent Kaunda Suit', image: Kaunda4, price: 14000 },
  ];

  const officialShirts = [
    { id: 1, name: 'Presidential Shirt', image: Official1, price: 3000},
    { id: 2, name: 'Presidential Shirt', image: Official2, price: 3000},
    { id: 3, name: 'Presidential Shirt', image: Official3, price: 3000},
    { id: 4, name: 'Presidential Shirt', image: Official4, price: 3000 },
    { id: 5, name: 'French Cuff Formal', image: Official5, price: 1800 },
    { id: 6, name: 'Slim Fit Office Shirt', image: Official6, price: 1800 },
    { id: 7, name: 'Double Cuff Business', image: Official7, price: 1800 },
    { id: 8, name: 'Designer Collar Shirt', image: Official8, price: 1800 },
  ];

  // Adding Jeans products
  const jeans = [
    { id: 1, name: 'Slim Fit jean', image: Jean1, price: 2000 },
    { id: 2, name: 'Vintage Jean', image: Jean2, price: 2000 },
    { id: 3, name: 'Ripped Skinny Jean', image: Jean3, price: 2000 },
    { id: 4, name: 'Classic Straight Leg', image: Jean4, price: 2000 },
    { id: 5, name: 'High Super Jean', image: Jean5, price: 2000 },
    { id: 6, name: 'Black Stretch jean', image: Jean6, price: 2000 },
    { id: 7, name: 'Classic Jean', image: Jean7, price: 2000 },
    { id: 8, name: 'Tapered Cargo Jeans', image: Jean8, price: 2000 },
    { id: 9, name: '💯Flare Jeans', image: Jean9, price: 2000 },
    { id: 10, name: 'Selvedge Denim', image: jean10, price: 2000 },
    { id: 11, name: '💯 Super Jean', image: Jean11, price: 2000 },
    { id: 12, name: 'Stretch Skinny Fit', image: Jean12, price: 2000 },
  ];

  // Leather Jackets data
  const leatherJackets = [
    { id: 1, name: 'Leather Jacket - Classic', image: Jacket1, price: 3500 },
    { id: 2, name: 'Leather Jacket - Premium', image: Jacket2, price: 3500 },
    { id: 3, name: 'Leather Jacket - Modern Fit', image: Jacket3, price: 3500 },
    { id: 4, name: 'Leather Jacket - Elegant Fit', image: Jacket4, price: 3500 },
  ];

  // Belts data
  const belts = [
    { id: 1, name: 'Premium Leather Belt', image: Belt5, price: 2000 },
    { id: 2, name: 'Premium Leather Belt', image: Belt6, price: 2000 },
    { id: 3, name: 'Stylish Brown Belt', image: Belt7, price: 2000 },
    { id: 4, name: 'Elegant Black Belt', image: Belt8, price: 2000 },
  ];

  // Categories for display
  const categories = [
    {
      title: 'Three-Piece Suits',
      items: threePieceSuits,
      link: '/suits/3piecesuits',
    },
    {
      title: 'Two-Piece Suits',
      items: twoPieceSuits,
      link: '/suits/2piecesuits',
    },
    {
      title: 'Tuxedo Dinner Suits',
      items: tuxedoSuits,
      link: '/suits/tuxedo',
    },
    {
      title: 'Kaunda Suits',
      items: kaundaSuits,
      link: '/suits/kaunda',
    },
    {
      title: 'Official Shirts',
      items: officialShirts,
      link: '/shirts/official',
    },
    {
      title: 'Jeans',
      items: jeans,
      link: '/jeans',
    },
    {
      title: 'Leather Jackets',
      items: leatherJackets,
      link: '/jackets/leather',
    },
    {
      title: 'Belts',
      items: belts,
      link: '/accessories/belt', // Link for Belt category
    },
  ];

  // Handle mouse hover to zoom item
  const handleMouseEnter = (id) => {
    setHoveredItemId(id);
  };

  // Handle mouse leave to remove zoom effect
  const handleMouseLeave = () => {
    setHoveredItemId(null);
  };

  // Function to open modal for purchase
  const handlePurchaseClick = (item) => {
    setSelectedItem(item);
    setPaymentImmediate(true);
    setShowModal(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
    setPaymentImmediate(false);
  };

  return (
    <section className="p-6 sm:p-10 bg-gray-50 min-h-screen">
      {/* Banner */}
      {/* <div className="mb-4 p-4 bg-yellow-100 rounded-lg shadow-md flex items-center justify-between">
        <div className="text-gray-800 font-semibold">
          🚀 Special Offer! Free shipping on orders over Ksh 10,000! Limited time only!
        </div> */}
        {/* <Link
          to="/special-offer"
          className="bg-yellow-300 px-3 py-1 rounded-lg font-semibold hover:bg-yellow-400"
        >
          View Details
        </Link> */}
      {/* </div> */}

      {/* Categories */}
      {categories.map((category) => (
        <div key={category.title}>
          <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl p-6 text-center font-bold rounded-xl mb-8 animate-blink mt-16 mx-4">
            <p>{category.title} – Hurry Up!! 🚀 Limited Time Offer! Get Yours Today! Get Supper Wool💯 Free
              Fading Products 
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {category.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative"
                onMouseEnter={() => handleMouseEnter(item.id)} // Zoom on hover
                onMouseLeave={handleMouseLeave} // Remove zoom on mouse leave
              >
                <div
                  className={`h-64 w-full bg-gray-100 p-4 flex items-center justify-center ${hoveredItemId === item.id ? 'transform scale-150 transition-all duration-300' : ''}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>

                {/* View More Button (visible on hover) */}
                {hoveredItemId === item.id && (
                  <div className="absolute top-4 right-4">
                    <Link
                      to={category.link} // Correct link for the category
                      className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                    >
                      View More
                    </Link>
                  </div>
                )}

                <div className="p-5 text-center space-y-4">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <div className="flex justify-center mb-2">
                    <span className="text-blue-600 font-bold text-xl">Ksh {item.price}</span>
                  </div>

                  {/* Sizes */}
                  {category.title !== 'Jeans' && category.title !== 'Official Shirts' && category.title !== 'Leather Jackets' && category.title !== 'Belts' && (
                    <div className="flex flex-col items-start space-y-2">
                      <span className="text-sm sm:text-base md:text-lg font-medium">Select Sizes</span>
                      <div className="flex space-x-2 overflow-x-auto pb-2 w-full">
                        {Sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSizeForSuit((prev) => ({ ...prev, [item.id]: prev[item.id] === size ? undefined : size }))} 
                            className={`px-3 sm:px-4 md:px-5 py-1 sm:py-2 rounded-lg border-2 text-xs sm:text-sm md:text-base ${selectedSizeForSuit[item.id] === size ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-300'}`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="space-y-2 mt-4">
                    <button
                      onClick={() => handlePurchaseClick(item)}
                      className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
                    >
                      <CheckCircle className="w-5 h-5" /> Purchase
                    </button>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
                    >
                      <ShoppingCart className="w-5 h-5" /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-6 mb-8">
            <Link
              to={category.link} // Correct link for View More for the category
              className="text-xl font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-2"
            >
              <span>View More</span> <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      ))}

      {/* Payment Popup Modal */}
      {showModal && selectedItem && (
        <PaymentPopup item={selectedItem} selectedSize={selectedSizeForSuit[selectedItem.id]} onClose={handleCloseModal} />
      )}
    </section>
  );
};

// Payment Popup component
const PaymentPopup = ({ item, selectedSize, onClose }) => {
  const [amount, setAmount] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const paymentDetails = {
    paybill: '542542',
    account: '378179',
  };

  const handlePaymentConfirmation = () => {
    const content = `CASUAL WEAR PURCHASE\n-------------------\nItem: ${item?.name}\nProduct ID: ${item?.id}\nSize: ${selectedSize}\nPaybill: ${paymentDetails.paybill}\nAccount: ${paymentDetails.account}\nAmount Paid: Ksh ${amount || '________'}\nStandard Price: Ksh ${item?.price?.toLocaleString()}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `casual_payment_${item?.id}.txt`;
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
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center gap-2">
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
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                <span className="font-medium text-sm sm:text-base">Paybill:</span>
                <span className="font-mono text-blue-600 font-bold">{paymentDetails.paybill}</span>
              </div>
              
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                <span className="font-medium text-sm sm:text-base">Account:</span>
                <span className="font-mono text-blue-600 font-bold">{paymentDetails.account}</span>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm sm:text-base">Standard Price:</span>
                  <span className="font-mono text-green-600 font-bold">Ksh {item?.price?.toLocaleString()}</span>
                </div>
              </div>
              

              <input
                type="number"
                placeholder="Enter amount (Ksh)"
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                value={amount}
                onChange={(e) => setAmount(e.target.value.replace(/\D/g, ''))}
                min="1700"
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={handlePaymentConfirmation}
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

export default Home;

