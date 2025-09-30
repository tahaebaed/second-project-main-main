import React, { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBullhorn,
} from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import mebmer1 from "@/assets/team1.webp";
import mebmer2 from "@/assets/team2.webp";
import mebmer3 from "@/assets/team3.webp";
import mebmer4 from "@/assets/team4.webp";

// ✅ بيانات الفريق
const teamMembers = [
  { name: "Member 1", image: mebmer1 },
  { name: "Member 2", image: mebmer2 },
  { name: "Member 3", image: mebmer3 },
  { name: "Member 4", image: mebmer4 },
  { name: "Member 5", image: mebmer1 },
];

// ✅ بيانات الخدمات
const services = [
  {
    title: "Research",
    description: "We are a leading innovative marketing agency, specializing",
  },
  {
    title: "Planning",
    description: "We are a leading innovative marketing agency, specializing",
  },
  {
    title: "Development",
    description: "We are a leading innovative marketing agency, specializing",
  },
  {
    title: "Deployment",
    description: "We are a leading innovative marketing agency, specializing",
  },
];

// ✅ بيانات العملاء
const clients = [
  { name: "360 AGENCY", logo: "/logos/360agency.svg" },
  { name: "SHIPYARD", logo: "/logos/shipyard.svg" },
  { name: "direcly", logo: "/logos/direcly.svg" },
  { name: "Bradency", logo: "/logos/bradency.svg" },
  { name: "barbarian.", logo: "/logos/barbarian.svg" },
];

// ✅ بيانات التقييمات
const testimonials = [
  {
    text: "Binorly Agency completely transformed our online presence! Their exceptional website development expertise went beyond expectations, creating a visually stunning and user-friendly website. The team's attention to detail and commitment to excellence truly set them apart.",
    name: "Mr. David Liam",
    role: "CEO & Founder",
  },
  {
    text: "Working with Binorly Agency was a game changer for our brand. The new website boosted our conversions and gave us a sleek modern image.",
    name: "Sarah Johnson",
    role: "Marketing Director",
  },
  {
    text: "Professional, innovative, and reliable — Binorly exceeded all our expectations. We highly recommend them for digital solutions.",
    name: "Michael Chen",
    role: "CTO",
  },
];

