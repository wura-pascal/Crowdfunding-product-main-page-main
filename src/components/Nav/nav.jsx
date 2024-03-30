import React from "react";
// import Logo from "../../assets/logo.svg";
import Open from "../../assets/icon-hamburger.svg";
import Close from "../../assets/icon-close-menu.svg";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Button from "../Button";
import { useState } from "react";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((isopen) => !isOpen);
  };
  return (
    <div className="bg-gray-500">
      <section>
        <header className="flex items-center justify-between">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <nav>
            <ul className="flex gap-8">
              <li className="">
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/discover">Discover</Link>
              </li>
              <button type="submit">Get Started</button>
              <Button children="" />
            </ul>
          </nav>
        </header>
        <div className="Ham " onClick={toggleMenu}>
          <img src={isOpen ? Close : Open} alt="" />

          {/* <div className=" flex-col items-center"> */}
          <ul
            className={`${
              isOpen
                ? "flex flex-col bg-green-500 absolute right-0 top-[50px] w-full py-4 mt-[1px] shadow-lg items-center"
                : "hidden"
            }`}
          >
            <li className="">
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/discover">Discover</Link>
            </li>
          </ul>
          {/* </div> */}
        </div>
      </section>
    </div>
  );
}

export default Nav;
