import {
  ChevronDown,
  Menu,
  X,
  ShoppingCart
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserTie,
  faShirt,
  faGem,
  faVest,
  faHouse
} from '@fortawesome/free-solid-svg-icons';
import CheckroomIcon from '@mui/icons-material/Checkroom';

import Logo from '../Assets/logo.jpg';

const Navbar = ({ onFilterSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [leaveTimeout, setLeaveTimeout] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  // Sync cart count with localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(storedCart.length);
    };
    
    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    return () => window.removeEventListener('storage', updateCartCount);
  }, []);

  const handleFilter = (category, value) => {
    onFilterSelect?.(category, value);
    setIsOpen(false);
    setOpenDropdown(null);

    const routeMap = {
      Suits: {
        '2 Piece Suits': '/suits/2piecesuits',
        '3 Piece Suits': '/suits/3piecesuits',
        'Tuxedo & Dinner': '/suits/tuxedo'
      },
      Accessories: {
        'Belt': '/accessories/belt',
        'Ties': '/accessories/ties',
        'Socks': '/accessories/socks'
      },
      Shirts: {
        'Official Shirts': '/shirts/official',
        'Cassual Shirts': '/shirts/cassual'
      },
      'Blazers & Jackets': {
        'Leather Jacket': '/jackets/leather'
      },
      Jeans: {
        'Jeans': '/jeans'
      }
    };

    const path = routeMap[category]?.[value];
    if (path) navigate(path);
  };

  const menuItems = [
    {
      title: 'Suits',
      icon: <FontAwesomeIcon icon={faUserTie} className="text-xl" />,
      dropdown: { Style: ['2 Piece Suits', '3 Piece Suits', 'Tuxedo & Dinner'] }
    },
    {
      title: 'Shirts',
      icon: <FontAwesomeIcon icon={faShirt} className="text-xl" />,
      dropdown: { Style: ['Official Shirts', 'Cassual Shirts'] }
    },
    {
      title: 'Jeans',
      icon: <CheckroomIcon className="text-white" fontSize="large" />,
      dropdown: { Type: ['Jeans'] },
      page: '/jeans'
    },
    {
      title: 'Accessories',
      icon: <FontAwesomeIcon icon={faGem} className="text-xl" />,
      dropdown: { Items: ['Socks', 'Ties', 'Belt'] }
    },
    {
      title: 'Blazers & Jackets',
      icon: <FontAwesomeIcon icon={faVest} className="text-xl" />,
      dropdown: { Jackets: ['Leather Jacket'] }
    }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          className="h-16 w-16 md:h-24 md:w-24 rounded-full object-cover shadow-lg cursor-pointer transition-transform hover:scale-105"
          onClick={() => navigate('/')}
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-semibold text-base">
          {/* Home Button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center group hover:text-yellow-200 transition"
          >
            <FontAwesomeIcon icon={faHouse} className="ml-1 group-hover:-translate-x-1 transition-all text-xl" />
            <span className="ml-2 text-lg">Home</span>
          </button>

          {/* Main Menu Items with Dropdowns */}
          {menuItems.map((item) => (
            <div
              key={item.title}
              className="relative group"
              onMouseEnter={() => {
                clearTimeout(leaveTimeout);
                setOpenDropdown(item.title);
              }}
              onMouseLeave={() => {
                setLeaveTimeout(setTimeout(() => setOpenDropdown(null), 200));
              }}
            >
              <button
                className="flex items-center space-x-1 hover:text-yellow-200 transition"
                onClick={() => item.page && navigate(item.page)}
              >
                {item.icon}
                <span className="text-lg">{item.title}</span>
                {item.dropdown && <ChevronDown size={16} />}
              </button>

              {/* Dropdown Menu */}
              {item.dropdown && openDropdown === item.title && (
                <div className="absolute top-9 left-0 bg-white text-black shadow-xl rounded-md p-3 grid gap-1 w-52 z-50">
                  {Object.entries(item.dropdown).map(([section, values]) => (
                    <div key={section}>
                      <p className="text-blue-700 font-bold text-lg mb-1">{section}</p>
                      {values.map((val) => (
                        <button
                          key={val}
                          onClick={() => handleFilter(item.title, val)}
                          className="w-full text-left px-2 py-1 text-base rounded hover:bg-blue-50"
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Cart Icon with count */}
          <div
            className="flex items-center space-x-1 hover:text-yellow-200 cursor-pointer relative"
            onClick={() => navigate('/cart')}
          >
            <ShoppingCart size={24} />
            <span className="text-lg">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            )}
          </div>
        </div>

        {/* Mobile Menu Button & Cart */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Cart Icon for Mobile */}
          <div
            className="flex items-center space-x-1 hover:text-yellow-200 cursor-pointer relative"
            onClick={() => navigate('/cart')}
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                {cartCount}
              </span>
            )}
          </div>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-blue-700 rounded"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-blue-600 space-y-2 text-lg">
          {/* Home Button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 py-2 w-full hover:bg-blue-700 rounded"
          >
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
          </button>

          {/* Menu Items for Mobile */}
          {menuItems.map((item) => (
            <div key={item.title} className="space-y-1">
              <button
                className="flex justify-between items-center w-full py-2 hover:bg-blue-700 rounded"
                onClick={() => {
                  if (item.page) {
                    navigate(item.page);
                    setIsOpen(false);
                  } else {
                    setOpenDropdown(openDropdown === item.title ? null : item.title);
                  }
                }}
              >
                <div className="flex items-center space-x-2">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                {item.dropdown && (
                  <ChevronDown size={18} className={openDropdown === item.title ? 'rotate-180' : ''} />
                )}
              </button>

              {/* Dropdown for Mobile */}
              {item.dropdown && openDropdown === item.title && (
                <div className="ml-4 space-y-1">
                  {Object.entries(item.dropdown).map(([section, values]) => (
                    <div key={section}>
                      <p className="text-yellow-200 font-bold text-lg">{section}</p>
                      {values.map((val) => (
                        <button
                          key={val}
                          onClick={() => {
                            handleFilter(item.title, val);
                            setIsOpen(false);
                          }}
                          className="w-full text-left px-2 py-1 hover:bg-blue-700 rounded"
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;