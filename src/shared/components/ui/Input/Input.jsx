import clsx from "clsx";

const Input = ({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  className,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          {label}
        </label>
      )}

      <div
        className={clsx(
          "flex h-12 items-center rounded-2xl border border-slate-200 bg-white px-4 shadow-sm transition-all duration-300",
          "focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100",
          error && "border-red-500 focus-within:ring-red-100"
        )}
      >
        {leftIcon && (
          <div className="mr-3 text-slate-400">
            {leftIcon}
          </div>
        )}

        <input
          className={clsx(
            "w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400",
            className
          )}
          {...props}
        />

        {rightIcon && (
          <div className="ml-3 text-slate-400">
            {rightIcon}
          </div>
        )}
      </div>

      {(error || helperText) && (
        <p
          className={clsx(
            "mt-2 text-sm",
            error ? "text-red-500" : "text-slate-500"
          )}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
};

export default Input;