import clsx from "clsx";

const Skeleton = ({
  className,
}) => {
  return (
    <div
      className={clsx(
        "animate-pulse rounded-xl bg-slate-200",
        className
      )}
    />
  );
};

export default Skeleton;