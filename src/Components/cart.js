// components/Cart.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Trash2 } from 'lucide-react';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

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
    navigate('/payment'); // ensure your route is set up
  };

  const handleContinueShopping = () => {
    navigate('/'); // or your shopping page route
  };

  return (
    <div className="min-h-screen bg-gray-300 p-6 pt-8">
      <h2 className="text-4xl font-bold mb-6 text-center">Your Cart</h2>
      {cartItems.length === 0 ? (
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
                onClick={handleProceedToPayment}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;