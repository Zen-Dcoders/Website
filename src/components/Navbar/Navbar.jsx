// src/components/Navbar/Navbar.jsx
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/ZenDcoders_Logo_Dark.png'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-500 p-4 shadow-md sticky top-0 z-50" style={{ background: 'linear-gradient(to right, #000000, #2C3E50)' }}>
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-2xl font-bold">
                    <Link to="/">
                        <img src={logo} alt="Company Logo" className="h-[60px] w-auto" />
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link to="/expertise" className="text-white hover:text-gray-300">Expertise</Link>
                    <Link to="/team" className="text-white hover:text-gray-300">Team</Link>
                    <Link to="/events" className="text-white hover:text-gray-300">Events</Link>
                    <Link to="/about" className="text-white hover:text-gray-300">About Us</Link>
                    <Link to="/testimonials" className="text-white hover:text-gray-300">Testimonials</Link>
                    <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 space-y-2 bg-blue-600 p-4 rounded-lg" style={{ background: 'linear-gradient(to right, #000000, #2C3E50)' }}>
                    <Link to="/" className="block text-white hover:text-gray-300">Home</Link>
                    <Link to="/expertise" className="block text-white hover:text-gray-300">Expertise</Link>
                    <Link to="/team" className="block text-white hover:text-gray-300">Team</Link>
                    <Link to="/events" className="block text-white hover:text-gray-300">Events</Link>
                    <Link to="/about" className="block text-white hover:text-gray-300">About Us</Link>
                    <Link to="/testimonials" className="block text-white hover:text-gray-300">Testimonials</Link>
                    <Link to="/contact" className="block text-white hover:text-gray-300">Contact</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
