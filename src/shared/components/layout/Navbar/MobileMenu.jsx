import navigation from "../../../constants/navigation"
import { X } from "lucide-react";

const MobileMenu = ({ isOpen, onClose }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });

      onClose();
    }
  };

  return (
    <>
      {/* Overlay */}

      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}

      <aside
        aria-label="Mobile Navigation"
        className={`fixed top-0 right-0 z-50 h-screen w-[85%] max-w-[320px] bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-5">

          <h2 className="text-xl font-bold text-slate-900">
            Menu
          </h2>

          <button
            onClick={onClose}
            aria-label="Close Menu"
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X />
          </button>

        </div>

        <nav className="flex flex-col p-5">

          {navigation.map((item) => (
            <button
              key={item.title}
              onClick={() => scrollToSection(item.target)}
              className="rounded-lg px-4 py-3 text-left font-medium hover:bg-blue-50 hover:text-blue-600"
            >
              {item.title}
            </button>
          ))}

          <div className="mt-8 pt-6 flex flex-col gap-3">

            <button className="rounded-xl border py-3 font-semibold">
              Login
            </button>

            <button className="rounded-xl bg-blue-600 py-3 font-semibold text-white">
              Register
            </button>

          </div>

        </nav>

      </aside>
    </>
  );
};

export default MobileMenu;