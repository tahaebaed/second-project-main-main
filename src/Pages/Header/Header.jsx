import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navItems = ['Home', 'Pages', 'Portfolio', 'Blog', 'Contact'];

  return (
    <div
      className={`transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-transparent'
      }`}
    >
      <header className="px-6 py-4 fixed top-0 left-0 w-full z-50">
        <nav className="max-w-7xl mx-auto flex items-center justify-between bg-black/30 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">A</span>
            </div>
            <span className="text-white font-semibold text-xl">Agenko</span>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item}
                className="px-4 py-2 text-white hover:text-green-400 transition-colors rounded-full hover:bg-white/5"
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
              className="bg-black/30 backdrop-blur-sm p-3 rounded-full border border-white/10 text-white hover:bg-white/10 transition-all hover:scale-110"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* CTA Button */}
             {/* Button */}
              <div className="text-center lg:text-left" data-aos="fade-up" data-aos-delay="500">
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
