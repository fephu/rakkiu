import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <MaxWidthWrapper className="pb-10">
      <div className="flex flex-col gap-4 max-w-sm mx-auto mt-10">
        <h1 className="text-4xl font-medium tracking-tighter text-center">
          Create Rakkiu account
        </h1>
        <form>
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex flex-col gap-1">
              <Label>Name</Label>
              <Input className="rounded-none" />
            </div>
            <div className="flex flex-col gap-1">
              <Label>Email</Label>
              <Input className="rounded-none" />
            </div>
            <div className="flex flex-col gap-1">
              <Label>Password</Label>
              <Input className="rounded-none" type="password" />
            </div>
            <Button className="rounded-none" size={"lg"}>
              Create
            </Button>

            <div className="flex items-center justify-center">
              <span>Already have an account?</span>
              <Link
                to={"/sign-in"}
                className={buttonVariants({
                  variant: "link",
                  className: "!px-1 underline",
                })}
              >
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </MaxWidthWrapper>
  );
};

export default SignUp;
