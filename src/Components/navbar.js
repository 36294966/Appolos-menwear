import {
  BadgePercent,
  ChevronDown,
  Diamond,
  LayoutGrid,
  Menu,
  Shirt,
  X,
  Home
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../Assets/logo.jpg';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Navbar = ({ onFilterSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [leaveTimeout, setLeaveTimeout] = useState(null);
  const navigate = useNavigate();

  const handleFilter = (category, value) => {
    if (onFilterSelect) {
      onFilterSelect(category, value);
    }
    setIsOpen(false);

    if (category === 'Suits') {
      if (value === '2 Piece Suits') {
        navigate('/suits/2piecesuits');
      } else if (value === '3 Piece Suits') {
        navigate('/suits/3piecesuits');
      } else if (value === 'Tuxedo & Dinner') {
        navigate('/suits/tuxedo');
      }
    } else if (category === 'Accessories') {
      if (value === 'Belt') {
        navigate('/accessories/belt');
      } else if (value === 'Ties') {
        navigate('/accessories/ties');
      } else if (value === 'Socks') {
        navigate('/accessories/socks');
      }
    } else if (category === 'Shirts') {
      if (value === 'Official Shirts') {
        navigate('/shirts/official');
      } else if (value === 'Cassual Shirts') {
        navigate('/shirts/cassual');
      }
    } else if (category === 'Blazers & Jackets') {
      if (value === 'Leather Jacket') {
        navigate('/jackets/leather');
      }
    } else if (category === 'Jeans') {
      if (value === 'Jeans') {
        navigate('/jeans');
      }
    }
  };

  const menuItems = [
    {
      title: 'Suits',
      icon: <BadgePercent size={18} />,
      dropdown: {
        Style: ['2 Piece Suits', '3 Piece Suits', 'Tuxedo & Dinner']
      }
    },
    {
      title: 'Shirts',
      icon: <Shirt size={18} />,
      dropdown: {
        Style: ['Official Shirts', 'Cassual Shirts']
      }
    },
    {
      title: 'Jeans',
      icon: <LocalMallIcon fontSize="small" />,
      dropdown: {
        Type: ['Jeans']
      },
      page: '/jeans' // new property for direct navigation
    },
    {
      title: 'Accessories',
      icon: <Diamond size={18} />,
      dropdown: {
        Items: ['Socks', 'Ties', 'Belt']
      }
    },
    {
      title: 'Blazers & Jackets',
      icon: <LayoutGrid size={18} />,
      dropdown: {
        Jackets: ['Leather Jacket']
      }
    }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          className="h-28 w-28 rounded-full object-cover shadow-lg cursor-pointer"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-bold text-lg">
          {/* Home Button */}
          <div
            className="relative group flex items-center h-full"
            onMouseEnter={() => {
              clearTimeout(leaveTimeout);
              setOpenDropdown(null);
            }}
            onMouseLeave={() => {
              const timeout = setTimeout(() => {
                setOpenDropdown(null);
              }, 300);
              setLeaveTimeout(timeout);
            }}
          >
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-1 hover:text-yellow-200 transition h-10"
              aria-label="Go to Home"
            >
              <Home size={18} />
              <span className="leading-none">Home</span>
            </button>
          </div>

          {/* Main menu items */}
          {menuItems.map((item) => (
            <div
              key={item.title}
              className="relative group"
              onMouseEnter={() => {
                clearTimeout(leaveTimeout);
                setOpenDropdown(item.title);
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(() => {
                  setOpenDropdown(null);
                }, 300);
                setLeaveTimeout(timeout);
              }}
            >
              <button
                className="flex items-center space-x-1 hover:text-yellow-200 transition"
                onClick={() => {
                  // If the item has a page property, navigate directly
                  if (item.page) {
                    navigate(item.page);
                    setIsOpen(false);
                  }
                }}
              >
                {item.icon}
                <span>{item.title}</span>
                {item.dropdown && <ChevronDown size={16} />}
              </button>

              {/* Dropdown menu */}
              {item.dropdown && openDropdown === item.title && (
                <div className="absolute top-10 left-0 bg-white text-black shadow-xl rounded-md p-4 grid grid-cols-1 gap-4 w-[220px] z-50 animate-fade-in">
                  {Object.entries(item.dropdown).map(([section, values]) => (
                    <div key={section}>
                      <p className="text-xl font-bold text-blue-700 mb-2">{section}</p>
                      {values.map((val) => (
                        <button
                          key={val}
                          onClick={() => handleFilter(item.title, val)}
                          className="block w-full text-left px-3 py-2 mb-2 rounded hover:bg-blue-100 transition font-bold"
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

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-6 font-medium bg-blue-600 text-white">
          {/* Home Button */}
          <button
            onClick={() => {
              setIsOpen(false);
              navigate('/');
            }}
            className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-blue-700 transition"
            aria-label="Go to Home"
          >
            <Home size={20} />
            <span>Home</span>
          </button>

          {/* Menu items for mobile */}
          {menuItems.map((item) => (
            <div key={item.title}>
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => {
                  // if page exists, navigate directly
                  if (item.page) {
                    navigate(item.page);
                    setOpenDropdown(null);
                    setIsOpen(false);
                  } else {
                    // toggle dropdown
                    setOpenDropdown(openDropdown === item.title ? null : item.title);
                  }
                }}
              >
                <div className="flex items-center space-x-2">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                {item.dropdown && <ChevronDown size={18} />}
              </button>

              {/* Dropdown for mobile */}
              {item.dropdown && openDropdown === item.title && (
                <div className="mt-2 grid grid-cols-1 gap-4 text-sm w-[220px]">
                  {Object.entries(item.dropdown).map(([section, values]) => (
                    <div key={section}>
                      <p className="font-bold text-yellow-200 mb-2">{section}</p>
                      {values.map((val) => (
                        <button
                          key={val}
                          onClick={() => {
                            handleFilter(item.title, val);
                            setOpenDropdown(null);
                            setIsOpen(false);
                          }}
                          className="block w-full text-left hover:bg-blue-700 rounded px-3 py-2 mb-2 font-bold"
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
