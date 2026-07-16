import Navbar from "../../../shared/components/layout/Navbar/Navbar";
import BecomeWorker from "../components/BecomeWorker/BecomeWorker";
import DownloadApp from "../components/DownloadApp/DownloadApp";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
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
      <Testimonials />
      <DownloadApp />
     <Footer/>
    </>
  );
};

export default LandingPage;