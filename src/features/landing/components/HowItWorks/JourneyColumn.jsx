import TimelineStep from "./TimelineStep";

const JourneyColumn = ({
  title,
  emoji,
  steps,
}) => {
  return (
    <div>

      <div className="mb-10 flex items-center gap-3">

        <span className="text-4xl">
          {emoji}
        </span>

        <h2 className="text-3xl font-bold text-slate-800">
          {title}
        </h2>

      </div>

      {steps.map((step, index) => (
        <TimelineStep
          key={step.step}
          item={step}
          isLast={index === steps.length - 1}
        />
      ))}

    </div>
  );
};

export default JourneyColumn;