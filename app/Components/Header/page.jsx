import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Topheader = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-[#f7f8fa] text-white ">
      {/* Logo on the Left */}
      <div className='ml-20'>
      <Link href="/">
  <img src="/Image/logo.svg" alt="Logo" width={120} height={120} />
</Link>
      </div>

      {/* Centered Nav Items */}
      <div className="flex-1 flex justify-center space-x-6 ">
        <Link href="/home" className=" text-black text-base font-bold hover:text-red-400">Home</Link>
        <Link href="/about" className=" text-black text-base font-bold hover:text-red-400">About</Link>
        <Link href="/blog" className=" text-black text-base font-bold hover:text-red-400">Blog</Link>
        <Link href="/testimonial" className=" text-black text-base font-bold hover:text-red-400">Testimonial</Link>
      </div>

      {/* Contact Button (Right) */}
      <div>
        <Link href="/contact">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded mr-20">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Topheader;
