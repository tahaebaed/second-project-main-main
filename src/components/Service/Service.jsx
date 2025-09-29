import React, { useEffect } from 'react';

export default function Service() {
  useEffect(() => {
    // Simulate AOS animations
    const elements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, {
      threshold: 0.1
    });

    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      title: "Website Development",
      description: "We are responsive user-friendly websites tailored to your brand, ensuring seamless functionality, engaging design optimized.",
      delay: 100
    },
    {
      id: 2,
      title: "Digital Marketing", 
      description: "Boost your brand with expert digital marketing: SEO, social media, content creation, paid ads, and data-driven strategies for growth.",
      delay: 200
    },
    {
      id: 3,
      title: "Creative Branding",
      description: "We design distinctive branding and visual identities that connect with your audience, boosting brand recognition and leaving.",
      delay: 300
    }
  ];

  return (
    <>
      <style jsx>{`
        /* AOS Animation Styles */
        [data-aos] {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
        }
        [data-aos].aos-animate {
          opacity: 1;
          transform: translateY(0);
        }
        [data-aos="fade-up"] {
          transform: translateY(50px);
        }
        [data-aos="fade-up"].aos-animate {
          transform: translateY(0);
        }
        [data-aos="fade-left"] {
          transform: translateX(50px);
        }
        [data-aos="fade-left"].aos-animate {
          transform: translateX(0);
        }
        [data-aos="fade-right"] {
          transform: translateX(-50px);
        }
        [data-aos="fade-right"].aos-animate {
          transform: translateX(0);
        }

        /* Service Card Styles */
        .service-card {
          background: #18191B;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #9CFE4F;
;
          transition: left 0.5s ease-in-out;
          z-index: 0;
        }
        
        .service-card:hover::before {
          left: 0;
        }
        
        .service-card > * {
          position: relative;
          z-index: 1;
        }
        
        .service-card:hover .card-icon {
          color: #1a1a1a;
          transform: scale(1.1) rotate(5deg);
        }
        
        .service-card:hover .card-title {
          color: #1a1a1a;
        }
        
        .service-card:hover .card-description {
          color: rgba(26, 26, 26, 0.8);
        }
        
        .service-card:hover .learn-more-btn {
          color: #1a1a1a;
        }
        
        .service-card:hover .learn-more-btn::after {
          background-color: #1a1a1a;
          width: 3rem;
        }

        /* Learn More Button Styles */
        .learn-more-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          font-weight: 600;
          color: #ffffff;
          transition: all 0.3s ease;
        }
        
        .learn-more-btn::after {
          content: '';
          width: 2.5rem;
          height: 1px;
          background-color: white;
          margin-left: 0.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .learn-more-btn:hover::after {
          background-color: #10b981;
          width: 3rem;
        }
        
        .service-card:not(:hover) .learn-more-btn:hover {
          color: #10b981;
        }

        /* Card Icon Animation */
        .card-icon {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Primary Color Definition */
        .bg-primary {
          background: linear-gradient(135deg, #10b981, #059669);
        }
        
        .text-primary {
          color: #10b981;
        }
        
        .border-primary {
          border-color: #10b981;
        } 
      `}</style>

      <section className="relative py-32 bg-red-200  dark:bg-[#0e0f11]  transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="flex flex-wrap items-end mb-12 lg:mb-16">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="section-title" data-aos="fade-right">
                <span className="inline-flex items-center text-white border border-primary rounded-full px-4 py-2 mb-5">
                  Our Service 
                  <span className="w-12 h-px bg-primary ml-2"></span>
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight transition-colors">
                  Innovative Services That<br />
                  Elevate Your Brand
                </h2>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="text-box lg:float-right w-[330px] " data-aos="fade-left">
                <p className="text-[#9E9FA0]  text-base lg:text-lg transition-colors">
                  We are a <span className="text-white font-semibold">digital Creative agency</span> with 25 years of experience, specializing in delivering cutting-edge
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center -mx-4">
            
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`w-full md:w-1/2 lg:w-1/3 px-4 mb-8 ${
                  index === 1 ? 'lg:mt-16' : index === 2 ? 'lg:mt-32' : ''
                }`}
                data-aos="fade-up"
                data-aos-delay={service.delay}
              >
                <div className="service-card p-10 border border-transparent">
                  <div className="card-icon text-6xl mb-6">
                    {service.icon}
                  </div>
                  <div className="content">
                    <h4 className="card-title text-2xl font-bold text-white mb-5 transition-colors">
                      {service.title}
                    </h4>
                    <p className="card-description text-gray-400 mb-6 transition-colors">
                      {service.description}
                    </p>
                    <button className="learn-more-btn">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}