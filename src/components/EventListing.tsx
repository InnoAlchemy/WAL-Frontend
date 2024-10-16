import SelectBox from "./SelectBox";
import EventCard from "./EventCard";
import TransparentButton from "./TransparentButton";
import { eventsData } from "../data";
import { useState } from "react";

const EventListing = () => {
  const [count, setCount] = useState(6);

  return (
    <>
      <div className="w-full my-8 md:flex text-center items-center justify-between px-2">
        <div className="custom-md:text-3xl text-2xl font-semibold text-primary mx-5">
          UPCOMING EVENTS
        </div>
        <div className="custom-md:flex  md:mx-0 md:my-0 grid sm:grid-cols-2 grid-cols-1 mx-3 my-2 gap-4">
          <SelectBox
            title="WeekDays"
            options={["Monday", "Tuesday", "Friday"]}
          />
          <SelectBox
            title="Event Type"
            options={["On Site", "Online", "Hybrid"]}
          />
          <SelectBox
            title="Any Category"
            options={["Education", "Politics", "Music"]}
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {eventsData
          .slice(0, count)
          .map(({ img, title, description, month, days }) => (
            <EventCard
              img={img}
              title={title}
              description={description}
              month={month}
              days={days}
            />
          ))}
      </div>
      {eventsData.length > count && (
        <div className="flex justify-center my-8">
          <TransparentButton
            title="Load More"
            className="py-3 px-8"
            onClick={() => {
              setCount(count + 6);
            }}
          />
        </div>
      )}
    </>
  );
};

export default EventListing;
