import React, { useEffect, useState } from "react";

const Hero = () => {
    const [count, setcount] = useState(0)

  
    
  return (
    <main>
      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row bg-[#1a1a1a] text-white min-h-[90vh] items-center pt-[100px] px-[5%] py-[8%] relative text-center md:text-left"
        aria-labelledby="hero-heading"
      >
        {/* Content */}
        <div className="flex-1 md:pr-[5%]">
          <h1
            id="hero-heading"
            className="text-2xl sm:text-3xl md:text-[3.5rem] font-light leading-tight mb-6"
          >
            Makhsoos – Bold Style, Premium Comfort Always
          </h1>
          <p className="text-base sm:text-lg opacity-80 mb-8 max-w-[600px] mx-auto md:mx-0">
            Makhsoos is more than clothing – it’s a statement of style. Our
            hoodies and jackets combine premium quality, modern design, and
            lasting comfort. Every piece boosts confidence and individuality.
            With Makhsoos, dressing becomes effortless fashion, turning everyday
            wear into bold, unforgettable style.
          </p>

          {/* Quantity Controls */}
          <div
            className="flex justify-center md:justify-start items-center my-6"
            role="group"
            aria-label="Select quantity"
          >
            <button
           onClick={()=>{
            if(count>1){
                setcount(count-1)
            }
           }}
              aria-label="Decrease quantity"
              className="bg-[#3a3a3a] text-[#e0e0e0] w-10 h-10 text-xl hover:bg-[#a67c52] transition-colors duration-300"
            >
              –
            </button>
         <div className="w-10  h-auto justify-center flex items-center">
            {count}
         </div>
            
            <button onClick={()=>{
                if (count<20) {
                    setcount(count+1)
                }
            }}
              aria-label="Increase quantity"
              className="bg-[#3a3a3a] text-[#e0e0e0] w-10 h-10 text-xl hover:bg-[#a67c52] transition-colors duration-300"
            >
              +
            </button>
          </div>

          {/* Price */}
          <div className="text-xl sm:text-2xl text-[#a67c52] my-4">
            Rs.1600
          </div>

          {/* CTA Button */}
          <a
            href="#"
            role="button"
            aria-label="Add Makhsoos Hoodie to Cart"
            className="inline-block bg-[#a67c52] text-[#f5f5f5] px-5 sm:px-7 py-2 sm:py-3 rounded-full uppercase text-sm tracking-[1px] transition-colors duration-300 transform hover:bg-[#8a6745] hover:-translate-y-1"
          >
            Add to Cart
          </a>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center items-center relative mt-8 md:mt-0 h-[50vh] md:h-[60vh]">
          <img
            src="huddie.png"
            alt="Model wearing Makhsoos premium hoodie"
            loading="lazy"
            width="300"
            height="350"
            className="w-48 h-60 sm:w-64 sm:h-80 md:w-[300px] md:h-[350px] object-cover object-[40%_center] drop-shadow-[0_10px_30px_rgba(166,124,82,0.3)] transition-transform duration-300 hover:-translate-y-2"
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;
