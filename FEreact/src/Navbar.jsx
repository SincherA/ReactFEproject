import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 bg-black p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">My Website</div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="text-white">About</a>
            <a href="#" className="text-white">Services</a>
            <a href="#" className="text-white">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
