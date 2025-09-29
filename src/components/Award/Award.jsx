import React, { useEffect } from "react";
import { useTheme } from "../../hooks/useTheme"; // تأكد من مسار الهوك الصحيح

const Award = () => {
  const { isDark } = useTheme();

  useEffect(() => {
    // تحريك العناصر تدريجيًا
    const elements = document.querySelectorAll(".pf_fadeup");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("animate");
      }, index * 200);
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
    <>
      <style jsx>{`
        .pf_fadeup {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-in-out;
        }
        .pf_fadeup.animate {
          opacity: 1;
          transform: translateY(0);
        }
        .agenko-award-box {
          border-bottom: 1px solid #e5e7eb;
          background-color: var(--box-bg);
          padding-left: 1rem;
          transition: all 0.3s ease;
          border-radius: 0.5rem;
        }
        :root {
          --box-bg: #f9fafb; /* Light mode */
        }
        [data-theme="dark"] {
          --box-bg: #18191b; /* Dark mode */
        }
      `}</style>

      <section
        className={
          isDark
            ? "bg-[#0e0f11] py-16 px-4 sm:px-6 lg:px-8 min-h-screen transition-colors duration-300"
            : "bg-[#cfcaca9c] py-16 px-4 sm:px-6 lg:px-8 min-h-screen transition-colors duration-300"
        }
        data-theme={isDark ? "dark" : "light"}
      >
        <div className="max-w-7xl mx-auto">
          {/* ======= العنوان ======= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
            <div className="pf_fadeup">
              <h2
                className={`text-4xl sm:text-5xl font-bold leading-tight mt-4 
                ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Striving for Excellence Awards & Recognition
              </h2>
            </div>

            <div className="pf_fadeup w-[330px] lg:ml-auto">
              <p
                className={`text-lg leading-relaxed 
                ${isDark ? "text-gray-300" : "text-gray-700"}`}
              >
                We are a{" "}
                <span className={isDark ? "text-white font-semibold" : "text-black font-semibold"}>
                  digital Creative agency
                </span>{" "}
                with 25 years of experience, specializing in delivering cutting-edge
              </p>
            </div>
          </div>

          {/* ======= المحتوى ======= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* الصورة */}
            <div className="lg:col-span-4 pf_fadeup">
              <img
                src="./src/assets/award1 (1).jpg"
                alt="Award"
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* قائمة الجوائز */}
            <div className="lg:col-span-8">
              {awards.map((award, index) => (
                <div
                  key={award.id}
                  className="agenko-award-box mb-5 py-6 px-4 pf_fadeup"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <h5
                      className={`font-bold text-md 
                      ${isDark ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {award.platform}
                    </h5>
                    <h5
                      className={`font-bold text-lg 
                      ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      {award.award}
                    </h5>
                    <h5
                      className={`font-bold text-md md:text-right
                      ${isDark ? "text-gray-400" : "text-gray-600"}`}
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
    </>
  );
};

export default Award;
