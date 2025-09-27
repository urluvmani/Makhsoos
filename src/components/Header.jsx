import React from "react";

const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-[#1a1a1a] shadow-lg flex justify-between items-center px-[5%] py-4 md:py-6"
      role="banner"
    >
      {/* Logo / Brand */}
      <div
        className="text-2xl sm:text-[1.8rem] font-light tracking-[2px] text-[#f5f5f5]"
        aria-label="Makhsoos Brand Logo"
      >
        MAKHSOOS<span className="text-[#a67c52]">.</span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex" role="navigation" aria-label="Main Navigation">
        <ul className="flex list-none">
          <li className="ml-6 lg:ml-8">
            <a
              href="#home"
              aria-label="Go to Home section"
              className="text-[#e0e0e0] uppercase tracking-[1px] text-sm hover:text-[#a67c52] transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li className="ml-6 lg:ml-8">
            <a
              href="#fragrances"
              aria-label="See New Arrivals"
              className="text-[#e0e0e0] uppercase tracking-[1px] text-sm hover:text-[#a67c52] transition-colors duration-300"
            >
              New Arrivals
            </a>
          </li>
          <li className="ml-6 lg:ml-8">
            <a
              href="#about"
              aria-label="Learn About Us"
              className="text-[#e0e0e0] uppercase tracking-[1px] text-sm hover:text-[#a67c52] transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li className="ml-6 lg:ml-8">
            <a
              href="#contact"
              aria-label="Go to Contact Section"
              className="text-[#e0e0e0] uppercase tracking-[1px] text-sm hover:text-[#a67c52] transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
