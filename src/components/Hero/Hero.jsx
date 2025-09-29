import React, { useEffect, useState } from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Animated text component for letter-by-letter animation
  const AnimatedText = ({ text, className, delay = 0 }) => {
    return (
      <div className={className}>
        {text.split('').map((letter, index) => (
          <span
            key={index}
            className={`inline-block transition-all duration-700 ease-out ${
              animationStarted 
                ? 'opacity-100 translate-y-0 rotate-x-0' 
                : 'opacity-0 translate-y-8 rotate-x-90'
            }`}
            style={{
              transitionDelay: `${delay + index * 80}ms`,
              transformStyle: 'preserve-3d'
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </div>
    );
  };

  return (
    <>
      <style jsx>{`
        .rotate-x-90 {
          transform: rotateX(90deg);
        }
        
        .rotate-x-0 {
          transform: rotateX(0deg);
        }
        
        .hero-blur {
          filter: blur(150px);
        }
        
        .rotating-element {
          animation: rotate 8s linear infinite;
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .play-pulse {
          animation: playPulse 2s ease-in-out infinite;
        }
        
        @keyframes playPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .video-overlay {
          background: linear-gradient(45deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2));
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-black pt-20  overflow-hidden">
        
        {/* Background Blur Shapes */}
        <div className="absolute -top-1/5 -left-1/4 z-0">
          <span className="block w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[760px] lg:h-[760px] rounded-full bg-[#9cfe4f99] hero-blur"></span>
        </div>
        <div className="absolute -top-1/5 -right-1/5 z-0">
          <span className="block w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[660px] lg:h-[660px] rounded-full bg-[#8778F5] hero-blur"></span>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            {/* CREATIVE Title */}
            <div className="mb-4">
              <AnimatedText 
                text="CREATIVE"
                className="text-5xl sm:text-7xl lg:text-[120px] xl:text-[160px] leading-none font-bold text-white"
                delay={0}
              />
            </div>
            
            {/* AGENCY Title with Element and Description */}
            <div className="relative mb-8 lg:mb-12">
              {/* AGENCY Title and Rotating Element */}
              <div className="flex justify-end items-center mb-6 lg:mb-8">
                <AnimatedText 
                  text="AGENCY"
                  className="text-5xl sm:text-7xl lg:text-[120px] xl:text-[160px] leading-none font-bold text-white"
                  delay={800}
                />
                
                {/* Rotating Element */}
                <div className="absolute right-0 -top-8 sm:-top-12 lg:-top-20 transform -translate-y-1/2 hidden sm:block">
                  <div 
                    className={`rotating-element transition-all duration-1000 ${
                      animationStarted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                    style={{ transitionDelay: '1.8s' }}
                  >
                             <img src="./src/assets/element.png"  alt="" />

                  </div>
                </div>
              </div>

              {/* Description - Same Line on Large Screens */}
              <div className="lg:absolute lg:left-0 lg:bottom-0 w-[430px]  ">
                <p 
                  className={`text-sm sm:text-base lg:text-lg leading-relaxed text-[#9E9FA0] transition-all duration-1000 ${
                    animationStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '2s' }}
                >
                  We are a <span className="text-white font-semibold">Creative Agency</span> with over 25 years of Our experience, specializing in delivering cutting-edge digital solutions, including web design.
                </p>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="mt-8 lg:mt-12 ">
              <button 
                className={`inline-flex items-center justify-center bg-green-500 hover:bg-green-400 px-6 sm:px-8 lg:px-10 py-3 lg:py-4 rounded-full text-black font-bold text-sm sm:text-base transition-all duration-1000 hover:scale-105 ${
                  animationStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '2.3s' }}
              >
                Learn More
              </button>
            </div>

          </div>
             <section className="my-20 lg:my-32 ">
        <div className="container mx-auto px-4 lg:max-w-7xl">
          <div className="w-full">
            <div 
              className={`relative rounded-xl lg:rounded-2xl overflow-hidden transition-all duration-1000 ${
                animationStarted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '2.8s' }}
            >
              <img 
                src="./src/assets/hero-img1.webp"
alt="Creative Team Working"
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
              />
              
              {/* Video Overlay */}
              <div className="video-overlay absolute inset-0 flex items-center justify-center">
                <div 
                  className="play-pulse w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 cursor-pointer"
                >
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 ml-1" fill="currentColor" />
                </div>
                
                {/* Ripple Effects */}
                <div className="absolute w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full border border-white/20 animate-ping"></div>
                <div className="absolute w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full border border-white/10 animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
        
      </section>

      {/* Video Section */}
   
    </>
  );
};

export default Hero;