import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Trash2, ArrowLeft, CheckCircle, Plus, Minus } from 'lucide-react';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  const [amountToPay, setAmountToPay] = useState('');
  const [paymentError, setPaymentError] = useState('');
  const [showPaymentInstructions, setShowPaymentInstructions] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      const quantity = parseInt(item.quantity) || 1;
      return sum + (price * quantity);
    }, 0);
    setTotal(cartTotal);
  }, [cartItems]);

  const handleRemoveItem = (index) => {
    const newCart = cartItems.filter((_, i) => i !== index);
    localStorage.setItem('cart', JSON.stringify(newCart));
    // Trigger re-render
    window.dispatchEvent(new Event('storage'));
  };

  const handleUpdateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    
    const newCart = [...cartItems];
    newCart[index].quantity = newQuantity;
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCartItems(newCart);
  };

  const handleProceedToPayment = () => {
    // Validate the entered amount
    if (!amountToPay || isNaN(amountToPay) || parseFloat(amountToPay) <= 0) {
      setPaymentError('Please enter a valid amount.');
      return;
    }

    if (parseFloat(amountToPay) < total) {
      setPaymentError(`Amount must be at least KES ${total.toLocaleString('en-KE', { minimumFractionDigits: 2 })}`);
      return;
    }

    // Handle the receipt and download
    const receiptData = cartItems.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity || 1,
      size: item.size || 'Not selected',
    }));
    
    const content = `
Purchase Details
---------------
${receiptData.map(item => `${item.name} x${item.quantity} - KES ${(item.price * item.quantity).toFixed(2)} (Size: ${item.size})`).join('\n')}
---------------
Total: KES ${total.toLocaleString('en-KE', { minimumFractionDigits: 2 })}
Amount Paid: KES ${parseFloat(amountToPay).toLocaleString('en-KE', { minimumFractionDigits: 2 })}
Change: KES ${(parseFloat(amountToPay) - total).toLocaleString('en-KE', { minimumFractionDigits: 2 })}
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
    setPaymentError('');
    setAmountToPay('');
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setPaymentError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-6 pt-20">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
        
        {/* Payment Instructions Section */}
        <div className="mb-8 bg-blue-50 p-4 rounded-xl border border-blue-200">
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setShowPaymentInstructions(!showPaymentInstructions)}
          >
            <h3 className="text-lg font-semibold text-blue-800">Payment Instructions</h3>
            <span className="text-blue-600">
              {showPaymentInstructions ? '▲' : '▼'}
            </span>
          </div>
          
          {showPaymentInstructions && (
            <div className="mt-4 text-sm text-blue-700 space-y-2">
              <p>Please use the following details to complete your payment:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div className="bg-white p-3 rounded-lg border border-blue-200">
                  <div className="font-medium">Paybill Number:</div>
                  <div className="font-mono text-lg font-bold">542542</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-blue-200">
                  <div className="font-medium">Account Number:</div>
                  <div className="font-mono text-lg font-bold">378179</div>
                </div>
              </div>
              <p className="text-xs mt-3 text-blue-600">Note: After payment, proceed with the confirmation below.</p>
            </div>
          )}
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">Your Shopping Cart</h2>
        
        {isPurchased ? (
          // Show confirmation message when the cart is empty after purchase
          <div className="text-center py-12">
            <CheckCircle className="mx-auto h-16 w-16 mb-6 text-green-500" />
            <p className="text-xl text-gray-700 mb-2">Thank you for your purchase!</p>
            <p className="text-gray-500 mb-6">Your receipt has been downloaded.</p>
            <button
              onClick={handleContinueShopping}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-xl transition-all"
            >
              Continue Shopping
            </button>
          </div>
        ) : cartItems.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingCart className="mx-auto h-16 w-16 mb-6 text-gray-400" />
            <p className="text-xl text-gray-500 mb-2">Your shopping cart is empty</p>
            <p className="text-gray-400 mb-6">Start adding items to see them here</p>
            <button
              onClick={handleContinueShopping}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-xl transition-all"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div>
            <ul className="space-y-4 mb-8">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="bg-gray-50 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between border border-gray-200"
                >
                  <div className="flex items-start space-x-4 mb-4 sm:mb-0 flex-1">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-blue-600 font-medium mt-1">KES {item.price} each</p>
                      <div className="mt-2 text-sm">
                        <span className="text-gray-600">Size: </span>
                        <span className="bg-gray-200 py-1 px-2 rounded-full text-gray-700">{item.size || 'Not selected'}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between w-full sm:w-auto">
                    <div className="flex items-center mr-4">
                      <button 
                        onClick={() => handleUpdateQuantity(index, (item.quantity || 1) - 1)}
                        className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="mx-3 font-medium">{item.quantity || 1}</span>
                      <button 
                        onClick={() => handleUpdateQuantity(index, (item.quantity || 1) + 1)}
                        className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    <div className="font-medium text-gray-800">
                      KES {((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                    </div>
                    
                    <button
                      onClick={() => handleRemoveItem(index)}
                      className="text-red-500 hover:text-red-700 p-2 ml-4"
                      aria-label="Remove item"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800">Total:</h3>
                <span className="text-2xl font-bold text-blue-700">
                  KES {total.toLocaleString('en-KE', { minimumFractionDigits: 2 })}
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-xl transition-all flex-1"
                  onClick={handleContinueShopping}
                >
                  Continue Shopping
                </button>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all flex-1"
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
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm p-4">
            <div className="bg-white p-6 rounded-2xl w-full max-w-md space-y-6 max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Confirm Your Purchase</h2>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-700 mb-2">Items in cart:</h3>
                <ul className="space-y-3">
                  {cartItems.map((item, index) => (
                    <li key={index} className="flex justify-between text-sm">
                      <div className="flex-1">
                        <span className="font-medium">{item.name} x{item.quantity || 1}</span>
                        <div className="text-gray-500 text-xs">Size: {item.size || 'Not selected'}</div>
                      </div>
                      <span className="font-medium">KES {(item.price * (item.quantity || 1)).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <p className="font-semibold text-gray-800">Total:</p>
                <span className="text-lg font-bold text-blue-700">
                  KES {total.toLocaleString('en-KE', { minimumFractionDigits: 2 })}
                </span>
              </div>

              {/* Input field for amount to pay */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Enter Amount to Pay (KES):</label>
                <input
                  type="number"
                  value={amountToPay}
                  onChange={(e) => {
                    setAmountToPay(e.target.value);
                    setPaymentError('');
                  }}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter amount"
                  min={total}
                />
                {paymentError && (
                  <p className="text-red-500 text-sm mt-2">{paymentError}</p>
                )}
              </div>

              {/* Payment instructions */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Payment Instructions:</h4>
                <div className="text-sm text-blue-700 space-y-1">
                  <div className="flex justify-between">
                    <span>Paybill Number:</span>
                    <span className="font-mono">542542</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Account Number:</span>
                    <span className="font-mono">378179</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-2">
                <button
                  onClick={handleClosePopup}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 rounded-lg transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleProceedToPayment}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition-all"
                >
                  Confirm Payment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

