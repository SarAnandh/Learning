import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand */}
        <h1 className="text-2xl font-bold text-blue-400">Subramanian</h1>

        {/* Hamburger Button (mobile only) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link to="/home" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About</Link>
          <Link to="/projects" className="hover:text-blue-400 transition">Projects</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </nav>
      </div>

      {/* Navigation - Mobile (Dropdown) */}
      {menuOpen && (
        <div className="md:hidden bg-gray-700 px-4 pb-4 space-y-3">
          <Link to="/home" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">
            About
          </Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">
            Projects
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
