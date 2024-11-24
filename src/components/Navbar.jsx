import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add scroll event listener to update state
  useEffect(() => {

    // const { scrollYProgress } = useScroll();
    // const scaleX = useSpring(scrollYProgress, {
    //   stiffness: 100,
    //   damping: 30,
    //   restDelta: 0.001
    // });
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    // Close the mobile menu after clicking any link
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed max-w-full w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#b3976b] bg-opacity-40 backdrop-blur-md shadow-md" : "bg-white"}`}>
      <div className="container mx-auto px-6 md:px-5 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h2 className="font-bold text-[30px]">BP<span className="text-[#b3976b]">PR</span></h2>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-grow justify-center space-x-8">
            <ul className="flex space-x-8 gap-8" color="color.main">
              <li className="hover:text-blue-500 cursor-pointer"><Link to='/'>Editions</Link></li>
              <li className="hover:text-blue-500 cursor-pointer"><Link to='/articles'>Articles</Link></li>
              {/* <li className="hover:text-blue-500 cursor-pointer"><Link to='/'>Contact</Link></li> */}
              {/* <li className="hover:text-blue-500 cursor-pointer">Contact</li> */}
            </ul>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden z-50`}
        >
          <div className="flex justify-between items-center px-6 py-4">
            {/* Logo in Mobile */}
            bppr
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Links */}
          <ul className="mt-8 space-y-4 px-6">
            <li onClick={handleLinkClick}  className="hover:text-blue-500 cursor-pointer"><Link to='/'>Editions</Link></li>
            <li onClick={handleLinkClick} className="hover:text-blue-500 cursor-pointer"><Link to='/articles'>About</Link></li>
            {/* <li onClick={handleLinkClick} className="hover:text-blue-500 cursor-pointer"><Link to='/contact'>Contact</Link></li> */}
            {/* <li onClick={handleLinkClick} className="hover:text-blue-500 cursor-pointer">Contact</li> */}
          </ul>

          {/* Join Us Button for Mobile */}
          <div className="mt-8 px-6">
            {/* <button className="bg-[#b3976b] text-white w-full px-4 py-2 rounded hover:bg-[#8f631c] transition duration-300">
              <Link to='/'>Join Us Now</Link>
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
