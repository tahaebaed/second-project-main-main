import React, { useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import AOS from "aos";
import "aos/dist/aos.css";
import imgworkone from "@/assets/project3.webp";
import imgworktwo from "@/assets/project2 (1).webp";
import imgworkthree from "@/assets/project1.webp";

export default function Projects() {
  const { isDark } = useTheme();

  // ✅ تهيئة AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
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
      image: imgworkthree,
    },
    {
      id: 2,
      title: "Knead That Dough Brand Identity",
      description:
        "Crafting a fresh, vibrant brand identity for Knead That Dough.",
      categories: ["Website", "Landing Page", "UI/UX"],
      image: imgworktwo,
    },
    {
      id: 3,
      title: "Software Agency Website Header",
      description:
        "Building innovative software solutions to drive your business forward.",
      categories: ["Website", "Landing Page", "UI/UX"],
      image: imgworkone,
    },
    {
      id: 4,
      title: "Crypto Tap Wallet Mobile Apps",
      description:
        "Secure, fast, and user-friendly crypto wallet for seamless.",
      categories: ["Website", "Landing Page", "UI/UX"],
      image: imgworkone,
    },
  ];

  // ✅ مكون البطاقة
  const ProjectCard = ({ project, delay, imageHeight }) => (
    <div
      className="group"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="relative overflow-hidden rounded-2xl mb-6">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className={`w-full ${imageHeight} object-cover transition-transform duration-700 group-hover:scale-110`}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex flex-wrap gap-2">
            {project.categories.map((category, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
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
        className={`text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#9CFE4F] ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {project.title}
      </h4>
      <p
        className={`${
          isDark ? "text-gray-400" : "text-gray-600"
        } transition-colors duration-300`}
      >
        {project.description}
      </p>
    </div>
  );

  return (
    <section
      className={`py-10 md:py-20 transition-colors duration-300 ${
        isDark ? "bg-[#0e0f11]" : "bg-gray-200/70"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16" data-aos="zoom-in">
          <span className="inline-block mb-6 border border-[#93ec4c] px-6 py-2 rounded-full text-[16px] font-medium uppercase tracking-wide">
            Complete Work
          </span>
          <h2
            className={`text-4xl lg:text-5xl font-bold leading-tight ${
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
  );
}
