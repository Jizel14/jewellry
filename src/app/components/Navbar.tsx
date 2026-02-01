'use client';

import { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "Collections",
    "Rings",
    "Necklaces",
    "Earrings",
    "About",
    "Contact",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1">
            <h1
              className="text-2xl tracking-widest"
              style={{
                fontFamily: "var(--font-serif)",
                background:
                  "linear-gradient(135deg, #D4AF37 0%, #CFB53B 50%, #B76E79 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Juman
            </h1>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 flex justify-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group transition-colors duration-300"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                <span
                  className={`text-sm tracking-wide ${scrolled ? "text-black" : "text-white"}`}
                >
                  {item.toUpperCase()}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex-1 flex justify-end gap-6">
            <button className="group relative">
              <Search
                className={`w-5 h-5 transition-all duration-300 ${
                  scrolled ? "text-black" : "text-white"
                } group-hover:scale-110`}
                style={{ color: scrolled ? "#000" : "#fff" }}
              />
            </button>
            <button className="group relative">
              <Heart
                className={`w-5 h-5 transition-all duration-300 ${
                  scrolled ? "text-black" : "text-white"
                } group-hover:scale-110`}
                style={{ color: scrolled ? "#000" : "#fff" }}
              />
            </button>
            <button className="group relative">
              <ShoppingBag
                className={`w-5 h-5 transition-all duration-300 ${
                  scrolled ? "text-black" : "text-white"
                } group-hover:scale-110`}
                style={{ color: scrolled ? "#000" : "#fff" }}
              />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-[#D4AF37] to-[#B76E79] rounded-full flex items-center justify-center text-white text-xs">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}