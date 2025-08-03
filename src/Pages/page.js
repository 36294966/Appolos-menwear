// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ShoppingCart, X, CheckCircle, XCircle } from 'lucide-react';
// import '../App.css';

// import Background from '../Assets/background.jpg';
// import Navbar from '../Components/navbar';

// import Photo1 from '../Assets/Home/photo1.jpeg';
// import Photo2 from '../Assets/Home/photo2.jpeg';
// import Photo3 from '../Assets/Home/photo3.jpeg';
// import Photo4 from '../Assets/Home/photo4.jpeg';

// import SuitPhoto1 from '../Assets/Appolo/photo1.jpeg';
// import SuitPhoto2 from '../Assets/Appolo/photo2.jpeg';
// import SuitPhoto3 from '../Assets/Appolo/photo3.jpeg';
// import SuitPhoto4 from '../Assets/Appolo/photo4.jpg';

// import TwoPiece1 from '../Assets/Suits/twopiece1.jpg';
// import TwoPiece2 from '../Assets/Suits/twopiece2.jpg';
// import TwoPiece3 from '../Assets/Suits/twopiece3.jpg';

// import Tuxedo1 from '../Assets/Suits/tuxedo1.jpg';
// import Tuxedo2 from '../Assets/Suits/tuxedo2.jpg';
// import Tuxedo3 from '../Assets/Suits/tuxedo3.jpg';

// import Official1 from '../Assets/Official/official1.jpg';
// import Official2 from '../Assets/Official/official2.jpg';
// import Official3 from '../Assets/Official/official3.jpg';
// import Official4 from '../Assets/Official/official4.jpg';
// import Official5 from '../Assets/Official/official5.jpg';
// import Official6 from '../Assets/Official/official6.jpg';

// import Cassual1 from '../Assets/Cassual/cassual1.jpg';
// import Cassual2 from '../Assets/Cassual/cassual2.jpg';
// import Cassual3 from '../Assets/Cassual/cassual3.jpg';

// import Leather1 from '../Assets/Jackets/jacket1.jpg';
// import Leather2 from '../Assets/Jackets/jacket2.jpg';
// import Leather3 from '../Assets/Jackets/jacket3.jpg';

// import Jean1 from '../Assets/Jeans/jean1.jpeg';
// import Jean2 from '../Assets/Jeans/jean2.jpeg';
// import Jean3 from '../Assets/Jeans/jean3.jpeg';
// import Jean4 from '../Assets/Jeans/jean4.jpg';
// import Jean5 from '../Assets/Jeans/jean5.jpg';
// import Jean6 from '../Assets/Jeans/jean6.jpg';

// const PaymentPopup = ({ item, onClose }) => {
//   const [amount, setAmount] = useState('');
//   const [paymentSuccess, setPaymentSuccess] = useState(false);
//   const paymentDetails = {
//     paybill: '542542',
//     account: '378179'
//   };

//   const generatePaymentFile = () => {
//     const content = `${item?.name?.toUpperCase()} PURCHASE\n---------------------\nItem: ${item?.name}\nProduct ID: ${item?.id}\nPaybill: ${paymentDetails.paybill}\nAccount: ${paymentDetails.account}\nAmount Paid: Ksh ${amount || '________'}\nStandard Price: ${item?.price}`;
    
//     const blob = new Blob([content], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = `${item?.name.toLowerCase().replace(/\s+/g, '_')}_payment_${item?.id}.txt`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     URL.revokeObjectURL(url);
//     setPaymentSuccess(true);
//     setTimeout(onClose, 1500);
//   };

//   return (
//     <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100]">
//       <div className="bg-white p-8 rounded-2xl w-[95%] max-w-md space-y-6">
//         <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
//           {paymentSuccess ? (
//             <>
//               <CheckCircle className="w-8 h-8 text-green-500" />
//               Payment Verified!
//             </>
//           ) : (
//             `${item?.name} Purchase`
//           )}
//         </h2>

//         {!paymentSuccess ? (
//           <>
//             <div className="space-y-4">
//               <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
//                 <span className="font-medium">Paybill:</span>
//                 <span className="font-mono text-blue-600 font-bold">{paymentDetails.paybill}</span>
//               </div>
              
//               <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
//                 <span className="font-medium">Account:</span>
//                 <span className="font-mono text-blue-600 font-bold">{paymentDetails.account}</span>
//               </div>

