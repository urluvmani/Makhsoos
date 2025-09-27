import React from "react";

const Feature = () => {
  return (
    <div>
      {/* Features */}
      <section
        id="fragrances"
        className="bg-[#3a3a3a] text-white p-[5%] text-center"
        aria-labelledby="features-heading"
      >
        <h2
          id="features-heading"
          className="relative text-center text-xl sm:text-2xl mb-12 after:content-[''] after:block after:w-[80px] sm:after:w-[100px] after:h-[2px] after:bg-[#a67c52] after:mx-auto after:mt-2"
        >
          Why Makhsoos
        </h2>

        <div className="grid gap-8 sm:gap-12 mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div
            className="p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-2"
            role="article"
            aria-label="Natural Fabric Feature"
          >
            <div
              className="text-[2.5rem] sm:text-[3rem] text-[#a67c52] mb-6"
              aria-hidden="true"
            >
              {/* Use accessible icon (SVG instead of <i> for performance) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-12 h-12 mx-auto"
              >
                <path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zM128 256c0-70.7 57.3-128 128-128s128 57.3 128 128-57.3 128-128 128-128-57.3-128-128z" />
              </svg>
            </div>
            <h3 className="mb-4 font-medium text-lg">Natural Fabric</h3>
            <p className="opacity-90">
              Handpicked premium quality materials for lasting wear.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className="p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-2"
            role="article"
            aria-label="Durable Wear Feature"
          >
            <div
              className="text-[2.5rem] sm:text-[3rem] text-[#a67c52] mb-6"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-12 h-12 mx-auto"
              >
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.3 0-200-89.7-200-200S145.7 56 256 56s200 89.7 200 200-89.7 200-200 200z" />
              </svg>
            </div>
            <h3 className="mb-4 font-medium text-lg">Durable Wear</h3>
            <p className="opacity-90">
              Made to endure seasons with unmatched comfort.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className="p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-2"
            role="article"
            aria-label="Eco Friendly Feature"
          >
            <div
              className="text-[2.5rem] sm:text-[3rem] text-[#a67c52] mb-6"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-12 h-12 mx-auto"
              >
                <path d="M256 32C114.6 32 0 146.6 0 288c0 123.5 93.2 223.1 214.3 254.3 14.8 2.7 20.3-6.4 20.3-14.3 0-7-.3-30.2-.4-54.7-87.2 18.9-105.6-37-105.6-37-13.5-34.3-32.9-43.4-32.9-43.4-26.9-18.4 2-18.1 2-18.1 29.7 2.1 45.4 30.5 45.4 30.5 26.4 45.3 69.3 32.2 86.2 24.6 2.7-19.1 10.3-32.2 18.7-39.7-69.6-7.9-142.9-34.8-142.9-154.9 0-34.2 12.2-62.2 32.2-84.1-3.2-7.9-14-39.8 3.1-83 0 0 26.3-8.4 86.3 32.1 25-7 51.8-10.5 78.4-10.7 26.6.1 53.4 3.6 78.5 10.7 60-40.5 86.2-32.1 86.2-32.1 17.1 43.2 6.4 75.1 3.2 83 20 21.9 32.1 49.9 32.1 84.1 0 120.5-73.3 147-143.2 154.8 10.6 9.1 20.1 27.1 20.1 54.6 0 39.5-.3 71.5-.3 81.3 0 7.9 5.4 17.1 20.4 14.2C418.8 511.1 512 411.5 512 288 512 146.6 397.4 32 256 32z" />
              </svg>
            </div>
            <h3 className="mb-4 font-medium text-lg">Eco Friendly</h3>
            <p className="opacity-90">
              Consciously crafted without harming nature.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
