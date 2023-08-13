
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-semibold">My Website</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white hover:text-red-600">Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-red-600">About</Link></li>
          <li><Link to="/services" className="text-white hover:text-red-600">Services</Link></li>
          <li><Link to="/contact" className="text-white hover:text-red-600">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
