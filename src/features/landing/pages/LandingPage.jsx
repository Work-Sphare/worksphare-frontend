import Navbar from "../../../shared/components/Navbar/Navbar";
import BecomeWorker from "../components/BecomeWorker/BecomeWorker";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Services from "../components/Services/Services";
import WhyChoose from "../components/WhyChoose/WhyChoose";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <BecomeWorker />
      <WhyChoose />
    </>
  );
};

export default LandingPage;