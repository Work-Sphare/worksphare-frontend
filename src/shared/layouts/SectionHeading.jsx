import { HEADING } from "../constants/layout";

const SectionHeading = ({
  badge,
  title,
  description,
}) => {
  return (
    <div className="mb-16 text-center">

      {badge && (
        <span className={HEADING.badge}>
          {badge}
        </span>
      )}

      <h2 className={HEADING.title}>
        {title}
      </h2>

      {description && (
        <p className={HEADING.description}>
          {description}
        </p>
      )}

    </div>
  );
};

export default SectionHeading;