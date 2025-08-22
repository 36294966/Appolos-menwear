import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ShoppingCart } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

/* ========================================================================
   ASSETS (Images)
   ------------------------------------------------------------------------ */
import Photo1 from '../../Assets/Appolo/photo1.jpeg';
import Photo2 from '../../Assets/Appolo/photo2.jpeg';
import Photo3 from '../../Assets/Appolo/photo3.jpeg';
import Photo4 from '../../Assets/Appolo/photo4.jpg';

// Three-Piece suites gallery
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
import ThreePiece33 from '../../Assets/Suits/threepiece33.jpg';

// Two-Piece gallery (we'll show 4 two-piece items in recommendations)
import TwoPiece1 from '../../Assets/Suits/twopiece1.jpg';
import TwoPiece2 from '../../Assets/Suits/twopiece2.jpg';
import TwoPiece3 from '../../Assets/Suits/twopiece3.jpg';
import TwoPiece4 from '../../Assets/Suits/twopiece4.jpg';
import TwoPiece5 from '../../Assets/Suits/twopiece5.jpg';
import TwoPiece6 from '../../Assets/Suits/twopiece6.jpg';
import TwoPiece7 from '../../Assets/Suits/twopiece7.jpg';
import TwoPiece8 from '../../Assets/Suits/twopiece8.jpg';
import TwoPiece9 from '../../Assets/Suits/twopiece9.jpg';

// Double-breast gallery
import DoubleBreast1 from '../../Assets/Suits/doubleBreast1.jpg';
import DoubleBreast2 from '../../Assets/Suits/doubleBreast2.jpg';

// Tuxedo gallery (new Tuxedo images added here)
import Tuxedo1 from '../../Assets/Suits/tuxedo1.jpg';
import Tuxedo2 from '../../Assets/Suits/tuxedo2.jpg';
import Tuxedo3 from '../../Assets/Suits/tuxedo3.jpg';
import Tuxedo4 from '../../Assets/Suits/tuxedo4.jpg';
import Tuxedo5 from '../../Assets/Suits/tuxedo5.jpg';
import Tuxedo6 from '../../Assets/Suits/tuxedo6.jpg';
import Tuxedo7 from '../../Assets/Suits/tuxedo7.jpg';
import Tuxedo8 from '../../Assets/Suits/tuxedo8.jpg';

// Other categories
import Kaunda1 from '../../Assets/Suits/Kaunda1.jpg';
import Kaunda2 from '../../Assets/Suits/kaunda2.jpg';
import Kaunda3 from '../../Assets/Suits/kaunda3.jpg';
import Kaunda4 from '../../Assets/Suits/kaunda4.jpg';
//official shirt
import official1 from '../../Assets/Official/official1.jpg';
import official2 from '../../Assets/Official/official2.jpg';
import official3 from '../../Assets/Official/official3.jpg';
import official4 from '../../Assets/Official/official4.jpg';
import official5 from '../../Assets/Official/official5.jpg';
import official6 from '../../Assets/Official/official6.jpg';
import official7 from '../../Assets/Official/official7.jpg';
import official8 from '../../Assets/Official/official8.jpg';


import Jean1 from '../../Assets/Jeans/jean1.jpeg';
import Jacket1 from '../../Assets/Jackets/jacket1.jpg';

