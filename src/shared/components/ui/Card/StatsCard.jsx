import Card from "./Card";

const StatsCard = ({
  title,
  value,
  icon,
  color = "text-blue-600",
}) => {
  return (
    <Card className="flex items-center gap-4">
      <div className="rounded-2xl bg-slate-100 p-4">
        {icon}
      </div>

      <div>
        <h3 className={`text-3xl font-bold ${color}`}>
          {value}
        </h3>

        <p className="text-slate-500">
          {title}
        </p>
      </div>
    </Card>
  );
};

export default StatsCard;