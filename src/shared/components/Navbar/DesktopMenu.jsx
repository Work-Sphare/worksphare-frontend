import navigation from "../../constants/navigation";

const DesktopMenu = () => {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navigation.map((item) => (
        <a
          key={item.title}
          href={item.path}
          className="font-medium text-slate-700 transition hover:text-blue-600"
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
};

export default DesktopMenu;