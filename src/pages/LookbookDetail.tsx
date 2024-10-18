import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCarousel from "@/components/ProductCarousel";
import { hombody } from "@/db";
import { useState } from "react";

const LookbookDetail = () => {
  const [model, setModel] = useState<string>("");

  const handleStateChange = (newState: string) => {
    setModel(newState);
  };
  return (
    <>
      {model !== "" && (
        <div className="fixed top-0 inset-x-0 w-full h-screen flex justify-center items-center bg-white z-[999]">
          <ProductCarousel images={hombody} onChangeState={handleStateChange} />
        </div>
      )}
      <MaxWidthWrapper>
        <div className="mx-auto max-w-2xl py-20">
          <h1 className="text-2xl">‘HOMEBODY’ SPRING SUMMER ’24 COLLECTION</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {hombody.map((item) => (
            <img
              src={item}
              alt=""
              loading="lazy"
              onClick={() => {
                setModel(item);
              }}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default LookbookDetail;
