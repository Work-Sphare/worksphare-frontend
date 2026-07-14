import { ChevronRight } from "lucide-react";

const FooterColumn = ({
  title,
  items,
  type = "links",
}) => {
  return (
    <div>
      {/* Heading */}

      <h3 className="mb-6 text-lg font-bold text-white">
        {title}
      </h3>

      <div className="space-y-4">

        {items.map((item, index) => {

          if (type === "links") {
            return (
              <a
                key={index}
                href={item.href}
                className="group flex items-center gap-2 text-slate-400 transition hover:text-white"
              >
                <ChevronRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />

                {item.title}
              </a>
            );
          }

          if (type === "services") {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-3 text-slate-400"
              >
                <Icon size={18} />

                {item.name}
              </div>
            );
          }

          if (type === "contact") {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-start gap-3 text-slate-400"
              >
                <Icon
                  size={18}
                  className="mt-1"
                />

                <span>{item.value}</span>
              </div>
            );
          }

          return null;
        })}

      </div>
    </div>
  );
};

export default FooterColumn;