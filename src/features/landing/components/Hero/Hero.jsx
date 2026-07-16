import HeroContent from "./HeroContent";
import HeroAnimation from "./HeroAnimation";
import FloatingShapes from "./FloatingShapes";
import FloatingServiceIcons from "./FloatingServiceIcons";

const Hero = () => {
  return (
   <section id="hero" className="relative overflow-hidden scroll-mt-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <FloatingServiceIcons />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl flex-col items-center gap-10 px-5 py-10 sm:px-6 md:py-16 lg:min-h-[90vh] lg:flex-row lg:gap-16 lg:px-8 xl:gap-20">
        <HeroContent />

        <HeroAnimation />
      </div>
    </section>
  );
};

export default Hero;
