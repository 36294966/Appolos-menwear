import React from 'react';
import { useNavigate } from 'react-router-dom';

import Official1 from '../../Assets/Official/official1.jpg';
import Official2 from '../../Assets/Official/official2.jpg';
import Official3 from '../../Assets/Official/official3.jpg';
import Official4 from '../../Assets/Official/official4.jpg';
import Official5 from '../../Assets/Official/official5.jpg';
import Official6 from '../../Assets/Official/official6.jpg';

const Official = () => {
  const navigate = useNavigate();

  const officialShirts = [
    {
      id: 1,
      name: 'Formal White Shirt',
      image: Official1,
      price: 'Ksh 1,800',
    },
    {
      id: 2,
      name: 'Classic Blue Shirt',
      image: Official2,
      price: 'Ksh 1,800',
    },
    {
      id: 3,
      name: 'Striped Office Shirt',
      image: Official3,
      price: 'Ksh 1,800',
    },
    {
      id: 4,
      name: 'Office Shirt',
      image: Official4,
      price: 'Ksh 1,800',
    },
    {
      id: 5,
      name: 'Office Shirt',
      image: Official5,
      price: 'Ksh 1,800',
    },
    {
      id: 6,
      name: 'Office Shirt',
      image: Official6,
      price: 'Ksh 1,800',
    },
  ];

  return (
    <section className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">Official Shirts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {officialShirts.map((shirt) => (
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
            {/* Centered label section */}
            <div className="p-5 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-900">{shirt.name}</h3>
              <p className="text-lg font-bold text-gray-700">{shirt.price}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/shirts/${shirt.id}`);
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

export default Official;
