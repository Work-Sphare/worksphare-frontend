import HeroContent from "./HeroContent";
import HeroAnimation from "./HeroAnimation";
import FloatingShapes from "./FloatingShapes";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">

      <FloatingShapes />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">

        <div className="grid w-full gap-12 lg:grid-cols-2">

          <HeroContent />

          <HeroAnimation />

        </div>

      </div>

    </section>
  );
};

export default Hero;