//               <div className="bg-green-50 p-4 rounded-lg">
//                 <div className="flex justify-between items-center">
//                   <span className="font-medium">Standard Price:</span>
//                   <span className="font-mono text-green-600 font-bold">{item?.price}</span>
//                 </div>
//               </div>
              
//               <input
//                 type="number"
//                 placeholder="Enter amount (Ksh)"
//                 className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 min="1"
//               />
//             </div>

//             <div className="flex gap-4">
//               <button
//                 onClick={generatePaymentFile}
//                 className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
//               >
//                 <CheckCircle className="w-5 h-5" />
//                 Confirm Payment
//               </button>
//               <button
//                 onClick={onClose}
//                 className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
//               >
//                 <XCircle className="w-5 h-5" />
//                 Cancel
//               </button>
//             </div>
//           </>
//         ) : (
//           <div className="text-center text-green-600">
//             <p>Transaction receipt downloaded successfully</p>
//             <p className="text-sm text-gray-500 mt-2">Closing automatically...</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const CartModal = ({ isOpen, onClose, cartItems, removeFromCart }) => {
//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => {
//       const price = parseFloat(item.price.replace(/[^\d.]/g, '')) || 0;
//       return total + price;
//     }, 0);
//   };

//   const deliveryFee = 200;
//   const itemCount = cartItems.length;

//   return (
//     <div 
//       className={`fixed inset-0 bg-black/70 flex items-center justify-center z-[100] transition-opacity duration-300 ${
//         isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
//       }`}
//     >
//       <div className="bg-white w-80 max-h-[80vh] overflow-y-auto p-4 rounded-lg shadow-lg relative mx-4">
//         <button
//           className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
//           onClick={onClose}
//         >
//           ✕
//         </button>
//         <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
//           <ShoppingCart className="w-6 h-6" />
//           Your Cart ({itemCount} {itemCount === 1 ? 'item' : 'items'})
//         </h3>
//         {itemCount === 0 ? (
//           <p className="text-gray-600">Your cart is empty</p>
//         ) : (
//           <>
//             <div className="space-y-4">
//               {cartItems.map((item, index) => (
//                 <div key={`${item.id}-${index}`} className="pb-2 border-b flex justify-between items-center">
//                   <div className="flex items-center gap-3">
//                     <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
//                       <img
//                         src={item.image || item.src}
//                         alt={item.name || item.title}
//                         className="max-w-full max-h-full object-contain"
//                       />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-sm">{item.name || item.title}</p>
//                       <p className="text-xs text-gray-500">{item.price}</p>
//                     </div>
//                   </div>
//                   <button 
//                     onClick={() => removeFromCart(index)}
//                     className="text-gray-500 hover:text-red-500"
//                   >
//                     <X size={16} />
//                   </button>
//                 </div>
//               ))}
//             </div>
//             {/* Show total prices */}
//             <div className="mt-4 pt-4 border-t">
//               <div className="flex justify-between mb-1">
//                 <span className="font-semibold">Items:</span>
//                 <span className="font-bold">{itemCount}</span>
//               </div>
//               <div className="flex justify-between mb-1">
//                 <span className="font-semibold">Subtotal:</span>
//                 <span className="font-bold">Ksh {calculateTotal().toLocaleString('en-KE')}</span>
//               </div>
//               <div className="flex justify-between mb-2">
//                 <span className="font-semibold">Delivery:</span>
//                 <span className="font-bold">Ksh {deliveryFee.toLocaleString('en-KE')}</span>
//               </div>
//               {/* Total sum */}
//               <div className="flex justify-between mb-4 font-bold text-lg">
//                 <span>Total:</span>
//                 <span>Ksh {(calculateTotal() + deliveryFee).toLocaleString('en-KE')}</span>
//               </div>
//               <button
//                 className="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded transition"
//                 onClick={() => {
//                   alert('Proceed to checkout');
//                   onClose();
//                 }}
//               >
//                 Checkout
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// const Home = () => {
//   const navigate = useNavigate();
//   const whatsappNumber = '254746311274';

//   const currentDateTime = new Date().toLocaleString();
//   const messageText = `Hi Sir Apollo! I want to inquire about your products. Date: ${currentDateTime}`;
//   const prefilledMessage = encodeURIComponent(messageText);

