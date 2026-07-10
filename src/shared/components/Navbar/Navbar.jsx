import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-md"
            : "bg-white"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Logo />

          <DesktopMenu />

          <div className="hidden lg:flex items-center gap-4">
            <button className="rounded-lg px-5 py-2 font-medium text-slate-700 hover:bg-slate-100 transition">
              Login
            </button>

            <button className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700 transition">
              Register
            </button>
          </div>

          <button className="lg:hidden">
            <Menu size={30} />
          </button>
        </div>
      </header>

      <MobileMenu />
    </>
  );
};

export default Navbar;