export default function HomePage() {
  const [projects, setProjects] = useState(0);
  const [awards, setAwards] = useState(0);
  const countersRef = useRef(null);
  const hasAnimated = useRef(false);
  const rafProjects = useRef(null);
  const rafAwards = useRef(null);
  const { isDark } = useTheme();
  // ✅ AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  // ✅ Counter Animation
  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            startCounters();
            obs.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );

    if (countersRef.current) observer.observe(countersRef.current);

    return () => {
      observer.disconnect();
      if (rafProjects.current) cancelAnimationFrame(rafProjects.current);
      if (rafAwards.current) cancelAnimationFrame(rafAwards.current);
    };
  }, []);

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  const animateValue = (start, end, duration, setter, rafRef) => {
    const startTime = performance.now();
    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      const value = Math.floor(start + (end - start) * eased);
      setter(value);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setter(end);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const startCounters = () => {
    animateValue(0, 240, 1600, setProjects, rafProjects);
    animateValue(0, 230, 1200, setAwards, rafAwards);
  };

  return (
    <div>
      {/* ✅ About Section */}
      <section
        className={`${isDark ? "bg-[#18191b]" : "bg-white"} md:py-42 py-0`}
      >
        <div style={{ position: "relative", zIndex: 100, top: "-30rem" }}>
          <div
            style={{
              position: "absolute",
              top: "-20rem",
              left: "-50rem",
              zIndex: 500,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "1500px",
                height: "1500px",
                borderRadius: "50%",
                border: `1px solid ${
                  isDark
                    ? "rgb(185 174 174 / 16%)"
                    : "rgba(185, 174, 174, 0.50)"
                }`,
              }}
            ></span>
          </div>
          <div
            style={{
              position: "absolute",
              top: "-20rem",
              right: "2rem",
              zIndex: "500",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "880px",
                height: "810px",
                borderRadius: "50%",
                border: `1px solid ${
                  isDark
                    ? "rgba(185, 174, 174, 0.16)"
                    : "rgba(185, 174, 174, 0.50)"
                }`,
              }}
            ></span>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div
              className="w-full md:w-1/2 space-y-6 text-center md:text-left"
              data-aos="fade-right"
            >
              <h1
                className={`text-4xl md:text-6xl lg:text-[85px] ${
                  isDark ? "text-white" : "text-black"
                } font-bold leading-tight`}
              >
                About Us
              </h1>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                <img
                  className="w-12 h-12 md:w-16 md:h-16 animate-[spin_10s_linear_infinite_reverse]"
                  src="/src/assets/star1.png"
                  alt="Star Shape"
                  style={{ filter: isDark ? "invert(0)" : "invert(1)" }}
                />
                <p
                  className={`text-sm md:text-base lg:text-lg ${
                    isDark ? "text-[#9E9FA0]" : "text-black"
                  } max-w-md leading-relaxed`}
                >
                  Agenko empowers businesses with innovative strategies &
                  creative agency solutions.
                </p>
              </div>
            </div>

            <div
              className="w-full md:w-1/2 flex flex-col md:flex-row gap-6 items-center justify-center md:justify-end"
              data-aos="fade-left"
            >
              <div
                className={`rounded-3xl border ${
                  isDark
                    ? "border-[#ffffff26] bg-[#ffffff0a] text-white"
                    : "border-[#93ec4c] bg-[#93ec4c0a] text-black"
                } px-[30px] py-[10px] text-sm md:text-base`}
              >
                Home /{" "}
                <span
                  className={`${isDark ? "text-[#9CFE4F]" : "text-[#93ec4c]"}`}
                >
                  {" "}
                  About Us
                </span>
              </div>
              <img
                className="animate-[spin_10s_linear_infinite_reverse]"
                src="/src/assets/circle-shape1.png"
                style={{ filter: isDark ? "invert(0)" : "invert(1)" }}
                alt="Circle Shape"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Counter Section */}
      <section className={`${isDark ? "bg-[#18191b]" : "bg-white"} py-20`}>
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <div
            className="w-full lg:w-7/12 space-y-6 text-center lg:text-left"
            data-aos="fade-up"
          >
            <span
              className={`${
                isDark ? "text-[#9CFE4F]" : "text-[#93ec4c]"
              } uppercase tracking-wide font-medium`}
            >
              About us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Strategic growth powered <br /> by Agenko Agency!
            </h2>
            <p
              className={`${
                isDark ? "text-[#9E9FA0]" : "text-black"
              } leading-relaxed`}
            >
              At Agenko Agency, we specialize in delivering strategic growth
              solutions tailored to elevate your business to new heights.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className={`inline-block ${
                  isDark ? "bg-[#9CFE4F] text-black" : "bg-[#93ec4c] text-white"
                } px-6 py-3 rounded-lg font-medium hover:bg-lime-400 transition`}
              >
                LEARN MORE
              </a>
            </div>

            <div
              ref={countersRef}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-12 mt-10"
            >
              <div data-aos="fade-up" data-aos-delay="200">
                <h2
                  className={`text-4xl md:text-5xl font-bold ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  {projects} <span className="text-[#9CFE4F]">+</span>
                </h2>
                <p
                  className={`${isDark ? "text-[#9E9FA0]" : "text-black"} mt-2`}
                >
                  Projects success rate 99%
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="400">
                <h2
                  className={`text-4xl md:text-5xl font-bold ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  {awards} <span className="text-[#9CFE4F]">+</span>
                </h2>
                <p
                  className={`${isDark ? "text-[#9E9FA0]" : "text-black"} mt-2`}
                >
                  Award for digital innovation
                </p>
              </div>
            </div>
          </div>

          <div
            className="w-full lg:w-5/12 relative"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img
              src="/src/assets/team3.webp"
              alt="About Agenko"
              className="rounded-xl w-full object-cover"
            />
            <div
              className={`absolute bottom-4 left-4 ${
                isDark ? "bg-[#9CFE4F] text-black" : "bg-[#93ec4c] text-white"
              } rounded-lg px-6 py-4 shadow-lg`}
            >
              <h2 className="text-3xl md:text-4xl font-bold">24+</h2>
              <p className="text-sm">Years On The Market</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Services Section */}
      <section
        className={`${
          isDark ? "bg-[#111215]" : "bg-white"
        } text-white py-20 px-5 md:px-20`}
      >
        <div className="max-w-7xl mx-auto" data-aos="fade-up">
          <button
            className={`bg-transparent border ${
              isDark
                ? "border-[#9CFE4F] text-white"
                : "border-[#93ec4c] text-black"
            } text-sm px-4 py-1 rounded-full mb-4`}
          >
            How We Are
          </button>
          <h2
            className={`text-4xl md:text-5xl font-bold leading-tight mb-6 ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            We are leading Innovative <br /> marketing agency.
          </h2>
          <p
            className={`${
              isDark ? "text-gray-400" : "text-black"
            } max-w-2xl mb-12`}
          >
            Leading Innovation{" "}
            <strong className="text-white">marketing agency</strong> We are a
            leading innovative marketing agency, specializing in creative
            solutions that drive business growth, enhance brand visibility.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${
                  isDark ? "bg-[#1a1a1a]" : "bg-[#93ec4c]"
                } p-6 rounded-md hover:bg-[#222] transition`}
                data-aos="fade-up"
                data-aos-delay={index * 150} // ✅ stagger animation
              >
                <div
                  className={`text-3xl mb-4 ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  <FaBullhorn />
                </div>
                <h3
                  className={`text-lg font-bold mb-2 ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`${
                    isDark ? "text-gray-400" : "text-black"
                  } text-sm`}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Team Section */}
      <section
        className={`${
          isDark ? "bg-[#111215]" : "bg-white"
        } text-white py-20 px-5 md:px-20`}
      >
        <div className="text-center mb-10" data-aos="fade-up">
          <button
            className={`bg-transparent border ${
              isDark
                ? "border-[#9CFE4F] text-white"
                : "border-[#93ec4c] text-black"
            } text-sm px-4 py-1 rounded-full mb-4`}
          >
            Our Team
          </button>
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Success Stories From Around The Globe
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group rounded-xl shadow-lg ${
                isDark ? "bg-[#1a1a1a]" : "bg-[#93ec4c]"
              }`}
              data-aos="zoom-in"
              data-aos-delay={index * 150} // ✅ stagger animation
            >
              <img
                src={member.image}
                alt={member.name}
                className={`w-full h-full object-cover aspect-[3/4] grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-110`}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center p-6 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out bg-[#1a1a1a71]`}
              >
                <div className="flex gap-5">
                  <a
                    href="#"
                    className={`text-white text-xl opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100 ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className={`text-white text-xl opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-200 ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className={`text-white text-xl opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-300 ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Testimonials Section */}
      <section
        className={`${isDark ? "bg-gray-900" : "bg-white"} ${
          isDark ? "text-white" : "text-black"
        } py-16`}
      >
        <div className="container mx-auto px-4" data-aos="fade-up">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={40}
            className="max-w-3xl mx-auto"
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center text-center space-y-6 px-6">
                  <div
                    className={`flex gap-1 ${
                      isDark ? "text-[#9CFE4F]" : "text-[#93ec4c]"
                    } text-xl`}
                  >
                    {Array(5)
                      .fill(0)
                      .map((_, idx) => (
                        <span key={idx}>★</span>
                      ))}
                  </div>
                  <p
                    className={`${
                      isDark ? "text-gray-300" : "text-black"
                    } text-lg leading-relaxed`}
                  >
                    {item.text}
                  </p>
                  <div>
                    <p
                      className={`font-semibold ${
                        isDark ? "text-white" : "text-black"
                      }`}
                    >
                      {item.name}
                    </p>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-black"
                      }`}
                    >
                      {item.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ✅ Clients Section */}
      <section
        className={`${isDark ? "bg-gray-900" : "bg-white"} ${
          isDark ? "text-white" : "text-black"
        } py-16`}
      >
        <div className="container mx-auto text-center px-4" data-aos="fade-up">
          <span
            className={`inline-block bg-gray-800 border ${
              isDark
                ? "border-[#9CFE4F] text-[#9CFE4F]"
                : "border-[#93ec4c] text-[#93ec4c]"
            } text-sm px-4 py-1 rounded-full mb-4`}
          >
            Our Client
          </span>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-12 ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Trusted Industry Leader
          </h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {clients.map((client, index) => (
              <div
                key={index}
                className={`w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition ${
                  isDark ? "bg-[#1a1a1a]" : "bg-[#93ec4c]"
                }`}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`max-w-[80%] max-h-[60%] object-contain ${
                    isDark ? "filter invert(0)" : "filter invert(1)"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
