import React from 'react';
import { useNavigate } from 'react-router-dom';

import Cassual1 from '../../Assets/Cassual/cassual1.jpg';
import Cassual2 from '../../Assets/Cassual/cassual2.jpg';
import Cassual3 from '../../Assets/Cassual/cassual3.jpg';

const Cassual = () => {
  const navigate = useNavigate();

  const casualShirts = [
    {
      id: 1,
      name: 'Men Casual Shirt',
      image: Cassual1,
      price: 'Ksh 1,700',
    },
    {
      id: 2,
      name: 'Men Casual Shirt',
      image: Cassual2,
      price: 'Ksh 1,700',
    },
    {
      id: 3,
      name: 'Men Casual Shirt',
      image: Cassual3,
      price: 'Ksh 1,700',
    },
  ];

  return (
    <section className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">Casual Shirts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {casualShirts.map((shirt) => (
          <div
            key={shirt.id}
            onClick={() => navigate(`/shirts/${shirt.id}`)}
            className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="h-64 w-full flex items-center justify-center bg-gray-200">
              <img
                src={shirt.image}
                alt={shirt.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{shirt.name}</h3>
              <p className="text-lg text-gray-700">{shirt.price}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/shirts/${shirt.id}`);
                }}
                className="mt-4 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cassual;
