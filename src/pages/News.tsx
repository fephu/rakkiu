import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Ghost } from "lucide-react";

const News = () => {
  return (
    <MaxWidthWrapper className="min-h-screen">
      <div className="flex flex-col items-center justify-center h-screen gap-2">
        <Ghost className="size-20" />
        <span className="uppercase text-lg">Nothing</span>
      </div>
    </MaxWidthWrapper>
  );
};

export default News;
