import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-purple-400">
      <div className="logo font-bold cursor-pointer">Pass-O</div>

      <ul className="flex gap-6 ">
        <li className="hover:font-semibold">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:font-semibold" >
          <Link to="/about">About</Link>
        </li>
        <li className="hover:font-semibold" >
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
