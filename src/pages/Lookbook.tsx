import LookbookCard from "@/components/LookbookCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { lookbook } from "@/db";
import { Helmet } from "react-helmet";

const Lookbook = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>LOOKBOOK - RAKKIU</title>
      </Helmet>
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-10 gap-x-8">
          {lookbook &&
            lookbook.map((item) => (
              <LookbookCard
                title={item.title}
                img={item.img[0]}
                key={item.title}
                isAvaible={item.isAvaiable}
                value={item.value}
              />
            ))}
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Lookbook;
