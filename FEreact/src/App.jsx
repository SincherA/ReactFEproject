import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import './components/Navbar.css'
import Navbar from './components/Navbar.jsx';
import LeftNavbar from './components/LeftNavbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Contact from './components/Pages/Contact';

function App() {

  return (

    <div >
      <Router>
        <Navbar />
        <LeftNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </Router >
    </div>
);
}

export default App
