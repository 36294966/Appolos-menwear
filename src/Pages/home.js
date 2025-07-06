import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

import Background from '../Assets/background.jpg';
import Navbar from '../Components/navbar';

import Belt1 from '../Assets/Accessories/belt1.jpg';
import Belt2 from '../Assets/Accessories/belt2.jpg';
import Belt3 from '../Assets/Accessories/belt3.jpg';

import Tie1 from '../Assets/Accessories/tie1.jpg';
import Tie2 from '../Assets/Accessories/tie2.jpg';
import Tie3 from '../Assets/Accessories/tie3.jpg';

import Socks1 from '../Assets/Accessories/socks1.jpg';
import Socks2 from '../Assets/Accessories/socks2.jpg';
import Socks3 from '../Assets/Accessories/socks3.jpg';

import Jacket1 from '../Assets/Jackets/jacket1.jpg';
import Jacket2 from '../Assets/Jackets/jacket2.jpg';
import Jacket3 from '../Assets/Jackets/jacket3.jpg';

import Photo1 from '../Assets/Home/photo1.jpeg';
import Photo2 from '../Assets/Home/photo2.jpeg';
import Photo3 from '../Assets/Home/photo3.jpeg';
import Photo4 from '../Assets/Home/photo4.jpeg';

import SuitPhoto1 from '../Assets/Appolo/photo1.jpeg';
import SuitPhoto2 from '../Assets/Appolo/photo2.jpeg';
import SuitPhoto3 from '../Assets/Appolo/photo3.jpeg';
import SuitPhoto4 from '../Assets/Appolo/photo4.jpg';

import Shirt1 from '../Assets/Shirts/shirt1.jpg';
import Shirt2 from '../Assets/Shirts/shirt2.jpg';
import Shirt3 from '../Assets/Shirts/shirt3.jpg';
import Shirt4 from '../Assets/Shirts/shirt4.jpeg';
import Shirt5 from '../Assets/Shirts/shirt5.jpeg';
import Shirt6 from '../Assets/Shirts/shirt6.jpg';

import Jean1 from '../Assets/Jeans/jean1.jpeg';
import Jean2 from '../Assets/Jeans/jean2.jpeg';
import Jean3 from '../Assets/Jeans/jean3.jpeg';
import Jean4 from '../Assets/Jeans/jean4.jpg';
import Jean5 from '../Assets/Jeans/jean5.jpg';
import Jean6 from '../Assets/Jeans/jean6.jpg';

import TwoPiece1 from '../Assets/Suits/twopiece1.jpg';
import TwoPiece2 from '../Assets/Suits/twopiece2.jpg';
import TwoPiece3 from '../Assets/Suits/twopiece3.jpg';

import Tuxedo1 from '../Assets/Suits/tuxedo1.jpg';
import Tuxedo2 from '../Assets/Suits/tuxedo2.jpg';
import Tuxedo3 from '../Assets/Suits/tuxedo3.jpg';

import Official1 from '../Assets/Official/official1.jpg';
import Official2 from '../Assets/Official/official2.jpg';
import Official3 from '../Assets/Official/official3.jpg';
import Official4 from '../Assets/Official/official4.jpg';
import Official5 from '../Assets/Official/official5.jpg';
import Official6 from '../Assets/Official/official6.jpg';

import Cassual1 from '../Assets/Cassual/cassual1.jpg';
import Cassual2 from '../Assets/Cassual/cassual2.jpg';
import Cassual3 from '../Assets/Cassual/cassual3.jpg';

// Leather jackets images
import Leather1 from '../Assets/Jackets/jacket1.jpg';
import Leather2 from '../Assets/Jackets/jacket2.jpg';
import Leather3 from '../Assets/Jackets/jacket3.jpg';

