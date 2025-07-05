import Navbar from '../Components/navbar';

// 📷 Replace these paths with your actual images
import Photo1 from '../Assets/Appolo/photo1.jpeg';
import Photo2 from '../Assets/Appolo/photo2.jpeg';
import Photo3 from '../Assets/Appolo/photo3.jpeg';

const suits = [
  { src: Photo1},
  { src: Photo2},
  { src: Photo3}
];

const Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Cards Only */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10">
        {suits.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out group"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 text-center">
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

