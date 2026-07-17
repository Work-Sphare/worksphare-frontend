import AnimatedGradient from "../../../../shared/components/backgrounds/AnimatedGradient";
import FloatingBlobs from "../../../../shared/components/backgrounds/FloatingBlobs";
import GridPattern from "../../../../shared/components/backgrounds/GridPattern";

const AuthBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <GridPattern />
      <AnimatedGradient />
      <FloatingBlobs />
    </div>
  );
};

export default AuthBackground;