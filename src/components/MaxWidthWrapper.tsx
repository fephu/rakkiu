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
    <div className={cn("mx-auto w-full px-4 sm:px-8 h-full", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
