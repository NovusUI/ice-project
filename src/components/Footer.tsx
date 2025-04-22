import React, { useRef } from 'react';
import {
  Facebook,
  LinkedIn,
  Twitter,
} from '@mui/icons-material';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import XIcon from '@mui/icons-material/X';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const offsetX = useTransform(mouseX, [0, 1], [-10, 10]);
  const offsetY = useTransform(mouseY, [0, 1], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!footerRef.current) return;

    const rect = footerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;  // 0 to 1
    const y = (e.clientY - rect.top) / rect.height;  // 0 to 1
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <footer
      ref={footerRef}
      onMouseMove={handleMouseMove}
      className="bg-black text-white px-6 md:px-16 lg:px-40 pt-32 pb-10 space-y-10 relative overflow-hidden"
    >
      {/* Top Row: Logo and CTA */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <motion.img
          src="/icelogo.svg"
          alt="Logo"
          className="w-10 h-auto"
          style={{ x: offsetX, y: offsetY }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 10,
          }}
        />
        <h4 className="text-white text-xl">Get in touch</h4>
      </div>

      {/* Main Content Grid */}
      <div className="flex flex-col md:flex-row justify-between gap-12 text-left">
        {/* About Links */}
        <div className="text-sm">
          
          <ul className="space-y-2 text-white">
     
            <li><Link to="about-us" className="hover:underline">About us</Link></li>
            <li><Link to="expertise" className="hover:underline">Expertise</Link></li>
            <li><Link to="contacts" className="hover:underline">Contact</Link></li>
            <li><Link to="projects" className="hover:underline">Projects</Link></li>
          </ul>
        </div>

        {/* Description */}
        <div className="text-sm max-w-sm">
          <h4 className="text-gray-400 mb-2">Imagine Create Execute</h4>
          <p className="text-white">
          Crafting bespoke architectural solutions that blend innovation, elegance, and functionality
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-sm text-left md:text-right">
          <p className="text-gray-400 mb-2 uppercase text-xs">Connect with us</p>
          <p className="text-white mb-4 break-words">info@iceprojects.co</p>
          <div className="flex gap-4 justify-start md:justify-end">
            <Link to="#"><LinkedIn fontSize="small" /></Link>
            <Link to="#"><XIcon fontSize="small" /></Link>
            <Link to="#"><Twitter fontSize="small" /></Link>
            <Link to="#"><Facebook fontSize="small" /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-xs text-gray-500 text-left mt-12">
        © 2025 Imagine Create Execute
      </div>
    </footer>
  );
};

export default Footer;
