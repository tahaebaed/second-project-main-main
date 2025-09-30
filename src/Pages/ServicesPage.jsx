import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../hooks/useTheme";

import servicehero from "@/assets/service-1.webp";
import blogservisceone from "@/assets/blog2 (1).webp";
import blogserviscetwo from "@/assets/blog1 (1).webp";
import serviceonee from "@/assets/card-img1.webp";
import ingeserviceetwoo from "@/assets/card-img2.webp";
import imgeservicethree from "@/assets/card-img3.webp";
import servicefour from "@/assets/card-img4.webp";

export default function FullSection() {
  const { isDark } = useTheme();
  const [progress, setProgress] = useState({ dev: 0, design: 0, marketing: 0 });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progressPercent = currentStep / steps;

      setProgress({
        dev: Math.min(Math.floor(77 * progressPercent), 77),
        design: Math.min(Math.floor(87 * progressPercent), 87),
        marketing: Math.min(Math.floor(81 * progressPercent), 81),
      });

      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const servicesProgress = [
    { title: "Development Solution", percent: progress.dev },
    { title: "Design Solution", percent: progress.design },
    { title: "Marketing Solution", percent: progress.marketing },
  ];

  const services = [
    {
      id: 1,
      title: "Development",
      subtitle: "Web Development",
      description:
        "We innovative development solutions, combining technology and creativity to build efficient and scalable, and user-friendly digital platforms.",
      image: serviceonee,
    },
    {
      id: 2,
      title: "UI/UX Design",
      subtitle: "Mobile Apps Design",
      description:
        "We innovative development solutions, combining technology and creativity to build efficient and scalable, and user-friendly digital platforms.",
      image: ingeserviceetwoo,
    },
    {
      id: 3,
      title: "Graphics",
      subtitle: "Branding Design",
      description:
        "We innovative development solutions, combining technology and creativity to build efficient and scalable, and user-friendly digital platforms.",
      image: imgeservicethree,
    },
    {
      id: 4,
      title: "Marketing",
      subtitle: "SEO Marketing",
      description:
        "We innovative development solutions, combining technology and creativity to build efficient and scalable, and user-friendly digital platforms.",
      image: servicefour,
    },
  ];

  const blogs = [
    {
      id: 1,
      category: "Web Design",
      date: "02 Oct, 2025",
      title:
        "Creative Javanese a Lead Designer & Mobile UI/UX Core Checklist",
      image: blogservisceone,

    },
    {
      id: 2,
      category: "Web Design",
      date: "02 Oct, 2025",
      title:
        "Defensive Guide to Make a Daily More Creative Website Productive  ",
      image: blogserviscetwo,

    },
  ];

  return (
    <div
      className={
        isDark
          ? "bg-[#0f0f0f] text-gray-100 py-10 md:py-20 px-6 space-y-32"
          : "bg-gray-50 text-gray-900  py-10 md:py-20 px-6 space-y-32"
      }
    >
      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-end  my-10 md:my-20 text-center md:text-left">
        <div data-aos="fade-right" className="space-y-8">
          <div className="inline-block">
     <span className= {isDark?"inline-block px-4 py-1 text-[16px] border border-[#93e850] rounded-full text-white mb-4":"inline-block px-4 py-1 text-[16px] border border-[#93e850] rounded-full text-black mb-4"}>
                          Why Choose Us

          </span>
          </div>
          <h1 className="text-2xl md:text-5xl font-bold leading-tight">
            Your Trusted Partner for Success & Innovation
          </h1>
          <p
            className={
              isDark
                ? "text-gray-400 text-[16px] leading-relaxed  " 
                : "text-gray-600 text-[16px] leading-relaxed  "
            }
          >
            At Agenko Agency, we specialize in delivering strategic growth
            solutions tailored to elevate your business to new heights. By
            combining innovative strategies, data-driven insights, and creative
            design.
          </p>
          <div className="space-y-6 pt-4">
            {servicesProgress.map((service, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 200}>
                <div className="flex justify-between mb-3 ">
                  <span className="font-semibold text-lg">{service.title}</span>
                  <span className="font-bold text-xl">{service.percent}%</span>
                </div>
                <div
                  className={`h-1.5 ${
                    isDark ? "bg-gray-700" : "bg-gray-300"
                  } overflow-hidden`}
                >
                  <div
                    className="h-full bg-lime-400 transition-all duration-500 ease-out"
                    style={{ width: `${service.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div data-aos="fade-left" className="relative">
          <div className="relative group">
            <img
              src={servicehero}
              alt="Team collaboration"
              className="w-full h-auto transform group-hover:scale-105 transition duration-700 rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto  my-10 md:my-20 ">
        <div data-aos="fade-up" className="text-center mb:8   md:mb-16 space-y-2   md:space-y-4">
          <div className="inline-block">
        <span className= {isDark?"inline-block px-4 py-1 text-[16px] border border-[#93e850] rounded-full text-white mb-4":"inline-block px-4 py-1 text-[16px] border border-[#93e850] rounded-full text-black mb-4"}>
              Our Service
          </span>
          </div>
          <h1 className="text-2xl md:text-5xl font-bold mb-">
            Top Services We Offer
          </h1>
        </div>
        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-700 ${
                isDark
                  ? "bg-zinc-800/70 "
                  : "bg-white shadow "
              }`}
            >
              <div className="grid md:grid-cols-12 gap-6 p-6 md:p-8 items-center text-center md:text-left">
                <div className="md:col-span-3">
                  <div
                    className={`relative overflow-hidden rounded-4xl  md:rounded-full aspect-[2/1] ${
                      isDark ? "bg-zinc-700" : "bg-gray-200"
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                  </div>
                </div>
                <div className="md:col-span-4 space-y-2">
                  <h2 className="text-2xl md:text-4xl font-bold text-center transition-colors duration-300">
                    {service.title}
                  </h2>
                  <p
                    className={`text-lg text-center ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {service.subtitle}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <p
                    className={`leading-relaxed ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Client Section */}
      <div className="max-w-7xl mx-auto py-0 md:py-20  my-10 md:my-20">
        <div data-aos="zoom-in" className="text-center mb-8 md:mb-16">
      <span className= {isDark?"inline-block px-4 py-1 text-[16px] border border-[#93e850] rounded-full text-white mb-4":"inline-block px-4 py-1 text-[16px] border border-[#93e850] rounded-full text-black mb-4"}>
            Our Client
          </span>
          <h2 className="text-2xl md:text-5xl font-bold mt-4">
            Trusted Industry Leader
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {["client1.png", "client2.png", "client3.png", "client4.png", "client5.png"].map(
            (client, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                className={`p-6 rounded-2xl shadow-lg transition-all duration-500 ${
                  isDark ? "bg-zinc-800 " : "bg-white "
                }`}
              >
                <img
                  src={`assets/images/pages/client/${client}`}
                  alt={`Client ${idx + 1}`}
                  className="h-20 w-auto object-contain"
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* Blog Section */}
      <div className="max-w-7xl mx-auto ">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center md:mb-16 text-center md:text-left">
          <div data-aos="fade-right">
      <span className= {isDark?"inline-block px-4 py-1 text-[16px] border border-[#93e850] rounded-full text-white mb-4":"inline-block px-4 py-1 text-[16px] border border-[#93e850] rounded-full text-black mb-4"}>
              Latest Blogs
          </span>
            <h2 className="text-2xl md:text-5xl font-bold mt-4">
              Expert Insights and News <br /> Stay Ahead with Us
            </h2>
          </div>
          <div data-aos="fade-left">
            <p className={isDark ? "text-gray-300 text-lg" : "text-gray-700 text-lg"}>
              Explore expert insights, industry trends, and the latest digital
              news to keep your business informed and ahead of the competition.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8  my-10 md:my-20">
          {blogs.map((blog, idx) => (
            <div
              key={blog.id}
              data-aos="fade-up"
              data-aos-delay={idx * 200}
              className={`overflow-hidden group transition-all duration-500 ${
                isDark
                  ? "bg-zinc-800 "
                  : "bg-white "
              }`}
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-700 "
                />
              </div>
              <div className="p-6 space-y-4 ">
                <div
                  className={`flex gap-6 text-sm  justify-center md:justify-start text-2xl font-bold leading-snug" ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <span>{blog.category}</span>
                  <span>{blog.date}</span>
                </div>
                <h4 className="text-2xl font-bold leading-snug">
                  <a
                    href={blog.link}
                    className="hover:text-lime-400 transition-colors"
                  >
                    {blog.title}
                  </a>
                </h4>
           
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
