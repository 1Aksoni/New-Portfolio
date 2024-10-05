import { useState, useEffect } from "react";

const Header = ({ heroRef, skillRef, projectRef, testimonialsRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const menuItems = [
    { name: "Home", ref: heroRef },
    { name: "Skills", ref: skillRef },
    { name: "Projects", ref: projectRef },
    { name: "About", ref: testimonialsRef },
    { name: "Contact", ref: contactRef },
  ];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close the menu after clicking
  };

  return (
    <header
      className={`fixed w-full z-50 shadow-lg transition-transform duration-700 ease-in-out backdrop-blur-md ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold transform hover:scale-105 hover:rotate-2 transition-transform duration-500 ease-in-out">
          <a href="#" className="text-white hover:text-indigo-300">
            <span className="text-indigo-300">Akshat</span> Soni
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10 text-lg font-medium text-gray-200">
          {menuItems.map(({ name, ref }) => (
            <button
              key={name}
              className="relative group hover:text-indigo-300 transition-colors duration-300"
              onClick={() => scrollToSection(ref)}
            >
              {name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-300 transition-all duration-500 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white transition-transform hover:rotate-180"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Side Drawer Menu for Mobile */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full bg-indigo-900 z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 text-white">
          <div className="text-2xl font-bold">Menu</div>
          <button onClick={toggleMenu} aria-label="Close Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col items-start mt-10 ml-6 text-lg text-white space-y-8">
          {menuItems.map(({ name, ref }) => (
            <button
              key={name}
              className="relative text-xl font-medium tracking-wide hover:scale-105 transition-transform duration-300"
              onClick={() => scrollToSection(ref)}
            >
              {name}
              <span className="absolute inset-0 rounded-md bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
            </button>
          ))}
        </nav>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
