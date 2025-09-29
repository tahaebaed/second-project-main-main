import React, { useEffect } from "react";

const TeamSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-aos]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Restart animation
            entry.target.classList.remove("aos-animate");
            void entry.target.offsetWidth; // trigger reflow
            entry.target.classList.add("aos-animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Mr. David Liam",
      role: "Developer",
      image:
        "src/assets/team1.webp",
    },
    {
      id: 2,
      name: "Jessica Sherlock Dina",
      role: "Web Designer",
      image:
           "src/assets/team2.webp"
    },
    {
      id: 3,
      name: "Mr. Adam Smith Roy",
      role: "Video Editor",
      image:
       "src/assets/team3.webp"
    },
    {
      id: 4,
      name: "Miss Alex Mika",
      role: "Marketer",
      image:
           "src/assets/team4.webp"
    },
  ];

  return (
    <>
      <style jsx>{`
        [data-aos] {
          opacity: 0;
          transform: translateY(60px) scale(0.95);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        [data-aos].aos-animate {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .team-card {
          overflow: hidden;
          background: transparent;
          border-radius: 1rem;
        }
        .team-image {
          filter: grayscale(100%);
          transition: transform 0.6s ease, filter 0.6s ease;
        }
        .team-card:hover .team-image {
          filter: grayscale(0%);
          transform: scale(1.08);
        }
        .divider {
          display: block;
          width: 40px;
          height: 2px;
          background: #22c55e;
          margin: 0.5rem auto;
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
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300"
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
                data-aos-delay={index * 200} // stagger effect
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image w-full h-[400px] object-cover rounded-xl"
                  />
                </div>

                {/* Info */}
                <div className="text-center mt-4">
                  <span className="text-sm text-gray-400">{member.role}</span>
                  <span className="divider"></span>
                  <h3 className="text-lg font-bold text-white">
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
