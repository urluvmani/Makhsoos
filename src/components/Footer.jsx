import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-[#1a1a1a] p-[5%] text-center text-white border-t border-white/10"
      role="contentinfo"
    >
      {/* Brand */}
      <div
        className="text-lg sm:text-xl mb-6 font-light tracking-[2px]"
        aria-label="Makhsoos Brand Footer Logo"
      >
        MAKHSOOS<span className="text-[#a67c52]">.</span>
      </div>

      {/* Social Links */}
      <div className="mb-6 flex justify-center space-x-6">
        {/* Instagram */}
        <a
          href="#"
          aria-label="Visit our Instagram"
          className="text-lg text-[#e0e0e0] hover:text-[#a67c52] transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path d="M224,202a53,53,0,1,0,53,53A53,53,0,0,0,224,202Zm124.71-41a54,54,0,0,0-30.26-30.26C299.21,124,224,124,224,124s-75.21,0-94.45,6.7a54,54,0,0,0-30.26,30.26C93,175.21,93,250.42,93,250.42s0,75.21,6.7,94.45a54,54,0,0,0,30.26,30.26C148.79,381,224,381,224,381s75.21,0,94.45-6.7a54,54,0,0,0,30.26-30.26C355,325.63,355,250.42,355,250.42S355,175.21,348.71,161ZM224,338a88,88,0,1,1,88-88A88,88,0,0,1,224,338Zm92.4-160a20.4,20.4,0,1,1-20.4-20.4A20.4,20.4,0,0,1,316.4,178Z" />
          </svg>
        </a>

        {/* Twitter */}
        <a
          href="#"
          aria-label="Visit our Twitter"
          className="text-lg text-[#e0e0e0] hover:text-[#a67c52] transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 512 512"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path d="M459.4 151.7c.3 4.2.3 8.4.3 12.6 0 128.8-98 277.4-277.4 277.4-55.1 0-106.4-16.2-149.7-44 7.7.9 15.1 1.2 23.1 1.2 45.6 0 87.6-15.4 120.9-41.9-42.8-1-78.8-28.8-91.3-67.3 6 1.2 12 1.8 18.5 1.8 8.6 0 17-.9 24.9-3.3-44.8-9-78.5-48.5-78.5-95.8v-1.2c13.2 7.3 28.5 11.7 44.8 12.3-26.7-17.7-44.1-48-44.1-82.1 0-18.3 4.8-35.4 13.8-50.1 49.8 61.1 124.2 101.4 207.6 105.6-1.5-7.3-2.1-14.9-2.1-22.6 0-54.3 44.1-98.1 98.1-98.1 28.2 0 53.7 11.7 71.6 30.6 22.5-4.5 44.1-12.6 63.3-24.3-7.3 22.8-22.8 42.2-43.5 54.3 20.1-2.1 39.6-7.8 57.5-15.6-13.2 19.8-29.9 37.2-49.1 51.3z" />
          </svg>
        </a>

        {/* Pinterest */}
        <a
          href="#"
          aria-label="Visit our Pinterest"
          className="text-lg text-[#e0e0e0] hover:text-[#a67c52] transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 496 512"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path d="M248 8C111 8 0 119 0 256c0 110.2 69.1 203.9 166.4 237.6-2.3-20.1-4.4-51.1 1-73.2 4.8-20.4 31.2-130 31.2-130s-8-16-8-39.7c0-37.2 21.6-64.9 48.5-64.9 22.8 0 33.8 17.1 33.8 37.6 0 22.8-14.7 57.1-22.2 88.9-6.3 26.7 13.5 47.8 40.2 47.8 48.1 0 80.4-61.7 80.4-134.5 0-55.6-37.4-97.2-105.3-97.2-76.8 0-124.8 57.5-124.8 121.6 0 22.1 8.4 45.7 19.2 58.5 2.1 2.4 2.4 4.5 1.8 6.9-2 7.5-6.6 26-7.5 29.7-1.2 5-4 6-9.3 3.6-34.8-16.2-56.7-67.2-56.7-108.2 0-88 64-168.9 185-168.9 97.3 0 172.8 69.5 172.8 162.3 0 96.7-61 174.7-145.6 174.7-28.5 0-55.3-14.8-64.3-31.9l-17.4 66c-6.3 23.9-23.4 54-34.8 72.3 26.1 8.1 53.8 12.5 82.6 12.5 137 0 248-111 248-248C496 119 385 8 248 8z" />
          </svg>
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs sm:text-sm opacity-60">
        © {new Date().getFullYear()} Makhsoos Clothing. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
