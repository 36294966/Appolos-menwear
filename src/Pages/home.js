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
import ThreePiece5 from '../Assets/Suits/threepiece5.jpg';
import ThreePiece6 from '../Assets/Suits/threepiece6.jpg';
import ThreePiece7 from '../Assets/Suits/threepiece7.jpg';
import ThreePiece8 from '../Assets/Suits/threepiece8.jpg';
import ThreePiece9 from '../Assets/Suits/threepiece9.jpg';
import ThreePiece10 from '../Assets/Suits/threepiece10.jpg';
import ThreePiece11 from '../Assets/Suits/threepiece11.jpg';
import ThreePiece12 from '../Assets/Suits/threepiece12.jpg';
import ThreePiece14 from '../Assets/Suits/threepiece14.jpg';
import ThreePiece15 from '../Assets/Suits/threepiece15.jpg';
import ThreePiece16 from '../Assets/Suits/threepiece16.jpg';
import ThreePiece17 from '../Assets/Suits/threepiece17.jpg';
import ThreePiece18 from '../Assets/Suits/threepiece18.jpg';
import ThreePiece19 from '../Assets/Suits/threepiece19.jpg';
import ThreePiece20 from '../Assets/Suits/threepiece20.jpg';
import ThreePiece21 from '../Assets/Suits/threepiece21.jpg';
import ThreePiece22 from '../Assets/Suits/threepiece22.jpg';
import ThreePiece23 from '../Assets/Suits/threepiece23.jpg';
import ThreePiece24 from '../Assets/Suits/threepiece24.jpg';
import ThreePiece25 from '../Assets/Suits/threepiece25.jpg';
import ThreePiece26 from '../Assets/Suits/threepiece26.jpg';
import ThreePiece27 from '../Assets/Suits/threepiece27.jpg';
import ThreePiece28 from '../Assets/Suits/threepiece28.jpg';
import ThreePiece29 from '../Assets/Suits/threepiece29.jpg';
import ThreePiece30 from '../Assets/Suits/threepiece30.jpg';
import ThreePiece31 from '../Assets/Suits/threepiece31.jpg';
import ThreePiece33 from '../Assets/Suits/threepiece33.jpg';
import ThreePiece32 from '../Assets/Suits/threepiece32.jpg';
import DoubleBreast1 from '../Assets/Suits/doubleBreast1.jpg';
import DoubleBreast2 from '../Assets/Suits/doubleBreast2.jpg';

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
  const [cartCount, setCartCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [paymentImmediate, setPaymentImmediate] = useState(false);
  const [selectedSizeForSuit, setSelectedSizeForSuit] = useState({});
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const Sizes = ['44', '46', '48', '50', '52', '54', '56', '58', '60'];

  // Handle adding to cart
  const handleAddToCart = (item, event) => {
    if (event) event.preventDefault();
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = {
      ...item,
      size: item.category !== 'jeans' && item.category !== 'jacket' && item.category !== 'belt' ? (selectedSizeForSuit[item.id] || 'Not Selected') : 'N/A',
      addedAt: new Date().toISOString(),
    };
    localStorage.setItem('cart', JSON.stringify([...storedCart, newItem]));
    window.dispatchEvent(new Event('storage'));
    alert(`${item.name} added to cart`);
    
    // Reset the size for this specific item
    setSelectedSizeForSuit(prev => ({ ...prev, [item.id]: undefined }));
  };

  // Handle purchase click
  const handlePurchaseClick = (item, event) => {
    if (event) event.preventDefault();
    setSelectedItem(item);
    setPaymentImmediate(true);
    setShowModal(true);
    
    // Reset the size for this specific item
    setSelectedSizeForSuit(prev => ({ ...prev, [item.id]: undefined }));
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
    { id: 1, name: 'Executive Three-Piece Suit ⭐⭐⭐⭐⭐', image: Photo1, price: 13000, category: 'three-piece' },
    { id: 2, name: 'Elegance Three-Piece Suit ⭐⭐⭐⭐⭐', image: Photo2, price: 13000, category: 'three-piece' },
    { id: 3, name: 'Premium Three-Piece Suit ⭐⭐⭐⭐⭐', image: Photo3, price: 13000, category: 'three-piece' },
    { id: 4, name: 'Classic Pinstripe Ensemble ⭐⭐⭐⭐⭐', image: Photo4, price: 13000, category: 'three-piece' },
    { id: 5, name: 'Modern-Fit Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece1, price: 13000, category: 'three-piece' },
    { id: 6, name: 'Royal Navy Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece2, price: 13000, category: 'three-piece' },
    { id: 7, name: 'Luxury Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece3, price: 13000, category: 'three-piece' },
    { id: 8, name: 'Modern Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece4, price: 13000, category: 'three-piece' },
    { id: 9, name: 'Elite Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece5, price: 13000, category: 'three-piece' },
    { id: 10, name: 'Prestige Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece6, price: 13000, category: 'three-piece' },
    { id: 11, name: 'Imperial Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece7, price: 13000, category: 'three-piece' },
    { id: 12, name: 'LuxeLine Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece9, price: 13000, category: 'three-piece' },
    { id: 13, name: 'Sovereign Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece10, price: 13000, category: 'three-piece' },
    { id: 14, name: 'Heritage Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece11, price: 13000, category: 'three-piece' },
    { id: 15, name: 'Legacy Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece12, price: 13000, category: 'three-piece' },
    { id: 16, name: 'Opulence Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece14, price: 13000, category: 'three-piece' },
    { id: 17, name: 'Sophistication Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece15, price: 13000, category: 'three-piece' },
    { id: 18, name: 'Couture ClassicsThree-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece16, price: 13000, category: 'three-piece' },
    { id: 20, name: 'Dignity Collection Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece17, price: 13000, category: 'three-piece' },
    { id: 21, name: 'Vanguard Elite Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece18, price: 13000, category: 'three-piece' },
    { id: 22, name: 'Summit Suits Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece19, price: 13000, category: 'three-piece' },
    { id: 23, name: 'Executive Edge Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece33, price: 13000, category: 'three-piece' },
    { id: 24, name: 'Eminence Collection Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece21, price: 13000, category: 'three-piece' },
    { id: 25, name: 'Refined Royalty Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece22, price: 13000, category: 'three-piece' },
    { id: 26, name: 'Pinnacle Series Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece23, price: 13000, category: 'three-piece' },
    { id: 27, name: 'Urban Aristocrat Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece24, price: 13000, category: 'three-piece' },
    { id: 28, name: 'Noble AttireThree-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece25, price: 13000, category: 'three-piece' },
    { id: 29, name: 'Legacy Luxe Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece26, price: 13000, category: 'three-piece' },
    { id: 30, name: 'Signature Sovereign Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece27, price: 13000, category: 'three-piece' },
    { id: 31, name: 'Majesty Mode Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece28, price: 13000, category: 'three-piece' },
    { id: 32, name: 'Imperial Attire Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece29, price: 13000, category: 'three-piece' },
    { id: 33, name: 'Monarch Line Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece30, price: 13000, category: 'three-piece' },
    { id: 34, name: 'Crown & Confidence Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece31, price: 13000, category: 'three-piece' },
    { id: 35, name: 'Virtue Vogue Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece32, price: 13000, category: 'three-piece' },
    { id: 36, name: 'Premium Double Breast Suit⭐⭐⭐⭐⭐', image: DoubleBreast1, price: 13500, category: 'double-breast' },
    { id: 37, name: 'Elegant Double Breast Suit⭐⭐⭐⭐⭐', image: DoubleBreast2, price: 13500, category: 'double-breast' },
  ];

  const twoPieceSuits = [
    { id: 38, name: 'Executive Two-Piece Suit 💯', image: TwoPiece1, price: 11000, category: 'two-piece' },
    { id: 39, name: 'Modern Classic Two-Piece Suit💯', image: TwoPiece2, price: 11000, category: 'two-piece' },
    { id: 40, name: 'Premium Two-Piece Suit💯', image: TwoPiece3, price: 11000, category: 'two-piece' },
    { id: 41, name: 'Business Two-Piece Suit💯', image: TwoPiece4, price: 11000, category: 'two-piece' },
    { id: 42, name: 'Super Classic Two-Piece Suit💯', image: TwoPiece5, price: 11000, category: 'two-piece' },
    { id: 43, name: 'Modern Two-Piece Suit💯', image: TwoPiece7, price: 11000, category: 'two-piece' },
    { id: 44, name: 'Premium Two-Piece Suit💯', image: TwoPiece8, price: 11000, category: 'two-piece' },
    { id: 45, name: 'Elegant Two-Piece Suit💯', image: TwoPiece9, price: 11000, category: 'two-piece' },
  ];

  const tuxedoSuits = [
    { id: 46, name: 'Velvet Tuxedo Suit⭐⭐⭐⭐⭐', image: Tuxedo1, price: 15000, category: 'tuxedo' },
    { id: 47, name: 'Midnight Tuxedo Suit⭐⭐⭐⭐⭐', image: Tuxedo2, price: 15000, category: 'tuxedo' },
    { id: 48, name: 'Ensemble Tuxedo Suit⭐⭐⭐⭐⭐', image: Tuxedo3, price: 15000, category: 'tuxedo' },
    { id: 49, name: 'Classic Tuxedo Suit⭐⭐⭐⭐⭐', image: Tuxedo4, price: 15000, category: 'tuxedo' },
    { id: 50, name: 'Slim Tuxedo Suit⭐⭐⭐⭐⭐', image: Tuxedo5, price: 15000, category: 'tuxedo' },
    { id: 51, name: 'Designer Tuxedo Set⭐⭐⭐⭐⭐', image: Tuxedo6, price: 15000, category: 'tuxedo' },
    { id: 52, name: 'Royal Dinner Suit⭐⭐⭐⭐⭐', image: Tuxedo7, price: 15000, category: 'tuxedo' },
    { id: 53, name: 'Premium Tuxedo Suit⭐⭐⭐⭐⭐', image: Tuxedo8, price: 15000, category: 'tuxedo' },
  ];

  const kaundaSuits = [
    { id: 54, name: 'Classic Kaunda Suit⭐⭐⭐⭐⭐', image: Kaunda1, price: 14000, category: 'kaunda' },
    { id: 55, name: 'Royal Kaunda Suit⭐⭐⭐⭐⭐', image: Kaunda2, price: 14000, category: 'kaunda' },
    { id: 56, name: 'Modern Kaunda Suit⭐⭐⭐⭐⭐', image: Kaunda3, price: 14000, category: 'kaunda' },
    { id: 57, name: 'Elegant Kaunda Suit⭐⭐⭐⭐⭐', image: Kaunda4, price: 14000, category: 'kaunda' },
  ];

  const officialShirts = [
    { id: 58, name: 'Presidential Shirt⭐⭐⭐⭐⭐', image: Official1, price: 3000, category: 'shirt' },
    { id: 59, name: 'Presidential Shirt⭐⭐⭐⭐⭐', image: Official2, price: 3000, category: 'shirt' },
    { id: 60, name: 'Presidential Shirt⭐⭐⭐⭐⭐', image: Official3, price: 3000, category: 'shirt' },
    { id: 61, name: 'Presidential Shirt⭐⭐⭐⭐⭐', image: Official4, price: 3000, category: 'shirt' },
    { id: 62, name: 'French Cuff Formal⭐⭐⭐⭐⭐', image: Official5, price: 1800, category: 'shirt' },
    { id: 63, name: 'Slim Fit Office Shirt⭐⭐⭐⭐⭐', image: Official6, price: 1800, category: 'shirt' },
    { id: 64, name: 'Double Cuff Business⭐⭐⭐⭐⭐', image: Official7, price: 1800, category: 'shirt' },
    { id: 65, name: 'Designer Collar Shirt⭐⭐⭐⭐⭐', image: Official8, price: 1800, category: 'shirt' },
  ];

  const jeans = [
    { id: 66, name: 'Slim Fit jean 👖', image: Jean1, price: 2000, category: 'jeans' },
    { id: 67, name: 'Vintage Jean👖', image: Jean2, price: 2000, category: 'jeans' },
    { id: 68, name: 'Ripped Skinny Jean👖', image: Jean3, price: 2000, category: 'jeans' },
    { id: 69, name: 'Classic Straight Leg👖', image: Jean4, price: 2000, category: 'jeans' },
    { id: 70, name: 'High Super Jean👖', image: Jean5, price: 2000, category: 'jeans' },
    { id: 71, name: 'Black Stretch jean👖', image: Jean6, price: 2000, category: 'jeans' },
    { id: 72, name: 'Classic Jean👖', image: Jean7, price: 2000, category: 'jeans' },
    { id: 73, name: 'Tapered Cargo Jeans👖', image: Jean8, price: 2000, category: 'jeans' },
    { id: 74, name: '💯Flare Jeans👖', image: Jean9, price: 2000, category: 'jeans' },
    { id: 75, name: 'Selvedge Denim👖', image: jean10, price: 2000, category: 'jeans' },
    { id: 76, name: '💯 Super Jean👖', image: Jean11, price: 2000, category: 'jeans' },
    { id: 77, name: 'Stretch Skinny Fit👖', image: Jean12, price: 2000, category: 'jeans' },
  ];

  const leatherJackets = [
    { id: 78, name: '🔥Leather Jacket - Classic', image: Jacket1, price: 3500, category: 'jacket' },
    { id: 79, name: '🔥Leather Jacket - Premium', image: Jacket2, price: 3500, category: 'jacket' },
    { id: 80, name: '🔥Leather Jacket - Modern Fit', image: Jacket3, price: 3500, category: 'jacket' },
    { id: 81, name: '🔥Leather Jacket - Elegant Fit', image: Jacket4, price: 3500, category: 'jacket' },
  ];

  const belts = [
    { id: 82, name: '💯Premium Leather Belt', image: Belt5, price: 2000, category: 'belt' },
    { id: 83, name: '💯Premium Leather Belt', image: Belt6, price: 2000, category: 'belt' },
    { id: 84, name: '💯Stylish Brown Belt', image: Belt7, price: 2000, category: 'belt' },
    { id: 85, name: '💯Elegant Black Belt', image: Belt8, price: 2000, category: 'belt' },
  ];

  // Categories for display
  const categories = [
    { title: 'Three-Piece Suits', items: threePieceSuits, link: '/suits/3piecesuits' },
    { title: 'Two-Piece Suits', items: twoPieceSuits, link: '/suits/2piecesuits' },
    { title: 'Tuxedo Dinner Suits', items: tuxedoSuits, link: '/suits/tuxedo' },
    { title: 'Kaunda Suits', items: kaundaSuits, link: '/suits/kaunda' },
    { title: 'Official Shirts', items: officialShirts, link: '/shirts/official' },
    { title: 'Jeans', items: jeans, link: '/jeans' },
    { title: 'Leather Jackets', items: leatherJackets, link: '/jackets/leather' },
    { title: 'Belts', items: belts, link: '/accessories/belt' },
  ];

  // Handle mouse hover to zoom item
  const handleMouseEnter = (id) => {
    setHoveredItemId(id);
  };

  // Handle mouse leave to remove zoom effect
  const handleMouseLeave = () => {
    setHoveredItemId(null);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
    setPaymentImmediate(false);
    
    // Reset the size for the selected item when modal closes
    if (selectedItem) {
      setSelectedSizeForSuit(prev => ({ ...prev, [selectedItem.id]: undefined }));
    }
  };

  return (
    <section className="p-6 sm:p-10 bg-gray-50 min-h-screen">
      {/* Categories */}
      {categories.map((category) => (
        <div key={category.title}>
          <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl p-6 text-center font-bold rounded-xl mb-8 animate-blink mt-16 mx-4">
            <p>{category.title} – 🔥 Hurry Up!! 🚀 Limited Time Offer!</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {category.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`w-full bg-gray-100 p-4 flex items-center justify-center transition-all duration-300 ${hoveredItemId === item.id ? 'transform scale-110' : ''}`}>
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full sm:w-3/4 md:w-3/4 lg:w-full h-52 object-contain rounded-lg transition-all duration-300"
                      loading="lazy"
                    />
                  </Link>
                </div>

                {/* View More Button (visible on hover) */}
                {hoveredItemId === item.id && (
                  <div className="absolute top-4 right-4">
                    <Link
                      to={category.link}
                      className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                    >
                      View More
                    </Link>
                  </div>
                )}

                <div className="p-5 text-center space-y-4">
                  <h3 className="text-lg sm:text-base font-bold">{item.name}</h3>
                  <div className="flex justify-center mb-2">
                    <span className="text-blue-600 font-bold text-xl sm:text-lg">Ksh {item.price}</span>
                  </div>

                  {/* Sizes */}
                  {category.title !== 'Jeans' && category.title !== 'Official Shirts' && category.title !== 'Leather Jackets' && category.title !== 'Belts' && (
                    <div className="flex flex-col items-start space-y-2">
                      <span className="text-sm sm:text-base md:text-lg font-medium">Select Sizes</span>
                      <div className="flex space-x-2 overflow-x-auto pb-2 w-full">
                        {Sizes.map((size) => (
                          <button
                            key={size}
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedSizeForSuit((prev) => ({ ...prev, [item.id]: prev[item.id] === size ? undefined : size }));
                            }}
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
                      onClick={(e) => handlePurchaseClick(item, e)}
                      className="w-full bg-green-800 hover:bg-green-800 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
                    >
                      <CheckCircle className="w-5 h-5" /> Purchase
                    </button>
                    <button
                      onClick={(e) => handleAddToCart(item, e)}
                      className="w-full bg-blue-600 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
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
              to={category.link}
              className="text-xl font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-2"
            >
              <span>View More</span> <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      ))}

      {/* Payment Popup Modal */}
      {showModal && selectedItem && (
        <PaymentPopup 
          item={selectedItem} 
          selectedSize={selectedSizeForSuit[selectedItem.id]} 
          onClose={handleCloseModal} 
        />
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
    const content = `CASUAL WEAR PURCHASE\n-------------------\nItem: ${item?.name}\nProduct ID: ${item?.id}\nSize: ${selectedSize || 'Not Selected'}\nPaybill: ${paymentDetails.paybill}\nAccount: ${paymentDetails.account}\nAmount Paid: Ksh ${amount || '________'}\nStandard Price: Ksh ${item?.price?.toLocaleString()}`;
    
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
      <div className="bg-white p-8 rounded-2xl w-[95] max-w-md space-y-6">
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
