import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Header = ({
  img,
  title,
  text,
  buttonText,
  buttonLink,
}: {
  img: string;
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}) => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[600px]">
      <img src={img} alt="Header" className="h-full w-full object-cover" />
      <div className="h-full w-full  bg-gradient-header absolute bottom-0 top-0 left-0 right-0"></div>
      <div className="absolute bottom-[15%] flex flex-col justify-center items-center w-full gap-2 ">
        <div className="text-white lg:text-6xl md:text-5xl text-3xl font-bold text-center">{title}</div>
        <div className="text-gray-300 lg:text-4xl md:text-2xl text-xl text-center">{text}</div>
        <Button
          title={buttonText}
          onClick={() => {
            window.scroll(0, 0);
            navigate(buttonLink);
          }}
          className="font-normal mt-4 py-3 px-7"
        />
      </div>
    </div>
  );
};

export default Header;
