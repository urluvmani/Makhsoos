import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Feature = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80, rotateX: -30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-[#2a2a2a] text-white py-[6%] px-[5%] text-center">
      <h2 className="text-3xl font-light mb-16 relative inline-block">
        Why <span className="text-[#a67c52]">Makhsoos</span>
        <span className="block w-[100px] h-[3px] bg-[#a67c52] mx-auto mt-3 rounded-full"></span>
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {["Natural Fabric", "Durable Wear", "Eco Friendly"].map((title, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="p-10 bg-[#1d1d1d] rounded-xl shadow-lg hover:shadow-[0_0_20px_#a67c52aa] transition"
          >
            <div className="text-[#a67c52] mb-6">
              <div className="w-14 h-14 mx-auto bg-[#a67c52]/20 rounded-full flex items-center justify-center">
                ⭐
              </div>
            </div>
            <h3 className="mb-4 font-semibold text-xl">{title}</h3>
            <p className="opacity-80 text-sm">
              {i === 0
                ? "Handpicked premium quality materials for lasting wear."
                : i === 1
                ? "Made to endure seasons with unmatched comfort."
                : "Consciously crafted without harming nature."}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
