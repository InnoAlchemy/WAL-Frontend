import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/Header";
import header from "../../public/header.png";

const AboutUsLayout = () => {
  return (
    <div>
      <Header
        img={header}
        title="Make Every Moment Count"
        text="EXPLORE OUR LATEST EVENTS"
        buttonLink="/events"
        buttonText="Get Tickets"
      />
      <div className="w-full bg-gradient-to-r from-[#be0032] from-0% via-[#e10032] via-50% to-[#be0032] to-100% mb-5 py-3">
        <div className="custom-md:w-md custom-md:mx-auto mx-2 flex justify-between items-center text-white font-normal text-xl">
          <NavLink
            to="/about"
            end
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/about/services"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Services
          </NavLink>
          <NavLink
            to="/about/features"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Features
          </NavLink>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default AboutUsLayout;
