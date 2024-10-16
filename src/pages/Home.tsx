
import BlogFeatureCard from "../components/BlogFeatureCard";
import DownloadBanner from "../components/DownloadBanner";
import EventListing from "../components/EventListing";
import Header from "../components/Header";
import LatestProducts from "../components/LatestProducts";

const Home = () => {

  return (
    <div>
      <Header
        img="./header.png"
        title="Make Every Moment Count"
        text="EXPLORE OUR LATEST EVENTS"
        buttonLink="/events"
        buttonText="Get Tickets"
      />
      <div className="custom-md:w-md m-auto">
        <EventListing />
      </div>
      <BlogFeatureCard />
      <div className="custom-md:w-md m-auto">
        <LatestProducts />
        <DownloadBanner />
      </div>
    </div>
  );
};

export default Home;
