import  { useEffect, useState } from "react";
import aboutImage from "../assets/IMG.jpg";

function About() {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
  }, []);

  const education = [
    // {
    //   school: "University of XYZ",
    //   degree: "Bachelor of Science in Computer Science",
    //   year: "2016 - 2020",
    // },
    {
      school: "National Institute of Technology, Raipur",
      degree: "B.Tech. in Metallurgical & Materials Engineering",
      year: "2021 - 2025",
    },
  ];

  const achievements = [
    "built a full stack web app using MERN stack",
    
  ];

  return (
    // <div
    //   className={` min-h-screen flex flex-col items-center justify-center transition-opacity ${
    //     animation ? "opacity-100" : "opacity-0"
    //   } p-12 ml-12`}
    // >
    //   <div
    //     className={`flex flex-col md:flex-row items-center w-full p-2 md:p-4 ${
    //       animation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
    //     }`}
    //   >
    //     <div className="w-full md:w-1/2 flex flex-col items-start pl-4 md:pl-0">
    //       <h2 className="text-red-600 text-5xl md:text-6xl font-semibold mb-3 pb-12">
    //         Ashish Pandey
    //       </h2>
    //       <h3 className="text-red-600 text-2xl md:text-3xl font-semibold mb-2">
    //         Education
    //       </h3>
    //       <ul className="text-gray-300 text-lg mb-3">
    //         {education.map((edu, index) => (
    //           <li
    //             key={index}
    //           >{`${edu.degree}, ${edu.school} (${edu.year})`}</li>
    //         ))}
    //       </ul>
    //       <h3 className="text-red-600 text-2xl md:text-3xl font-semibold mb-2">
    //         Achievements
    //       </h3>
    //       <ul className="text-gray-300 text-lg mt-3">
    //         {achievements.map((achievement, index) => (
    //           <li key={index}>{achievement}</li>
    //         ))}
    //       </ul>
    //     </div>
    //     <div className="w-full md:w-1/2 flex justify-center items-center">
    //       <img
    //         src={aboutImage}
    //         alt="Ashish Pandey"
    //         className="max-h-60 md:max-h-80 rounded-full"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div
  className={`min-h-screen flex flex-col items-center justify-center transition-opacity ${
    animation ? "opacity-100" : "opacity-0"
  } p-4 md:p-12`}
>
  <div
    className={`flex flex-col items-center w-full p-2 md:p-4 ${
      animation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
    }`}
  >
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start pl-4 md:pl-0">
      <h2 className="text-red-600 text-5xl md:text-6xl font-semibold mb-3 pb-12">
        Ashish Pandey
      </h2>
      <h3 className="text-red-600 text-2xl md:text-3xl font-semibold mb-2">
        Education
      </h3>
      <ul className="text-gray-300 text-lg mb-3">
        {education.map((edu, index) => (
          <li key={index}>{`${edu.degree}, ${edu.school} (${edu.year})`}</li>
        ))}
      </ul>
      <h3 className="text-red-600 text-2xl md:text-3xl font-semibold mb-2">
        Achievements
      </h3>
      <ul className="text-gray-300 text-lg mt-3">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
    <div className="w-full md:w-1/2 flex justify-center items-center">
      <img
        src={aboutImage}
        alt="Ashish Pandey"
        className="max-h-60 md:max-h-80 rounded-full"
      />
    </div>
  </div>
</div>

  );
}

export default About;
