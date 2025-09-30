import React from "react";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-[#1a1a1a] text-white">
      {/* ✅ Header is semantic landmark */}
      <Header />

      <main id="main-content">
        {/* ✅ Hero section optimized */}
        <Hero />

        {/* ✅ Features section */}
        <section id="feature-section">
          <Feature />
        </section>
      </main>

      {/* ✅ Footer with role="contentinfo" */}
      <Footer />
    </div>
  );
};

export default App;
