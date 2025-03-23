import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 px-6 ">
      <div className="max-w-6xl mx-auto ">
        
        {/* Main Row Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* Logo & Contact Info */}
          <div>
          
            <img src="/Image/logo.svg" alt="Logo" className="w-24 mx-auto md:mx-0" />
            <p className="text-gray-700 mt-2"> mikayla_beer@feil.name</p>
            <p className="text-gray-700"> 906-179-8309</p>
          </div>

          {/* Get in Touch (Subscription) */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
            <p className="text-gray-700 text-sm">
              Don’t miss any updates of our new templates and extensions.!
            </p>

            {/* Email Subscription Box */}
            <div className="mt-4 flex flex-col items-center md:items-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 text-black rounded-md focus:outline-none bg-[#f6f7fb]"
              />
              <button className="mt-2 w-1/2 bg-black text-white py-2 rounded-sm hover:bg-white hover:text-black transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Our Guidelines</h3>
            <ul>
      <li><Link href="#" className="hover:text-white">Terms</Link></li>
      <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
      <li><Link href="#" className="hover:text-white">Cookie Policy</Link></li>
      <li><Link href="#" className="hover:text-white">Discover</Link></li>
    </ul>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Our Address</h3>
            <p className="text-gray-700"> 518 Schmeler Neck</p>
            <p className="text-gray-700">Bartlett, Illinois</p>

            {/* Social Icons Below Address */}
            <div className="flex justify-center md:justify-start gap-6 mt-4 text-gray-500 text-2xl">
              <FaFacebook className="hover:text-black cursor-pointer" />
              <FaTwitter className="hover:text-black cursor-pointer" />
              <FaInstagram className="hover:text-black cursor-pointer" />
              <FaLinkedin className="hover:text-black cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-700 text-sm">
          Copyright © 2019 <span className="text-red-500">Bootstrapdash.</span> All rights reserved. Distributed by <span className="text-red-500">ThemeWagon.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
