import HeroContent from "./HeroContent";
import HeroAnimation from "./HeroAnimation";
import FloatingShapes from "./FloatingShapes";
import FloatingServiceIcons from "./FloatingServiceIcons";

const Hero = () => {
  return (
    <section id="hero" className="scroll-mt-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <FloatingServiceIcons />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center justify-between gap-20 px-6">
        <HeroContent />

        <HeroAnimation />
      </div>
    </section>
  );
};

export default Hero;
