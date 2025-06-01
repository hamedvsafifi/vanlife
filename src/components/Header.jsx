import { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../assets/logo.png";
function Header() {
  const [isactive, setActive] = useState(0);
  return (
    <header className=" flex items-center justify-between h-[20dvh] bg-[rgba(255,247,237,1)] text-black px-5 md:px-20 ">
      <Link to="/">
        <img src={icon} className="w-30" onClick={() => setActive(0)} />
      </Link>
      <nav>
        <ul className="flex flex-row gap-4">
          <li
            className={`text-[rgba(77,77,77,1)] ${
              isactive === 1 ? "border-b-1 text-black" : ""
            } focus:border-b-1 focus:text-black hover:border-b-1 hover:text-black transition-all duration-300 ease-in-out`}
            onClick={() => setActive(1)}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className={`text-[rgba(77,77,77,1)] ${
              isactive === 2 ? "border-b-1 text-black" : ""
            } focus:border-b-1 focus:text-black hover:border-b-1 hover:text-black transition-all duration-300 ease-in-out`}
            onClick={() => setActive(2)}
          >
            <Link to="/vans">Vans</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
