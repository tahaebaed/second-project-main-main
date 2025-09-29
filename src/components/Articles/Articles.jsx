import React, { useEffect } from 'react';

const ArticlesSection = () => {
  useEffect(() => {
    // AOS Animation Logic
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-aos]');
      
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if element is in viewport
        if (rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
          element.classList.add('aos-animate');
        } else {
          element.classList.remove('aos-animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const articles = [
    {
      id: 1,
      category: "Website",
      title: "MKT Gency for your online business Plane.",
      description: "Strategic marketing agency boosting to your online business success.",
      date: "15 Apr, 2024",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      category: "Website",
      title: "Meeting Collaboration for your business.",
      description: "Strategic marketing agency boosting to your online business success.",
      date: "15 Apr, 2024",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
    }
  ];

  return (
    <>
      <style>{`
        [data-aos] {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        [data-aos].aos-animate {
          opacity: 1;
          transform: translateY(0);
        }
        
        [data-aos="fade-up"] {
          transform: translateY(50px);
        }
        
        [data-aos="fade-left"] {
          transform: translateX(50px);
        }
        
        [data-aos="fade-right"] {
          transform: translateX(-50px);
        }
        
        [data-aos].aos-animate[data-aos="fade-up"],
        [data-aos].aos-animate[data-aos="fade-left"],
        [data-aos].aos-animate[data-aos="fade-right"] {
          transform: translate(0, 0);
        }
      `}</style>
      
      <div className="min-h-screen bg-black text-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-16" data-aos="fade-up">
            <div className="inline-block border border-green-400 rounded-full px-6 py-2 mb-6">
              <span className="text-green-400 text-sm font-medium">Latest Articles</span>
            </div>
            
            <div className="flex justify-between items-end">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-tight">
                Stay Updated with Our Recent Articles
              </h1>
              
              <button className="hidden md:block bg-green-400 text-black font-semibold px-8 py-4 rounded-full hover:bg-green-500 transition-colors">
                View All Blogs
              </button>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {articles.map((article, index) => (
              <div
                key={article.id}
                data-aos={index === 0 ? "fade-right" : "fade-left"}
                className="bg-zinc-900 rounded-2xl overflow-hidden hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-2/5">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 md:h-full object-cover grayscale"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-3/5 p-8 flex flex-col justify-between">
                    <div>
                      <span className="inline-block bg-zinc-800 text-gray-300 text-sm px-4 py-2 rounded-full mb-4">
                        {article.category}
                      </span>
                      
                      <h3 className="text-2xl font-bold mb-4 leading-tight">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-6">
                        {article.description}
                      </p>
                    </div>
                    
                    <div className="text-gray-500 text-sm">
                      {article.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View All Button */}
          <div className="md:hidden text-center" data-aos="fade-up">
            <button className="bg-green-400 text-black font-semibold px-8 py-4 rounded-full hover:bg-green-500 transition-colors">
              View All Blogs
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlesSection;