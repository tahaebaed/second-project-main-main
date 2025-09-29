import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // مدة الأنيميشن بالميلي ثانية
      easing: "ease-in-out",
      once: false, // يجعل الأنيميشن يعمل كل مرة تدخل العنصر
      mirror: true, // يجعل الأنيميشن يعمل عند السحب من أعلى لأسفل والعكس
    });
    AOS.refresh();
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Mr. David Liam",
      role: "Developer",
      image: "src/assets/team1.webp",
    },
    {
      id: 2,
      name: "Jessica Sherlock Dina",
      role: "Web Designer",
      image: "src/assets/team2.webp",
    },
    {
      id: 3,
      name: "Mr. Adam Smith Roy",
      role: "Video Editor",
      image: "src/assets/team3.webp",
    },
    {
      id: 4,
      name: "Miss Alex Mika",
      role: "Marketer",
      image: "src/assets/team4.webp",
    },
  ];

  return (
    <>
      <style jsx>{`
        .role-with-divider {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #9ca3af;
          font-size: 0.875rem;
        }
        .role-with-divider::after {
          content: "";
          display: inline-block;
          width: 50px;
          height: 2px;
          background: rgb(77, 74, 74);
        }
        .plus-icon {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 40px;
          height: 40px;
          background: white;
          color: black;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
          z-index: 10;
        }
      `}</style>

      <section className="bg-[#0e0f11] py-20 px-6">
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
                className="text-4xl sm:text-5xl font-bold text-white leading-snug"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                Meet Our Talented
                <br /> Skillful Team
              </h2>
            </div>

            <button
              className="bg-green-500 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300"
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
                className="team-card"
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-once="false"
              >
                {/* Image with fixed plus */}
                <div className="relative group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image w-full h-[400px] object-cover rounded-xl"
                  />
                  <div className="plus-icon">+</div>
                </div>

                {/* Info */}
                <div className="text-center mt-4">
                  <span className="role-with-divider">{member.role}</span>
                  <h3 className="text-lg font-bold text-white mt-2">
                    {member.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
