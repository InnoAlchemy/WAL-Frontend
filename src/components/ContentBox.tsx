import { useNavigate } from "react-router-dom";
import TransparentButton from "./TransparentButton";

const ContentBox = ({
  img,
  position,
  title,
  text,
  buttonLink,
  buttonText,
}: {
  img: string;
  position: string;
  title: string;
  text: string;
  buttonLink?: string;
  buttonText?: string;
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center custom-md:items-start mb-8 mt-6">
      <div className="sm:text-3xl text-xl text-primary font-semibold mb-7">{title}</div>
      <div
        className={`custom-md:flex block ${
          position == "right" && "flex-row-reverse"
        } items-center custom-md:max-w-full custom-md:h-[300px] custom-md:gap-7 max-w-[500px] space-y-3 mx-4`}
      >
        <div className="custom-md:w-[50%] custom-md:h-full   bg-white border border-primary  object-cover">
          <img src={img} alt="Image" className="custom-md:h-full custom-md:w-full object-cover" />
        </div>
        <div className="custom-md:w-[50%] space-y-5">
          <div className="text-gray-500 text-md">{text}</div>

          {buttonText && (
            <TransparentButton
              title={buttonText!}
              onClick={() => {
                navigate(buttonLink!);
              }}
              className="py-3 text-md"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentBox;
