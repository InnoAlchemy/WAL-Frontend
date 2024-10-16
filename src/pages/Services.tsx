import DownloadBanner from "../components/DownloadBanner";
import EventListing from "../components/EventListing";
import OurServices from "../components/OurServices";

const Services = () => {
  return (
    <div className="custom-md:w-md m-auto">
      <OurServices />
      <EventListing />
      <DownloadBanner />
    </div>
  );
};

export default Services;
