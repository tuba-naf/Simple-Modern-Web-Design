const ContactUsPage = () => {
  return (
    <div className="flex items-center justify-center bg-white py-10 px-4">
      <div className="relative w-full max-w-6xl">
        {/* Image with Overlay */}
        <div className="relative">
          <img
            src="/Image/contactimg.jpg"
            alt="Contact Us"
            className="w-full aspect-square md:aspect-auto object-cover rounded-lg shadow-lg"
          />
          {/* Centered Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-40 px-4 text-center text-white">
            <p className="text-black text-base sm:text-lg md:text-2xl font-semibold leading-snug">
              Do you have any projects?
            </p>
            <span className="text-black text-sm sm:text-lg md:text-xl mt-2">
              Contact Us
            </span>
            {/* Contact Us Button Below Text */}
            <button className="mt-4 px-4 py-2 sm:px-6 sm:py-3 bg-white text-red-600 border-2 border-red-600 text-sm sm:text-lg md:text-xl rounded-full shadow-lg hover:bg-red-600 hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
