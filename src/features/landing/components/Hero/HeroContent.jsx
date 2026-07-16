import AnimatedProfession from "./AnimatedProfession";
import SearchBox from "./SearchBox";
import Stats from "./Stats";

const HeroContent = () => {
  return (
    <div className="max-w-2xl text-center lg:text-left">
      <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        🇮🇳 Trusted Across India
      </span>
      <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
        Find Trusted
      </h1>

      <AnimatedProfession />

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
        Near You
      </h1>
      <SearchBox />

      <Stats />
    </div>
  );
};

export default HeroContent;
