import React, { useEffect } from 'react';

const Award = () => {
  useEffect(() => {
    // Simulate fadeup animations
    const elements = document.querySelectorAll('.pf_fadeup');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate');
      }, index * 200);
    });
  }, []);

  const awards = [
    {
      id: 1,
      platform: 'Microsoft Platform',
      award: 'Website 2024 - 1st Winner',
      date: 'Mar 2024'
    },
    {
      id: 2,
      platform: 'LinkedIn Platform',
      award: 'Mobile App Winner',
      date: 'Apr 2024'
    },
    {
      id: 3,
      platform: 'Adobe Platform',
      award: 'Digital Vanguard - 1st Winner',
      date: 'May 2024'
    },
    {
      id: 4,
      platform: 'Fiverr Platform',
      award: 'Winner Innova excel Award',
      date: 'Jul 2024'
    },
    {
      id: 5,
      platform: 'Upwork Platform',
      award: 'Top Rated Winner Award',
      date: 'Aug2024'
    },
    {
      id: 6,
      platform: 'Upwork Platform',
      award: 'Top Rated Winner Award',
      date: 'Aug2024'
    }
  ];

  return (
    <>
      {/* Animation Styles */}
      <style jsx>{`
        .pf_fadeup {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-in-out;
        }
        .pf_fadeup.animate {
          opacity: 1;
          transform: translateY(0);
        }
        .agenko-award-box {
          border-bottom: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }
        .agenko-award-box{
          background-color: #18191B;
          padding-left: 1rem;
        }
        .sub-title {
          color: #10b981;
          font-size: 0.875rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
          display: inline-block;
          padding: 0.5rem 1.5rem;
          border: 1px solid #10b981;
          border-radius: 9999px;
        }
      `}</style>

      <section className=" bg-[#0e0f11] py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
            <div className="col-lg-6">
              {/* Section Title */}
              <div className="section-title mb-12 pf_fadeup">
                <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mt-4">
                  Striving for Excellence Awards & Recognition
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              {/* Text Box */}
              <div className="text-box lg:ml-auto mb-12 pf_fadeup w-[330px] ">
                <p className="text-[#9E9FA0] text-lg leading-relaxed">
                  We are a <span className="font-semibold text-white">digital Creative agency</span> with 25 years of experience, specializing in delivering cutting-edge
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Award Image */}
            <div className="lg:col-span-4">
              <div className="agk-image-box mb-12 pf_fadeup">
                <div className="agk-image">
                  <div className="">
                                   <img src="./src/assets/award1 (1).jpg " alt="" />

                  </div>
                </div>
              </div>
            </div>

            {/* Awards List */}
            <div className="lg:col-span-8">
              <div className="award-list">
                {awards.map((award, index) => (
                  <div 
                    key={award.id}
                    className={`agenko-award-box style-one mb-5 py-6 px-4 pf_fadeup`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                      {/* Award Platform */}
                      <div className="award-platform">
                        <h5 className="text-[#9E9FA0] font-bold text-md">
                          {award.platform}
                        </h5>
                      </div>
                      
                      {/* Award Name */}
                      <div className="award-name">
                        <h5 className="text-white font-bold text-lg">
                          {award.award}
                        </h5>
                      </div>
                      
                      {/* Award Date */}
                      <div className="award-date md:text-right">
                        <h5 className="text-[#9E9FA0]  font-bold text-md">
                          {award.date}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Award;