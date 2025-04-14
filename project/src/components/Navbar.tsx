import { useState } from "react";
import { Link } from "react-router-dom";
import { Gem, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <style>{`
        .shadow__btn {
          padding: 10px 20px;
          border: none;
          font-size: 17px;
          color: #fff;
          border-radius: 7px;
          letter-spacing: 1px;
          font-weight: 700;
          text-transform: uppercase;
          background: #1D4ED8;
          box-shadow: 0 0 25px #1D4ED8;
          transition: 0.5s;
          transition-property: box-shadow;
        }
        .shadow__btn:hover {
          box-shadow: 0 0 5px #1D4ED8,
                      0 0 25px #1D4ED8,
                      0 0 50px #1D4ED8,
                      0 0 100px #1D4ED8;
        }

        .shadow__btn2 {
          font-size: 17px;
          letter-spacing: 1px;
          font-weight: 700;
          text-transform: uppercase;
          transition: 0.5s;
          transition-property: box-shadow;
        }
        .shadow__btn2:hover {
          box-shadow: 0 0 0px #1D4ED8,
                      0 0 100px #1D4ED8,
                      0 0 0px #1D4ED8,
                      0 0 0px #1D4ED8;
        }
      `}</style>

      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center group">
                <Gem className="h-8 w-8 text-blue-600 transform group-hover:rotate-12 transition-transform duration-300" />
                <span className="ml-2 mt-1 text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                  MiniGems
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="text-gray-700 shadow__btn2 hover:text-blue-600 px-3 py-2 rounded-md text-xl transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="shadow__btn2 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-xl transition-colors duration-300"
              >
                About
              </Link>
              <Link to="/appointment">
                <button className="shadow__btn">Contact Us</button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
            transition={{ duration: 0.5 }}
            className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white shadow-md rounded-lg`}
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-lg transition-colors duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-lg transition-colors duration-300"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link to="/appointment" onClick={toggleMenu}>
                <button className="shadow__btn">Contact Us</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
