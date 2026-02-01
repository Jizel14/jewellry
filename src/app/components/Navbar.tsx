'use client';

import { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1">
            <h1
              className="text-xl sm:text-2xl tracking-widest"
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

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex flex-1 justify-center gap-8">
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
          <div className="flex-1 flex justify-end gap-4 sm:gap-6">
            <button className="group relative hidden sm:block">
              <Search
                className={`w-5 h-5 transition-all duration-300 ${
                  scrolled ? "text-black" : "text-white"
                } group-hover:scale-110`}
                style={{ color: scrolled ? "#000" : "#fff" }}
              />
            </button>
            <button className="group relative hidden sm:block">
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
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${scrolled ? "text-black" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? "text-black" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
            <div className="flex flex-col py-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 text-black hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B76E79] hover:text-white transition-all duration-300"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {item.toUpperCase()}
                </a>
              ))}
              <div className="flex gap-6 px-6 py-3 border-t border-gray-200 mt-2">
                <button className="group relative">
                  <Search className="w-5 h-5 text-black group-hover:text-[#D4AF37] transition-colors" />
                </button>
                <button className="group relative">
                  <Heart className="w-5 h-5 text-black group-hover:text-[#D4AF37] transition-colors" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}