import React, { useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import AOS from "aos";
import "aos/dist/aos.css";
import imgworkone from '@/assets/project3.webp'
import imgworktwo from '@/assets/project2 (1).webp'
import imgworkthree from '@/assets/project1.webp'


export default function Projects() {
  const { isDark } = useTheme();

  // ✅ تهيئة AOS للأنيميشن
  useEffect(() => {
    AOS.init({
      duration: 800, // سرعة الحركة
      easing: "ease-in-out", // نوع الحركة
      once: true, // تشغيل مرة واحدة فقط
      offset: 100,
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Banking & Financial Mobile Apps",
      description:
        "We develop secure, user-friendly banking apps, streamlining financial services",
      categories: ["Website", "Landing Page", "UI/UX"],
      image: "./src/assets/project1.webp",
    },
    {
      id: 2,
      title: "Knead That Dough Brand Identity",
      description:
        "Crafting a fresh, vibrant brand identity for Knead That Dough.",
      categories: ["Website", "Landing Page", "UI/UX"],
      image: {imgworkthree}, 
    },
    {
      id: 3,
      title: "Software Agency Website Header",
      description:
        "Building innovative software solutions to drive your business forward.",
      categories: ["Website", "Landing Page", "UI/UX"],
      image: {imgworktwo}
    },
    {
      id: 4,
      title: "Crypto Tap Wallet Mobile Apps",
      description:
        "Secure, fast, and user-friendly crypto wallet for seamless.",
      categories: ["Website", "Landing Page", "UI/UX"],
      image:{imgworkone}, // صورة جديدة أو إعادة تسمية
    },
  ];

  // ✅ مكون بطاقة المشروع
  const ProjectCard = ({ project, delay, imageHeight }) => (
    <div
      className="project-item group"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="relative overflow-hidden rounded-2xl mb-6">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className={`w-full ${imageHeight} object-cover project-image`}
        />
        <div className="absolute inset-0 bg-black/25 flex items-center justify-center project-overlay">
          <div className="project-categories flex space-x-2">
            {project.categories.map((category, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                  isDark ? "bg-white text-black" : "bg-black text-white"
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
      <h4
        className={`
          text-2xl font-bold mb-3 hover:text-[#9CFE4F] transition-colors duration-300
          ${isDark ? "text-white" : "text-gray-900"}
        `}
      >
        {project.title}
      </h4>
      <p
        className={`
          text-gray-600 transition-colors duration-300
          ${isDark ? "dark:text-gray-400" : ""}
        `}
      >
        {project.description}
      </p>
    </div>
  );

  return (
    <>
      <style jsx>{`
        /* AOS Animation */
        .project-item [data-aos] {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
        }
        [data-aos].aos-animate {
          opacity: 1;
          transform: translateY(0);
        }

        /* Hover Zoom */
        .project-image {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .project-item:hover .project-image {
          transform: scale(1.1);
        }

        /* Button Flip Animation */
        .text-flip {
          position: relative;
          display: inline-block;
          overflow: hidden;
        }
        .text-flip .text {
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .text-flip .text:last-child {
          position: absolute;
          top: 0;
          left: 0;
          transform: translateY(100%);
        }
        .theme-btn:hover .text-flip .text:first-child {
          transform: translateY(-100%);
        }
        .theme-btn:hover .text-flip .text:last-child {
          transform: translateY(0);
        }

        /* Theme Button */
        .theme-btn {
          background: #9cfe4f;
          color: black;
          padding: 10px 30px;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-block;
          text-decoration: none;
          border: none;
          cursor: pointer;
        }

        /* Sub Title */
        .sub-title {
          color: #10b981;
          border: 1px solid #10b981;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      `}</style>

      <section
        className={`py-32 transition-colors duration-300 ${
          isDark ? "bg-[#0e0f11]" : "bg-[#cfcaca9c]"
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16" data-aos="zoom-in">
            <span className="sub-title inline-block mb-6">Complete Work</span>
            <h2
              className={`text-4xl lg:text-5xl font-bold leading-tight transition-colors duration-300 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Creative Projects We've
              <br />
              Delivered To Client
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* العمود الأيسر */}
            <div className="lg:col-span-7 space-y-16">
              <ProjectCard project={projects[0]} delay={100} imageHeight="h-80" />
              <ProjectCard project={projects[2]} delay={300} imageHeight="h-80" />
            </div>

            {/* العمود الأيمن */}
            <div className="lg:col-span-5 space-y-16">
              <ProjectCard project={projects[1]} delay={200} imageHeight="h-64" />
              <ProjectCard project={projects[3]} delay={400} imageHeight="h-64" />

              {/* زر مشاهدة الكل */}
              <div className="text-center lg:text-left" data-aos="fade-up" data-aos-delay="500">
                <button className="theme-btn">
                  <span className="text-flip">
                    <span className="text">View All</span>
                    <span className="text">View All</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