//   const [cartItems, setCartItems] = useState([]);
//   const [showPayment, setShowPayment] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   // Sample data for categories
//   const homeImages = [
//     { id: 1, src: Photo1, title: 'Three Piece Men Suit', price: 'Ksh 13,000' },
//     { id: 2, src: Photo2, title: 'Three Piece Men Suit', price: 'Ksh 13,000' },
//     { id: 3, src: Photo3, title: 'Three Piece Men Suit', price: 'Ksh 13,000' },
//     { id: 4, src: Photo4, title: 'Three Piece Men Suit', price: 'Ksh 13,000' },
//   ];

//   const suits = [SuitPhoto1, SuitPhoto2, SuitPhoto3, SuitPhoto4].map((src, index) => ({
//     id: index + 5,
//     src,
//     name: 'Men Suit',
//     price: 'Ksh 13,000',
//   }));

//   const twoPieceSuits = [
//     { id: 9, name: 'Two Piece Men Suit', image: TwoPiece1, price: 'Ksh 11,000' },
//     { id: 10, name: 'Two Piece Men Suit', image: TwoPiece2, price: 'Ksh 11,000' },
//     { id: 11, name: 'Two Piece Men Suit', image: TwoPiece3, price: 'Ksh 11,000' },
//   ];

//   const tuxedoSuits = [
//     { id: 12, name: 'Tuxedo Suit', image: Tuxedo1, price: 'Ksh 12,000' },
//     { id: 13, name: 'Tuxedo Suit', image: Tuxedo2, price: 'Ksh 12,000' },
//     { id: 14, name: 'Tuxedo Suit', image: Tuxedo3, price: 'Ksh 12,000' },
//   ];

//   const officialShirts = [
//     { id: 15, name: 'Official Shirt', image: Official1, price: 'Ksh 1,800' },
//     { id: 16, name: 'Official Shirt', image: Official2, price: 'Ksh 1,800' },
//     { id: 17, name: 'Official Shirt', image: Official3, price: 'Ksh 1,800' },
//     { id: 18, name: 'Official Shirt', image: Official4, price: 'Ksh 1,800' },
//     { id: 19, name: 'Official Shirt', image: Official5, price: 'Ksh 1,800' },
//     { id: 20, name: 'Official Shirt', image: Official6, price: 'Ksh 1,800' },
//   ];

//   const casualShirts = [
//     { id: 21, name: 'Men Casual Shirt', image: Cassual1, price: 'Ksh 1,700' },
//     { id: 22, name: 'Men Casual Shirt', image: Cassual2, price: 'Ksh 1,700' },
//     { id: 23, name: 'Men Casual Shirt', image: Cassual3, price: 'Ksh 1,700' },
//   ];

//   const leathers = [
//     { id: 24, name: 'Leather Jacket - Black', image: Leather1, price: 'Ksh 3,500' },
//     { id: 25, name: 'Leather Jacket - Brown', image: Leather2, price: 'Ksh 3,500' },
//     { id: 26, name: 'Leather Jacket - Classic', image: Leather3, price: 'Ksh 3,500' },
//   ];

//   const jeans = [
//     { id: 27, name: 'Classic Jeans', image: Jean1, price: 'Ksh 2,000' },
//     { id: 28, name: 'Fit Jeans', image: Jean2, price: 'Ksh 2,000' },
//     { id: 29, name: 'Slim Fit Jeans', image: Jean3, price: 'Ksh 2,000' },
//     { id: 30, name: 'Relaxed Jeans', image: Jean4, price: 'Ksh 2,000' },
//     { id: 31, name: 'Stylish Jeans', image: Jean5, price: 'Ksh 2,000' },
//     { id: 32, name: 'Skinny Jeans', image: Jean6, price: 'Ksh 2,000' },
//   ];

//   // Load cart from localStorage on mount
//   useEffect(() => {
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) {
//       setCartItems(JSON.parse(savedCart));
//     }
//   }, []);

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cartItems));
//   }, [cartItems]);

//   // Listen for storage events (e.g., in another tab)
//   useEffect(() => {
//     const handleStorageChange = () => {
//       const savedCart = localStorage.getItem('cart');
//       if (savedCart) {
//         setCartItems(JSON.parse(savedCart));
//       }
//     };
//     window.addEventListener('storage', handleStorageChange);
//     return () => window.removeEventListener('storage', handleStorageChange);
//   }, []);

