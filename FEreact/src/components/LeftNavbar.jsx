import './LeftNavbar.css'; 

const LeftNavbar = () => {
  return (
    <div className="left-navbar">
      <div className="nav-links">
        <a href="/" className="text-white">Home</a>
        <a href="about" className="text-white">About</a>
        <a href="services" className="text-white">Services</a>
        <a href="contact" className="text-white">Contact</a>
      </div>
    </div>
  );
}

export default LeftNavbar;
