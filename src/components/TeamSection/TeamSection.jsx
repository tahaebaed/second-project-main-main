import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../../hooks/useTheme"; // 🔹 تأكد من المسار الصحيح

const TeamSection = () => {
  const { isDark } = useTheme(); // ✅ يجب أن تكون داخل المكون

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  const teamMembers = [
    { id: 1, name: "Mr. David Liam", role: "Developer", image: "src/assets/team1.webp" },
    { id: 2, name: "Jessica Sherlock Dina", role: "Web Designer", image: "src/assets/team2.webp" },
    { id: 3, name: "Mr. Adam Smith Roy", role: "Video Editor", image: "src/assets/team3.webp" },
    { id: 4, name: "Miss Alex Mika", role: "Marketer", image: "src/assets/team4.webp" },
  ];

  return (
    <section
      className={`py-20 px-6 transition-colors duration-300 ${
        isDark ? "bg-[#0e0f11]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div className="mb-8 lg:mb-0">
            <span
              className="inline-block border border-green-500 text-green-500 px-5 py-1 rounded-full text-sm font-medium mb-6"
              data-aos="fade-up"
            >
              Our Team
            </span>
            <h2
              className={`text-4xl sm:text-5xl font-bold leading-snug transition-colors duration-300 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Meet Our Talented
              <br /> Skillful Team
            </h2>
          </div>

          <button
            className="bg-green-500 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:bg-green-600"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            View Teams
          </button>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[400px] object-cover rounded-xl shadow-md transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white  text-black rounded-full flex items-center justify-center text-2xl font-bold shadow-lg ">
                  +
                </div>
              </div>

              {/* Info */}
              <div className="text-center mt-4">
                <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <span>{member.role}</span>
                  <span className="w-10 h-[2px] bg-gray-400 dark:bg-gray-600"></span>
                </div>
                <h3
                  className={`text-lg font-bold mt-2 transition-colors duration-300 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
