import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex relative flex-wrap justify-between items-center w-full text-white max-w-[1160px] mx-auto py-6 px-10 bg-transparent">
      {/* Logo / Brand Name */}
      <div className="flex flex-row items-center gap-5">
        <h1 className="text-4xl font-bold">FurniShop</h1>

        {/* Hamburger Menu Icon (Visible on Mobile) */}
        <button
          className="text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Overlay Background when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Navigation Links (Hidden on Mobile) */}
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row md:items-center gap-5 md:gap-10 fixed md:static top-0 right-0 h-full md:h-auto w-2/3 md:w-auto bg-black bg-opacity-90 md:bg-transparent text-base font-semibold p-5 md:p-0 z-50`}
      >
        <a
          href="#home"
          className="hover:text-gray-300"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-gray-300"
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#features"
          className="hover:text-gray-300"
          onClick={() => setMenuOpen(false)}
        >
          Features
        </a>
        <a
          href="#contact"
          className="hover:text-gray-300"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
