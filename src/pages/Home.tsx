import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import backgroundHome from "@/assets/bg.webp";
import backgroundHome1 from "@/assets/bg1.webp";
import markImg from "@/assets/mark.webp";
import videoSrc from "@/assets/3.mp4";

import NewArrivalsCarousel from "@/components/NewArrivalsCarousel";

const Home = () => {
  return (
    <>
      <MaxWidthWrapper>
        <img src={backgroundHome} alt="Background image" />
        <div className="max-w-sm mx-auto py-10">
          <img src={markImg} alt="" className="w-full" />
        </div>

        <video autoPlay muted loop id="myVideo">
          <source src={videoSrc} type="video/mp4" />
        </video>

        <div className="pt-8 pb-12">
          <h1 className="uppercase text-lg px-6 font-semibold tracking-tighter">
            New Arrivals
          </h1>
          <NewArrivalsCarousel />
        </div>

        <img src={backgroundHome1} alt="" />
      </MaxWidthWrapper>
    </>
  );
};

export default Home;
