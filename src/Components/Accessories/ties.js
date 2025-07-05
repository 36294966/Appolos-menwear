import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import tie images
import Tie1 from '../../Assets/Ties/tie1.jpg';
import Tie2 from '../../Assets/Ties/tie2.jpg';
import Tie3 from '../../Assets/Ties/tie3.jpg';

const Ties = () => {
  const navigate = useNavigate();

  const ties = [
    {
      id: 1,
      name: 'Silk Tie - Black',
      image: Tie1,
      price: 'Ksh 900',
    },
    {
      id: 2,
      name: 'Polyester Tie - Brown',
      image: Tie2,
      price: 'Ksh 900',
    },
    {
      id: 3,
      name: 'Formal Tie - Classic',
      image: Tie3,
      price: 'Ksh 900',
    },
  ];

  const handleViewDetails = (tieId) => {
    // Navigate to the tie details page
    navigate(`/ties/${tieId}`);
  };

  return (
    <section className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">Ties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ties.map((tie) => (
          <div
            key={tie.id}
            className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="h-64 w-full flex items-center justify-center bg-gray-200">
              <img
                src={tie.image}
                alt={tie.name}
                className="max-w-full max-h-full object-contain" // Fit image without cropping
              />
            </div>
            {/* Center labels and button */}
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-900">{tie.name}</h3>
              <p className="text-lg font-bold mb-4 text-gray-700">{tie.price}</p>
              <button
                onClick={() => handleViewDetails(tie.id)}
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

export default Ties;