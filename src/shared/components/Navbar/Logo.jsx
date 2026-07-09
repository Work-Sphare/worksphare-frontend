const Logo = () => {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <div className="h-10 w-10 rounded-xl bg-blue-600"></div>

      <div>
        <h1 className="text-2xl font-extrabold">
          <span className="text-blue-700">Works</span>
          <span className="text-orange-500">phare</span>
        </h1>

        <p className="text-xs text-gray-500">
          Connecting Skills • Building Trust
        </p>
      </div>
    </div>
  );
};

export default Logo;