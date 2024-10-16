import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Contact = () => {
  return (
    <MaxWidthWrapper className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
        <h1 className="text-2xl uppercase font-semibold tracking-tight">
          Contact
        </h1>
        <div className="flex flex-col gap-10">
          <h1 className="uppercase">customer service</h1>

          <div className="flex flex-col gap-2 text-sm ">
            <span>
              For general questions or wholesale inquiry, please contact us
              through email.
            </span>
            <span>rakkiu.official@gmail.com</span>
          </div>

          <div className="flex flex-col gap-2 text-sm ">
            <h2>Return Address</h2>
            <span>
              No. 17, Alley 25 Trieu Viet Vuong Str., Nguyen Du Ward, Hai Ba
              Trung District, Ha Noi, Vietnam
            </span>
            <span>Vietnam: +84 776434572</span>
            <span>English: +84 835737686</span>
          </div>
          <span className="text-sm ">Monday to Sunday 10am—8pm</span>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Contact;
