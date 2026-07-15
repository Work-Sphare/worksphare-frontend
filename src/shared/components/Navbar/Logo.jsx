import logo from "../../../assets/logos/workspare-icon.png";

const Logo = () => {
  return (
    <button type="button" aria-label="Go to Home" className="flex items-center gap-2 lg:gap-3">
      <img
        src={logo}
        alt="WorkSphare Logo"
        className="h-9 w-9 sm:h-11 sm:w-11 lg:h-14 lg:w-14 object-contain"
      />

      <div>
        <h1 className="font-extrabold leading-none text-2xl sm:text-3xl lg:text-4xl">
          <span className="text-blue-700">Work</span>
          <span className="text-orange-500">sphare</span>
        </h1>

        <p className="mt-1 hidden md:block text-xs text-slate-500">
          Connecting Skills • Building Trust
        </p>
      </div>
    </button>
  );
};

export default Logo;