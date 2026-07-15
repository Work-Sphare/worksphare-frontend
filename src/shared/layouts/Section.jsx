import { SECTION } from "../constants/layout";

const Section = ({
  id,
  className = "",
  children,
}) => {
  return (
    <section
      id={id}
      className={`${SECTION.section} ${className}`}
    >
      <div className={SECTION.container}>
        {children}
      </div>
    </section>
  );
};

export default Section;