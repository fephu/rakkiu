import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <MaxWidthWrapper className="pb-10">
      <div className="flex flex-col gap-4 max-w-sm mx-auto mt-10">
        <h1 className="text-4xl font-medium tracking-tighter text-center">
          Welcome back to Rakkiu
        </h1>
        <form>
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex flex-col gap-1">
              <Label className="text-muted-foreground uppercase text-xs">
                Email
              </Label>
              <Input className="rounded-sm h-10" />
            </div>
            <div className="flex flex-col gap-1">
              <Label className="text-muted-foreground uppercase text-xs">
                Password
              </Label>
              <Input className="rounded-sm h-10" type="password" />
            </div>
            <Button className="rounded-sm uppercase tracking-tight">
              Login
            </Button>

            <div className="flex items-center justify-center">
              <span>Don&apos;t have an account?</span>
              <Link
                to={"/sign-up"}
                className={buttonVariants({
                  variant: "link",
                  className: "!px-1 underline",
                })}
              >
                Create an account
              </Link>
            </div>
          </div>
        </form>
      </div>
    </MaxWidthWrapper>
  );
};

export default SignIn;
