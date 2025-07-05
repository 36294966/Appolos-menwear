import React from 'react';
import { useNavigate } from 'react-router-dom';

import Tuxedo1 from '../../Assets/Suits/tuxedo1.jpg';
import Tuxedo2 from '../../Assets/Suits/tuxedo2.jpg';
import Tuxedo3 from '../../Assets/Suits/tuxedo3.jpg';

const Tuxedo = () => {
  const navigate = useNavigate();

  const tuxedoSuits = [
    {
      id: 1,
      name: 'Tuxedo & Dinner',
      image: Tuxedo1,
      price: 'Ksh 12,000',
    },
    {
      id: 2,
      name: 'Tuxedo & Dinner',
      image: Tuxedo2,
      price: 'Ksh 12,000',
    },
    {
      id: 3,
      name: 'Tuxedo & Dinner',
      image: Tuxedo3,
      price: 'Ksh 12,000',
    },
  ];

  return (
    <section className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">Tuxedo & Dinner</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tuxedoSuits.map((suit) => (
          <div
            key={suit.id}
            onClick={() => navigate(`/suits/${suit.id}`)}
            className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="h-64 w-full flex items-center justify-center bg-gray-200">
              <img
                src={suit.image}
                alt={suit.name}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Center the labels and button */}
            <div className="p-5 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-900">{suit.name}</h3>
              <p className="text-lg font-semibold mb-4 text-gray-700">{suit.price}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/suits/${suit.id}`);
                }}
                className="mt-4 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
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

export default Tuxedo;