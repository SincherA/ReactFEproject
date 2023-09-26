import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 bg-black p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">My Website</div>
          <div className="flex md:hidden">
            <button className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white underline-hover">Home</a>
            <a href="#" className="text-white underline-hover">About</a>
            <a href="#" className="text-white underline-hover">Services</a>
            <a href="#" className="text-white underline-hover">Contact</a>
          </div>
        </div>
        <div className="md:hidden bg-black p-4">
          <a href="#" className="block text-white">Home</a>
          <a href="#" className="block text-white">About</a>
          <a href="#" className="block text-white">Services</a>
          <a href="#" className="block text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
