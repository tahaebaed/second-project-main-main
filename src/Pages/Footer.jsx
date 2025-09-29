import React, { useEffect } from "react";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
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
      <footer className="bg-gray-100 dark:bg-[#18191b] text-gray-900 dark:text-white relative overflow-hidden py-16 transition-colors duration-300">
        {/* Decorative Spiral Left */}

        <div className="absolute -top-1/5 -left-1/4 z-0">
          <span className="block w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[760px] lg:h-[760px] rounded-full bg-[#9cfe4f99] hero-blur"></span>
        </div>
        <div className="absolute -top-1/5 -right-1/5 z-0">
          <span className="block w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[660px] lg:h-[660px] rounded-full bg-[#8778F5] hero-blur"></span>
        </div>
        <div className="absolute left-0 top-24 rotating-element transition-all duration-1000 opacity-100 scale-100">
          <img src="@/assets/element1.png" alt="" />
        </div>

        {/* Decorative Spiral Right */}
        <img
          className="absolute right-28 top-1/2 rotating-element transition-all duration-1000 opacity-100 scale-100"
          src="@/assets/element2.png"
          alt=""
        />

        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div data-aos="fade-up" className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-800 dark:bg-white rounded-lg flex items-center justify-center transition-colors duration-300">
                  <span className="text-white dark:text-black font-bold text-xl">
                    A
                  </span>
                </div>
                <span className="text-2xl font-bold">Agenko</span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                Agenko creative digital agency delivering innovate web
                Development marketing.
              </p>

              {/* Subscribe Form */}
              <div className="flex gap-2">
                <div className="flex-1 bg-white dark:bg-gray-800 text-gray-400 rounded-full px-4 py-3 flex items-center gap-2 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-transparent border-none outline-none text-sm text-gray-900 dark:text-white w-full placeholder-gray-400"
                  />
                </div>
                <button className="bg-[#9CFE4F] text-black font-semibold px-6 py-3 rounded-full transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Main Address */}
            <div data-aos="fade-up" data-aos-delay="100" className="space-y-4">
              <h3 className="text-xl font-bold mb-6">Main Address</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                6801 Hollywood Blvd, Los Angeles, CA 90028
              </p>

              <div className="pt-4">
                <h4 className="text-lg font-semibold mb-3">Sub-Address</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                  200 Santa Monica Pier, Santa Monica, CA 90401
                </p>
              </div>
            </div>

            {/* Our Link */}
            <div data-aos="fade-up" data-aos-delay="200" className="space-y-4">
              <h3 className="text-xl font-bold mb-6">Our Link</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#9CFE4F] transition-colors text-sm"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#9CFE4F] transition-colors text-sm"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#9CFE4F] transition-colors text-sm"
                  >
                    Our Project
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#9CFE4F] transition-colors text-sm"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#9CFE4F] transition-colors text-sm"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div data-aos="fade-up" data-aos-delay="300" className="space-y-6">
              <h3 className="text-xl font-bold mb-6">Contact</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#ffffff1a]  rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#9CFE4F]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1">Email</p>
                    <a
                      href="mailto:info@agenko.com"
                      className="text-gray-600 dark:text-gray-300 text-sm hover:text-[#9CFE4F] transition-colors"
                    >
                      info@agenko.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#ffffff1a] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#9CFE4F]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1">Phone</p>
                    <a
                      href="tel:+15557659854"
                      className="text-gray-600 dark:text-gray-300 text-sm hover:text-[#9CFE4F] transition-colors"
                    >
                      +555-7659-9854
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#313131] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
              © 2025{" "}
              <span className="text-[#9CFE4F] font-semibold">Agenko</span> - All
              Rights Reserved.
            </p>

            <div className="flex gap-8">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-[#9CFE4F] text-sm transition-colors"
              >
                Terms & Condition
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-[#9CFE4F] text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-[#9CFE4F] text-sm transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
