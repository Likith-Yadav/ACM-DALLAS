import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import chapterLogo from "/acm-dallas.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "about", path: "/about" },
    { name: "officers", path: "/officers" },
    { name: "apply", path: "/apply" },
    { name: "events", path: "/events" },
    { name: "connect", path: "/connect" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center py-4">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between h-20 px-8">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="w-58 h-16 rounded-2xl overflow-hidden group-hover:border-white/50 transition-all duration-300 shadow-lg">
                <img
                  src={chapterLogo}
                  alt="ACM Dallas Chapter Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? "bg-white/20 text-white shadow-lg"
                      : "text-white/80 hover:text-white hover:bg-white/10 hover:shadow-md"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white/80 hover:text-white p-3 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden border-t border-white/20 mx-8">
              <div className="px-2 pt-3 pb-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-3 rounded-xl text-sm transition-all duration-300 ${
                      location.pathname === item.path
                        ? "bg-white/20 text-white"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
