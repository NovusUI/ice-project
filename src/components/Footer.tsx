import React from 'react';
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 lg:px-40 pt-32 pb-10 space-y-10">
      {/* Top Row: Logo and CTA */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <motion.img
          src="/icelogo.svg"
          alt="Logo"
          className="w-10 h-auto"
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        <h4 className="text-white text-xl">Get in touch</h4>
      </div>

      {/* Main Content Grid */}
      <div className="flex flex-col md:flex-row justify-between gap-12 text-left">
        {/* About Links */}
        <div className="text-sm">
          <h4 className="uppercase text-gray-400 mb-4">About us</h4>
          <ul className="space-y-2 text-white">
            <li><a href="#" className="hover:underline">Approach</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Projects</a></li>
          </ul>
        </div>

        {/* Description */}
        <div className="text-sm max-w-sm">
          <h4 className="text-gray-400 mb-2">Imagine Create Execute</h4>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-sm text-left md:text-right">
          <p className="text-gray-400 mb-2 uppercase text-xs">Connect with us</p>
          <p className="text-white mb-4 break-words">info@loremlipsuim.com</p>
          <div className="flex gap-4 justify-start md:justify-end">
            <a href="#"><LinkedIn fontSize="small" /></a>
            <a href="#"><Instagram fontSize="small" /></a>
            <a href="#"><Twitter fontSize="small" /></a>
            <a href="#"><Facebook fontSize="small" /></a>
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
