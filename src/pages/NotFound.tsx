import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PAGE NOT FOUND</title>
      </Helmet>
      <MaxWidthWrapper className="min-h-screen">
        <div className="flex flex-col items-center justify-center h-screen gap-10">
          <span className="text-9xl tracking-wider">404</span>
          <span className="text-3xl">Page Not Found</span>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default NotFound;
