import React from "react";
import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../utils/constants";
import logo from "../../assets/Logo.svg";

const Header = () => {
  return (
    <header className="shadow-md">
      <div className="flex justify-between items-center lg:container lg:mx-auto lg:max-w-screen-lg">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="h-20 py-3" />
        </NavLink>

        <nav className="">
          <ul className="flex space-x-5">
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
