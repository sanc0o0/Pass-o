import { useState } from "react";
import { Link } from "react-router-dom";
import githubIcon from "../assets/github-icon.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent p-4">
      <div className="flex justify-between items-center">
        {/* Logo (hidden on mobile) */}
        <div className="hidden md:block font-bold cursor-pointer text-lg">
          <span className="text-purple-700">&lt;</span>
          Pass-O
          <span className="text-purple-700">/&gt;</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            <li className="hover:font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:font-semibold">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:font-semibold">
              <Link to="/saved">Saved Passwords</Link>
            </li>
          </ul>

          {/* GitHub Icon */}
          <button className="cursor-pointer hover:scale-110 transition px-10">
            <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
          </button>
        </div>
        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden text-2xl z-50 cursor-pointer focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-40 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="flex flex-col gap-6 p-6 mt-10 text-lg">
        {/* GitHub Icon */}
          <button className="cursor-pointer transition">
            <img src={githubIcon} alt="GitHub" className="w-8 h-8" />
          </button>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/saved" onClick={() => setMenuOpen(false)}>
              Saved Passwords
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
