import React, { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBullhorn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


// ✅ بيانات الفريق
const teamMembers = [
  { name: "Member 1", image: "/src/assets/team1.webp" },
  { name: "Member 2", image: "/src/assets/team2.webp" },
  { name: "Member 3", image: "/src/assets/team3.webp" },
  { name: "Member 4", image: "/src/assets/team4.webp" },
  { name: "Member 5", image: "/src/assets/team1.webp" },
];

// ✅ بيانات الخدمات
const services = [
  { title: "Research", description: "We are a leading innovative marketing agency, specializing" },
  { title: "Planning", description: "We are a leading innovative marketing agency, specializing" },
  { title: "Development", description: "We are a leading innovative marketing agency, specializing" },
  { title: "Deployment", description: "We are a leading innovative marketing agency, specializing" },
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
      <section className="bg-[#18191b] md:py-42 py-0">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div
              className="w-full md:w-1/2 space-y-6 text-center md:text-left"
              data-aos="fade-right"
            >
              <h1 className="text-4xl md:text-6xl lg:text-[85px] text-white font-bold leading-tight">
                About Us
              </h1>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                <img
                  className="w-12 h-12 md:w-16 md:h-16 animate-[spin_10s_linear_infinite_reverse]"
                  src="/src/assets/star1.png"
                  alt="Star Shape"
                />
                <p className="text-sm md:text-base lg:text-lg text-[#9E9FA0] max-w-md leading-relaxed">
                  Agenko empowers businesses with innovative strategies & creative agency solutions.
                </p>
              </div>
            </div>

            <div
              className="w-full md:w-1/2 flex flex-col md:flex-row gap-6 items-center justify-center md:justify-end"
              data-aos="fade-left"
            >
              <div className="rounded-3xl border border-[#ffffff26] bg-[#ffffff0a] text-white px-[30px] py-[10px] text-sm md:text-base">
                Home / <span className="text-[#9CFE4F]"> About Us</span>
              </div>
              <img
                className="animate-[spin_10s_linear_infinite_reverse]"
                src="/src/assets/circle-shape1.png"
                alt="Circle Shape"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Counter Section */}
      <section className="bg-[#18191b] py-20">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <div
            className="w-full lg:w-7/12 space-y-6 text-center lg:text-left"
            data-aos="fade-up"
          >
            <span className="text-[#9CFE4F] uppercase tracking-wide font-medium">About us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Strategic growth powered <br /> by Agenko Agency!
            </h2>
            <p className="text-[#9E9FA0] leading-relaxed">
              At Agenko Agency, we specialize in delivering strategic growth solutions tailored to
              elevate your business to new heights.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-block bg-[#9CFE4F] text-black px-6 py-3 rounded-lg font-medium hover:bg-lime-400 transition"
              >
                LEARN MORE
              </a>
            </div>

            <div
              ref={countersRef}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-12 mt-10"
            >
              <div data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  {projects} <span className="text-[#9CFE4F]">+</span>
                </h2>
                <p className="text-[#9E9FA0] mt-2">Projects success rate 99%</p>
              </div>

              <div data-aos="fade-up" data-aos-delay="400">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  {awards} <span className="text-[#9CFE4F]">+</span>
                </h2>
                <p className="text-[#9E9FA0] mt-2">Award for digital innovation</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-5/12 relative" data-aos="zoom-in" data-aos-delay="300">
            <img
              src="/src/assets/team3.webp"
              alt="About Agenko"
              className="rounded-xl w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-[#9CFE4F] text-black rounded-lg px-6 py-4 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold">24+</h2>
              <p className="text-sm">Years On The Market</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Services Section */}
      <section className="bg-[#111215] text-white py-20 px-5 md:px-20">
        <div className="max-w-7xl mx-auto" data-aos="fade-up">
          <button className="bg-transparent border border-green-400 text-white text-sm px-4 py-1 rounded-full mb-4">
            How We Are
          </button>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            We are leading Innovative <br /> marketing agency.
          </h2>
          <p className="text-gray-400 max-w-2xl mb-12">
            Leading Innovation <strong className="text-white">marketing agency</strong> We are a
            leading innovative marketing agency, specializing in creative solutions that drive
            business growth, enhance brand visibility.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] p-6 rounded-md hover:bg-[#222] transition"
                data-aos="fade-up"
                data-aos-delay={index * 150} // ✅ stagger animation
              >
                <div className="text-3xl mb-4 text-white">
                  <FaBullhorn />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Team Section */}
      <section className="bg-[#111215] text-white py-20 px-5 md:px-20">
        <div className="text-center mb-10" data-aos="fade-up">
          <button className="bg-transparent border border-green-400 text-sm px-4 py-1 rounded-full mb-4">
            Our Team
          </button>
          <h2 className="text-3xl md:text-4xl font-bold">
            Success Stories From Around The Globe
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative overflow-hidden group rounded-xl shadow-lg"
              data-aos="zoom-in"
              data-aos-delay={index * 150} // ✅ stagger animation
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover aspect-[3/4] grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center p-6 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
                <div className="flex gap-5">
                  <a
                    href="#"
                    className="text-white text-xl opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="text-white text-xl opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-200"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="text-white text-xl opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-300"
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
      <section className="bg-gray-900 text-white py-16">
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
                  <div className="flex gap-1 text-lime-400 text-xl">
                    {Array(5)
                      .fill(0)
                      .map((_, idx) => (
                        <span key={idx}>★</span>
                      ))}
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">{item.text}</p>
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ✅ Clients Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto text-center px-4" data-aos="fade-up">
          <span className="inline-block bg-gray-800 border border-green-500 text-green-400 text-sm px-4 py-1 rounded-full mb-4">
            Our Client
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Trusted Industry Leader</h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {clients.map((client, index) => (
              <div
                key={index}
                className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-[80%] max-h-[60%] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
