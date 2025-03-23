import { useState, useEffect } from "react";

const teamMembers = [
  { id: 1, name: "John Doe", position: "Marketing Manager", description: "Lorem ipsum dolor sit amet...", image: "/Image/c1.jpg" },
  { id: 2, name: "Jane Smith", position: "Lead Designer", description: "Nulla facilisi. Morbi pharetra...", image: "/Image/c2.jpg" },
  { id: 3, name: "Michael Brown", position: "Project Manager", description: "Praesent placerat justo at libero...", image: "/Image/c3.jpg" },
  { id: 4, name: "Emily Davis", position: "UI/UX Designer", description: "Creating seamless experiences...", image: "/Image/c4.jpg" },
  { id: 5, name: "David Wilson", position: "Software Engineer", description: "Developing scalable solutions...", image: "/Image/c5.jpg" },
  { id: 6, name: "Sophia Miller", position: "SEO Specialist", description: "Boosting website rankings...", image: "/Image/c6.jpg" },
  {id: 7, name: "John Doe", position: "Marketing Manager", description: "Lorem ipsum dolor sit amet...", image: "/Image/c1.jpg" }
];

const CustomerSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const totalSlides = Math.ceil(teamMembers.length / itemsPerPage);

  useEffect(() => {
    // Adjust the number of items per slide based on screen width
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 640 ? 1 : 3);
    };

    handleResize(); // Initial setup
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center">What our customers have to say</h1>
        <p className="text-gray-600 text-center mt-2 mb-4">Lorem ipsum dolor sit amet, tincidunt vestibulum.</p>

        {/* Carousel Container */}
        <div className="bg-white p-5 rounded-lg overflow-hidden relative ">
          {/* Slide Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(activeIndex * 100) / totalSlides}%)`, width: "100%" }}
          >
            {teamMembers.map((member, index) => (
              <div key={member.id} className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-2">
                <div className="flex flex-col items-center bg-[#f7f8fa] w-full sm:w-11/12 md:w-full p-5 mx-4 rounded-lg shadow-md gap-4">
                  <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover" />
                  <p className="text-gray-700 mt-4 font-medium text-center">{member.description}</p>
                  <hr className="w-16 border-t-4 border-red-600 my-3" />
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-gray-500">{member.position}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots for Navigation (More dots on mobile) */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full transition-all ${activeIndex === index ? "bg-red-600 scale-125" : "bg-red-400"}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSection;