//   const handlePurchase = (item) => {
//     setSelectedItem(item);
//     setShowPayment(true);
//   };

//   const handleAddToCart = (item) => {
//     const newItem = {
//       ...item,
//       addedAt: new Date().toISOString()
//     };
//     setCartItems(prevItems => {
//       const updatedItems = [...prevItems, newItem];
//       localStorage.setItem('cart', JSON.stringify(updatedItems));
//       return updatedItems;
//     });
//     alert(`${item.name || item.title} added to cart`);
//     window.dispatchEvent(new Event('storage'));
//   };

//   const removeFromCart = (index) => {
//     setCartItems(prevItems => {
//       const updatedItems = [...prevItems];
//       updatedItems.splice(index, 1);
//       localStorage.setItem('cart', JSON.stringify(updatedItems));
//       return updatedItems;
//     });
//     window.dispatchEvent(new Event('storage'));
//   };

//   return (
//     <div className="w-full overflow-x-hidden">
//       {/* Main container with background */}
//       <div
//         className="min-h-screen bg-cover bg-center relative"
//         style={{ backgroundImage: `url(${Background})` }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>
//         {/* Content */}
//         <div className="relative z-10">
//           {/* Navbar with cart count */}
//           <Navbar 
//             cartItemCount={cartItems.length}
//             onCartClick={() => setIsCartOpen(true)} 
//           />

//           {/* Payment popup */}
//           {showPayment && (
//             <PaymentPopup 
//               item={selectedItem}
//               onClose={() => {
//                 setShowPayment(false);
//                 setSelectedItem(null);
//               }}
//             />
//           )}

//           {/* Cart modal */}
//           <CartModal
//             isOpen={isCartOpen}
//             onClose={() => setIsCartOpen(false)}
//             cartItems={cartItems}
//             removeFromCart={removeFromCart}
//           />

