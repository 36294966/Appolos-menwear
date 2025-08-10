import React, { useState, useEffect } from 'react'
// import { SpeedInsights } from "@vercel/speed-insights/react" // Removed unused import
import { CheckCircle, XCircle, ShoppingCart } from 'lucide-react'

// Suit images
import TwoPiece1 from '../Assets/Suits/twopiece1.jpg'
import TwoPiece2 from '../Assets/Suits/twopiece2.jpg'
import TwoPiece3 from '../Assets/Suits/twopiece3.jpg'
import ThreePiece1 from '../Assets/Suits/threepiece1.jpg'
import ThreePiece2 from '../Assets/Suits/threepiece2.jpg'
import ThreePiece3 from '../Assets/Suits/threepiece3.jpg'
import Threepiece4 from '../Assets/Suits/threepiece4.jpg'
import Threepiece5 from '../Assets/Suits/threepiece5.jpg'
import Threepiece6 from '../Assets/Suits/threepiece6.jpg'
import Threepiece7 from '../Assets/Suits/threepiece7.jpg'
import Threepiece8 from '../Assets/Suits/threepiece8.jpg'
import Threepiece9 from '../Assets/Suits/threepiece9.jpg'

// Tuxedo suits images
import Tuxedo1 from '../Assets/Suits/tuxedo1.jpg'
import Tuxedo2 from '../Assets/Suits/tuxedo2.jpg'
import Tuxedo3 from '../Assets/Suits/tuxedo3.jpg'

// Apollo photos
import Photo4 from '../Assets/Appolo/photo4.jpg'
import Photo5 from '../Assets/Appolo/photo5.jpg'
import Photo6 from '../Assets/Appolo/photo6.jpg'

// Official shirts images
import Official1 from '../Assets/Official/official1.jpg'
import Official2 from '../Assets/Official/official2.jpg'
import Official3 from '../Assets/Official/official3.jpg'
import Official4 from '../Assets/Official/official4.jpg'
import Official5 from '../Assets/Official/official5.jpg'
import Official6 from '../Assets/Official/official6.jpg'
import Official7 from '../Assets/Official/official7.jpg'
import Official8 from '../Assets/Official/official8.jpg'
import Official9 from '../Assets/Official/official9.jpg'
import Official10 from '../Assets/Official/official10.jpg'
import Official11 from '../Assets/Official/official11.jpg'
import Official12 from '../Assets/Official/official12.jpg'

// Casual shirts images
import Cassual1 from '../Assets/Cassual/cassual1.jpg'
import Cassual2 from '../Assets/Cassual/cassual2.jpg'
import Cassual3 from '../Assets/Cassual/cassual3.jpg'

// Jeans images
import Jean1 from '../Assets/Jeans/jean1.jpeg'
import Jean2 from '../Assets/Jeans/jean2.jpeg'
import Jean3 from '../Assets/Jeans/jean3.jpeg'
import Jean4 from '../Assets/Jeans/jean4.jpg'
import Jean5 from '../Assets/Jeans/jean5.jpg'
import Jean6 from '../Assets/Jeans/jean6.jpg'
import Jean7 from '../Assets/Jeans/jean7.jpg'
import Jean8 from '../Assets/Jeans/jean8.jpg'
import Jean9 from '../Assets/Jeans/jean9.jpg'
import Jean10 from '../Assets/Jeans/jean10.jpg'
import Jean11 from '../Assets/Jeans/jean11.jpg'
import Jean12 from '../Assets/Jeans/jean12.jpg'

// Placeholder images for Leather Jackets
import Jacket1 from '../Assets/Jackets/jacket1.jpg'
import Jacket2 from '../Assets/Jackets/jacket2.jpg'
import Jacket3 from '../Assets/Jackets/jacket3.jpg'

// Declare the photos array here
const photos = [Photo4, Photo5, Photo6]

