import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();

  const navItems = ["Home", "Pages", "Portfolio", "Blog", "Contact"];

  return (
    <div className="transition-colors duration-300">
      <header className="px-6 py-4 fixed top-0 left-0 w-full z-50">
        <nav
          className={
            isDark
              ? "sticky top-0 max-w-7xl mx-auto flex items-center justify-between bg-black/30 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200/20 transition-colors duration-300"
              : "sticky top-0 max-w-7xl mx-auto flex items-center justify-between bg-gray-200 backdrop-blur-md px-6 py-3 rounded-full border border-black/20  transition-colors duration-300"
          }
        >
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div
              className={
                isDark
                  ? "w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-300"
                  : "w-8 h-8  bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-300"
              }
            >
              <span className={" text-white font-bold text-xl"}>A</span>
            </div>
            <span
              className={
                isDark
                  ? "text-white font-semibold text-xl transition-colors duration-300"
                  : "text-black font-semibold text-xl transition-colors duration-300"
              }
            >
              Agenko
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item}
                className={
                  isDark
                    ? "px-4 py-2 text-white hover:text-green-500 dark:hover:text-green-400 transition-colors rounded-full hover:bg-gray-100/50 dark:hover:bg-white/5"
                    : "px-4 py-2 text-gray-700 hover:text-green-500 dark:hover:text-green-400 transition-colors rounded-full hover:bg-gray-100/50 dark:hover:bg-white/5"
                }
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right Section - Dark Mode & CTA */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className={
                isDark
                  ? "bg-black/30 backdrop-blur-sm p-3 rounded-full border border-white/10 text-white hover:bg-white/10 transition-all hover:scale-110"
                  : "bg-gray-200/50 dark:bg-black/30 backdrop-blur-sm p-3 rounded-full border   border-gray-500/20  text-gray-700  hover:bg-gray-300/50 transition-all hover:scale-110"
              }
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* CTA Button */}
            {/* Button */}
            <div
              className="text-center lg:text-left"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <button className="theme-btn">
                <span className="text-flip">
                  <span className="text">LETS TALKLETS </span>
                  <span className="text">LETS TALKLETS </span>
                </span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
