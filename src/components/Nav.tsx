import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

import { useLocation } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
const currentPath = location.pathname;

  

  return (
    <nav className="flex items-center justify-between px-6 md:px-[40px] lg:px-[80px] h-[10vh] shadow-sm sticky top-0 z-30 bg-white">
      {/* Logo Section with dramatic reveal */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <img src="/icelogo1.svg" alt="Logo" className="h-[32px] w-[145px] lg:h-[52px] lg:w-[165px]" />
      </motion.div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6 text-sm font-medium">
        {["Home", "Expertise", "Projects", "About us", "Contacts"].map((item) =>{ 
           const linkPath = `/${item.replace(" ", "-").toLowerCase()}`;
           const isActive = currentPath === linkPath;
        return(
          <Link
          key={item}
          to={`/${item.replace(" ", "-").toLowerCase()}`}
          className={`relative group transition ${
            isActive ? "text-[#1867C6]" : "text-black hover:text-[#1867C6]"
          }`}
        >
          {item}
          <span
        className={`absolute left-0 -bottom-1 h-0.5 bg-[#1867C6] transition-all duration-300 ${
          isActive ? "w-[80%]" : "w-0 group-hover:w-[80%]"
        }`}
      ></span>
        </Link>
        )
      })}
      </div>

      {/* Desktop CTA Button */}
      <motion.button
  className="hidden md:block bg-[#1867C6] text-white text-sm px-6 py-2 rounded-full hover:bg-[#4c6e97] transition"
  animate={{ y: [0, -6, 0] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  }}
>
  Get in touch
</motion.button>

      {/* Mobile Menu Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-[#1867C6] text-2xl"
        aria-label="Toggle Menu"
      >
        <MenuIcon fontSize="inherit" />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.8, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center space-y-8 text-lg"
          >
            {/* Spinning Close Icon */}
            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl"
              aria-label="Close Menu"
              whileInView={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <CloseIcon fontSize="inherit" />
            </motion.button>

            {/* Nav Links with animated underline */}
            {["Home", "Expertise", "Projects", "About us", "Contacts"].map((item) => {
                const linkPath = `/${item.replace(" ", "-").toLowerCase()}`;
                const isActive = currentPath === linkPath;
              return(
              <Link
              key={item}
              to={`/${item.replace(" ", "-").toLowerCase()}`}
              className={`relative text-white}`}
              onClick={() => setIsOpen(false)}
            >
              {item}
              <span
        className={`absolute left-0 -bottom-1 h-0.5 bg-[#1867C6] transition-all duration-300 ${
          isActive ? "w-[80%]" : "w-0 group-hover:w-[80%]"
        }`}
      ></span>
            </Link>
            
            )})}

            {/* Contact & Socials */}
            <div className="mt-10 space-y-2 text-sm text-gray-400 text-center">
              <p>Connect With Us</p>
              <p>info@loremipsum.com</p>
              <div className="flex justify-center space-x-4 text-white text-xl">
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-x-twitter"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
              </div>
              <p className="mt-4 text-xs">© 2025 Imagine Create Execute</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
