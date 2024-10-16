import { NavLink } from "react-router-dom";
import Button from "./Button";
import TransparentButton from "./TransparentButton";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { navLinks } from "../data";
import logo from "../../public/red-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="w-full h-16 bg-white md:flex justify-center hidden">
        <div className="custom-md:w-md w-full h-full flex justify-between items-center py-1 px-6 text-black text-lg font-semibold">
          <img src={logo} alt="Logo" className="h-full" />
          <div className="gap-4 flex ">
            {navLinks.map(({ title, path }) => (
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-primary active-link gradient-underline"
                      : ""
                  } tracking-wider`
                }
              >
                {title}
              </NavLink>
            ))}

            <TransparentButton title="LOGIN" onClick={() => {}} />
            <Button title="SIGN UP" onClick={() => {}} />
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="w-full h-16 bg-white flex justify-between items-center py-2 px-6 md:hidden">
        <img src={logo} alt="Logo" className="h-full" />
        <div
          onClick={toggleMenu}
          className="text-black text-2xl cursor-pointer"
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute z-50 top-16 left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center gap-3">
          {navLinks.map(({ title, path }) => (
            <NavLink
              to={path}
              className={({ isActive }) =>
                `${
                  isActive ? "text-primary active-link gradient-underline" : ""
                } tracking-wider`
              }
            >
              {title}
            </NavLink>
          ))}

          <div className="flex flex-col gap-4 w-full items-center">
            <TransparentButton title="LOGIN" onClick={() => {}} />
            <Button title="SIGN UP" onClick={() => {}} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
