
function Home() {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-white text-4xl font-semibold mb-6">Welcome to the Wild West</h1>
        <p className="text-gray-300 text-lg mb-8">Explore the rugged landscapes and experience the adventure.</p>
        <button className="bg-red-600 hover:bg-red-800 text-white px-6 py-3 rounded-lg text-xl font-semibold">
          Start Exploring
        </button>
      </div>
    </div>
  );
}

export default Home;
// import img1 from "../assets/cyrpto.png";


// function PortfolioHome() {
//   const projects = [
//     {
//       title: 'Frontier Explorer',
//       description: 'An interactive map of the wild west showcasing notable locations.',
//       imageUrl: img1,
//     },
//     {
//       title: 'Bounty Hunter Tracker',
//       description: 'A tracking tool for bounty hunters to locate their targets.',
//       imageUrl: 'path-to-image2.jpg',
//     },
//     // Add more project objects as needed
//   ];

//   return (
//     <div className="bg-black h-screen flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-white text-4xl font-semibold mb-6">My RDR2-Inspired Portfolio</h1>
//         <p className="text-gray-300 text-lg mb-8">Explore my projects inspired by the wild west.</p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div key={index} className="bg-gray-900 p-4 rounded-lg shadow-md">
//               <img src={project.imageUrl} alt={project.title} className="mx-auto mb-4 p-4" />
//               <h2 className="text-white text-xl font-semibold mb-2">{project.title}</h2>
//               <p className="text-gray-300">{project.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PortfolioHome;
