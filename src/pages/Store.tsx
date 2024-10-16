import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import storeImg from "@/assets/store.jpg";

const Store = () => {
  return (
    <MaxWidthWrapper className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
        <h1 className="text-2xl uppercase font-semibold tracking-tight">
          Store
        </h1>

        <div className="flex flex-col gap-10">
          <img src={storeImg} alt="Store image" className="w-[60%]" />
          <div className="">
            <h2 className="uppercase font-semibold">address</h2>
            <span className="text-sm">
              No. 17, Alley 25 Trieu Viet Vuong Str., Nguyen Du Ward, Hai Ba
              Trung District, Ha Noi, Vietnam
            </span>
          </div>
          <div className="">
            <h2 className="uppercase font-semibold">phone</h2>
            <span className="text-sm">+84 776434572</span>
          </div>
          <div className=" flex flex-col gap-1">
            <h2 className="uppercase font-semibold">hours</h2>
            <span className="text-sm">Monday—Sunday</span>
            <span className="text-sm">10:00am—9:00pm</span>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Store;
