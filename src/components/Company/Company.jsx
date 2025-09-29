import React, { useEffect } from "react";
import Button from "../Button/Button";
import { useTheme } from "../../hooks/useTheme";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Company() {
  const { isDark } = useTheme();

  // ✅ تهيئة مكتبة AOS للأنيميشن
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  // ✅ بيانات العملاء
  const clients = [
    { id: 1, src: "./src/assets/client6.png", alt: "Client 6" },
    { id: 2, src: "./src/assets/client5.png", alt: "Client 5" },
    { id: 3, src: "./src/assets/client4.png", alt: "Client 4" },
    { id: 4, src: "./src/assets/client3.png", alt: "Client 3" },
    { id: 5, src: "./src/assets/client2.png", alt: "Client 2" },
    { id: 6, src: "./src/assets/client1.png", alt: "Client 1" },
  ];

  return (
    <section
      className={`relative py-32 transition-colors duration-300 ${
        isDark ? "bg-[#18191B]" : "bg-[#cfcaca9c]"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-wrap items-center -mx-4">
          {/* ✅ النص */}
          <div
            className="w-full lg:w-5/12 px-4 mb-12 lg:mb-0"
            data-aos="fade-right"
          >
            <div className="text-center lg:text-left gap-5 flex flex-col items-center md:items-start">
              <Button />
              <h2
                className={`text-4xl lg:text-5xl font-bold leading-tight transition-colors duration-300 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Trusted Our Company
              </h2>
              <p
                className={`text-lg transition-colors duration-300 ${
                  isDark ? "text-[#9E9FA0]" : "text-gray-600"
                }`}
              >
                We are a{" "}
                <span
                  className={`font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Digital Creative agency
                </span>{" "}
                with 25 years of experience, specializing in delivering
                cutting-edge
              </p>
            </div>
          </div>

          {/* ✅ شبكة العملاء */}
          <div className="w-full lg:w-7/12 px-4" data-aos="fade-left">
            <div className="grid grid-cols-3">
              {clients.map((client, index) => (
                <div
                  key={client.id}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className={`client-item border py-[58px] px-[20px] text-center transition-all duration-300 
                    ${
                      isDark
                        ? "border-[#313131] hover:border-[#9CFE4F]"
                        : "border-gray-200 hover:border-[#9CFE4F]"
                    }`}
                >
                  <img
                  style={{
filter: isDark ? 'invert(0)' : 'invert(1)', 


                  }}
                    src={client.src}
                    alt={client.alt}
                    loading="lazy"
                    className="mx-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
