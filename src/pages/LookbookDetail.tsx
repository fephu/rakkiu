import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { hombody } from "@/db";

const LookbookDetail = () => {
  return (
    <MaxWidthWrapper>
      <div className="mx-auto max-w-2xl py-20">
        <h1 className="text-2xl">‘HOMEBODY’ SPRING SUMMER ’24 COLLECTION</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {hombody.map((item) => (
          <img src={item} alt="" loading="lazy" />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default LookbookDetail;
