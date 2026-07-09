import navigation from "../../hooks/constants/navigation";
import Logo from "./Logo";
import { Menu } from "lucide-react";
import React from 'react'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Logo />

        <nav className="hidden lg:flex gap-8">
          {navigation.map((item) => (
            <a
              key={item.title}
              href={item.path}
              className="font-medium text-gray-700 transition hover:text-blue-600"
            >
              {item.title}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button className="font-medium text-gray-700 hover:text-blue-600">
            Login
          </button>

          <button className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
            Register
          </button>
        </div>

        <button className="lg:hidden">
          <Menu size={30} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;