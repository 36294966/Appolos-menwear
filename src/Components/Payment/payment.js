// Components/Payment/Payment.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const paybillNumber = '542542';
  const accountNumber = '378179';

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
    const totalPrice = storedCart.reduce((sum, item) => {
      return sum + (parseFloat(item.price) || 0);
    }, 0);
    setTotal(totalPrice);
  }, []);

  const handlePurchase = () => {
    setShowDetails(true);
    const today = new Date();
    const dateStr = today.toLocaleDateString();

    const content = `
Payment Details
---------------
Paybill Number: ${paybillNumber}
Account Number: ${accountNumber}
Date: ${dateStr}
Items:
${cartItems.map(item => `- ${item.name} (Size: ${item.size}) : KES ${item.price}`).join('\n')}
Total Amount: KES ${total.toLocaleString('en-KE', { minimumFractionDigits: 2 })}

Thank you for your purchase!
    `;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'payment_details.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleContinueShopping = () => {
    navigate('/');
  };

  if (showDetails) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Payment File Downloaded</h1>
        <p className="mb-4">Your payment details have been downloaded.</p>
        <button
          onClick={handleContinueShopping}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
      {/* Payment Details Card */}
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Payment Details</h2>
        {/* Cart Items */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Cart Items</h3>
          <ul className="mb-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              cartItems.map((item, index) => (
                <li key={index} className="flex justify-between mb-2">
                  <span>{item.name} (Size: {item.size})</span> {/* Display size here */}
                  <span>KES {item.price}</span>
                </li>
              ))
            )}
          </ul>
          <p className="mb-2 font-semibold">
            Total: KES {total.toLocaleString('en-KE', { minimumFractionDigits: 2 })}
          </p>
        </div>

        {/* Amount input */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Enter Amount:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>

        {/* Buttons inside the card, centered */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={handlePurchase}
            className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded w-full md:w-auto"
          >
            Purchase
          </button>
          <button
            onClick={handleContinueShopping}
            className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded w-full md:w-auto"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
