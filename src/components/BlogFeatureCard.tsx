import TransparentButton from "./TransparentButton";

const BlogFeatureCard = () => {
  return (
    <div className="bg-white w-screen">
      <div className="xl:w-md xl:max-w-[100%] max-w-[700px] xl:flex-row xl:text-start m-auto flex flex-col-reverse  items-center xl:p-24 p-5 ">
        <div className="flex-1 xl:block flex flex-col xl:items-start items-center">
          <div className="italic text-lg font-normal text-gray-500 flex items-center mb-4">
            Post on December 31, 2021 Business
            <div className="flex-1 mx-10 h-[1px] bg-gray-600 xl:flex hidden"></div>
          </div>
          <div className="w-[75%] space-y-8">
            <div className="text-2xl font-semibold">
              How To Keep The Motivation Up When There Is No Client Work
            </div>
            <div className="text-lg font-normal text-gray-400">
              Whereby is the super simple way to connect over video, No
              downloads or long having into meeting links.
            </div>
            <TransparentButton
              title="Read More"
              onClick={() => {}}
              className="py-3 px-8"
            />
          </div>
        </div>
        <div>
          <img src="./blog.png" alt="Blog Feature" height={400} width={400} />
        </div>
      </div>
    </div>
  );
};

export default BlogFeatureCard;