const Home = () => {
  const navigate = useNavigate();
  const whatsappNumber = '254746311274';
  const currentDateTime = new Date().toLocaleString();
  const messageText = `Hi Sir Apollo! I want to inquire about your products. Date: ${currentDateTime}`;
  const prefilledMessage = encodeURIComponent(messageText);

  const homeImages = [
    { src: Photo1, title: 'Three Piece Men Suit', price: '13,000' },
    { src: Photo2, title: 'Three piece Men Suit', price: '13,000' },
    { src: Photo3, title: 'Three Piece Men Suit', price: '13,000' },
    { src: Photo4, title: 'Three Piece Men Suit', price: '13,000' },
  ];

  const suits = [SuitPhoto1, SuitPhoto2, SuitPhoto3, SuitPhoto4].map((src, index) => ({ src, id: index + 1 }));
  const shirts = [Shirt1, Shirt2, Shirt3, Shirt4, Shirt5, Shirt6].map((src, index) => ({ src, id: index + 1 }));
  const jackets = [Jacket1, Jacket2, Jacket3].map((src, index) => ({ src, id: index + 1 }));
  const belts = [Belt1, Belt2, Belt3].map((src, index) => ({ src, id: index + 1 }));
  const ties = [Tie1, Tie2, Tie3].map((src, index) => ({ src, id: index + 1 }));
  const socks = [Socks1, Socks2, Socks3].map((src, index) => ({ src, id: index + 1 }));

  const twoPieceSuits = [
    { id: 1, name: 'Two Piece Men Suit', image: TwoPiece1, price: 'Ksh 11,000' },
    { id: 2, name: 'Two Piece Men Suit', image: TwoPiece2, price: 'Ksh 11,000' },
    { id: 3, name: 'Two Piece Men Suit', image: TwoPiece3, price: 'Ksh 11,000' },
  ];

  const tuxedoSuits = [
    { id: 1, name: 'Tuxedo Suit', image: Tuxedo1, price: 'Ksh 12,000' },
    { id: 2, name: 'Tuxedo Suit', image: Tuxedo2, price: 'Ksh 12,000' },
    { id: 3, name: 'Tuxedo Suit', image: Tuxedo3, price: 'Ksh 12,000' },
  ];

  const officialShirts = [
    { id: 1, name: 'Formal White Shirt', image: Official1, price: 'Ksh 1,800' },
    { id: 2, name: 'Classic Blue Shirt', image: Official2, price: 'Ksh 1,800' },
    { id: 3, name: 'Striped Office Shirt', image: Official3, price: 'Ksh 1,800' },
    { id: 4, name: 'Office Shirt', image: Official4, price: 'Ksh 1,800' },
    { id: 5, name: 'Office Shirt', image: Official5, price: 'Ksh 1,800' },
    { id: 6, name: 'Office Shirt', image: Official6, price: 'Ksh 1,800' },
  ];

  const casualShirts = [
    { id: 1, name: 'Men Casual Shirt', image: Cassual1, price: 'Ksh 1,700' },
    { id: 2, name: 'Men Casual Shirt', image: Cassual2, price: 'Ksh 1,700' },
    { id: 3, name: 'Men Casual Shirt', image: Cassual3, price: 'Ksh 1,700' },
  ];

  // Leather Jackets Data
  const leathers = [
    {
      id: 1,
      name: 'Leather Jacket - Black',
      image: Leather1,
      price: 'Ksh 3,500',
    },
    {
      id: 2,
      name: 'Leather Jacket - Brown',
      image: Leather2,
      price: 'Ksh 3,500',
    },
    {
      id: 3,
      name: 'Leather Jacket - Classic',
      image: Leather3,
      price: 'Ksh 3,500',
    },
  ];

  // Jeans Data
  const jeans = [
    { id: 1, name: 'Classic Jeans', image: Jean1, price: 'Ksh 2,000' },
    { id: 2, name: 'Fit Jeans', image: Jean2, price: 'Ksh 2,000' },
    { id: 3, name: 'Slim Fit Jeans', image: Jean3, price: 'Ksh 2,000' },
    { id: 4, name: 'Relaxed Jeans', image: Jean4, price: 'Ksh 2,000' },
    { id: 5, name: 'Stylish Jeans', image: Jean5, price: 'Ksh 2,500' },
    { id: 6, name: 'Skinny Jeans', image: Jean6, price: 'Ksh 2,300' },
  ];

  return (
    <div className="w-full overflow-x-hidden"> {/* Wrap main container */}
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${Background})` }}
      >
        {/* Blinking line */}
        <div className="blinking-line fixed top-0 left-0 w-full h-1 bg-green-500 animate-blink z-50"></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>
        {/* Content */}
        <div className="relative z-10">
          <Navbar />

          {/* Welcome message */}
          <div className="fixed bottom-20 right-5 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg z-50 max-w-sm text-center">
            <p className="text-lg font-semibold text-gray-800">
              Welcome to Sir Apollo's Collection and experience amazing offers
            </p>
          </div>

          {/* Header texts */}
          <div className="text-center mt-10 px-4">
            <p className="blinking-text-fade text-2xl md:text-4xl font-extrabold text-white">
              We are just one call away
            </p>
            <p className="text-2xl md:text-4xl font-extrabold text-blue-600 animate-scroll-left-slow whitespace-nowrap mt-4">
              Shop with Sir Apollo's Collection and Experience Amazing Offers
            </p>
          </div>

          {/* Featured Images Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-10">
            {homeImages.map(({ src, title, price }, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out h-[20rem] sm:h-[24rem] md:h-[28rem]"
              >
                {/* Flex container to position image and label at bottom */}
                <div className="flex flex-col h-full justify-between">
                  {/* Image */}
                  <img src={src} alt={title} className="w-full h-full object-cover flex-1" />
                  {/* Label and Buy button styled as a button */}
                  <div className=" bg-opacity-36  max-h-42 p-2 pt-4 pb-2 text-center flex flex-col justify-center relative -mt-28 ">
                    <h3 className="text-white text-base md:text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-white font-bold text-lg mb-2">Price: {price}</p>
                    {/* Longer "Purchase" button, slightly shifted upward */}
                    <div
                      className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-2 px-4 rounded cursor-pointer mx-auto z-10 relative"
                      onClick={() => alert('Buying suit!')}
                    >
                      Purchase
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Suits Collection */}
          <section className="py-10 px-6 bg-blue-600" id="suits">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Suits Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {suits.map((suit, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
                  <img src={suit.src} alt={`Suit ${index + 1}`} className="w-full h-[30rem] object-cover rounded-xl" />
                </div>
              ))}
            </div>
          </section>

          {/* 2 Piece Suits */}
          <section className="p-10 bg-gray-100">
            <h2 className="text-4xl mb-10 text-center font-bold text-blue-800">2 Piece Suits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {twoPieceSuits.map((suit) => (
                <div
                  key={suit.id}
                  onClick={() => navigate(`/suits/${suit.id}`)}
                  className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden relative"
                >
                  <div className="h-64 w-full flex items-center justify-center bg-gray-200">
                    <img src={suit.image} alt={suit.name} className="w-full h-full object-contain" />
                  </div>
                  {/* Labels outside image */}
                  <div className="bg-black bg-opacity-60 p-2 max-h-26 overflow-hidden text-center flex flex-col justify-center mt-2">
                    <h3 className="text-white font-bold text-lg mb-1">{suit.name}</h3>
                    <p className="text-white font-bold text-lg mb-1">{suit.price}</p>
                    {/* Buy button */}
                    <div
                      className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded cursor-pointer mx-auto"
                      onClick={() => alert('Buying suit!')}
                    >
                      Purchase
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tuxedo & Dinner */}
          <section className="p-10 bg-gray-100">
            <h2 className="text-4xl mb-10 text-center font-bold text-blue-800">Tuxedo & Dinner</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tuxedoSuits.map((suit) => (
                <div
                  key={suit.id}
                  onClick={() => navigate(`/suits/${suit.id}`)}
                  className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden relative"
                >
                  <div className="h-64 w-full flex items-center justify-center bg-gray-200">
                    <img src={suit.image} alt={suit.name} className="w-full h-full object-contain" />
                  </div>
                  {/* Labels outside image */}
                  <div className="bg-black bg-opacity-60 p-2 max-h-26 overflow-hidden text-center flex flex-col justify-center mt-2">
                    <h3 className="text-white font-bold text-lg mb-1">{suit.name}</h3>
                    <p className="text-white font-bold text-lg mb-1">{suit.price}</p>
                    {/* Buy styled as a button */}
                    <div
                      className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-2 px-4 rounded cursor-pointer mx-auto"
                      onClick={() => alert('Buying suit!')}
                    >
                      Purchase
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Official Shirts */}
          <section className="p-10 bg-gray-100">
            <h2 className="text-4xl mb-10 text-center font-bold text-blue-800">Official Shirts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {officialShirts.map((shirt) => (
                <div
                  key={shirt.id}
                  onClick={() => navigate(`/shirts/${shirt.id}`)}
                  className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden relative"
                >
                  <div className="h-64 w-full flex items-center justify-center bg-gray-200">
                    <img src={shirt.image} alt={shirt.name} className="w-full h-full object-contain" />
                  </div>
                  {/* Labels outside image */}
                  <div className="bg-black bg-opacity-60 p-2 max-h-26 overflow-hidden text-center flex flex-col justify-center mt-2">
                    <h3 className="text-white font-bold text-lg mb-1">{shirt.name}</h3>
                    <p className="text-white font-bold text-lg mb-1">{shirt.price}</p>
                    {/* Buy styled as button */}
                    <div
                      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg font-semibold py-2 px-2 rounded cursor-pointer mx-auto"
                      onClick={() => alert('Buying shirt!')}
                    >
                      Purchase
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Casual Shirts */}
          <section className="p-10 bg-gray-100">
            <h2 className="text-4xl mb-10 text-center font-bold text-blue-800">Casual Shirts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {casualShirts.map((shirt) => (
                <div
                  key={shirt.id}
                  onClick={() => navigate(`/shirts/${shirt.id}`)}
                  className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden relative"
                >
                  <div className="h-64 w-full flex items-center justify-center bg-gray-200">
                    <img src={shirt.image} alt={shirt.name} className="w-full h-full object-contain" />
                  </div>
                  {/* Labels outside image */}
                  <div className="bg-black bg-opacity-60 p-2 max-h-26 overflow-hidden text-center flex flex-col justify-center mt-2">
                    <h3 className="text-white font-bold text-lg mb-1">{shirt.name}</h3>
                    <p className="text-white font-bold text-lg mb-1">{shirt.price}</p>
                    {/* Buy styled as button */}
                    <div
                      className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-2 px-4 rounded cursor-pointer mx-auto"
                      onClick={() => alert('Buying shirt!')}
                    >
                      Purchase
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Leather Jackets */}
          <section className="p-10 bg-gray-100" id="leather-jackets">
            <h2 className="text-4xl mb-10 text-center font-bold text-blue-800">Leather Jackets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leathers.map((leather) => (
                <div
                  key={leather.id}
                  className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="h-64 w-full flex items-center justify-center bg-gray-200">
                    <img
                      src={leather.image}
                      alt={leather.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Labels outside image */}
                  <div className="bg-black bg-opacity-60 p-2 max-h-26 overflow-hidden text-center flex flex-col justify-center mt-2">
                    <h3 className="text-white font-bold text-lg mb-1">{leather.name}</h3>
                    <p className="text-white font-bold text-lg mb-1">{leather.price}</p>
                    {/* Buy button */}
                    <div
                      className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-2 px-4 rounded cursor-pointer mx-auto"
                      onClick={() => alert('Buying leather!')}
                    >
                      Purchase
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Jeans Section (after Leather Jackets) */}
          <section className="p-10 bg-gray-100" id="jeans">
            <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">Jeans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jeans.map((jean) => (
                <div
                  key={jean.id}
                  className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="h-64 w-full flex items-center justify-center bg-gray-200">
                    <img src={jean.image} alt={jean.name} className="w-full h-full object-contain" />
                  </div>
                  {/* Labels outside image */}
                  <div className="bg-black bg-opacity-60 p-2 max-h-26 overflow-hidden text-center flex flex-col justify-center mt-2">
                    <h3 className="text-white font-bold text-lg mb-1">{jean.name}</h3>
                    <p className="text-white font-bold text-lg mb-1">{jean.price}</p>
                    {/* Buy styled as button */}
                    <div
                      className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded cursor-pointer mx-auto"
                      onClick={() => alert('Buying jeans!')}
                    >
                      Purchase
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${prefilledMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 hover:scale-110 transition-transform"
        aria-label="Chat with Sir Apollo on WhatsApp"
      >
        {/* WhatsApp SVG icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="56" height="56" className="drop-shadow-lg text-green-500">
          <path d="M20.52 3.48A11.787 11.787 0 0012.01 0C5.38 0 .01 5.37.01 12c0 2.11.55 4.16 1.59 5.97L0 24l6.19-1.58A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12a11.94 11.94 0 00-3.48-8.52zM12 22.02c-1.81 0-3.57-.48-5.1-1.37l-.36-.21-3.67.93.97-3.57-.24-.37A9.944 9.944 0 012.02 12C2.02 6.49 6.5 2 12.01 2c2.67 0 5.18 1.04 7.07 2.93A9.944 9.944 0 0122 12c0 5.51-4.48 10.02-10 10.02z" />
          <path d="M17.49 14.89l-2.53-.72a.999.999 0 00-.97.26l-.73.75a7.064 7.064 0 01-3.36-3.35l.75-.73a1 1 0 00.26-.97l-.72-2.53a1 1 0 00-1.2-.7C7.35 7.26 6.5 8.94 6.5 10.75c0 .2.01.4.04.6a10.1 10.1 0 005.59 7.68c.16.07.33.13.5.18.4.1.8.15 1.2.15 1.81 0 3.49-.85 4.26-2.26a1 1 0 00-.7-1.2z" />
        </svg>
      </a>
    </div>
  );
};

export default Home;
