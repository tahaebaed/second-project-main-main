import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "Pages", "Portfolio", "Blog", "Contact"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll("[data-aos]");

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
          element.classList.add("aos-animate");
        } else {
          element.classList.remove("aos-animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        [data-aos] {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        [data-aos].aos-animate {
          opacity: 1;
          transform: translateY(0);
        }
        
        [data-aos][data-aos-delay="500"].aos-animate {
          transition-delay: 0.5s;
        }
        
        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInStagger {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .menu-sidebar {
          animation: slideInFromRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .menu-overlay {
          animation: fadeInScale 0.3s ease-out forwards;
        }
        
        .menu-item {
          opacity: 0;
          animation: slideInStagger 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .menu-item:nth-child(1) { animation-delay: 0.1s; }
        .menu-item:nth-child(2) { animation-delay: 0.15s; }
        .menu-item:nth-child(3) { animation-delay: 0.2s; }
        .menu-item:nth-child(4) { animation-delay: 0.25s; }
        .menu-item:nth-child(5) { animation-delay: 0.3s; }
      `}</style>
      
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

            {/* Navigation - Desktop */}
            <div className="hidden lg:flex items-center space-x-1">
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

              {/* CTA Button - Desktop */}
              <div
                className="hidden lg:block text-center lg:text-left"
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

              {/* Hamburger Menu - Mobile */}
              <button
                onClick={toggleMenu}
                className={`lg:hidden p-3 rounded-full transition-all hover:scale-110 ${
                  isDark
                    ? "bg-black/30 border border-white/10 text-white hover:bg-white/10"
                    : "bg-gray-200/50 border border-gray-500/20 text-gray-700 hover:bg-gray-300/50"
                }`}
                aria-label="Toggle menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </nav>
        </header>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden menu-overlay"
            onClick={toggleMenu}
          />
        )}

        {/* Mobile Menu Sidebar */}
        {isMenuOpen && (
          <div
            className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 lg:hidden menu-sidebar shadow-2xl ${
              isDark
                ? "bg-gradient-to-b from-[#2a2d2f] to-[#1a1d1f] border-l border-gray-700/50"
                : "bg-gradient-to-b from-white to-gray-50 border-l border-gray-200"
            }`}
          >
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className={`flex items-center justify-between p-6 border-b ${
                isDark ? "border-gray-700/50" : "border-gray-200"
              }`}>
                <div className="flex items-center space-x-2">
                  <div
                    className={
                      isDark
                        ? "w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg"
                        : "w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg"
                    }
                  >
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                  <span
                    className={
                      isDark
                        ? "text-white font-semibold text-xl"
                        : "text-black font-semibold text-xl"
                    }
                  >
                    Agenko
                  </span>
                </div>
                <button
                  onClick={toggleMenu}
                  className={`p-2.5 rounded-full transition-all hover:rotate-90 duration-300 ${
                    isDark
                      ? "hover:bg-white/10 text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto py-8">
                <nav className="flex flex-col space-y-1 px-4">
                  {navItems.map((item, index) => (
                    <button
                      key={item}
                      onClick={toggleMenu}
                      className={`menu-item text-left px-6 py-4 rounded-2xl transition-all transform hover:scale-105 hover:translate-x-2 ${
                        isDark
                          ? "text-white hover:bg-gradient-to-r hover:from-[#9CFE4F]/10 hover:to-transparent hover:text-[#9CFE4F] hover:shadow-lg"
                          : "text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-transparent hover:text-green-600 hover:shadow-md"
                      }`}
                    >
                      <span className="text-lg font-medium">{item}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Menu Footer */}
              <div className={`p-6 border-t ${
                isDark ? "border-gray-700/50" : "border-gray-200"
              }`} style={{ animation: "slideInStagger 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.35s forwards", opacity: 0 }}>
                <button
                  onClick={toggleMenu}
                  className="theme-btn w-full"
                >
                  <span className="text-flip">
                    <span className="text">LETS TALK</span>
                    <span className="text">LETS TALK</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}