//           {/* Items grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-10">
//             {homeImages.map((item) => (
//               <div
//                 key={item.id}
//                 className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out h-[20rem] sm:h-[24rem] md:h-[28rem]"
//               >
//                 <div className="flex flex-col h-full justify-between">
//                   <img src={item.src} alt={item.title} className="w-full h-full object-cover flex-1" loading="lazy" />
//                   <div className="bg-opacity-36 max-h-42 p-2 pt-4 pb-2 text-center flex flex-col justify-center relative -mt-44 bg-black bg-opacity-60">
//                     <h3 className="text-white font-bold text-base md:text-lg mb-2">{item.title}</h3>
//                     <p className="text-white font-bold text-lg mb-4">Price: {item.price}</p>
//                     <div className="flex flex-col space-y-2 px-4">
//                       <button
//                         onClick={() => handlePurchase(item)}
//                         className="bg-blue-600 hover:bg-blue-800 text-white font-bold text-lg py-2 px-4 rounded cursor-pointer"
//                       >
//                         Purchase
//                       </button>
//                       <button
//                         onClick={() => handleAddToCart(item)}
//                         className="bg-green-600 hover:bg-green-800 text-white font-bold text-lg py-2 px-4 rounded cursor-pointer flex items-center justify-center gap-2"
//                       >
//                         <ShoppingCart className="w-5 h-5" />
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Collections Sections */}
//           {/* Suits Collection */}
//           <section className="py-10 px-6 bg-blue-600" id="suits">
//             <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Suits Collection</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//               {suits.map((suit) => (
//                 <div key={suit.id} className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
//                   <img src={suit.src} alt={`Suit ${suit.id}`} className="w-full h-[30rem] object-cover rounded-xl" loading="lazy" />
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* 2 Piece Suits */}
//           <section className="p-10 bg-gray-100">
//             <h2 className="text-4xl mb-10 text-center font-bold text-blue-800">2 Piece Suits</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {twoPieceSuits.map((suit) => (
//                 <div
//                   key={suit.id}
//                   className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden relative"
//                 >
//                   <div className="h-64 w-full flex items-center justify-center bg-gray-200">
//                     <img src={suit.image} alt={suit.name} className="w-full h-full object-contain" loading="lazy" />
//                   </div>
//                   <div className="bg-black bg-opacity-60 p-2 max-h-26 overflow-hidden text-center flex flex-col justify-center mt-2">
//                     <h3 className="text-white font-bold text-lg mb-1">{suit.name}</h3>
//                     <p className="text-white font-bold text-lg mb-1">{suit.price}</p>
//                     <div className="flex flex-col space-y-2 px-4 mt-2">
//                       <button
//                         onClick={() => handlePurchase(suit)}
//                         className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded cursor-pointer"
//                       >
//                         Purchase
//                       </button>
//                       <button
//                         onClick={() => handleAddToCart(suit)}
//                         className="bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded cursor-pointer flex items-center justify-center gap-2"
//                       >
//                         <ShoppingCart className="w-5 h-5" />
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Tuxedo & Dinner */}
//           <section className="p-10 bg-gray-100">
//             <h2 className="text-4xl mb-10 text-center font-bold text-blue-800">Tuxedo & Dinner</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {tuxedoSuits.map((suit) => (
//                 <div
//                   key={suit.id}
//                   className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden relative"
//                 >
//                   <div className="h-64 w-full flex items-center justify-center bg-gray-200">
//                     <img src={suit.image} alt={suit.name} className="w-full h-full object-contain" loading="lazy" />
//                   </div>
//                   <div className="bg-black bg-opacity-60 p-2 max-h-26 overflow-hidden text-center flex flex-col justify-center mt-2">
//                     <h3 className="text-white font-bold text-lg mb-1">{suit.name}</h3>
//                     <p className="text-white font-bold text-lg mb-1">{suit.price}</p>
//                     <div className="flex flex-col space-y-2 px-4 mt-2">
//                       <button
//                         onClick={() => handlePurchase(suit)}
//                         className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded cursor-pointer"
//                       >
//                         Purchase
//                       </button>
//                       <button
//                         onClick={() => handleAddToCart(suit)}
//                         className="bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded cursor-pointer flex items-center justify-center gap-2"
//                       >
//                         <ShoppingCart className="w-5 h-5" />
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Official Shirts */}
//           <section className="p-10 bg-gray-100">
//             <h2 className="text-4xl mb-10 text-center font-bold text-blue-800">Official Shirts</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {officialShirts.map((shirt) => (
//                 <div
//                   key={shirt.id}
//                   className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden relative"
//                 >
//                   <div className="h-64 w-full flex items-center justify-center bg-gray-200">
//                     <img src={shirt.image} alt={shirt.name} className="w-full h-full object-contain" loading="lazy" />
//                   </div>
//                   <div className="bg-black bg-opacity-60 p-2 max-h-26 overflow-hidden text-center flex flex-col justify-center mt-2">
//                     <h3 className="text-white font-bold text-lg mb-1">{shirt.name}</h3>
//                     <p className="text-white font-bold text-lg mb-1">{shirt.price}</p>
//                     <div className="flex flex-col space-y-2 px-4 mt-2">
//                       <button
//                         onClick={() => handlePurchase(shirt)}
//                         className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded cursor-pointer"
//                       >
//                         Purchase
//                       </button>
//                       <button
//                         onClick={() => handleAddToCart(shirt)}
//                         className="bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded cursor-pointer flex items-center justify-center gap-2"
//                       >
//                         <ShoppingCart className="w-5 h-5" />
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Casual Shirts */}
//           <section className="p-10 bg-gray-100">
//             <h2 className="text-4xl mb-10 text-center font-bold text-blue-800">Casual Shirts</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {casualShirts.map((shirt) => (
//                 <div
//                   key={shirt.id}
//                   className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden relative"
//                 >
//                   <div className="h-64 w-full flex items-center justify-center bg-gray-200">
//                     <img src={shirt.image} alt={shirt.name} className="w-full h-full object-contain" loading="lazy" />
//                   </div>
//                   <div className="bg-black bg-opacity-60 p-2 max-h-26 overflow-hidden text-center flex flex-col justify-center mt-2">
//                     <h3 className="text-white font-bold text-lg mb-1">{shirt.name}</h3>
//                     <p className="text-white font-bold text-lg mb-1">{shirt.price}</p>
//                     <div className="flex flex-col space-y-2 px-4 mt-2">
//                       <button
//                         onClick={() => handlePurchase(shirt)}
//                         className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded cursor-pointer"
//                       >
//                         Purchase
//                       </button>
//                       <button
//                         onClick={() => handleAddToCart(shirt)}
//                         className="bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded cursor-pointer flex items-center justify-center gap-2"
//                       >
//                         <ShoppingCart className="w-5 h-5" />
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Leather Jackets */}
//           <section className="p-10 bg-gray-100" id="leather-jackets">
//             <h2 className="text-4xl mb-10 text-center font-bold text-blue-800">Leather Jackets</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {leathers.map((leather) => (
//                 <div
//                   key={leather.id}
//                   className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden relative"
//                 >
//                   <div className="h-64 w-full flex items-center justify-center bg-gray-200">
//                     <img
//                       src={leather.image}
//                       alt={leather.name}
//                       className="w-full h-full object-contain"
//                       loading="lazy"
//                     />
//                   </div>
//                   <div className="bg-black bg-opacity-60 p-2 max-h-26 overflow-hidden text-center flex flex-col justify-center mt-2">
//                     <h3 className="text-white font-bold text-lg mb-1">{leather.name}</h3>
//                     <p className="text-white font-bold text-lg mb-1">{leather.price}</p>
//                     <div className="flex flex-col space-y-2 px-4 mt-2">
//                       <button
//                         onClick={() => handlePurchase(leather)}
//                         className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded cursor-pointer"
//                       >
//                         Purchase
//                       </button>
//                       <button
//                         onClick={() => handleAddToCart(leather)}
//                         className="bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded cursor-pointer flex items-center justify-center gap-2"
//                       >
//                         <ShoppingCart className="w-5 h-5" />
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Jeans */}
//           <section className="p-10 bg-gray-100" id="jeans">
//             <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">Jeans</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {jeans.map((jean) => (
//                 <div
//                   key={jean.id}
//                   className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden relative"
//                 >
//                   <div className="h-64 w-full flex items-center justify-center bg-gray-200">
//                     <img src={jean.image} alt={jean.name} className="w-full h-full object-contain" loading="lazy" />
//                   </div>
//                   <div className="bg-black bg-opacity-60 p-2 max-h-26 overflow-hidden text-center flex flex-col justify-center mt-2">
//                     <h3 className="text-white font-bold text-lg mb-1">{jean.name}</h3>
//                     <p className="text-white font-bold text-lg mb-1">{jean.price}</p>
//                     <div className="flex flex-col space-y-2 px-4 mt-2">
//                       <button
//                         onClick={() => handlePurchase(jean)}
//                         className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded cursor-pointer"
//                       >
//                         Purchase
//                       </button>
//                       <button
//                         onClick={() => handleAddToCart(jean)}
//                         className="bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded cursor-pointer flex items-center justify-center gap-2"
//                       >
//                         <ShoppingCart className="w-5 h-5" />
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </div>

