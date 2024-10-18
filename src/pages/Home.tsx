import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import backgroundHome from "@/assets/bg.webp";
import backgroundHome1 from "@/assets/bg1.webp";
import markImg from "@/assets/mark.webp";
import videoSrc from "@/assets/3.mp4";

import NewArrivalsCarousel from "@/components/NewArrivalsCarousel";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 flex items-center justify-center z-50">
            <Loader2 className="animate-spin" />
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <MaxWidthWrapper>
            <img src={backgroundHome} alt="Background image" />
            <div className="max-w-sm mx-auto py-10 flex items-center justify-center">
              <img src={markImg} alt="" className="w-1/2 sm:w-full" />
            </div>

            <video autoPlay muted loop id="myVideo" playsInline>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Home;
