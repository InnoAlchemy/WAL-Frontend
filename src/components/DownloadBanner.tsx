import downloadBanner from "../../public/download-banner.png";
import playStore from "../../public/play-store-download.png";
import appStore from "../../public/app-store-download.png";

const DownloadBanner = () => {
  
  return (
    <div className="relative mt-10 mb-7 mx-3">
      <img
        src={downloadBanner}
        alt="Banner"
        className="h-[700px] w-full object-cover rounded-[60px] md:h-[400px] sm:h-[550px]" // Adjust height for different screen sizes
      />
      <div className="absolute md:top-[30%] top-[20%] left-[5%] right-[5%] text-center space-y-5">
        <div className="text-3xl text-primary font-semibold md:text-2xl sm:text-xl">
          DOWNLOAD WAL APP NOW
        </div>
        <div className="text-xl text-white font-normal text-justify md:text-lg sm:text-base mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </div>
        <div className="w-full md:h-[70px] h-300px md:flex grid gap-4 justify-center">
          <img src={playStore} alt="" />
          <img src={appStore} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DownloadBanner;
