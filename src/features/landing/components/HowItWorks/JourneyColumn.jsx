import TimelineStep from "./TimelineStep";

const JourneyColumn = ({
  title,
  emoji,
  steps,
}) => {
  return (
    <div className="min-w-0">

      <div className="mb-8 flex items-center justify-center gap-3 xl:justify-start">

        <span className="text-4xl">
          {emoji}
        </span>

        <h2 className="text-center text-2xl font-bold text-slate-800 sm:text-3xl xl:text-left">
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