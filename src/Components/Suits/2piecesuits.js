import React, { useState } from 'react';
import { CheckCircle, XCircle, ShoppingCart } from 'lucide-react';
import TwoPiece1 from '../../Assets/Suits/twopiece1.jpg';
import TwoPiece2 from '../../Assets/Suits/twopiece2.jpg';
import TwoPiece3 from '../../Assets/Suits/twopiece3.jpg';
import Photo4 from '../../Assets/Appolo/photo4.jpg';
import Photo5 from '../../Assets/Appolo/photo5.jpg';
import Photo6 from '../../Assets/Appolo/photo6.jpg';

// Payment popup component
const PaymentPopup = ({ item, onClose }) => {
  const [amount, setAmount] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const paybill = '542542';
  const account = '378179';

  const generatePaymentFile = () => {
    const content = `TWO PIECE SUIT PURCHASE\n------------------------\nItem: ${item?.name}\nProduct ID: ${item?.id}\nPaybill: ${paybill}\nAccount: ${account}\nAmount Paid: ${amount || '________'}\nStandard Price: ${item?.price}`;
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
                <span className="font-mono text-blue-600 font-bold">{paybill}</span>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                <span className="font-medium">Account:</span>
                <span className="font-mono text-blue-600 font-bold">{account}</span>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Standard Price:</span>
                  <span className="font-mono text-green-600 font-bold">{item?.price}</span>
                </div>
              </div>
              <input
                type="number"
                placeholder="Enter amount (Ksh)"
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="11000"
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={generatePaymentFile}
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

// Main TwoPieceSuits Component
const TwoPieceSuits = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedSuit, setSelectedSuit] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const twoPieceSuits = [
    { id: 1, name: 'Classic Two Piece Suit', image: TwoPiece1, price: 'Ksh 11,000' },
    { id: 2, name: 'Modern Two Piece Suit', image: TwoPiece2, price: 'Ksh 11,000' },
    { id: 3, name: 'Slim Fit Two Piece Suit', image: TwoPiece3, price: 'Ksh 11,000' }
  ];

  const photos = [Photo4, Photo6, Photo5];

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    alert(`${item.name} added to cart`);
  };

  return (
    <section className="p-6 sm:p-10 bg-gray-50 min-h-screen">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Premium Two Piece Suits</h1>
        <p className="text-gray-600 text-lg">Stylish and elegant suits tailored for confidence</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg aspect-square group"
          >
            <img
              src={photo}
              alt="Style Inspiration"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {twoPieceSuits.map((suit) => (
          <article
            key={suit.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-square bg-gray-100 p-5 flex items-center justify-center">
              <img
                src={suit.image}
                alt={suit.name}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5 text-center space-y-4">
              <h3 className="text-xl font-bold text-gray-900">{suit.name}</h3>
              <p className="text-blue-600 font-bold text-xl">{suit.price}</p>
              <button
                onClick={() => {
                  setSelectedSuit(suit);
                  setShowPayment(true);
                }}
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
          </article>
        ))}
      </div>

      {showPayment && (
        <PaymentPopup
          item={selectedSuit}
          onClose={() => {
            setShowPayment(false);
            setSelectedSuit(null);
          }}
        />
      )}
    </section>
  );
};

export default TwoPieceSuits;
