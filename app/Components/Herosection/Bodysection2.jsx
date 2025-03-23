export default function Bodysection2() {
    const features = [
      {
        image: "/Image/Img5.svg",
        title: "Speed Optimisation",
        description:
          "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egestas consectetuer turpis, suspendisse.",
      },
      {
        image: "/Image/Img6.svg",
        title: "SEO and Backlinks",
        description:
          "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egestas consectetuer turpis, suspendisse.",
      },
      {
        image: "/Image/Img7.svg",
        title: "Content Marketing",
        description:
          "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egestas consectetuer turpis, suspendisse.",
      },
    ];
  
    return (
      <section className="py-12 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center ">
          <h2 className="text-4xl text-gray-900">How does it works?</h2>
          <p className="text-gray-700 mt-2">
            One theme that serves as an easy-to-use operational toolkit 
            <span className="block">that meets customers' needs.</span>
          </p>
        </div>
  
        {/* Flex row layout for same-row divs */}
        <div className="mt-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-left bg-white p-5  w-full md:w-[30%]"
            >
              <img src={feature.image} alt={feature.title} className="w-16 h-20" />
              <div className="text-left mt-3">
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
                <button className="mt-2 text-blue-500 font-medium hover:underline">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  