//       {/* WhatsApp Chat Button */}
//       <a
//         href={`https://wa.me/${whatsappNumber}?text=${prefilledMessage}`}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-5 right-5 z-50 hover:scale-110 transition-transform"
//         aria-label="Chat with Sir Apollo on WhatsApp"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="56" height="56" className="drop-shadow-lg text-green-500">
//           <path d="M20.52 3.48A11.787 11.787 0 0012.01 0C5.38 0 .01 5.37.01 12c0 2.11.55 4.16 1.59 5.97L0 24l6.19-1.58A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12a11.94 11.94 0 00-3.48-8.52zM12 22.02c-1.81 0-3.57-.48-5.1-1.37l-.36-.21-3.67.93.97-3.57-.24-.37A9.944 9.944 0 012.02 12C2.02 6.49 6.5 2 12.01 2c2.67 0 5.18 1.04 7.07 2.93A9.944 9.944 0 0122 12c0 5.51-4.48 10.02-10 10.02z" />
//           <path d="M17.49 14.89l-2.53-.72a.999.999 0 00-.97.26l-.73.75a7.064 7.064 0 01-3.36-3.35l.75-.73a1 1 0 00.26-.97l-.72-2.53a1 1 0 00-1.2-.7C7.35 7.26 6.5 8.94 6.5 10.75c0 .2.01.4.04.6a10.1 10.1 0 005.59 7.68c.16.07.33.13.5.18.4.1.8.15 1.2.15 1.81 0 3.49-.85 4.26-2.26a1 1 0 00-.7-1.2z" />
//         </svg>
//       </a>
//     </div>
//   );
// };

// export default Home;

