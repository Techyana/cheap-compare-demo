import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full z-50">
      <nav className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="https://see.fontimg.com/api/rf5/G3lEZ/NTEyNGQ1ODUyMjQzNDQ3MGI4M2Q3NzM4YTkwYmZkYzgub3Rm/Q0hFQVAgQ09NUEFSRQ/st-noodles-grotesque.png?r=fs&h=65&w=1000&fg=000000&bg=FFFFFF&tb=1&s=65"
              alt="Advertising fonts"
              className={`h-8 ${styles.logo}`}
            />
            <p className={`ml-2 ${styles.logoSlogan}`}>Pick Out the Best Deals</p>
          </Link>
        </div>
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2"
          type="button"
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          {isOpen ? <FaTimes className="w-10 h-6" /> : <FaBars className="w-10 h-6" />}
        </button>
      </nav>
      <div className={`lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto bg-white shadow-lg`}>
        <ul className="lg:flex lg:space-x-8 lg:text-lg lg:font-medium mt-4 lg:mt-0 list-none p-4 lg:p-0">
          <li>
            <Link className="block text-gray-700 hover:text-gray-900 py-2 lg:py-0" to="/">Home</Link>
          </li>
          <li>
            <Link className="block text-gray-700 hover:text-gray-900 py-2 lg:py-0" to="/services">Services</Link>
          </li>
          <li>
            <Link className="block text-gray-700 hover:text-gray-900 py-2 lg:py-0" to="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link className="block text-gray-700 hover:text-gray-900 py-2 lg:py-0" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;