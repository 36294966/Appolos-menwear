import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import belt images
import Belt1 from '../../Assets/Accessories/belt1.jpg';
import Belt2 from '../../Assets/Accessories/belt2.jpg';
import Belt3 from '../../Assets/Accessories/belt3.jpg';

const Belt = () => {
  const navigate = useNavigate();

  const belts = [
    {
      id: 1,
      name: 'Leather Belt - Black',
      image: Belt1,
      price: 'Ksh 1,200',
    },
    {
      id: 2,
      name: 'Leather Belt - Brown',
      image: Belt2,
      price: 'Ksh 1,200',
    },
    {
      id: 3,
      name: 'Formal Belt - Classic',
      image: Belt3,
      price: 'Ksh 1,500',
    },
  ];

  const handleViewDetails = (beltId) => {
    // Navigate to the belt details page
    navigate(`/belts/${beltId}`);
  };

  return (
    <section className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">Belts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {belts.map((belt) => (
          <div
            key={belt.id}
            className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="h-64 w-full flex items-center justify-center bg-gray-200">
              <img
                src={belt.image}
                alt={belt.name}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Center labels and button */}
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-900">{belt.name}</h3>
              <p className="text-lg font-bold mb-4 text-gray-700">{belt.price}</p>
              <button
                onClick={() => handleViewDetails(belt.id)}
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

export default Belt;


