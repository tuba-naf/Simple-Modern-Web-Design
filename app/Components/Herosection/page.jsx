import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (

    <div className="flex flex-col items-center justify-center mt-12 text-center bg-[#f7f8fa] p-6">
        
      <h1 className="text-4xl font-semibold text-gray-900">
        Search engine optimisation.
      </h1>
      <h1 className="text-4xl font-semibold text-gray-900 mt-2">
  & Marketing.
      </h1>
      <p className="text-lg text-gray-700  max-w-xl mt-4">
        Simple is a simple template with a creative design that solves all your marketing and SEO queries.
      </p>
      <div className="mt-6 space-x-4">
        <button className="px-6 py-2 bg-[#fec4af] text-[#fc7341]  rounded hover:bg-white outline outline-#fc7341">
          Get Started
        </button>
        <button className="px-6 py-2 bg-[#b7eddd] text-[#5ed6b3]  rounded hover:bg-white outline  outline-#5ed6b3 ">
          Learn More
        </button>
        <div>
  <Image 
    src="/Image/hero.svg" 
    alt="Hero Image" 
    width={500} 
    height={300} 
  />
</div>
      </div>
    </div>
  );
};

export default Hero;
