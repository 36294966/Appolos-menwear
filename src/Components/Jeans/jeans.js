import React from 'react';
import { useNavigate } from 'react-router-dom';

import Jean1 from '../../Assets/Jeans/jean1.jpeg';
import Jean2 from '../../Assets/Jeans/jean2.jpeg';
import Jean3 from '../../Assets/Jeans/jean3.jpeg';
import Jean4 from '../../Assets/Jeans/jean4.jpg';
import Jean5 from '../../Assets/Jeans/jean5.jpg'; // Make sure this path is correct
import Jean6 from '../../Assets/Jeans/jean6.jpg'; // Make sure this path is correct

const Jeans = () => {
  const navigate = useNavigate();

  const jeansList = [
    {
      id: 1,
      name: 'Classic Jeans',
      image: Jean1,
      price: 'Ksh 2,000',
    },
    {
      id: 2,
      name: 'Fit Jeans',
      image: Jean2,
      price: 'Ksh 2,000',
    },
    {
      id: 3,
      name: 'Slim Fit Jeans',
      image: Jean3,
      price: 'Ksh 2,000',
    },
    {
      id: 4,
      name: 'Relaxed Jeans',
      image: Jean4,
      price: 'Ksh 2,000',
    },
    {
      id: 5,
      name: 'Bootcut Jeans', 
      image: Jean5,
      price: 'Ksh 2,000', 
    },
    {
      id: 6,
      name: 'Skinny Jeans', 
      image: Jean6,
      price: 'Ksh 2,000', 
    },
  ];

  return (
    <section className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">Jeans</h2>
      {/* Responsive grid with flexible column sizing */}
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-8">
        {jeansList.map((jean) => (
          <div
            key={jean.id}
            onClick={() => navigate(`/jeans/${jean.id}`)}
            className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden"
          >
            {/* Increased height for larger images */}
            <div className="h-80 w-full flex items-center justify-center bg-gray-200">
              <img
                src={jean.image}
                alt={jean.name}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Centered labels and button */}
            <div className="p-4 flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-bold mb-2 text-gray-900">{jean.name}</h3>
              <p className="text-lg font-bold mb-4 text-gray-700">{jean.price}</p>
              {/* Button to view details or purchase */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/jeans/${jean.id}`);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
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

export default Jeans;