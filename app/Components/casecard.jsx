'use client'
import { useState } from "react";

export default function Card({ image, title, subtitle, details, newText, bgColor = "bg-gray-200"  }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Outer Box to Contain Image */}
      <div className={`w-[300px] h-[300px] ${bgColor} rounded-lg flex items-center justify-center shadow-md`}>
        {/* Image Container */}
        <div 
          className={`relative w-[150px] h-[150px] rounded-lg overflow-hidden transition-all duration-300 ${
            isHovered ? "bg-blue-200" : "bg-transparent"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src={image} 
            alt={title} 
            width={150}
            height={150}
            className="w-full h-full object-cover"
          />

          {/* Overlay Content (Appears on Hover) */}
          {isHovered && (
            <div className={`absolute inset-0 ${bgColor} bg-opacity-30 flex flex-col justify-center items-center text-white font-bold p-2 w-full h-full`}>
              <p className="font-medium">{newText}</p>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="mt-2 px-4 py-2 bg-white text-white font-bold rounded-sm hover:bg-red-500"
              >
                {showDetails ? "Show Less" : "Read More"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Title & Subtitle Below Image */}
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      {/* Details (Toggled on Click) */}
      {showDetails && (
        <p className="text-gray-700 mt-2 max-w-sm text-center">{details}</p>
      )}
    </div>
  );
}