const PaymentPopup = ({ item, onClose }) => {
  const priceString = typeof item?.price === 'string' ? item.price : `Ksh ${item?.price?.toString() || ''}`
  const [amount, setAmount] = useState(priceString.replace('Ksh ', ''))
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const paymentDetails = { paybill: '542542', account: '378179' }

  const handleDownload = () => {
    const content = `
Payment Details
---------------
Item: ${item?.name}
Paybill Number: ${paymentDetails.paybill}
Account Number: ${paymentDetails.account}
Amount: Ksh ${amount || '[Enter amount here]'}
`
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `payment_paybill.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    setPaymentSuccess(true)
    setTimeout(onClose, 1500)
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-2xl w-[95%] max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2 mb-4">
          {paymentSuccess ? (
            <>
              <CheckCircle className="w-8 h-8 text-green-500" />
              Payment Verified!
            </>
          ) : (
            'Payment Details'
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
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Price:</span>
                  <span className="font-mono text-green-600 font-bold">Ksh {priceString.replace('Ksh ', '')}</span>
                </div>
              </div>
              <input
                type="number"
                placeholder="Enter amount (Ksh)"
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleDownload}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" /> PAY NOW
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-black py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              >
                <XCircle className="w-5 h-5" /> Close
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-green-600">
            <p>Receipt downloaded successfully</p>
            <p className="text-sm mt-2">Closing automatically...</p>
          </div>
        )}
      </div>
    </div>
  )
}

// The LeatherJackets component remains the same, no need to modify here
const LeatherJackets = () => {
  const [showPayment, setShowPayment] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const leathers = [
    { id: 1, name: 'Black Leather Jacket', image: Jacket1, price: 'Ksh 15,000' },
    { id: 2, name: 'Brown Leather Bomber', image: Jacket2, price: 'Ksh 14,000' },
    { id: 3, name: 'Slim Fit Leather Jacket', image: Jacket3, price: 'Ksh 16,000' },
  ]

  const handlePurchase = (item) => {
    setSelectedItem(item)
    setShowPayment(true)
  }

  const handleAddToCart = (item) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || []
    const priceNum =
      typeof item.price === 'string'
        ? parseFloat(item.price.replace('Ksh ', '').replace(',', ''))
        : item.price
    const newItem = { ...item, price: priceNum }
    localStorage.setItem('cart', JSON.stringify([...storedCart, newItem]))
    window.dispatchEvent(new Event('storage'))
    alert(`${item.name} added to cart`)
  }

  return (
    <section className='p-10 bg-gray-100 min-h-screen relative'>
      {showPayment && (
        <PaymentPopup
          onClose={() => {
            setShowPayment(false)
            setSelectedItem(null)
          }}
          item={selectedItem}
        />
      )}

      <h2 className='text-4xl font-bold mb-10 text-center text-blue-800'>Leather Jackets</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {leathers.map((leather) => (
          <div
            key={leather.id}
            className='cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden'
          >
            <div className='h-80 p-4 flex items-center justify-center bg-gray-50'>
              <img
                src={leather.image}
                alt={leather.name}
                className='w-full h-full object-contain'
              />
            </div>
            <div className='p-5 flex flex-col items-center justify-center text-center'>
              <h3 className='text-xl font-bold mb-2'>{leather.name}</h3>
              <p className='text-lg font-semibold mb-4 text-gray-700'>{leather.price}</p>
              {/* Purchase Button */}
              <button
                onClick={() => handlePurchase(leather)}
                className='w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 mb-2'
              >
                <CheckCircle className='w-5 h-5' />
                Purchase
              </button>
              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(leather)}
                className='w-full bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2'
              >
                <ShoppingCart className='w-5 h-5' />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const Home = () => {
  const [showPayment, setShowPayment] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  // Removed showHeader state as it was causing errors and not used
  // const [showHeader, setShowHeader] = useState(true)

  // Data arrays...
  const twoPieceSuits = [
    { id: 1, name: 'Premium Two Piece Suit', image: TwoPiece1, price: 11000 },
    { id: 2, name: 'Classic Two Piece Suit', image: TwoPiece2, price: 11000 },
    { id: 3, name: 'Premium Two Piece Suit', image: TwoPiece3, price: 11000 },
  ]
  const threePieceSuits = [
    { id: 1, name: 'Executive Wool Three-Piece', image: ThreePiece1, price: 13000 },
    { id: 2, name: 'Luxury Velvet Dinner Suit', image: ThreePiece2, price: 13000 },
    { id: 3, name: 'Premium Linen Wedding Set', image: ThreePiece3, price: 13000 },
    { id: 4, name: 'Classic Pinstripe Ensemble', image: Threepiece4, price: 13000 },
    { id: 5, name: 'Modern Slim-Fit Tuxedo', image: Threepiece5, price: 13000 },
    { id: 6, name: 'Royal Navy Tuxedo Set', image: Threepiece6, price: 13000 },
    { id: 7, name: 'Designer Checkered Suit', image: Threepiece7, price: 13000 },
    { id: 8, name: 'Bespoke Tailored Suit', image: Threepiece8, price: 13000 },
    { id: 9, name: 'Executive Boardroom Suit', image: Threepiece9, price: 13000 },
  ]
  const tuxedoSuits = [
    { id: 10, name: 'Velvet Tuxedo', image: Tuxedo1, price: 12000 },
    { id: 11, name: 'Midnight Blue Dinner Suit', image: Tuxedo2, price: 12000 },
    { id: 12, name: 'Classic Tuxedo Suit', image: Tuxedo3, price: 12000 },
  ]
  const officialShirts = [
    { id: 101, name: 'Presidential Shirt', image: Official1, price: 3000 },
    { id: 102, name: 'Presidential Shirt', image: Official2, price: 3000 },
    { id: 103, name: 'Presidential Shirt', image: Official3, price: 3000 },
    { id: 104, name: 'Premium Official Shirt', image: Official4, price: 1800 },
    { id: 105, name: 'Classic Official Shirt', image: Official5, price: 1800 },
    { id: 106, name: 'Classic Official Shirt', image: Official6, price: 1800 },
    { id: 107, name: 'Premium Official Shirt', image: Official7, price: 1800 },
    { id: 108, name: 'Classic Official Shirt', image: Official8, price: 1800 },
    { id: 109, name: 'Classic Official Shirt', image: Official9, price: 1800 },
    { id: 110, name: 'Premium Official Shirt', image: Official10, price: 1800 },
    { id: 111, name: 'Classic Official Shirt', image: Official11, price: 1800 },
    { id: 112, name: 'Premium Official Shirt', image: Official12, price: 1800 },
  ]
  const casualShirts = [
    { id: 1, name: 'Urban Streetwear Shirt', image: Cassual1, price: 1700 },
    { id: 2, name: 'Designer Denim Casual', image: Cassual2, price: 1700 },
    { id: 3, name: 'Premium Linen Blend', image: Cassual3, price: 1700 },
  ]
  const jeansItems = [
    { id: 1, image: Jean1, name: 'Slim Fit Denim', price: 2000 },
    { id: 2, image: Jean2, name: 'Vintage Washed Jeans', price: 2000 },
    { id: 3, image: Jean3, name: 'Ripped Skinny Jeans', price: 2000 },
    { id: 4, image: Jean4, name: 'Classic Straight Leg', price: 2000 },
    { id: 5, image: Jean5, name: 'High Waist Mom Jeans', price: 2000 },
    { id: 6, image: Jean6, name: 'Black Stretch Denim', price: 2000 },
    { id: 7, image: Jean7, name: 'Light Wash Boyfriend', price: 2000 },
    { id: 8, image: Jean8, name: 'Tapered Cargo Jeans', price: 2000 },
    { id: 9, image: Jean9, name: 'Distressed Flare Jeans', price: 2000 },
    { id: 10, image: Jean10, name: 'Dark Selvedge Denim', price: 2000 },
    { id: 11, image: Jean11, name: 'Cropped Bootcut Jeans', price: 2000 },
    { id: 12, image: Jean12, name: 'Stretch Skinny Fit', price: 2000 },
  ]
  // Leather Jackets array
  const leatherJackets = [
    { id: 1, name: 'Brown Leather Jacket', image: Jacket1, price: 'Ksh 3500' },
    { id: 2, name: 'Black Leather Bomber', image: Jacket2, price: 'Ksh 3500' },
    { id: 3, name: 'Fit Leather Jacket', image: Jacket3, price: 'Ksh 3500' },
  ]

  const handleAddToCart = (item) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || []
    const priceNum =
      typeof item.price === 'string'
        ? parseFloat(item.price.replace('Ksh ', '').replace(',', ''))
        : item.price
    const newItem = { ...item, price: priceNum }
    localStorage.setItem('cart', JSON.stringify([...storedCart, newItem]))
    window.dispatchEvent(new Event('storage'))
    alert(`${item.name} added to cart`)
  }

  useEffect(() => {
    const update = () => {}
    window.addEventListener('storage', update)
    const handleScroll = () => {
      // 'setShowHeader' removed, no need to use
      if (window.scrollY > 50) {
        // Do something if needed
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('storage', update)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className='p-10 bg-gray-50 min-h-screen relative'>
      {/* Moving text from right to left with color change & larger font size */}
      <style>
        {`
        @keyframes scroll-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes color-change {
          0% { color: #2563eb; }
          25% { color: #ef4444; }
          50% { color: #10b981; }
          75% { color: #facc15; }
          100% { color: #2563eb; }
        }
        .scroll-text {
          display: inline-block;
          white-space: nowrap;
          font-size: 3xl; /* larger font size */
          font-weight: bold;
          animation: scroll-left 20s linear infinite, color-change 10s ease-in-out infinite;
        }
        `}
      </style>

      {/* Moving text, seamless, only at the top, very minimal gap */}
      <div className='w-full overflow-hidden h-20 relative mb-2'>
        <div className='absolute inset-0 flex items-center whitespace-nowrap'>
          {/* Single moving text for seamless loop */}
          <div className='scroll-text text-3xl font-bold mr-8'>
            Shop with Sir Appolo's Men Wear and experience amazing offers!!
          </div>
        </div>
      </div>

      {/* First items section - keep minimal gap */}
      {/* Apollo Photos */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 mt-4'>
        {photos.map((img, index) => (
          <div key={index} className='relative overflow-hidden rounded-xl shadow-lg aspect-square group'>
            <img
              src={img}
              alt='Apollo Style'
              className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300'
              loading='lazy'
            />
          </div>
        ))}
      </div>

      {/* Two Piece Suits */}
      <h2 className='text-4xl font-bold mb-10 text-center text-blue-800'>
        Premium Two Piece Suits
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16'>
        {twoPieceSuits.map((suit) => (
          <div
            key={suit.id}
            className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group'
          >
            <div className='h-96 p-4 flex items-center justify-center bg-gray-50'>
              <img
                src={suit.image}
                alt={suit.name}
                className='w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300'
                loading='lazy'
              />
            </div>
            <div className='p-6 text-center space-y-4'>
              <h3 className='text-xl font-bold'>{suit.name}</h3>
              <p className='text-lg font-bold text-blue-600'>Ksh {suit.price.toLocaleString()}</p>
              <div className='space-y-2'>
                <button
                  onClick={() => {
                    setSelectedItem(suit)
                    setShowPayment(true)
                  }}
                  className='w-full bg-blue-600 hover:bg-blue-800 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2'
                >
                  <CheckCircle className='w-5 h-5' />
                  Purchase Now
                </button>
                <button
                  onClick={() => handleAddToCart(suit)}
                  className='w-full bg-green-600 hover:bg-green-800 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2'
                >
                  <ShoppingCart className='w-5 h-5' />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Three Piece Suits */}
      <h2 className='text-4xl font-bold mb-10 text-center text-blue-800'>
        Premium Three Piece Suits
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
        {threePieceSuits.map((suit) => (
          <div
            key={suit.id}
            className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group'
          >
            <div className='h-96 p-4 flex items-center justify-center bg-gray-50'>
              <img
                src={suit.image}
                alt={suit.name}
                className='w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300'
                loading='lazy'
              />
            </div>
            <div className='p-6 text-center space-y-4'>
              <h3 className='text-xl font-bold'>{suit.name}</h3>
              <p className='text-lg font-bold text-blue-600'>Ksh {suit.price.toLocaleString()}</p>
              <div className='space-y-2'>
                <button
                  onClick={() => {
                    setSelectedItem(suit)
                    setShowPayment(true)
                  }}
                  className='w-full bg-blue-600 hover:bg-blue-800 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2'
                >
                  <CheckCircle className='w-5 h-5' />
                  Purchase Now
                </button>
                <button
                  onClick={() => handleAddToCart(suit)}
                  className='w-full bg-green-600 hover:bg-green-800 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2'
                >
                  <ShoppingCart className='w-5 h-5' />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tuxedo Collection */}
      <h2 className='text-4xl font-bold mb-10 text-center text-blue-800'>
        Tuxedo Dinner Collection
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10'>
        {tuxedoSuits.map((suit) => (
          <div
            key={suit.id}
            className='group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden'
          >
            <div className='h-64 w-full bg-gray-100 p-4 flex items-center justify-center'>
              <img
                src={suit.image}
                alt={suit.name}
                className='w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300'
                loading='lazy'
              />
            </div>
            <div className='p-5 text-center space-y-4'>
              <h3 className='text-xl font-bold'>{suit.name}</h3>
              <p className='text-lg font-semibold text-blue-600'>Ksh {suit.price.toLocaleString()}</p>
              <div className='space-y-2'>
                <button
                  onClick={() => {
                    setSelectedItem(suit)
                    setShowPayment(true)
                  }}
                  className='w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-full transition-colors flex items-center justify-center gap-2'
                >
                  <CheckCircle className='w-5 h-5' />
                  Purchase Now
                </button>
                <button
                  onClick={() => handleAddToCart(suit)}
                  className='w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors flex items-center justify-center gap-2'
                >
                  <ShoppingCart className='w-5 h-5' />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Official Shirts */}
      <h2 className='text-4xl font-bold mb-10 text-center text-blue-800'>
        Official Shirts
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
        {officialShirts.map((shirt) => (
          <div
            key={shirt.id}
            className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group'
          >
            <div className='aspect-square bg-gray-100 p-5 flex items-center justify-center'>
              <img
                src={shirt.image}
                alt={shirt.name}
                className='w-full h-full object-contain transition-transform duration-300'
                loading='lazy'
              />
            </div>
            <div className='p-5 text-center space-y-4'>
              <h3 className='text-xl font-bold'>{shirt.name}</h3>
              <p className='text-blue-600 font-bold text-xl'>Ksh {shirt.price.toLocaleString()}</p>
              <div className='space-y-2'>
                <button
                  onClick={() => {
                    setSelectedItem(shirt)
                    setShowPayment(true)
                  }}
                  className='w-full bg-blue-600 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2'
                >
                  <CheckCircle className='w-5 h-5' />
                  Purchase Now
                </button>
                <button
                  onClick={() => handleAddToCart(shirt)}
                  className='w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2'
                >
                  <ShoppingCart className='w-5 h-5' />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Casual Collection */}
      <h2 className='text-4xl font-bold mb-10 text-center text-blue-800'>
        Casual Collection
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
        {casualShirts.map((shirt) => (
          <div
            key={shirt.id}
            className='bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 group overflow-hidden'
          >
            <div className='h-64 w-full flex items-center justify-center bg-gray-200 p-4'>
              <img
                src={shirt.image}
                alt={shirt.name}
                className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300'
                loading='lazy'
              />
            </div>
            <div className='p-5 flex flex-col items-center justify-center text-center space-y-3'>
              <h3 className='text-xl font-semibold text-gray-900'>{shirt.name}</h3>
              <p className='text-lg text-blue-700 font-bold'>Ksh {shirt.price.toLocaleString()}</p>
              <div className='w-full space-y-2'>
                <button
                  onClick={() => {
                    setSelectedItem(shirt)
                    setShowPayment(true)
                  }}
                  className='w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2'
                >
                  <CheckCircle className='w-5 h-5' />
                  Purchase Now
                </button>
                <button
                  onClick={() => handleAddToCart(shirt)}
                  className='w-full bg-green-600 hover:bg-green-800 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2'
                >
                  <ShoppingCart className='w-5 h-5' />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Jeans Collection */}
      <h2 className='text-4xl font-bold mb-10 text-center text-blue-800'>
        Jeans Collection
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
        {jeansItems.map((jean) => (
          <div
            key={jean.id}
            className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group'
          >
            <div className='h-80 p-4 flex items-center justify-center bg-gray-50'>
              <img
                src={jean.image}
                alt={jean.name}
                className='w-full h-full object-contain group-hover:scale-105 transition-transform duration-300'
                loading='lazy'
              />
            </div>
            <div className='p-6 text-center space-y-4'>
              <h3 className='text-xl font-bold'>{jean.name}</h3>
              <p className='text-lg font-bold text-blue-600'>Ksh {jean.price.toLocaleString()}</p>
              <div className='space-y-2'>
                <button
                  onClick={() => {
                    setSelectedItem(jean)
                    setShowPayment(true)
                  }}
                  className='w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2'
                >
                  <CheckCircle className='w-5 h-5' />
                  Purchase
                </button>
                <button
                  onClick={() => handleAddToCart(jean)}
                  className='w-full bg-green-600 hover:bg-green-800 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2'
                >
                  <ShoppingCart className='w-5 h-5' />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Leather Jackets */}
      <h2 className='text-4xl font-bold mb-10 text-center text-blue-800'>
        Leather Jackets
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
        {leatherJackets.map((leather) => (
          <div
            key={leather.id}
            className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden'
          >
            <div className='h-80 p-4 flex items-center justify-center bg-gray-50'>
              <img
                src={leather.image}
                alt={leather.name}
                className='w-full h-full object-contain'
              />
            </div>
            <div className='p-6 text-center space-y-4'>
              <h3 className='text-xl font-bold'>{leather.name}</h3>
              <p className='text-lg font-bold text-blue-600'>{leather.price}</p>
              {/* Buttons */}
              <div className='space-y-2'>
                <button
                  onClick={() => {
                    setSelectedItem(leather)
                    setShowPayment(true)
                  }}
                  className='w-full bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded flex items-center justify-center gap-2'
                >
                  <CheckCircle className='w-5 h-5' />
                  Purchase
                </button>
                <button
                  onClick={() => handleAddToCart(leather)}
                  className='w-full bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded flex items-center justify-center gap-2'
                >
                  <ShoppingCart className='w-5 h-5' />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Payment Popup */}
      {showPayment && (
        <PaymentPopup
          item={selectedItem}
          onClose={() => {
            setShowPayment(false)
            setSelectedItem(null)
          }}
        />
      )}

      {/* styles for continuous right-to-left scrolling with color change & larger font size */}
      <style>
        {`
        @keyframes scroll-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes color-change {
          0% { color: #2563eb; }
          25% { color: #ef4444; }
          50% { color: #10b981; }
          75% { color: #facc15; }
          100% { color: #2563eb; }
        }
        .scroll-text {
          display: inline-block;
          white-space: nowrap;
          font-size: 3xl; /* larger font size */
          font-weight: bold;
          animation: scroll-left 20s linear infinite, color-change 10s ease-in-out infinite;
        }
        `}
      </style>
    </section>
  )
}

export default Home