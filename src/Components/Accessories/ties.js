import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ShoppingCart } from 'lucide-react';
import Tie1 from '../../Assets/Ties/tie1.jpg';
import Tie2 from '../../Assets/Ties/tie2.jpg';
import Tie3 from '../../Assets/Ties/tie3.jpg';
import Tie4 from '../../Assets/Ties/tie4.jpg';
import Tie5 from '../../Assets/Ties/tie5.jpg';
import Tie6 from '../../Assets/Ties/tie6.jpg';
import Tie7 from '../../Assets/Ties/tie7.jpg';
import Tie8 from '../../Assets/Ties/tie8.jpg';
import Tie9 from '../../Assets/Ties/tie9.jpg';

const PaymentFileGenerator = ({ item, onClose }) => {
  const [amount, setAmount] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const paymentDetails = {
    paybill: '542542',
    account: '378179'
  };

  const handlePaymentFile = () => {
    const template = `Payment Details
---------------
Item: ${item?.name || 'Necktie'}
Paybill: ${paymentDetails.paybill}
Account: ${paymentDetails.account}
Amount: ${amount || '____'}
Standard Price: Ksh ${item?.price || 900}
`;
    const file = new Blob([template], { type: 'text/plain' });
    const fileURL = URL.createObjectURL(file);
    
    const tempLink = document.createElement('a');
    tempLink.href = fileURL;
    tempLink.download = 'tie_payment.txt';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    URL.revokeObjectURL(fileURL);
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
            `${item?.name || 'Tie'} Purchase`
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
              
              {item?.price && (
                <div className="flex justify-between items-center bg-green-50 p-4 rounded-lg">
                  <span className="font-medium">Price:</span>
                  <span className="font-mono text-green-600 font-bold">Ksh {item.price}</span>
                </div>
              )}

              <input
                type="number"
                placeholder="Enter amount (Ksh)"
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={handlePaymentFile}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full font-bold transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                CONFIRM PAYMENT
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 rounded-full font-bold transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <XCircle className="w-5 h-5" />
                CANCEL
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-green-600 font-medium">
            Payment details downloaded successfully
          </p>
        )}
      </div>
    </div>
  );
};

const Ties = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedTie, setSelectedTie] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart synchronization
  useEffect(() => {
    const updateCart = () => {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(storedCart.length);
    };
    
    updateCart();
    window.addEventListener('storage', updateCart);
    return () => window.removeEventListener('storage', updateCart);
  }, []);

  const tiesCollection = [
    { id: 1, image: Tie1, name: 'Silk Business Tie', price: 900 },
    { id: 2, image: Tie2, name: 'Patterned Formal Tie', price: 900 },
    { id: 3, image: Tie3, name: 'Classic Windsor Tie', price: 900 },
    { id: 4, image: Tie4, name: 'Executive Striped Tie', price: 900 },
    { id: 5, image: Tie5, name: 'Luxury Silk Tie', price: 900 },
    { id: 6, image: Tie6, name: 'Modern Slim Tie', price: 900 },
    { id: 7, image: Tie7, name: 'Bold Color Tie', price: 900 },
    { id: 8, image: Tie8, name: 'Traditional Knit Tie', price: 900 },
    { id: 9, image: Tie9, name: 'Designer Collection Tie', price: 900 }
  ];

  const handleAddToCart = (item) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = {
      ...item,
      addedAt: new Date().toISOString()
    };
    const updatedCart = [...storedCart, newItem];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('storage'));
    alert(`${item.name} added to cart`);
  };

  const cartTotal = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return storedCart.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <section className="p-6 sm:p-8 bg-gray-50 min-h-screen">
      {/* Cart Indicator */}
      <div className="fixed top-4 right-4 z-40">
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition"
        >
          <ShoppingCart className="w-6 h-6 text-gray-700" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white w-80 max-h-[80vh] overflow-y-auto p-4 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setIsCartOpen(false)}
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <ShoppingCart className="w-6 h-6" />
              Your Cart ({cartCount})
            </h3>
            {cartCount === 0 ? (
              <p className="text-gray-600">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4">
                  {JSON.parse(localStorage.getItem('cart') || '[]').map((item, index) => (
                    <div key={index} className="pb-2 border-b flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{item.name}</p>
                          <p className="text-xs text-gray-500">
                            Added: {new Date(item.addedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-bold">Ksh {item.price}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Total:</span>
                    <span className="font-bold">Ksh {cartTotal() + 200}</span>
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

      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Premium Neckwear Collection
        </h1>
        <p className="text-blue-600 text-xl">
          Elevate your professional appearance with our curated ties
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tiesCollection.map((tie) => (
          <article 
            key={tie.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="aspect-square bg-gray-100 p-5 flex items-center justify-center">
              <img
                src={tie.image}
                alt={tie.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5 text-center space-y-4">
              <h3 className="text-xl font-bold text-gray-900">{tie.name}</h3>
              <p className="text-blue-600 font-bold text-xl">Ksh {tie.price}</p>
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setSelectedTie(tie);
                    setShowPayment(true);
                  }}
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Purchase Now
                </button>
                <button
                  onClick={() => handleAddToCart(tie)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {showPayment && (
        <PaymentFileGenerator 
          item={selectedTie}
          onClose={() => {
            setShowPayment(false);
            setSelectedTie(null);
          }}
        />
      )}
    </section>
  );
};

export default Ties;