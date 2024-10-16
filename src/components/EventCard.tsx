const EventCard = ({
  img,
  title,
  description,
  month,
  days,
}: {
  img: string;
  title: string;
  description: string;
  month: string;
  days: string;
}) => {
  return (
    <div onClick={() => {}} className="shadow-md m-3 bg-white">
      <img
        src={img}
        alt="Event Picture"
        className="h-[200px] w-full object-cover"
      />
      <div className="flex items-start gap-5 bg-white px-5 pb-4 pt-3">
        <div className="text-center">
          <div className="text-primary font-bold text-lg">{month}</div>
          <div className="text-black font-bold text-3xl">{days}</div>
        </div>
        <div>
          <div className="font-bold text-lg">{title}</div>
          <div className="font-normal text-gray-600 text-md">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
