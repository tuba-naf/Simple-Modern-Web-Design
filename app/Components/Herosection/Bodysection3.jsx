const Bodysection3 = () => {
    return (
      <div className="bg-white"> {/* Full-width white background */}
        <div className="max-w-6xl mx-auto px-18 py-10">
          {/* First Section */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Text on Left */}
            <div className="md:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-gray-900">
                We Offer a Full Range <span className="block">of Digital Marketing Services!</span>
              </h2>
              <p className="text-gray-700 mt-6">
                Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus
                consectetuer turpis, suspendisse.
              </p>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus
                consectetuer.
              </p>
            </div>
            {/* Image on Right */}
            <div className="md:w-1/3">
              <img
                src="/Image/Img8.png"
                alt="Digital Marketing"
                className="w-full rounded-lg"
              />
            </div>
          </div>
  
          {/* Second Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-22 mt-16">
            {/* Text on Right */}
            <div className="md:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-gray-900">
                Leading Digital Agency for Business Solution.
              </h2>
              <p className="text-gray-700 mt-4">
                Power-packed with impressive features and well-optimized, this
                template is designed to provide the best performance in all
                circumstances.
              </p>
              <p className="text-gray-700 mt-2">
                Its smart features make it a powerful stand-alone website building
                tool.
              </p>
              <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-sm">
                Read more
              </button>
            </div>
            {/* Image on Left */}
            <div className="md:w-1/3">
              <img
                src="/Image/Img9.png"
                alt="Business Solution"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Bodysection3;
  