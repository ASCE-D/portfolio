import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className=" h-screen flex items-center justify-center p-12  ">
      <div className="text-center">
        <h1 className="text-white text-7xl font-semibold mb-6 fadeIn tracking-wide">
          Welcome to My Portfolio
        </h1>
        <p className="text-gray-300 text-xl mb-8 p-5 fadeIn tracking-wider">
          Hi there! I'm <span className="text-red-600 text-4xl">Ashish Pandey</span>, a
          passionate Full-Stack Developer with a love for building web apps.
          Explore my work and get to know me better.
        </p>
        <Link
          to="/explore"
          className="inline-block px-4 py-2 bg-red-600 text-black text-lg font-semibold rounded cursor-pointer transition duration-300 hover:bg-yellow-300 hover:text-black"
        >
          Start Exploring
        </Link>
      </div>
    </div>
  );
}

export default Home;
