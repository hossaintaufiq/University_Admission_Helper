import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons for the menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-purple-400 text-white shadow-lg rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo/Brand */}
        <h1 className="text-2xl font-bold tracking-wide">
          Admission Helper
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-gray-200 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/subjectComp" className="hover:text-gray-200 transition">
              Subject Comparison
            </Link>
          </li>
          <li>
            <Link to="/ranking" className="hover:text-gray-200 transition">
              Ranking
            </Link>
          </li>
          <li>
            <Link to="/sampleQuestions" className="hover:text-gray-200 transition">
              Sample Questions
            </Link>
          </li>
          
          
          <li>
            <Link to="/aboutUs" className="hover:text-gray-200 transition">
              About Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-purple-700 text-center space-y-4 p-4 rounded-b-lg shadow-md">
          <li>
            <Link
              to="/"
              className="block hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/subjectComp"
              className="block hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Subject Comparison
            </Link>
          </li>
          <li>
            <Link
              to="/ranking"
              className="block hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
            Ranking
            </Link>
          </li>
          <li>
            <Link
              to="/sampleQuestions"
              className="block hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Sample Questions
            </Link>
          </li>
          
          <li>
            <Link
              to="/aboutUs"
              className="block hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
