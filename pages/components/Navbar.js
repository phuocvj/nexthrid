// components/Navbar.js
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size and set isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`${
        isMobile
          ? "fixed bottom-0 left-0 right-0 bg-white shadow-lg"
          : "fixed top-0 left-0 h-full w-60 bg-gray-800 text-white"
      }`}
    >
      <ul className="flex flex-col h-full justify-center items-center space-y-4 md:space-y-6 p-4">
        <li>
          <Link href="/">
            <a className="hover:text-blue-400 transition-colors duration-200">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="hover:text-blue-400 transition-colors duration-200">About</a>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <a className="hover:text-blue-400 transition-colors duration-200">Services</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="hover:text-blue-400 transition-colors duration-200">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
