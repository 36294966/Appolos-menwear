import React, { useState } from 'react';
import { CheckCircle, XCircle, ShoppingCart } from 'lucide-react';
import Socks1 from '../../Assets/Accessories/socks1.jpg';
import Socks2 from '../../Assets/Accessories/socks2.jpg';
import Socks3 from '../../Assets/Accessories/socks3.jpg';

const PaymentFileGenerator = ({ item, onClose }) => {
  const paybillNumber = '542542';
  const accountNumber = '378179';
  const [amount, setAmount] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleDownload = () => {
    const content = `
Payment Details
---------------
Item: ${item?.name || 'Socks'}
Paybill: ${paybillNumber}
Account: ${accountNumber}
Amount: ${amount || '[Enter amount here]'}
Standard Price: ${item?.price || 'Ksh 300-400'}
`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'socks_payment.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setPaymentSuccess(true);
    setTimeout(onClose, 1500);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          {paymentSuccess ? (
            <>
              <CheckCircle className="w-6 h-6 text-green-500" />
              Payment Complete!
            </>
          ) : (
            'Socks Purchase'
          )}
        </h2>

        {!paymentSuccess ? (
          <>
            <div className="mb-4 space-y-2">
              <p className="text-sm font-medium">Paybill: {paybillNumber}</p>
              <p className="text-sm font-medium">Account: {accountNumber}</p>
              {item?.price && (
                <p className="text-green-600 font-bold">Price: {item.price}</p>
              )}
            </div>
            <input
              type="text"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full mb-4 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="flex flex-col gap-2">
              <button
                onClick={handleDownload}
                className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Confirm Payment
              </button>
              <button
                onClick={onClose}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
              >
                <XCircle className="w-5 h-5" />
                Cancel
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-green-600 text-sm">
            Receipt downloaded successfully
          </p>
        )}
      </div>
    </div>
  );
};

const Socks = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedSock, setSelectedSock] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const socksItems = [
    {
      id: 1,
      name: 'Comfortable Cotton Socks - White',
      image: Socks1,
      price: 'Ksh 300',
    },
    {
      id: 2,
      name: 'Formal Dress Socks - Black',
      image: Socks2,
      price: 'Ksh 300',
    },
    {
      id: 3,
      name: 'Colorful Crew Socks',
      image: Socks3,
      price: 'Ksh 300',
    },
  ];

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    alert(`${item.name} added to cart`);
  };

  return (
    <section className="p-10 bg-gray-50 min-h-screen relative">
      {showPayment && (
        <PaymentFileGenerator 
          item={selectedSock}
          onClose={() => {
            setShowPayment(false);
            setSelectedSock(null);
          }}
        />
      )}

      <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">
        Premium Socks Collection
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {socksItems.map((sock) => (
          <div
            key={sock.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden group"
          >
            <div className="h-64 w-full flex items-center justify-center bg-gray-100 p-4">
              <img
                src={sock.image}
                alt={sock.name}
                className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-5 text-center flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 text-gray-900">{sock.name}</h3>
              <p className="text-lg font-bold mb-4 text-blue-600">{sock.price}</p>
              
              <button
                onClick={() => {
                  setSelectedSock(sock);
                  setShowPayment(true);
                }}
                className="w-full mb-2 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-full transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Purchase Now
              </button>

              <button
                onClick={() => handleAddToCart(sock)}
                className="w-full bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-6 rounded-full transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Socks;
