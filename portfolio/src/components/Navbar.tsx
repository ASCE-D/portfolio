

const Navbar = () => {
  return (
    <div>
    <nav className="bg-black p-4">
  <div className="container mx-auto flex justify-between items-center">
    <a href="#" className="text-white text-xl font-semibold">My Website</a>
    <ul className="flex space-x-4">
      <li><a href="#" className="text-white hover:text-red-600">Home</a></li>
      <li><a href="#" className="text-white hover:text-red-600">About</a></li>
      <li><a href="#" className="text-white hover:text-red-600">Services</a></li>
      <li><a href="#" className="text-white hover:text-red-600">Contact</a></li>
    </ul>
  </div>
</nav>


    </div>
  )
}

export default Navbar
