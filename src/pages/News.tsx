import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Ghost } from "lucide-react";
import { Helmet } from "react-helmet";

const News = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NEWS - RAKKIU</title>
      </Helmet>
      <MaxWidthWrapper className="min-h-screen">
        <div className="flex flex-col items-center justify-center h-screen gap-2">
          <Ghost className="size-16" />
          <span className="uppercase text-lg">Nothing</span>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default News;
