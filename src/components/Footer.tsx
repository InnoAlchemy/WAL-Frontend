import { NavLink } from "react-router-dom";
import logo from "../../public/white-logo.svg";
import instagram from "../../public/instagram.svg";
import youtube from "../../public/youtube.svg";
import linkedin from "../../public/linkedin.svg";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-[#be0032] from-0% via-[#e10032] via-50% to-[#be0032] to-100%">
        <div className="custom-md:w-md custom-md:m-auto mx-3 py-10 md:flex grid sm:grid-cols-2 grid-cols-1 gap-10 text-center items-center md:justify-between justify-center">
          <div className="flex flex-col justify-center items-center">
            <img src={logo} alt="Logo" width={100} />
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-white text-xl font-semibold">Information</div>
            <div className="text-gray-200 text-lg flex flex-col gap-2 cursor-pointer">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/">Blogs</NavLink>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-white text-xl font-semibold">Quick Links</div>
            <div className="text-gray-200 text-lg flex flex-col gap-2 cursor-pointer">
              <NavLink to="/">Events</NavLink>
              <NavLink to="/">Shop</NavLink>
              <NavLink to="/">Get Started</NavLink>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-white text-xl font-semibold">Contact Us</div>
            <div className="text-gray-200 text-lg flex flex-col gap-2 cursor-pointer">
              <div onClick={() => {}}>Contact Number</div>
              <div onClick={() => {}}>Email Address</div>
              <div onClick={() => {}}>Address & Hours</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#dbdbdb] py-1">
        <div className="custom-md:w-md custom-md:m-auto mx-3 sm:flex sm:justify-between sm:gap-0 gap-3 grid justify-center items-center text-[#3A3A3A] font-semibold">
          <div>Copyright © 2024 All rights reserved</div>
          <div className="flex gap-1 justify-center">
            <img src={instagram} alt="Instagram" width={30} />
            <img src={linkedin} alt="Linkedin" width={30} />
            <img src={youtube} alt="Youtube" width={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
