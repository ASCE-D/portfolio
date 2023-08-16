import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <nav className="bg-black p-4 sticky z-[1] top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-semibold">My Website</Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 5H5v1h14V5zM5 10h14v-1H5v1zm14 3H5v-1h14v1zm0 3H5v-1h14v1z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 4.5A.5.5 0 013.5 4h17a.5.5 0 010 1h-17a.5.5 0 01-.5-.5zM3 9.5A.5.5 0 013.5 9h17a.5.5 0 010 1h-17a.5.5 0 01-.5-.5zM3 14.5a.5.5 0 01.5-.5h17a.5.5 0 010 1h-17a.5.5 0 01-.5-.5z"
                />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex space-y-2 md:space-y-0 md:space-x-4 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <li><Link to="/" className="text-white hover:text-red-600 ">Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-red-600">About</Link></li>
          <li><Link to="/services" className="text-white hover:text-red-600">Services</Link></li>
          <li><Link to="/contact" className="text-white hover:text-red-600">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
