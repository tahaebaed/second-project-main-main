import React, { useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import AOS from "aos";
import "aos/dist/aos.css";
import awardimg from "@/assets/award1 (1).jpg";

const Award = () => {
  const { isDark } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 800, // مدة الحركة
      easing: "ease-in-out", // نعومة الحركة
      once: true, // تشغيل مرة واحدة فقط
    });
  }, []);

  const awards = [
    { id: 1, platform: "Microsoft Platform", award: "Website 2024 - 1st Winner", date: "Mar 2024" },
    { id: 2, platform: "LinkedIn Platform", award: "Mobile App Winner", date: "Apr 2024" },
    { id: 3, platform: "Adobe Platform", award: "Digital Vanguard - 1st Winner", date: "May 2024" },
    { id: 4, platform: "Fiverr Platform", award: "Winner Innova excel Award", date: "Jul 2024" },
    { id: 5, platform: "Upwork Platform", award: "Top Rated Winner Award", date: "Aug 2024" },
    { id: 6, platform: "Upwork Platform", award: "Top Rated Winner Award", date: "Aug 2024" },
  ];

  return (
    <section
      data-theme={isDark ? "dark" : "light"}
      className={`py-10 md:py-20 px-4 sm:px-6 lg:px-8 min-h-screen transition-colors duration-300 ${
        isDark ? "bg-[#0e0f11]" : "bg-[#cfcaca9c]"
      }`}
    >
      <style jsx>{`
        :root {
          --box-bg: #f9fafb;
        }
        [data-theme="dark"] {
          --box-bg: #18191b;
        }
        .award-box {
          background-color: var(--box-bg);
          padding: 1rem;
          border-radius: 0.5rem;
          transition: transform 0.3s ease;
        }
        .award-box:hover {
          transform: translateY(-4px);
        }
      `}</style>

      <div className="max-w-7xl mx-auto text-center md:text-left">
        {/* ===== العنوان ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          <div data-aos="fade-up">
            <h2
              className={`text-4xl sm:text-5xl font-bold leading-tight mt-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Striving for Excellence Awards & Recognition
            </h2>
          </div>

          <div data-aos="fade-up" data-aos-delay="150" className="w-full md:w-[330px] lg:ml-auto">
            <p
              className={`text-lg leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              We are a{" "}
              <span className={isDark ? "text-white font-semibold" : "text-black font-semibold"}>
                digital Creative agency
              </span>{" "}
              with 25 years of experience, specializing in delivering cutting-edge
            </p>
          </div>
        </div>

        {/* ===== المحتوى ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* الصورة */}
          <div className="lg:col-span-4" data-aos="zoom-in">
            <img
              src={awardimg}
              alt="Award"
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          {/* قائمة الجوائز */}
          <div className="lg:col-span-8">
            {awards.map((award, index) => (
              <div
                key={award.id}
                className="award-box mb-5 py-6 px-4"
                data-aos="fade-up"
                data-aos-delay={index * 100} // تأخير متدرج
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <h5
                    className={`font-bold text-md ${isDark ? "text-gray-400" : "text-gray-600"}`}
                  >
                    {award.platform}
                  </h5>
                  <h5
                    className={`font-bold text-lg ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {award.award}
                  </h5>
                  <h5
                    className={`font-bold text-md md:text-right ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {award.date}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Award;
