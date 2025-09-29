import React, { useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";

export default function Projects() {
  const { isDark } = useTheme();
  useEffect(() => {
    const elements = document.querySelectorAll("[data-aos]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Banking & Financial Mobile Apps",
      description:
        "We develop secure, user-friendly banking apps, streamlining financial services",
      categories: ["Website", "Landing Page", "UI/UX"],
      image: "banking-app",
    },
    {
      id: 2,
      title: "Knead That Dough Brand Identity",
      description:
        "Crafting a fresh, vibrant brand identity for Knead That Dough.",
      categories: ["Website", "Landing Page", "UI/UX"],
      image: "brand-identity",
    },
    {
      id: 3,
      title: "Software Agency Website Header",
      description:
        "Building innovative software solutions to drive your business forward.",
      categories: ["Website", "Landing Page", "UI/UX"],
      image: "website-header",
    },
    {
      id: 4,
      title: "Crypto Tap Wallet Mobile Apps",
      description:
        "Secure, fast, and user-friendly crypto wallet for seamless.",
      categories: ["Website", "Landing Page", "UI/UX"],
      image: "crypto-wallet",
    },
  ];

  const ProjectImage = ({ type, className }) => {
    const imageComponents = {
      "banking-app": (
        <div className={`relative rounded-2xl overflow-hidden ${className}`}>
          <img
            src="./src/assets/project1.webp "
            alt="Banking Mobile App"
            className="w-full h-full object-cover project-image"
          />
        </div>
      ),
      "brand-identity": (
        <div className={`relative rounded-2xl overflow-hidden ${className}`}>
          <img
            src="./src/assets/project2 (1).webp"
            alt="Brand Identity Design"
            className="w-full h-full object-cover project-image"
          />
        </div>
      ),
      "website-header": (
        <div className={`relative rounded-2xl overflow-hidden ${className}`}>
          <img
            src="./src/assets/project3.webp "
            alt="Website Development"
            className="w-full h-full object-cover project-image"
          />
        </div>
      ),
      "crypto-wallet": (
        <div
          className={`relative bg-gray-200 rounded-2xl overflow-hidden ${className}`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="./src/assets/project2 (1).webp"
              alt="Website Development"
              className="w-full h-full object-cover project-image"
            />{" "}
          </div>
        </div>
      ),
    };

    return imageComponents[type] || imageComponents["banking-app"];
  };

  return (
    <>
      <style jsx>{`
        /* AOS Animation */
        [data-aos] {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
        }
        [data-aos].aos-animate {
          opacity: 1;
          transform: translateY(0);
        }

        /* Project */
        .project-item {
          cursor: pointer;
          position: relative;
        }

        .project-image {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-item:hover .project-image {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.25);
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-categories {
          opacity: 1;
          transform: none;
          transition: none;
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
        className={
          isDark
            ? "py-32 bg-[#0e0f11] transition-colors duration-300"
            : "py-32 bg-white transition-colors duration-300"
        }
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16" data-aos="zoom-in">
            <span className="sub-title inline-block mb-6">Complete Work</span>
            <h2
              className={
                isDark
                  ? "text-4xl lg:text-5xl font-bold text-white leading-tight transition-colors duration-300"
                  : "text-4xl lg:text-5xl font-bold text-gray-900 leading-tight transition-colors duration-300"
              }
            >
              Creative Projects We've
              <br />
              Delivered To Client
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-16">
              {/* Project 1 */}
              <div
                className="project-item group"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <ProjectImage type="banking-app" className="w-full h-80" />
                  <div className="project-overlay">
                    <div className="project-categories flex space-x-2">
                      {projects[0].categories.map((category, index) => (
                        <span
                          key={index}
                          className={`bg-white text-black px-3 py-1 rounded-full text-sm font-medium ${isDark ? "bg-white text-black" : "bg-black text-white"}`}
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-[#9CFE4F] transition-colors duration-300">
                    {projects[0].title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    {projects[0].description}
                  </p>
                </div>
              </div>

              {/* Project 3 */}
              <div
                className="project-item group"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <ProjectImage type="website-header" className="w-full h-80" />
                  <div className="project-overlay">
                    <div className="project-categories flex space-x-2">
                      {projects[2].categories.map((category, index) => (
                        <span
                          key={index}
                          className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-[#9CFE4F] transition-colors duration-300">
                    {projects[2].title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    {projects[2].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-16">
              {/* Project 2 */}
              <div
                className="project-item group"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <ProjectImage type="brand-identity" className="w-full h-64" />
                  <div className="project-overlay">
                    <div className="project-categories flex space-x-2">
                      {projects[1].categories.map((category, index) => (
                        <span
                          key={index}
                          className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-[#9CFE4F] transition-colors duration-300">
                    {projects[1].title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    {projects[1].description}
                  </p>
                </div>
              </div>

              {/* Project 4 */}
              <div
                className="project-item group"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <ProjectImage type="crypto-wallet" className="w-full h-64" />
                  <div className="project-overlay">
                    <div className="project-categories flex space-x-2">
                      {projects[3].categories.map((category, index) => (
                        <span
                          key={index}
                          className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-[#9CFE4F] transition-colors duration-300">
                    {projects[3].title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    {projects[3].description}
                  </p>
                </div>
              </div>

              {/* Button */}
              <div
                className="text-center lg:text-left"
                data-aos="fade-up"
                data-aos-delay="500"
              >
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
