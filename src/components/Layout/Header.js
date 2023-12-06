import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../utils/constants";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import logo from "../../assets/Logo.svg";

const Header = () => {
  const [navExpanded, setNavExpanded] = useState(false);
  return (
    <header className="shadow-md">
      <div className="flex justify-between items-center lg:container lg:mx-auto lg:max-w-screen-lg px-3">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="h-20 py-3" />
        </NavLink>
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setNavExpanded(!navExpanded)}
        >
          {navExpanded === true ? (
            <IoMdClose size={30} className="fill-lemongreen" />
          ) : (
            <RxHamburgerMenu size={30} className="fill-lemongreen" />
          )}
        </button>
        <nav
          className={`fixed transform top-0 left-0 w-64 h-full bg-white overflow-auto ease-in-out transition-transform duration-200 z-10 ${
            navExpanded ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:static lg:h-auto lg:w-auto`}
        >
          <ul className="flex flex-col space-y-4 p-5 lg:flex-row lg:space-x-5 lg:space-y-0">
            {Object.entries(NAV_ITEMS).map(([name, path]) => (
              <li key={name}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    (isActive ? "text-lemonyellow" : "text-lemongreen") +
                    " hover:text-lemonyellow uppercase font-markazi text-2xl"
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
