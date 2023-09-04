

import  { useEffect, useState } from "react";
import img1 from "../assets/cyrpto.png";
import About from "../pages/About";

function PortfolioHome() {
  const [animation, setAnimation] = useState(false);
  
  const handleImageClick = (url: string) => {
    window.open(url, "_blank"); // Open the URL in a new tab
  };

 

  const projects = [
    {
      title: 'Frontier Explorer',
      description: 'An interactive map of the wild west showcasing notable locations.',
      imageUrl: img1,
      websiteUrl: 'https://crypto-jade-one.vercel.app', // Add your actual website URL here
      repoUrl: 'https://github.com/Ashish2271/crypto',
    },
    {
      title: 'Bounty Hunter Tracker',
      description: 'A tracking tool for bounty hunters to locate their targets.',
      imageUrl: 'path-to-image2.jpg',
      websiteUrl: 'https://urban-marketplace.vercel.app/', // Add your actual website URL here
      repoUrl: 'https://github.com/ASCE-D/UrbanMarketplace',
    },
    // Add more project objects as needed
  ];

  useEffect(() => {
    setAnimation(true);
  }, []);

  return (
    <>
      <About />
      <div
        className={` h-auto md:min-h-screen flex flex-col items-center justify-center transition-opacity ${
          animation ? "opacity-100" : "opacity-0"
        } pl-12 ml-12`}
      >
        <div className="text-center px-4">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            My RDR2-Inspired Portfolio
          </h1>
          <p className="text-gray-300 text-sm md:text-lg mb-6">
            Explore my projects inspired by the wild west.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-2 md:p-4 ${
            animation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 p-3 md:p-4 rounded-lg shadow-md">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="mx-auto mb-2 md:mb-3 p-2 md:p-3 cursor-pointer"
                onClick={() => handleImageClick(project.websiteUrl)}
              />
              <h2 className="text-white text-lg md:text-xl font-semibold mb-1 md:mb-2">{project.title}</h2>
              <p className="text-gray-300 text-sm md:text-base">{project.description}</p>

              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded inline-block"
              >
                View Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PortfolioHome;

