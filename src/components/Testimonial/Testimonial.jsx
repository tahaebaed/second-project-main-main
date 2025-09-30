import React, { useEffect } from "react";
import "./testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../../hooks/useTheme"; 

const testimonials = [
  {
    text: "Binorly Agency completely transformed our online presence! Their exceptional website development expertise went beyond expectations, creating a visually stunning and user-friendly website. The team's attention to detail and commitment is unmatched!",
    author: "Reem Gbr",
    role: "Frontend Developer",
  },
  {
    text: "Working with Binorly Agency was a game changer for our business. Their creativity, professionalism, and technical skills exceeded all our expectations!",
    author: "John Carter",
    role: "Marketing Director",
  },
  {
    text: "Highly recommend! They delivered a website that not only looks amazing but also performs flawlessly. Great team to work with!",
    author: "Sophia Lee",
    role: "Project Manager",
  },


    {
    text: "Binorly Agency completely transformed our online presence! Their exceptional website development expertise to beyond expectations, creating a visually stunning and user-friendly website. The team's attention to detail and commitment to!",
    author: "Ms. Alex Mika",
    role: "CEO & Founder",
  },
];

const Testimonial = () => {
  const { isDark } = useTheme(); 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,    
    });
  }, []);

  return (
    <section
      className={`relative py-20 md:py-32 overflow-hidden transition-colors duration-300 
      ${isDark ? "bg-[#18191B]" : "bg-gray-50"}`}
    >      <div className={isDark?"absolute top-0 right-0 w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-full border-[40px] md:border-[60px] border-white/5 translate-x-1/3 -translate-y-1/3":"absolute top-0 right-0 w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-full border-[40px] md:border-[60px] border-[#e2dfdf8a] translate-x-1/3 -translate-y-1/3"}></div>
      <div className={isDark?"absolute bottom-0 left-0 w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-full border-[35px] md:border-[50px] border-white/5 -translate-x-1/3 translate-y-1/3":"absolute bottom-0 left-0 w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-full border-[35px] md:border-[50px] border-[#e2dfdf8a] -translate-x-1/3 translate-y-1/3"}></div>

      <div className="container mx-auto relative z-10 px-4">
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <span className= {isDark?"inline-block px-4 py-1 text-[16px] border border-[#93e850] rounded-full text-white mb-4":"inline-block px-4 py-1 text-[16px] border border-[#93e850] rounded-full text-black mb-4"}>
            Testimonial
          </span>
          <h2
            className={`text-2xl md:text-4xl font-bold transition-colors duration-300 
            ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Success Stories From Around the Globe
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 justify-center mx-auto">
          <div
            className="w-full lg:w-1/3 order-1 lg:order-none"
            data-aos="fade-right"
          >
            <img
              src="src/assets/testimonial.webp"
              alt="testimonial"
              className="rounded-lg w-full max-w-sm mx-auto"
            />
          </div>

          <div className="w-full lg:w-2/3 relative" data-aos="fade-left">
            <div
              className={`absolute -top-10 left-0 text-[60px] md:text-[90px] font-extrabold select-none transition-colors duration-300
              ${isDark ? "text-white/5" : "text-gray-200"}`}
            >
              TESTIMONIAL
            </div>

            <Swiper
              modules={[Pagination, Autoplay]}
              autoplay={{ delay: 4000 }}
              loop={true}
              className="w-full"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <ul className="flex text-yellow-400 text-xl mb-4">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <li key={i}>
                          <FaStar />
                        </li>
                      ))}
                  </ul>

                  <p
                    className={`text-base md:text-lg leading-relaxed mb-6 transition-colors duration-300
                    ${isDark ? "text-gray-300" : "text-gray-600"}`}
                  >
                    {item.text}
                  </p>

                  <div className="mt-4">
                    <h4
                      className={`font-bold text-lg md:text-xl transition-colors duration-300
                      ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      {item.author}
                    </h4>
                    <p
                      className={`transition-colors duration-300
                      ${isDark ? "text-gray-400" : "text-gray-500"}`}
                    >
                      {item.role}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
