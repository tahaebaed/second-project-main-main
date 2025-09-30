import React, { useState, useEffect } from "react";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && darkModeMediaQuery.matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
    
    const handleThemeChange = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };
    
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);
  
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
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .rotating-element {
          animation: rotate 20s linear infinite;
        }
        
        .hero-blur {
          filter: blur(100px);
        }
        
        [data-aos] {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        [data-aos].aos-animate {
          opacity: 1;
          transform: translateY(0);
        }
        
        [data-aos][data-aos-delay="100"].aos-animate {
          transition-delay: 0.1s;
        }
        
        [data-aos][data-aos-delay="200"].aos-animate {
          transition-delay: 0.2s;
        }
        
        [data-aos][data-aos-delay="300"].aos-animate {
          transition-delay: 0.3s;
        }
      `}</style>
      
      <footer className={isDark 
        ? "bg-[#18191b] text-white relative overflow-hidden py-16 transition-colors duration-300"
        : "bg-[#cfcaca9c] text-gray-900 relative overflow-hidden py-16 transition-colors duration-300"
      }>
        {/* Decorative Spiral Left */}
   {/* Decorative Spiral Left */}
<div className="absolute -top-6 -left-6 z-0 rotate-[-12deg]">
  <span className="block w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] lg:w-[200px] lg:h-[200px] rounded-full bg-[#9cfe4f80] hero-blur"></span>
</div>

{/* Decorative Spiral Right */}
<div className="absolute -bottom-8 -right-8 z-0 rotate-[12deg]">
  <span className="block w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] lg:w-[200px] lg:h-[200px] rounded-full bg-[#8778f580] hero-blur"></span>
</div>

        {/* Rotating Elements */}
        <div className="absolute left-0 top-24 rotating-element transition-all duration-1000 opacity-100 scale-100">
          <img src="/src/assets/element1.png" alt="" className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48" />
        </div>

        <img
          className="absolute right-28 top-1/2 rotating-element transition-all duration-1000 opacity-100 scale-100 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
          src="/src/assets/element2.png"
          alt=""
        />

        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div data-aos="fade-up" className="space-y-6">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                  isDark ? 'bg-white' : 'bg-gray-800'
                }`}>
                  <span className={`font-bold text-xl ${isDark ? 'text-black' : 'text-white'}`}>
                    A
                  </span>
                </div>
                <span className="text-2xl font-bold">Agenko</span>
              </div>

              <p className={`text-[15px] leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Agenko creative digital agency delivering innovate web
                Development marketing.
              </p>

              {/* Subscribe Form */}
              <div className="flex gap-2">
                <div className={`flex-1 rounded-full px-5 py-3.5 flex items-center gap-3 transition-colors duration-300 ${
                  isDark ? 'bg-[#3a3d3f]' : 'bg-white'
                }`}>
                  <Mail className="w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className={`bg-transparent border-none outline-none text-[15px] w-full placeholder-gray-500 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  />
                </div>
                <button className="bg-[#9CFE4F] hover:bg-[#8ee03f] text-black font-semibold px-6 py-3.5 rounded-full transition-all duration-300 whitespace-nowrap text-[15px]">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Main Address */}
            <div data-aos="fade-up" data-aos-delay="100" className="space-y-5">
              <h3 className="text-xl font-bold mb-6">Main Address</h3>
              <p className={`text-[15px] leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                6801 Hollywood Blvd, Los Angeles, CA 90028
              </p>

              <div className="pt-4">
                <h4 className="text-[17px] font-semibold mb-3">Sub-Address</h4>
                <p className={`text-[15px] leading-relaxed transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  200 Santa Monica Pier, Santa Monica, CA 90401
                </p>
              </div>
            </div>

            {/* Our Link */}
            <div data-aos="fade-up" data-aos-delay="200" className="space-y-4">
              <h3 className="text-xl font-bold mb-6">Our Link</h3>
              <ul className="space-y-3.5">
                {['About us', 'Services', 'Our Project', 'FAQ', 'Contact us'].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className={`text-[15px] hover:text-[#9CFE4F] transition-colors ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div data-aos="fade-up" data-aos-delay="300" className="space-y-6">
              <h3 className="text-xl font-bold mb-6">Contact</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    isDark ? 'bg-[#3a3d3f]' : 'bg-gray-200'
                  }`}>
                    <Mail className="w-5 h-5 text-[#9CFE4F]" />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold mb-1.5">Email</p>
                    <a
                      href="mailto:info@agenko.com"
                      className={`text-[15px] hover:text-[#9CFE4F] transition-colors ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      info@agenko.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    isDark ? 'bg-[#3a3d3f]' : 'bg-gray-200'
                  }`}>
                    <Phone className="w-5 h-5 text-[#9CFE4F]" />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold mb-1.5">Phone</p>
                    <a
                      href="tel:+15557659854"
                      className={`text-[15px] hover:text-[#9CFE4F] transition-colors ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      +555-7659-9854
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={`border-t mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-300 ${
            isDark ? 'border-[#3f4244]' : 'border-gray-300'
          }`}>
            <p className={`text-[15px] transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              © 2025{" "}
              <span className="text-[#9CFE4F] font-semibold">Agenko</span> - All
              Rights Reserved.
            </p>

            <div className="flex gap-8">
              {['Terms & Condition', 'Privacy Policy', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`text-[15px] hover:text-[#9CFE4F] transition-colors ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;