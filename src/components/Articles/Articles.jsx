import React, { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';

const Articles = () => {
  const [isVisible, setIsVisible] = useState({});

  // Initialize intersection observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-animate-id');
          setIsVisible(prev => ({ ...prev, [id]: true }));
        }
      });
    }, observerOptions);

    // Observe all elements with data-animate-id
    const animatedElements = document.querySelectorAll('[data-animate-id]');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const articles = [
    {
      id: 1,
      category: "Website",
      title: "MKT Gency for your online business Plane.",
      description: "Strategic marketing agency boosting to your online business success.",
      date: "15 Apr, 2024",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      category: "Website", 
      title: "Meeting Collaboration for your business.",
      description: "Strategic marketing agency boosting to your online business success.",
      date: "15 Apr, 2024",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <>
      {/* Custom CSS for animations */}
      <style jsx>{`
        .fade-up-enter {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .fade-up-active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .text-flip {
          position: relative;
          display: inline-block;
          overflow: hidden;
        }
        
        .text-flip .text {
          display: block;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .text-flip .text:last-child {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          transform: translateY(100%);
        }
        
        .theme-btn:hover .text:first-child {
          transform: translateY(-100%);
        }
        
        .theme-btn:hover .text:last-child {
          transform: translateY(0);
        }
        
        .blog-card {
          transition: all 0.4s ease;
        }
        
        .blog-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        
        .blog-image {
          transition: transform 0.6s ease;
        }
        
        .blog-card:hover .blog-image {
          transform: scale(1.1);
        }
        
        .category-tag {
          transition: all 0.3s ease;
        }
        
        .category-tag:hover {
          background-color: #22c55e;
          transform: scale(1.05);
        }
        
        .blog-title {
          transition: color 0.3s ease;
        }
        
        .blog-title:hover {
          color: #22c55e;
        }
        
        @media (max-width: 1024px) {
          .blog-card {
            flex-direction: column;
          }
        }
      `}</style>

      <section className="bg-gray-900 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
            {/* Title */}
            <div 
              className={`mb-8 lg:mb-0 fade-up-enter ${isVisible['header'] ? 'fade-up-active' : ''}`}
              data-animate-id="header"
            >
              <div className="inline-block border border-green-500 text-green-500 px-6 py-2 rounded-full text-sm font-medium mb-6">
                Latest Articles
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
                Stay Updated with Our Recent Articles
              </h2>
            </div>
            
            {/* View All Button */}
            <div 
              className={`text-center lg:text-right fade-up-enter ${isVisible['button'] ? 'fade-up-active' : ''}`}
              data-animate-id="button"
            >
              <button className="theme-btn bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <span className="text-flip">
                  <span className="text">View All Blogs</span>
                  <span className="text">View All Blogs</span>
                </span>
              </button>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <div 
                key={article.id}
                className={`blog-card bg-gray-800 rounded-2xl overflow-hidden shadow-xl fade-up-enter ${isVisible[`article-${article.id}`] ? 'fade-up-active' : ''}`}
                data-animate-id={`article-${article.id}`}
                style={{ 
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div className="flex flex-col xl:flex-row h-full">
                  {/* Image */}
                  <div className="xl:w-1/2 h-64 xl:h-auto relative overflow-hidden">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="blog-image w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r xl:bg-gradient-to-r from-transparent to-gray-900/20"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="xl:w-1/2 p-8 flex flex-col justify-center">
                    {/* Category */}
                    <div className="mb-4">
                      <span className="category-tag inline-block bg-green-500 text-black px-4 py-2 rounded-full text-sm font-semibold cursor-pointer">
                        {article.category}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h4 className="blog-title text-2xl font-bold text-white mb-4 cursor-pointer">
                      {article.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed text-base">
                      {article.description}
                    </p>
                    
                    {/* Date */}
                    <div className="flex items-center text-green-500 text-sm font-medium">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;