import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion"; // ✅ animation

const Header = () => {
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cart);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Parent container animation
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15, // delay per item
        duration: 0.4,
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  // ✅ Each link animation
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-[#1a1a1a] shadow-lg flex justify-between items-center px-[5%] py-4 md:py-6"
      role="banner"
    >
      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        className="cursor-pointer text-2xl sm:text-[1.8rem] font-light tracking-[2px] text-[#f5f5f5]"
      >
        MAKHSOOS<span className="text-[#a67c52]">.</span>
      </div>

      {/* Desktop Navigation */}
      <div className="flex gap-5">
        <nav className="hidden md:flex">
        <ul className="flex list-none">
          <li className="ml-6 lg:ml-8">
            <Link className="text-[#e0e0e0] uppercase text-sm hover:text-[#a67c52]">Home</Link>
          </li>
          <li className="ml-6 lg:ml-8">
            <Link to="/shop" className="text-[#e0e0e0] uppercase text-sm hover:text-[#a67c52]">Shop</Link>
          </li>
        

          <li className="ml-6 lg:ml-8">
            <a
              href="https://wa.me/923280362171"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a67c52] underline"
            >
              Chat on WhatsApp
            </a>
          </li>
        </ul>
      </nav>

      {/* Cart + Mobile Menu */}
      <div className="flex items-center gap-4">
        <Link to="/cart" className="relative text-[#e0e0e0] hover:text-[#a67c52]">
          <CiShoppingCart className="w-10 h-[5vw] md:h-[2vw]" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-[#a67c52] text-white text-xs px-2 py-0.5 rounded-full">
              {items.length}
            </span>
          )}
        </Link>

        {/* Menu Button */}
        <button
          className="md:hidden text-[#e0e0e0] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="absolute top-full left-0 w-full bg-[#1a1a1a] shadow-lg md:hidden"
          >
            <motion.ul
              className="flex flex-col items-center py-6 space-y-4"
              variants={menuVariants}
            >
              <motion.li variants={itemVariants}>
                <Link onClick={() => setMenuOpen(false)} to="/" className="text-[#e0e0e0] uppercase text-sm hover:text-[#a67c52]">
                  Home
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link onClick={() => setMenuOpen(false)} to="/shop" className="text-[#e0e0e0] uppercase text-sm hover:text-[#a67c52]">
                  Shop
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a
                  href="https://wa.me/923280362171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a67c52] underline"
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
