import ContentBox from "../components/ContentBox";
import walBackground from "../../public/wal-background.png";
import vision from "../../public/vision.png";
import BlogFeatureCard from "../components/BlogFeatureCard";
import DownloadBanner from "../components/DownloadBanner";

const AboutUs = () => {
  return (
    <>
      <div className="custom-md:w-md m-auto">

      <ContentBox
        img={walBackground}
        title="DISCOVER WAL PLATFORM"
        text="Welcome to WAL, your trusted platform for seamless event ticketing and registration management. Whether you're organizing a small gathering or a large-scale event, WAL simplifies the process, making it easy for attendees to register, purchase tickets, and stay informed about the latest updates. Our platform empowers event organizers with utting-edge tools to manage every aspect of their event, from ticket sales to attendee data tracking. With WAL, your event planning becomes streamlined and efficient, allowing you o focus on creating unforgettable experiences for your audience."
        position="left"
        buttonLink=""
        buttonText="DOWNLOAD APP"
      />
      </div>
      <BlogFeatureCard />
      <div className="custom-md:w-md m-auto">
      
      <ContentBox
        img={vision}
        title="OUR VISION"
        text="Welcome to WAL, your trusted platform for seamless event ticketing and registration management. Whether you're organizing a small gathering or a large-scale event, WAL simplifies the process, making it easy for attendees to register, purchase tickets, and stay informed about the latest updates. Our platform empowers event organizers with utting-edge tools to manage every aspect of their event, from ticket sales to attendee data tracking. With WAL, your event planning becomes streamlined and efficient, allowing you o focus on creating unforgettable experiences for your audience."
        position="right"
      />
      <DownloadBanner />
      </div>
    </>
  );
};

export default AboutUs;
