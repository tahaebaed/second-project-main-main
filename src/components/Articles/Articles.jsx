import React, { useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import articalsone from "@/assets/blog2.webp";
import articalstwo from "@/assets/blog1.webp";

const ArticlesSection = () => {
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll("[data-aos]");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
          element.classList.add("aos-animate");
        } else {
          element.classList.remove("aos-animate");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const articles = [
    {
      id: 1,
      category: "Website",
      title: "MKT Gency for your online business Plane.",
      description:
        "Strategic marketing agency boosting to your online business success.",
      date: "15 Apr, 2024",
      image: articalsone,
    },
    {
      id: 2,
      category: "Website",
      title: "Meeting Collaboration for your business.",
      description:
        "Strategic marketing agency boosting to your online business success.",
      date: "15 Apr, 2024",
      image: articalstwo,
    },
  ];

  return (
    <>
      <style>{`
        [data-aos] {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        [data-aos].aos-animate { opacity: 1; transform: translateY(0); }
        [data-aos="fade-up"] { transform: translateY(50px); }
        [data-aos="fade-left"] { transform: translateX(50px); }
        [data-aos="fade-right"] { transform: translateX(-50px); }
        [data-aos].aos-animate[data-aos="fade-up"],
        [data-aos].aos-animate[data-aos="fade-left"],
        [data-aos].aos-animate[data-aos="fade-right"] { transform: translate(0, 0); }
      `}</style>

      <div
        className={`py-10 md:py-20 px-4 md:px-8 transition-colors duration-300 ${
          isDark ? "bg-black text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto  text-center md:text-left">
          <div className="mb-16" data-aos="fade-up">
            <span
              className={`border px-5 py-1.5 rounded-full text-xs font-normal 
              ${
                isDark
                  ? "border-[#9CFE4F] text-white text-[16px]"
                  : "border-[#93ec4c] text-black text-[16px]"
              }`}
            >
              Latest Articles
            </span>

            <div className="flex justify:center md:justify-between items-center gap-y-8 md:items-start flex-col md:row ">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-tight mt-5">
                Stay Updated with Our Recent Articles
              </h1>
              <button className="theme-btn">
                <span className="text-flip">
                  <span className="text">View All Blogs</span>
                  <span className="text">View All Blogs</span>
                </span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {articles.map((article, index) => (
              <div
                key={article.id}
                data-aos={index === 0 ? "fade-down" : "fade-down"}
                className={`rounded-2xl overflow-hidden transition-colors cursor-pointer ${
                  isDark ? "bg-zinc-900 " : "bg-[#e2dfdf52]"
                }`}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 md:h-full object-cover grayscale"
                    />
                  </div>

                  <div className="md:w-3/5 p-8 flex flex-col justify-between ">
                    <div>
                      <span
                        className={`inline-block text-sm px-4 py-2 rounded-full mb-4 ${
                          isDark
                            ? "bg-zinc-800 text-gray-300"
                            : "bg-[#e2dfdf52]"
                        }`}
                      >
                        {article.category}
                      </span>

                      <h3 className="text-2xl font-bold mb-4 leading-tight">
                        {article.title}
                      </h3>

                      <p
                        className={`mb-6 ${
                          isDark ? "text-gray-400" : "text-gray-700"
                        }`}
                      >
                        {article.description}
                      </p>
                    </div>

                    <div
                      className={`text-sm ${
                        isDark ? "text-gray-500" : "text-gray-600"
                      }`}
                    >
                      {article.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden text-center" data-aos="fade-up">
            <button className="theme-btn">
              <span className="text-flip">
                <span className="text">View All</span>
                <span className="text">View All</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlesSection;
