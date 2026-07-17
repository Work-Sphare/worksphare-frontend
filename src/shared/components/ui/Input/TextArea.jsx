const TextArea = ({
  label,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          {label}
        </label>
      )}

      <textarea
        className={`min-h-32 w-full rounded-2xl border border-slate-200 p-4 outline-none transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-100 ${className}`}
        {...props}
      />
    </div>
  );
};

export default TextArea;