import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cart);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Menu Animations
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, duration: 0.4 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-[#0f0f0f]/95 backdrop-blur-md shadow-lg flex justify-between items-center px-[5%] py-4 md:py-5"
      role="banner"
    >
      {/* ✅ SVG Logo */}
      <div
        onClick={() => navigate("/")}
        className="cursor-pointer flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 100"
          className="w-36 h-auto"
        >
          <text
            x="0"
            y="90"
            fill="url(#gold-gradient)"
            fontFamily="serif"
            fontWeight="lighter"
            fontSize="110"
            letterSpacing="3"
          >
            Makhsoos
          </text>
          <defs>
            <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a67c52" />
              <stop offset="50%" stopColor="#ffda89" />
              <stop offset="100%" stopColor="#a67c52" />
            </linearGradient>
          </defs>
        </svg>
        <span className="text-[#a67c52] text-3xl -ml-2">.</span>
      </div>

      {/* ✅ Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex list-none gap-8">
          <li>
            <Link className="text-[#e0e0e0] uppercase text-sm relative group">
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#a67c52] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="text-[#e0e0e0] uppercase text-sm relative group"
            >
              Shop
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#a67c52] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <a
              href="https://wa.me/923280362171"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a67c52] font-medium underline hover:text-yellow-400 transition"
            >
              Chat on WhatsApp
            </a>
          </li>
        </ul>
      </nav>

      {/* ✅ Cart + Mobile Menu */}
      <div className="flex items-center gap-6">
        <Link
          to="/cart"
          className="relative text-[#e0e0e0] hover:text-[#a67c52] transition"
        >
          <CiShoppingCart className="w-8 h-8" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-gradient-to-r from-[#a67c52] to-yellow-500 text-white text-xs px-2 py-0.5 rounded-full shadow-md">
              {items.length}
            </span>
          )}
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#e0e0e0] text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="absolute top-full left-0 w-full bg-[#111]/95 backdrop-blur-lg shadow-lg md:hidden"
          >
            <motion.ul
              className="flex flex-col items-center py-8 space-y-5"
              variants={menuVariants}
            >
              <motion.li variants={itemVariants}>
                <Link
                  onClick={() => setMenuOpen(false)}
                  to="/"
                  className="text-[#e0e0e0] uppercase text-sm hover:text-[#a67c52]"
                >
                  Home
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link
                  onClick={() => setMenuOpen(false)}
                  to="/shop"
                  className="text-[#e0e0e0] uppercase text-sm hover:text-[#a67c52]"
                >
                  Shop
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a
                  href="https://wa.me/923280362171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a67c52] underline hover:text-yellow-400 transition"
                >
                  Chat on WhatsApp
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
