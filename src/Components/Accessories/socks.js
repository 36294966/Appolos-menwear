import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import sock images
import Socks1 from '../../Assets/Accessories/socks1.jpg';
import Socks2 from '../../Assets/Accessories/socks2.jpg';
import Socks3 from '../../Assets/Accessories/socks3.jpg';

const Socks = () => {
  const navigate = useNavigate();

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
      price: 'Ksh 350',
    },
    {
      id: 3,
      name: 'Colorful Crew Socks',
      image: Socks3,
      price: 'Ksh 400',
    },
  ];

  const handleViewDetails = (sockId) => {
    // Navigate to the sock details page
    navigate(`/socks/${sockId}`);
  };

  return (
    <section className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">Socks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {socksItems.map((sock) => (
          <div
            key={sock.id}
            className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="h-64 w-full flex items-center justify-center bg-gray-200">
              <img
                src={sock.image}
                alt={sock.name}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Centered labels and button */}
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-900">{sock.name}</h3>
              <p className="text-lg font-bold mb-4 text-gray-700">{sock.price}</p>
              <button
                onClick={() => handleViewDetails(sock.id)}
                className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
              >
                Purchase
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Socks;