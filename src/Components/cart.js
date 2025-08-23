import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Trash2 } from 'lucide-react';


const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  const [amountToPay, setAmountToPay] = useState('');
  const [paymentError, setPaymentError] = useState('');

  // Load cart data from localStorage and keep sync across tabs
  useEffect(() => {
    const updateCart = () => {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(storedCart);
    };
    updateCart();
    window.addEventListener('storage', updateCart);
    return () => window.removeEventListener('storage', updateCart);
  }, []);

  // Calculate total whenever cartItems change
  useEffect(() => {
    const cartTotal = cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price) || 0;
      return sum + price;
    }, 0);
    setTotal(cartTotal);
  }, [cartItems]);

  const handleRemoveItem = (index) => {
    const newCart = cartItems.filter((_, i) => i !== index);
    localStorage.setItem('cart', JSON.stringify(newCart));
    // Trigger re-render
    window.dispatchEvent(new Event('storage'));
  };

  const handleProceedToPayment = () => {
    // Validate the entered amount
    if (!amountToPay || isNaN(amountToPay) || parseFloat(amountToPay) <= 0) {
      setPaymentError('Please enter a valid amount.');
      return;
    }

    // Handle the receipt and download
    const receiptData = cartItems.map(item => ({
      name: item.name,
      price: item.price,
      size: item.size || 'Not selected',
    }));
    const content = `
Purchase Details
---------------
${receiptData.map(item => `${item.name} - KES ${item.price} (Size: ${item.size})`).join('\n')}
---------------
Total: KES ${total.toLocaleString('en-KE', { minimumFractionDigits: 2 })}
Amount Paid: KES ${amountToPay}
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'purchase_receipt.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // After successful purchase, clear the cart
    localStorage.setItem('cart', JSON.stringify([]));
    window.dispatchEvent(new Event('storage'));
    setShowPopup(false); // Close the popup
    setIsPurchased(true); // Flag that purchase was successful
  };

  const handleContinueShopping = () => {
    navigate('/'); // or your shopping page route
  };

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-gray-300 p-6 pt-16"> {/* Increased padding top */}
      <h2 className="text-4xl font-bold mt-24 mb-6 text-center">Your Cart</h2>
      {isPurchased ? (
        // Show confirmation message when the cart is empty after purchase
        <div className="text-center text-gray-500">
          <ShoppingCart className="mx-auto h-16 w-16 mb-4 mt-6 text-gray-400" />
          <p className="text-xl">Your cart is empty</p>
          <button
            onClick={handleContinueShopping}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Start Shopping
          </button>
        </div>
      ) : cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          <ShoppingCart className="mx-auto h-16 w-16 mb-4 text-gray-400" />
          <p className="text-xl">Your shopping cart is empty</p>
          <button
            onClick={handleContinueShopping}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-xl shadow flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-500">Price: KES {item.price}</p>
                    <div className="mt-2 text-sm font-semibold text-blue-600">
                      <span>Size: </span>
                      <span className="bg-gray-200 py-1 px-2 rounded-full">{item.size || 'Not selected'}</span>
                    </div> {/* Display the selected size */}
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-right">
            <h3 className="text-xl font-semibold mb-2">
              Total: KES {total.toLocaleString('en-KE', { minimumFractionDigits: 2 })}
            </h3>
            {/* Responsive button container */}
            <div className="flex flex-col md:flex-row md:justify-center md:space-x-4 space-y-4 md:space-y-0 mt-4">
              <button
                className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition w-full md:w-auto"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition w-full md:w-auto"
                onClick={handleShowPopup}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* -------------------- Payment Popup -------------------- */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white p-6 sm:p-8 rounded-2xl w-[95%] max-w-md space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Confirm Your Purchase</h2>
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <div>
                    <span>{item.name}</span>
                    <br />
                    <span className="text-sm text-gray-500">Size: {item.size || 'Not selected'}</span>
                  </div>
                  <span>KES {item.price}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-4">
              <p className="font-semibold">Total: KES {total.toLocaleString('en-KE', { minimumFractionDigits: 2 })}</p>
            </div>

            {/* Input field for amount to pay */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Enter Amount to Pay:</label>
              <input
                type="number"
                value={amountToPay}
                onChange={(e) => setAmountToPay(e.target.value)}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter amount"
              />
              {paymentError && (
                <p className="text-red-500 text-sm mt-1">{paymentError}</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex justify-between">
              <button
                onClick={handleClosePopup}
                className="bg-gray-300 text-black py-2 px-6 rounded-lg hover:bg-gray-400"
              >
                Close
              </button>
              <button
                onClick={handleProceedToPayment}
                className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700"
              >
                Proceed to Purchase
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;







