// ProjectsSection.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


// 1. بيانات المشاريع (نفس هيكل الصورة)
const projectsData = [
    // العمود الأيسر (Left Column)
    { id: 1, size: 'full', imageSrc: 'assets/images/project1.jpg', category: 'Web Design', title: 'Innovate Ideas for your Products & Business', delay: 100 },
    { id: 2, size: 'half', imageSrc: 'assets/images/project2.jpg', category: 'App Design', title: 'Master your English with flashcards', delay: 200 },
    { id: 3, size: 'half', imageSrc: 'assets/images/project3.jpg', category: 'UI/UX Design', title: 'Hello, Simone. Find new restaurants in your area.', delay: 300 },
    { id: 4, size: 'full', imageSrc: 'assets/images/project4.jpg', category: 'Branding', title: 'Officine Générale', delay: 400 },

    // العمود الأيمن (Right Column)
    { id: 5, size: 'half', imageSrc: 'assets/images/project5.jpg', category: 'Mobile App', title: '300° 45M', delay: 500 },
    { id: 6, size: 'half', imageSrc: 'assets/images/project6.jpg', category: 'Fitness App', title: 'Start your workout now', delay: 600 },
    { id: 7, size: 'full', imageSrc: 'assets/images/project7.jpg', category: 'Digital Agency', title: 'Smart Digital Agency', delay: 700 },
    { id: 8, size: 'full', imageSrc: 'assets/images/project8.jpg', category: 'Web Design', title: 'Creative Javanese a Lead Designer & Mobile', delay: 800 },
];

// 2. مكون العنصر الفردي (ProjectItem) داخل المكون الرئيسي
const ProjectItem = ({ imageSrc, category, title, delay, customClasses }) => {
    return (
        <div
            className={`group relative overflow-hidden rounded-xl shadow-lg mb-8 cursor-pointer ${customClasses}`}
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            {/* الصورة */}
            <div className="thumbnail w-full h-full">
                <img
                    src={imageSrc}
                    alt={title}
                    // للحصول على نسبة أبعاد مماثلة للصورة الأصلية، استخدمنا object-cover
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 min-h-[250px] lg:min-h-[300px]"
                />
            </div>

            {/* محتوى الهوفر (تأثير التمرير) */}
            <div className="hover-content absolute inset-0 bg-black bg-opacity-30 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="content p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <a className="category-btn inline-block text-sm font-medium px-3 py-1 bg-white bg-opacity-20 rounded-full mb-2 hover:bg-opacity-40 transition" href="#">
                        {category}
                    </a>
                    <h4 className="text-xl sm:text-2xl font-bold leading-snug">
                        <a href="#" className="hover:text-lime-300 transition duration-300">
                            {title}
                        </a>
                    </h4>
                </div>
            </div>
        </div>
    );
};

// 3. المكون الرئيسي (ProjectsSection)
const ProjectsSection = () => {
    // تهيئة AOS عند تحميل المكون
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    // تقسيم المشاريع إلى عمودين
    const leftColumnProjects = projectsData.slice(0, 4);
    const rightColumnProjects = projectsData.slice(4, 8);

    return (
        <section className="py-24 md:py-32 bg-gray-900 relative overflow-hidden">
            
            {/* العناصر التزيينية (Decorative Elements) */}
            <div className="absolute left-0 bottom-0 w-32 h-32 md:w-48 md:h-48 rounded-full bg-lime-500 opacity-10 blur-3xl z-0"></div>
            <div className="absolute right-0 top-1/4 w-32 h-32 md:w-60 md:h-60 rounded-full bg-indigo-500 opacity-10 blur-3xl z-0"></div>

            <div className="container-fluid max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-wrap -mx-4">
                    
                    {/* === العمود الأيسر (Left Column) === */}
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="flex flex-wrap -mx-4">
                            {leftColumnProjects.map((project, index) => (
                                <div 
                                    key={project.id} 
                                    className={`px-4 w-full 
                                        ${project.size === 'half' ? 'lg:w-1/2' : 'lg:w-full'} 
                                        ${project.size === 'half' && index === 1 ? 'w-1/2' : ''} 
                                        ${project.size === 'half' && index === 2 ? 'w-1/2' : ''}`}
                                >
                                    <ProjectItem
                                        imageSrc={project.imageSrc}
                                        category={project.category}
                                        title={project.title}
                                        delay={project.delay}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* === العمود الأيمن (Right Column) === */}
                    <div className="w-full lg:w-1/2 px-4">
                         <div className="flex flex-wrap -mx-4">
                            {rightColumnProjects.map((project, index) => (
                                <div 
                                    key={project.id} 
                                    className={`px-4 w-full 
                                        ${project.size === 'half' ? 'lg:w-1/2' : 'lg:w-full'}
                                        ${project.size === 'half' && index === 0 ? 'w-1/2' : ''} 
                                        ${project.size === 'half' && index === 1 ? 'w-1/2' : ''}`}
                                >
                                    <ProjectItem
                                        imageSrc={project.imageSrc}
                                        category={project.category}
                                        title={project.title}
                                        delay={project.delay}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;