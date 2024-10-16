import { services } from "../data";

const OurServices = () => {
  return (
    <div className="w-full text-center mb-28 mt-8">
      <div className="text-primary sm:text-4xl text-3xl font-semibold mb-12">
        OUR SERVICES
      </div>
      <div className="custom-md:flex justify-items-center justify-between custom-md:gap-0 gap-5 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 ">
        {services.map(({ img, title, text }) => (
          <div className="w-[200px] flex flex-col items-center">
            <div className="border border-primary rounded-full w-[150px] h-[150px] flex justify-center items-center">
              <img src={img} alt="Service Img" className="w-[40%] " />
            </div>
            <div className="text-xl mt-3 font-semibold">{title}</div>
            <div className="text-center text-gray-500 text-sm mt-3">{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
