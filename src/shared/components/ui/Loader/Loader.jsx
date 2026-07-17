import { Loader2 } from "lucide-react";
import clsx from "clsx";

const Loader = ({
  size = 24,
  className,
}) => {
  return (
    <Loader2
      size={size}
      className={clsx(
        "animate-spin text-blue-600",
        className
      )}
    />
  );
};

export default Loader;