/* ========================================================================
   PAYMENT POPUP
   ====================================================================== */
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
Size: ${item?.size || 'Not selected'}
Paybill Number: ${paybillNumber}
Account Number: ${accountNumber}
Amount: Ksh ${amount || '[Enter amount here]'}
`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'payment_receipt.txt';
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
              Payment Verified!
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

/* ========================================================================
   DATA: Products
   ====================================================================== */
const products = [
  // Three-Piece items (1 - 35)
  { id: 1, name: 'Executive Three-Piece Suit', price: 13000, description: 'A beautiful three-piece suit made from premium wool.', category: 'Three-Piece Suits', image: Photo1 },
  { id: 2, name: 'Classic Fading Free Three-Piece Suit', price: 13000, description: 'Classic suit with a modern touch.', category: 'Three-Piece Suits', image: Photo2 },
{ id: 4, name: 'Classic Pinstripe Ensemble', price: 13000, description: 'A classic pinstripe ensemble for business meetings.', category: 'Three-Piece Suits', image: Photo4 },
  { id: 5, name: 'Modern-Fit Three-Piece Suit', price: 13000, description: 'A modern, slim-fit three-piece suit with stylish cuts.', category: 'Three-Piece Suits', image: ThreePiece1 },
  { id: 6, name: 'Royal Navy Three-Piece Suit', price: 14500, description: 'A navy blue three-piece suit with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece2 },
  { id: 7, name: 'Luxury Three-Piece Suit', price: 13000, description: 'Luxury three-piece suit with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece3 },
  { id: 8, name: 'Modern Three-Piece Suit', price: 13000, description: 'Modern three-piece suit with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece4 },
  { id: 9, name: 'Elite Three-Piece Suit', price: 13000, description: 'Elite three-piece suit with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece5 },
  { id: 10, name: 'Prestige Three-Piece Suit', price: 13000, description: 'Prestige Three-Piece Suit with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece6 },
  { id: 11, name: 'Imperial Three-Piece Suit', price: 13000, description: 'Imperial Three-Piece Suit with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece7 },
  { id: 12, name: 'LuxeLine Three-Piece Suit', price: 13000, description: 'LuxeLine Three-Piece Suit with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece8 },
  { id: 13, name: 'Sovereign Three-Piece Suit', price: 13000, description: 'Sovereign Three-Piece Suit with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece9 },
  { id: 14, name: 'Heritage Three-Piece Suit', price: 13000, description: 'Heritage Three-Piece Suit with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece10 },
  { id: 15, name: 'Legacy Three-Piece Suit', price: 13000, description: 'Legacy Three-Piece Suit with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece11 },
  { id: 16, name: 'Opulence Three-Piece Suit', price: 13000, description: 'Opulence Heritage Three-Piece Suit with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece12 },
  { id: 17, name: 'Sophistication Three-Piece Suit', price: 13000, description: 'Sophistication Three-Piece Suit with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece13 },
  { id: 18, name: 'Couture Classics Three-Piece Suit', price: 13000, description: 'Couture Classics Three-Piece Suit with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece14 },
  { id: 19, name: 'Dignity Collection Three-Piece Suit', price: 13000, description: 'Dignity Collection with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece15 },
  { id: 20, name: 'Vanguard Elite Three-Piece Suit', price: 13000, description: 'Vanguard Elite with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece16 },
  { id: 21, name: 'Summit Suits Three-Piece Suit', price: 13000, description: 'Summit Suits with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece17 },
  { id: 22, name: 'Executive Edge Three-Piece Suit', price: 13000, description: 'Executive Edge with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece18 },
  { id: 23, name: 'Eminence Collection Three-Piece Suit', price: 13000, description: 'Eminence Collection with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece19 },
  { id: 24, name: 'Refined Royalty Three-Piece Suit', price: 13000, description: 'Refined Royalty with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece20 },
  { id: 25, name: 'Pinnacle Series Three-Piece Suit', price: 13000, description: 'Pinnacle Series with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece21 },
  { id: 26, name: 'Urban Aristocrat Three-Piece Suit', price: 13000, description: 'Urban Aristocrat with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece22 },
  { id: 27, name: 'Noble Attire Three-Piece Suit', price: 13000, description: 'Noble Attire with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece23 },
  { id: 28, name: 'Legacy Luxe Three-Piece Suit', price: 13000, description: 'Legacy Luxe with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece24 },
  { id: 29, name: 'Signature Sovereign Three-Piece Suit', price: 13000, description: 'Signature Sovereign with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece25 },
  { id: 30, name: 'Majesty Mode Three-Piece Suit', price: 13000, description: 'Majesty Mode with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece26 },
  { id: 31, name: 'Imperial Attire Three-Piece Suit', price: 13000, description: 'Imperial Attire with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece27 },
  { id: 32, name: 'Monarch Line Three-Piece Suit', price: 13000, description: 'Monarch Line with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece28 },
  { id: 33, name: 'Crown & Confidence Three-Piece Suit', price: 13000, description: 'Crown & Confidence with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece29 },
  { id: 34, name: 'Virtue Vogue Three-Piece Suit', price: 13000, description: 'Virtue Vogue with an elegant finish.', category: 'Three-Piece Suits', image: ThreePiece30 },
  { id: 35, name: 'Couture Select Three-Piece Suit', price: 13000, description: 'Select couture three-piece.', category: 'Three-Piece Suits', image: ThreePiece31 },

  { id: 36, name: 'Double-Breast Suit Black', price: 13500, description: 'A classic double-breast suit with a modern twist.', category: 'DoubleBreast Suits', image: DoubleBreast1 },
  { id: 37, name: 'Double-Breast Suit Grey', price: 13500, description: 'A refined double-breast suit.', category: 'DoubleBreast Suits', image: DoubleBreast2 },
  //two piece
{ id: 38, name: 'Executive Two-Piece Suit', price: 11000, description: 'A classic two-piece suit with a modern twist.', category: 'TwoPiece Suits', image: TwoPiece1 },
  { id: 39, name: 'Modern Classic Two-Piece Suit', price: 11000, description: 'Modern Classic Two-Piece suit.', category: 'TwoPiece Suits', image: TwoPiece2 },
  { id: 40, name: 'Slim Two-Piece Suit', price: 12000, description: 'Slim, modern two-piece.', category: 'TwoPiece Suits', image: TwoPiece3 },
  { id: 41, name: 'Heritage Two-Piece Suit', price: 11500, description: 'Heritage two-piece design.', category: 'TwoPiece Suits', image: TwoPiece4 },
{ id: 42, name: '💯 Super Classic Two-Piece Suit', price: 11500, description: '💯 Super Classic two-piece design.', category: 'TwoPiece Suits', image: TwoPiece5 },
{ id: 43, name: 'Modern Two Two-Piece Suit', price: 11500, description: 'Modern two-piece design.', category: 'TwoPiece Suits', image: TwoPiece7 },
{ id: 44, name: 'Premium Two-Piece Suit', price: 11500, description: 'Premium two-piece design.', category: 'TwoPiece Suits', image: TwoPiece8},
{ id: 45, name: 'Elegant Two-Piece Suit', price: 11500, description: 'Elegant two-piece design.', category: 'TwoPiece Suits', image: TwoPiece9},

//tuxedo
{ id: 46, name: 'Velvet Tuxedo Suit', price: 15000, description: 'Gorgeous velvet tuxedo for formal events.', category: 'Tuxedo Dinner Suits', image: Tuxedo1 },
  { id: 47, name: 'Midnight Tuxedo Suit', price: 15000, description: 'Midnight tuxedo, perfect for high-profile events.', category: 'Tuxedo Dinner Suits', image: Tuxedo2 },
  { id: 48, name: 'Ensemble Suit', price: 15000, description: 'Ensemble tuxedo, perfect for high-profile events.', category: 'Tuxedo Dinner Suits', image: Tuxedo3 },
  { id: 49, name: 'Classic Tuxedo Suit', price: 15000, description: 'Classic tuxedo, perfect for high-profile events.', category: 'Tuxedo Dinner Suits', image: Tuxedo4 },
  { id: 50, name: 'Slim  Tuxedo Suit', price: 15000, description: 'Slim and stylish tuxedo, perfect for high-profile events.', category: 'Tuxedo Dinner Suits', image: Tuxedo5 },
  { id: 51, name: 'Designer Tuxedo Suit', price: 15000, description: 'Designer tuxedo, perfect for high-profile events.', category: 'Tuxedo Dinner Suits', image: Tuxedo6 },
{ id:52, name: 'Royal  Tuxedo Suit', price: 15000, description: 'Royal tuxedo, perfect for high-profile events.', category: 'Tuxedo Dinner Suits', image: Tuxedo7 },
{ id:53, name: 'Premium Tuxedo Suit', price: 15000, description: 'Slim and stylish tuxedo, perfect for high-profile events.', category: 'Tuxedo Dinner Suits', image: Tuxedo8 },
  

  // Kaunda suits (new products for Kaunda suits)
  { id: 54, name: 'Classic Kaunda Suit', price: 14000, description: 'A stylish Kaunda suit perfect for formal African occasions.', category: 'Kaunda Suits', image: Kaunda1 },
  { id: 55, name: 'Royal Kaunda Suit', price: 14000, description: 'A stylish Kaunda suit perfect for formal African occasions.', category: 'Kaunda Suits', image: Kaunda2 },
  { id: 56, name: 'Modern Kaunda Suit', price: 14000, description: 'A stylish Kaunda suit perfect for formal African occasions.', category: 'Kaunda Suits', image: Kaunda3 },
  { id: 57, name: 'Elegant Kaunda Suit', price: 14000, description: 'A stylish Kaunda suit perfect for formal African occasions.', category: 'Kaunda Suits', image: Kaunda4 },

  //official shirts 
  // Official Shirts
{ id: 58, name: 'Presidential Shirt', price: 3000, description: 'A Presidential Shirt perfect for formal African occasions.', category: 'Official Shirt', image: official1 },
{ id: 59, name: 'Presidential Shirt', price: 3000, description: 'A Presidential Shirt perfect for formal African occasions.', category: 'Official Shirt', image: official2 },
{ id: 60, name: 'Presidential Shirt', price: 3000, description: 'A Presidential Shirt perfect for formal African occasions.', category: 'Official Shirt', image: official3 },
{ id: 61, name: 'Presidential Shirt', price: 3000, description: 'A Presidential Shirt perfect for formal African occasions.', category: 'Official Shirt', image: official4 },
{ id: 62, name: 'Presidential Shirt', price: 3000, description: 'A Presidential Shirt perfect for formal African occasions.', category: 'Official Shirt', image: official5 },
{ id: 63, name: 'Presidential Shirt', price: 3000, description: 'A Presidential Shirt perfect for formal African occasions.', category: 'Official Shirt', image: official6 },
{ id: 64, name: 'Presidential Shirt', price: 3000, description: 'A Presidential Shirt perfect for formal African occasions.', category: 'Official Shirt', image: official7 },
{ id: 65, name: 'Presidential Shirt', price: 3000, description: 'A Presidential Shirt perfect for formal African occasions.', category: 'Official Shirt', image: official8 },
 
];

/* ========================================================================
   SUIT SIZE UTILS
   ====================================================================== */
const suitCategories = ['Three-Piece Suits', 'TwoPiece Suits', 'Tuxedo Dinner Suits', 'Kaunda Suits', 'DoubleBreast Suits'];
const suitSizes = [42, 44, 46, 48, 50, 52, 54, 56, 58, 60];

/* ========================================================================
   COMPONENT: ProductDetail
   ====================================================================== */
const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [sizes, setSizes] = useState({});

  useEffect(() => {
    const numericId = Number(id);
    const p = products.find((p) => p.id === numericId);
    setProduct(p || null);

    setSizes((prev) => ({ ...prev }));
  }, [id]);

  if (!product) return <div className="p-4 text-center">Loading...</div>;

  const handlePurchase = (item) => {
    const itemSize = sizes[item.id] || null;
    setSelectedItem({ ...item, size: itemSize });
    setShowPayment(true);
    setSizes((prev) => ({ ...prev, [item.id]: null }));
  };

  const handleAddToCart = (item) => {
    const itemSize = sizes[item.id] || null;
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = {
      ...item,
      size: itemSize,
      price: parseFloat(item.price),
    };
    localStorage.setItem('cart', JSON.stringify([...storedCart, newItem]));
    window.dispatchEvent(new Event('storage'));
    alert(`${item.name}${itemSize ? ` (Size ${itemSize})` : ''} added to cart`);
    setSizes((prev) => ({ ...prev, [item.id]: null }));
  };

  const similarProducts = (() => {
    const excludeId = product.id;

    if (product.category === 'Tuxedo Dinner Suits') {
      let primary = products.filter((p) => p.category === 'Tuxedo Dinner Suits' && p.id !== excludeId).slice(0, 8);
      if (primary.length < 8) {
        const filler = products.filter((p) => p.id !== excludeId && !primary.some((s) => s.id === p.id)).slice(0, 8 - primary.length);
        primary = [...primary, ...filler];
      }
      return primary.slice(0, 8);
    }

    if (product.category === 'Kaunda Suits') {
      let primary = products.filter((p) => p.category === 'Kaunda Suits' && p.id !== excludeId).slice(0, 4);
      if (primary.length < 4) {
        const filler = products.filter((p) => p.category !== 'Kaunda Suits' && p.id !== excludeId).slice(0, 4 - primary.length);
        primary = [...primary, ...filler];
      }
      return primary.slice(0, 4);
    }

    if (product.category === 'TwoPiece Suits') {
      let primary = products.filter((p) => p.category === 'TwoPiece Suits' && p.id >= 38 && p.id !== excludeId).slice(0, 4);
      if (primary.length < 4) {
        const needed = 4 - primary.length;
        const filler = products.filter((p) => p.category === 'Three-Piece Suits' && p.id !== excludeId && !primary.some((s) => s.id === p.id)).slice(0, needed);
        primary = [...primary, ...filler];
      }
      return primary.slice(0, 4);
    }

    if (product.category === 'Three-Piece Suits') {
      let primary = products.filter((p) => p.category === 'Three-Piece Suits' && p.id !== excludeId).slice(0, 8);
      if (primary.length < 8) {
        const filler = products.filter((p) => p.id !== excludeId && !primary.some((s) => s.id === p.id)).slice(0, 8 - primary.length);
        primary = [...primary, ...filler];
      }
      return primary.slice(0, 8);
    }

    return [];
  })();

  return (
    <section className="p-6 sm:p-10 bg-gray-50 min-h-screen relative">
      {/* -------------------- Cart link -------------------- */}
      <div className="flex justify-end mb-4 sticky top-0 bg-gray-50 z-10">
        <Link to="/cart" className="relative flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold text-xl px-4 py-2 rounded-lg bg-white shadow hover:shadow-lg transition">
          <ShoppingCart className="w-6 h-6" />
          <span>Cart</span>
          <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs font-semibold">
            {JSON.parse(localStorage.getItem('cart'))?.length || 0}
          </div>
        </Link>
      </div>

      {/* -------------------- Product Details -------------------- */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl mx-auto">
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          <img src={product.image} alt={product.name} className="w-full max-h-[520px] object-contain rounded-lg transition-transform hover:scale-105" />
        </div>

        <div className="w-full md:w-1/2 p-6 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-xl text-blue-600 font-semibold">Ksh {product.price}</p>
          <p className="text-sm sm:text-base text-gray-700">{product.description}</p>

          {/* -------------------- Sizes for Suits Only -------------------- */}
          {suitCategories.includes(product.category) && (
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Select Size:</h4>
              <div className="flex overflow-x-auto space-x-3 pb-2">
                {suitSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSizes((prev) => ({ ...prev, [product.id]: size }))} 
                    className={`px-4 py-2 rounded-lg border font-semibold whitespace-nowrap transition ${
                      sizes[product.id] === size ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-100 hover:bg-gray-200 border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* -------------------- Actions -------------------- */}
          <div className="mt-6 space-y-4">
            <button onClick={() => handlePurchase(product)} className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 px-4 rounded-lg font-semibold transition flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Purchase Now
            </button>

            <button onClick={() => handleAddToCart(product)} className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition flex items-center justify-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* -------------------- Similar Products -------------------- */}
      <div className="mt-12 max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">You Might Also Like</h3>

        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`}>
          {similarProducts.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden p-4 flex flex-col justify-between">
              <Link to={`/product/${item.id}`}>
                <div className="h-64 bg-gray-100 flex items-center justify-center mb-4">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain rounded-lg" />
                </div>
              </Link>

              <div className="text-center space-y-3">
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-blue-600 font-bold text-xl">Ksh {item.price}</p>

                {/* Sizes for suits in similar products */}
                {suitCategories.includes(item.category) && (
                  <div className="flex overflow-x-auto space-x-2 pb-2 justify-center">
                    {suitSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSizes((prev) => ({ ...prev, [item.id]: size }))}
                        className={`px-3 py-1 rounded-md border font-semibold whitespace-nowrap transition ${
                          sizes[item.id] === size ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-100 hover:bg-gray-200 border-gray-300'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                )}

                <button onClick={() => handlePurchase(item)} className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 text-sm">
                  <CheckCircle className="w-5 h-5" />
                  Purchase Now
                </button>

                <button onClick={() => handleAddToCart(item)} className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 text-sm">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* -------------------- Back to Home -------------------- */}
      <div className="mt-8 text-center">
        <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold text-xl">
          Back to Home
        </Link>
      </div>

      {/* -------------------- Payment Modal -------------------- */}
      {showPayment && <PaymentPopup onClose={() => setShowPayment(false)} item={selectedItem} />}
    </section>
  );
};

export default ProductDetail;