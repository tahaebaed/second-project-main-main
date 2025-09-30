import React, { useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import AOS from 'aos';
import imgmap from '@/assets/world.png';
import 'aos/dist/aos.css';
import { useTheme } from "../hooks/useTheme";

const MapSection = () => {
  return (
    <div className="w-full py-10 md:py-20">
      <div
        className="w-full"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="w-full h-96">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.216393433767!2d-118.32622998478496!3d34.06208398060233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b92131b79f29%3A0xc0953a69a4c0222a!2s6801%20Hollywood%20Blvd%2C%20Los%20Angeles%2C%20CA%2090028!5e0!3m2!1sen!2seg!4v1633534800000!5m2!1sen!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const { isDark } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // ✅ ألوان الإدخال متغيرة حسب الثيم
  const inputStyle = isDark
    ? 'w-full p-4 bg-[#1A1B1D] border border-[#ffffff26] rounded-[10px] text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#96e343]/50'
    : 'w-full p-4 bg-[#f9f9f9] border border-gray-300 rounded-[10px] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#96e343]/50';

  return (
    <div className={isDark ? 'min-h-screen bg-black text-white flex flex-col items-center' : 'min-h-screen bg-white text-gray-900 flex flex-col items-center'}>
      <div className="w-full px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- الشريط الجانبي --- */}
          <div
            className={
              isDark
                ? 'lg:col-span-1 p-8 rounded-xl shadow-2xl relative overflow-hidden bg-[#111] text-center lg:text-left'
                : 'lg:col-span-1 p-8 rounded-xl shadow-xl relative overflow-hidden bg-gray-100 text-center lg:text-left'
            }
            data-aos="fade-right"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundImage: `url(${imgmap})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center center',
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `url(${imgmap})`,
                backgroundSize: '10px 10px',
              }}
            />
            <div className="relative z-10">
              <p className="text-[#96e343] text-3xl font-bold mb-8">
                +1 (555) 123-4567
              </p>

              <div className="mb-8">
                <h4 className={isDark ? "text-gray-300 font-semibold mb-2" : "text-gray-700 font-semibold mb-2"}>Address</h4>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                  6801 Hollywood Blvd, Los Angeles, CA 90028
                </p>
              </div>

              <div className="mb-10">
                <h4 className={isDark ? "text-gray-300 font-semibold mb-2" : "text-gray-700 font-semibold mb-2"}>Email</h4>
                <a
                  href="mailto:info@agenko45.com"
                  className={isDark ? "block text-gray-400 hover:text-[#96e343] transition-colors" : "block text-gray-600 hover:text-[#96e343] transition-colors"}
                >
                  Info@agenko45.com
                </a>
              </div>

              <div>
                <h4 className={isDark ? "text-gray-300 font-semibold mb-3" : "text-gray-700 font-semibold mb-3"}>Follow</h4>
                <div className="flex justify-center lg:justify-start space-x-3">
                  {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className={isDark ? "p-2 bg-white rounded-full text-black" : "p-2 bg-black rounded-full text-white"}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* --- نموذج التواصل --- */}
          <div
            className="lg:col-span-2 p-8 text-center lg:text-left"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span
              className={
                isDark
                  ? "inline-block px-4 py-1 text-[16px] border border-[#93e850] rounded-full text-white mb-4"
                  : "inline-block px-4 py-1 text-[16px] border border-[#93e850] rounded-full text-gray-900 mb-4"
              }
            >
Get In Touch
            </span>

            <h2 className="text-2xl sm:text-5xl font-extrabold mb-4 leading-tight">
              Get started and grow your{' '}
              <br className="hidden sm:inline" /> business now.
            </h2>
            <p className={isDark ? "text-gray-400 text-[18px] mb-8" : "text-gray-600 text-[18px] mb-8"}>
              Start today to unlock opportunities and drive your business toward
              success.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className={inputStyle} />
                <input type="email" placeholder="Email" className={inputStyle} />
              </div>

              <input type="text" placeholder="Subject" className={inputStyle} />
              <textarea placeholder="Message" rows="6" className={inputStyle}></textarea>

              <div className="flex justify-center lg:justify-start">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#96e343] text-black font-bold py-4 px-8 rounded-lg shadow-xl hover:bg-[#85c83d] transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <MapSection />
    </div>
  );
};

export default ContactSection;
