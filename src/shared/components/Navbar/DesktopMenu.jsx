import navigation from "../../constants/navigation";

const DesktopMenu = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => (
        <button
          key={item.title}
          onClick={() => scrollToSection(item.target)}
          className="font-medium text-slate-700 transition hover:text-blue-600 hover:cursor-pointer"
        >
          {item.title}
        </button>
      ))}
    </nav>
  );
};

export default DesktopMenu;