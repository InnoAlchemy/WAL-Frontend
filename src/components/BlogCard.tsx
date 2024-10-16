const BlogCard = ({
  img,
  title,
  date,
}: {
  img: string;
  title: string;
  date: string;
}) => {
  return (
    <div className="max-w-[350px] space-y-4">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="italic text-gray-600 flex items-center md:text-md text-sm">
        {date}
        <div className="h-[2px] ml-4 bg-gray-500 w-full flex-1"></div>
      </div>
      <div className="md:text-3xl text-2xl font-semibold">{title}</div>
      <div
        className="text-gray-500 hover:underline cursor-pointer"
        onClick={() => {}}
      >
        Read More ➜
      </div>
    </div>
  );
};

export default BlogCard;
