import BackgroundBlobs from "./BackgroundBlobs";
import BackgroundDots from "./BackgroundDots";
import BackgroundGrid from "./BackgroundGrid";

const SectionBackground = ({ variant = "dots" }) => {
  switch (variant) {
    case "blobs":
      return <BackgroundBlobs />;

    case "grid":
      return <BackgroundGrid />;

    default:
      return <BackgroundDots />;
  }
};

export default SectionBackground;