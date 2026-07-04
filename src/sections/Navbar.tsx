import { useState } from "react";
import "../App.css";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: "Beranda", href: "#hero" },
    { label: "Menu", href: "#menu" },
    { label: "Galeri", href: "#gallery" },
    { label: "Kontak", href: "#about" },
    { label: "Tentang", href: "#about" },
  ];

  return (
    <>
      <header className="py-5">
        <div className=" w-[90%] max-w-[1170px] mx-auto rounded-xl grid grid-cols-4 flex">
          {/* col 1 logo */}
          <div className="text-[#444444] flex items-center justify-start">
            <h1 className=" font-bold text-[28px] md:text-[36px] lg:text-[40px]">
              WMJ
            </h1>
          </div>

          {/* col 2&3 desktop nav */}
          <div className="col-span-2 flex items-center justify-center">
            <nav className="hidden md:flex bg-white rounded-full shadow-md overflow-hidden flex items-center justify-center">
              <ul className="flex items-center">
                {navLinks.map((link, idx) => (
                  <li
                    key={idx}
                    className={`px-4 lg:px-4 py-3 lg:py-4 hover:text-[#FF3700] cursor-pointer ${
                      idx === 0 ? "border-r border-[#444444] font-bold " : ""
                    }`}
                  >
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* col-4 - tombol menu mobile*/}
          <div className="flex justify-end">
            <button
              onClick={toggleMenu}
              className="md:hidden text-[#444444] text-2xl z-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <div
            className={`fixed inset-0 bg-[#FFD900] z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link, idx) => (
                <li
                  key={idx}
                  className="font-bold text-xl text-[#444444] hover:text-[#FF3700]"
                >
                  <a href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
