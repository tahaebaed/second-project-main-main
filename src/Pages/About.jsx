import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  const [projects, setProjects] = useState(0);
  const [awards, setAwards] = useState(0);

  const countersRef = useRef(null);
  const hasAnimated = useRef(false);
  const rafProjects = useRef(null);
  const rafAwards = useRef(null);

  // init AOS once
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // IntersectionObserver: يبدأ الكونتر لما يظهر الـ countersRef في الشاشة
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            startCounters();
            obs.disconnect(); // ننهي المراقبة بعد التشغيل مرة واحدة
          }
        });
      },
      { threshold: 0.35 } // غيّري لو عايزة يبدأ قبل/بعد
    );

    if (countersRef.current) observer.observe(countersRef.current);

    return () => {
      observer.disconnect();
      if (rafProjects.current) cancelAnimationFrame(rafProjects.current);
      if (rafAwards.current) cancelAnimationFrame(rafAwards.current);
    };
  }, []);

  // easing بسيط للـ animation
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  // animate باستخدام requestAnimationFrame
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
        setter(end); // نتأكد من القيمة النهائية بالضبط
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const startCounters = () => {
    animateValue(0, 240, 1600, setProjects, rafProjects); // projects: 1.6s
    animateValue(0, 230, 1200, setAwards, rafAwards); // awards: 1.2s
  };

  return (
    <div>
      {/* SECTION الأعلى (مثل ما عندك) */}
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
                  src="./src/assets/star1.png"
                  alt="Star Shape"
                />
                <p className="text-sm md:text-base lg:text-lg text-[#9E9FA0] max-w-md leading-relaxed">
                  Agenko empowers businesses with innovative strategies &
                  creative agency solutions.
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
                className=" animate-[spin_10s_linear_infinite_reverse]"
                src="./src/assets/circle-shape1.png"
                alt="Circle Shape"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION الأعداد (الكونتر) - حطيت ref هنا */}
      <section className="bg-[#18191b] py-20">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-7/12 space-y-6 text-center lg:text-left" data-aos="fade-up">
            <span className="text-[#9CFE4F] uppercase tracking-wide font-medium">
              About us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Strategic growth powered <br /> by Agenko Agency!
            </h2>
            <p className="text-[#9E9FA0] leading-relaxed">
              At Agenko Agency, we specialize in delivering strategic growth solutions tailored to elevate your business to new heights.
            </p>
            <div className="mt-6">
              <a href="#" className="inline-block bg-[#9CFE4F] text-black px-6 py-3 rounded-lg font-medium hover:bg-lime-400 transition">
                LEARN MORE
              </a>
            </div>

            {/* هنا حطيت الـ ref للمراقبة */}
            <div ref={countersRef} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-12 mt-10">
              <div data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  {projects}<span className="text-[#9CFE4F]">+</span>
                </h2>
                <p className="text-[#9E9FA0] mt-2">Projects success rate 99%</p>
              </div>

              <div data-aos="fade-up" data-aos-delay="400">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  {awards}<span className="text-[#9CFE4F]">+</span>
                </h2>
                <p className="text-[#9E9FA0] mt-2">Award for digital innovation</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-5/12 relative" data-aos="zoom-in" data-aos-delay="300">
            <img src="./src/assets/team3.webp" alt="About Agenko" className="rounded-xl w-full object-cover" />
            <div className="absolute bottom-4 left-4 bg-[#9CFE4F] text-black rounded-lg px-6 py-4 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold">24+</h2>
              <p className="text-sm">Years On The Market</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
