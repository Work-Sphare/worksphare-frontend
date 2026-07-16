import navigation from "../../constants/navigation";
import useActiveSection from "../../hooks/useActiveSection";

const DesktopMenu = () => {
  const activeSection = useActiveSection(navigation.map((item) => item.target));
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
    <nav className="hidden items-center gap-5 xl:gap-8 lg:flex">
      {navigation.map((item) => (
        <button
          key={item.title}
          onClick={() => scrollToSection(item.target)}
          className={`relative px-3 py-2 rounded-full font-medium transition-all duration-300 hover:cursor-pointer
                  ${activeSection === item.target? "bg-blue-50 text-blue-600": "text-slate-700 hover:text-blue-600"}`}
        >
          {item.title}
          {activeSection === item.target && (
    <span
      className="absolute left-3 right-3-bottom-1 h-[3px] rounded-full bg-blue-600"
    />
  )}
        </button>
      ))}
    </nav>
  );
};

export default DesktopMenu;
