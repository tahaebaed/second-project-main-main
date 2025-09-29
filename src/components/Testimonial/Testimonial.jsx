import React, { useEffect } from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    text: "Binorly Agency completely transformed our online presence! Their exceptional website development expertise went beyond expectations, creating a visually stunning and user-friendly website. The team's attention to detail and commitment is unmatched!",
    author: "Ms. Alex Mika",
    role: "CEO & Founder",
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
];

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // سرعة الأنيميشن
      once: false, // يخلي الأنيميشن يتكرر مع كل scroll
    });
  }, []);

  return (
    <section className="relative py-20 md:py-32 bg-gray-50 dark:bg-[#18191B] overflow-hidden transition-colors duration-300">
      {/* Decorative circle top right */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-full border-[40px] md:border-[60px] border-white/5 translate-x-1/3 -translate-y-1/3"></div>

      {/* Decorative circle bottom left */}
      <div className="absolute bottom-0 left-0 w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-full border-[35px] md:border-[50px] border-white/5 -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto relative z-10 px-4">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1 text-sm border border-green-400 rounded-full text-green-400 mb-4">
            Testimonial
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            Success Stories From Around the Globe
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-10 justify-center mx-auto">
          {/* ثابتة Image */}
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

          {/* Swiper Testimonials */}
          <div className="w-full lg:w-2/3 relative" data-aos="fade-left">
            <div className="absolute -top-10 left-0 text-[60px] md:text-[90px] font-extrabold text-gray-200 dark:text-white/5 select-none transition-colors duration-300">
              TESTIMONIAL
            </div>

            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
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

                  <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6 transition-colors duration-300">
                    {item.text}
                  </p>

                  <div className="mt-4">
                    <h4 className="text-gray-900 dark:text-white font-bold text-lg md:text-xl transition-colors duration-300">
                      {item.author}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">{item.role}</p>
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
