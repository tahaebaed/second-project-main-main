import React, { useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';

export default function Service() {
  const { isDark } = useTheme();

  useEffect(() => {
    const elements = document.querySelectorAll('[data-aos]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      title: "Website Development",
      description:
        "We are responsive user-friendly websites tailored to your brand, ensuring seamless functionality, engaging design optimized.",
      delay: 100
    },
    {
      id: 2,
      title: "Digital Marketing",
      description:
        "Boost your brand with expert digital marketing: SEO, social media, content creation, paid ads, and data-driven strategies for growth.",
      delay: 200
    },
    {
      id: 3,
      title: "Creative Branding",
      description:
        "We design distinctive branding and visual identities that connect with your audience, boosting brand recognition and leaving.",
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

  /* Service Card Styles */
  .service-card {
    background: #f9fafb;           /* لون واضح في اللايت */
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
    border: 1px solid #e5e7eb;     /* بورد خفيف للايت */
  }
  .dark .service-card {
    background: #18191B;           /* خلفية الدارك */
    border-color: #2e2f31;
  }

  /* Hover Overlay */
  .service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #9CFE4F;
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

  /* Text Hover Colors */
  .service-card:hover .card-title,
  .service-card:hover .card-description,
  .service-card:hover .learn-more-btn {
    color: #1a1a1a !important;   /* أسود واضح في اللايت */
  }
  .dark .service-card:hover .card-title,
  .dark .service-card:hover .card-description,
  .dark .service-card:hover .learn-more-btn {
    color: #0e0f11 !important;   /* لون داكن يناسب الدارك */
  }

  /* Learn More Button Styles */
  .learn-more-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    transition: color 0.3s ease;
  }
  .learn-more-btn::after {
    content: '';
    width: 2.5rem;
    height: 1px;
    background-color: currentColor;
    margin-left: 0.5rem;
    transition: width 0.4s ease;
  }
  .learn-more-btn:hover::after {
    width: 3rem;
  }

  /* Primary Color Definition */
  .bg-primary {
    background: #93ec4c;
  }
  .text-primary {
    color:black;
  }

`}</style>


      <section
        className={`relative py-10 md:py-20 transition-colors duration-300 ${
          isDark ? 'bg-[#0e0f11]' : 'bg-[#cfcaca9c]'
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl text-center md:text-left">
          {/* Header */}
          <div className="flex flex-wrap items-end mb-16">
            <div className="w-full lg:w-1/2 mb-8">
              <div className="section-title text-center md:text-left" data-aos="fade-right">
                <span className="inline-flex items-center border border-[#93e850] rounded-full px-4 py-2 mb-5">
                  Our Service
                </span>
                <h2
                  className={`text-2xl lg:text-5xl font-bold leading-tight ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Innovative Services That <br /> Elevate Your Brand
                </h2>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div
                className="text-box lg:float-right text-[100%] md:w-[330px]"
                data-aos="fade-left"
              >
                <p
                  className={`text-base lg:text-lg ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  We are a{' '}
                  <span className={isDark ? 'text-white' : 'text-gray-900'}>
                    digital Creative agency
                  </span>{' '}
                  with 25 years of experience, specializing in delivering
                  cutting-edge
                </p>
              </div>
            </div>
          </div>

          {/* Cards */}
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
                <div className="service-card p-10">
                  <h4
                    className={`card-title text-2xl font-bold mb-5 transition-colors ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {service.title}
                  </h4>
                  <p
                    className={`card-description mb-6 transition-colors ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {service.description}
                  </p>
                  <button
                    className={`learn-more-btn ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
