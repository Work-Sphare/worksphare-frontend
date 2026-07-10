import logo from "../../../assets/logos/workspare-icon.png";

const Logo = () => {
  return (
    <div className="flex cursor-pointer items-center gap-3">
      <img
        src={logo}
        alt="WorkSphare Logo"
        className="h-14 w-14 object-contain"
      />

      <div>
        <h1 className="text-3xl font-extrabold leading-none">
          <span className="text-blue-700">Works</span>
          <span className="text-orange-500">phare</span>
        </h1>

        <p className="mt-1 text-xs text-slate-500">
          Connecting Skills • Building Trust
        </p>
      </div>
    </div>
  );
};

export default Logo;