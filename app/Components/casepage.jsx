// app/page.jsx
import Card from "./casecard" ;
import Image from "next/image";

export default function Casecarddata() {
  const cardData = [
    {
      image: "Image/Img1.svg",
      title: "Online Marketing",
      subtitle: "SEO, Marketing",
      details: "Know more about Online Marketing. Grow your business with effective SEO and digital strategies.",
      newText: "Boost your brand with advanced marketing techniques.",
      bgColor: "bg-orange-400",
    },
    {
      image: "Image/Img2.svg",
      title: "Web Development",
      subtitle: "Developing, Designing",
      details: "Know more about Web Development. Build dynamic and responsive web solutions.",
      newText: "Crafting seamless digital experiences.",
      bgColor: "bg-green-400",
    },
    {
      image: "Image/Img3.svg",
      title: "Web Designing",
      subtitle: "Designing, Developing",
      details: "Know more about Web Designing. Creating modern, user-friendly websites.",
      newText: "Transforming ideas into stunning websites.",
      bgColor: "bg-yellow-500"
    },
    {
      image: "Image/Img4.svg",
      title: "Software Development",
      subtitle: "Developing, Designing",
      details: "Know more about Software Development. Creating powerful software solutions.",
      newText: "Innovate with cutting-edge software engineering.",
      bgColor: "bg-blue-900",  
    }
  ];

  return (
    <div className="p-6 bg-white">
      {/* Stylish Heading Section */}
      <div className="text-center my-8">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Our Case Studies
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, tincidunt vestibulum.
        </p>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-4 p-6">
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          subtitle={card.subtitle}
          details={card.details}
          newText={card.newText}
          bgColor= {card.bgColor}
        />
      ))}
    </div>
    </div>
  );
}
