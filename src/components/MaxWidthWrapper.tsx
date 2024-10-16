import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn("mx-auto w-full px-5 sm:px-10 h-full", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
