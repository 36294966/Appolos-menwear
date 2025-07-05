import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import leather images
import Leather1 from '../../Assets/Jackets/jacket1.jpg';
import Leather2 from '../../Assets/Jackets/jacket2.jpg';
import Leather3 from '../../Assets/Jackets/jacket3.jpg';

const Leather = () => {
  const navigate = useNavigate();

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

  const handleViewDetails = (leatherId) => {
    // Navigate to the leather details page
    navigate(`/leathers/${leatherId}`);
  };

  return (
    <section className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">Leather Jackets</h2>
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
            {/* Center the labels and button */}
            <div className="p-5 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-900">{leather.name}</h3>
              <p className="text-lg font-semibold mb-4 text-gray-700">{leather.price}</p>
              <button
                onClick={() => handleViewDetails(leather.id)}
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

export default Leather;
