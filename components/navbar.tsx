"use client";
import React, { useState } from "react";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-[#3593a0] to-[#0a555f] shadow-md relative">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        

        <div className="hidden md:flex justify-center w-full space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xl font-bold text-white hover:text-[#9494f8] transition-colors duration-300 hover:scale-110"
            >
              {link.label}
            </a>
          ))}
        </div>


        <button
          className="text-white text-2xl focus:outline-none md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>


      {isMobileMenuOpen && (
        <div
          className="absolute top-full left-0 w-full opacity-95 bg-gradient-to-r from-[#3593a0] to-[#0a555f] shadow-lg z-50 md:hidden"
        >
          <div className="flex flex-col space-y-4 py-4 pl-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xl font-bold text-white hover:text-[#9494f8] transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
      
    </nav>
  );
}
