"use client";
import React from 'react';
import { ArrowRight, Printer, Layers, Zap, Leaf } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const OurWork = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const machines = [
    {
      title: "Advanced Flex Printing",
      category: "Flex Technology",
      description: "Using cutting-edge flex printing technology and expert techniques, we deliver vibrant, high-definition prints with precision and speed.",
      image: "/machine images/machine images/advanced flex printing.png",
      icon: Layers,
      color: "from-blue-500/20"
    },
    {
      title: "Premium Eco Solvent Printing",
      category: "Eco Solvent Printing",
      description: "Our eco-solvent printing combines advanced machinery with sustainable practices for durable, eye-catching graphics produced professionally.",
      image: "/machine images/machine images/eco solvent printing.png",
      icon: Zap,
      color: "from-green-500/20"
    },
    {
      title: "State-of-the-Art Digital Printing",
      category: "State-of-the-Art",
      description: "With the latest digital printing systems and skilled operation, we ensure crisp, consistent color and flawless print quality for every project.",
      image: "/machine images/machine images/digital printing machine.png",
      icon: Printer,
      color: "from-purple-500/20"
    },
    {
      title: "Eco-Friendly Fabric Printing",
      category: "Fabric Printing",
      description: "We leverage innovative, eco-friendly fabric printing technology and meticulous workmanship to create sharp, environmentally responsible textile prints.",
      image: "/machine images/machine images/fabric printing.png",
      icon: Leaf,
      color: "from-red-500/20"
    }
  ];

  return (
    <section ref={ref} className="bg-white pt-8 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-8 font-sans relative">
      <div className="container mx-auto max-w-7xl">
        
        {/* --- HEADER SECTION --- */}
        <div className={`text-center mb-12 lg:mb-24 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <span className="block text-gray-500 font-bold text-[10px] sm:text-[12px] tracking-[0.2em] uppercase mb-4">
            How We Work
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111] uppercase leading-[1.1] mb-6">
            Our Printing Machines <br className="hidden sm:block" /> & Technology
          </h2>

          <p className="text-gray-500 text-sm sm:text-[16px] max-w-2xl mx-auto leading-relaxed mb-8">
            In this section, we will represent our printing machines and explain how we work, utilizing the latest technology.
          </p>
        </div>

        {/* --- CARDS SECTION --- */}
        <div className="relative flex flex-col gap-12 lg:gap-0">
          
          {machines.map((machine, index) => (
            <div 
              key={index}
              // RESPONSIVE LOGIC:
              // Mobile: relative (scrolls normally), mb-0 (gap handled by parent)
              // Desktop (lg): sticky (stacks), top-32
              className={`
                relative 
                lg:sticky lg:top-32 
                lg:mb-24 
                transition-all duration-700 ease-out
              `}
              style={{ 
                zIndex: index + 1,
                // Only fade/slide in if the section is in view
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(50px)',
              }}
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-start group">
                
                {/* 1. IMAGE AREA */}
                {/* Mobile: Full Width, Fixed Height. Desktop: 60% Width */}
                <div className="w-full lg:w-[60%] relative z-10 shadow-lg lg:shadow-none rounded-t-xl lg:rounded-none overflow-hidden">
                   <div className="relative h-[250px] sm:h-[350px] lg:h-[550px] bg-gray-50 border border-gray-100">
                      <img
                        src={machine.image}
                        alt={machine.title}
                        className="w-full h-full object-contain p-6 sm:p-10 transition-transform duration-700 group-hover:scale-105"
                      />
                   </div>
                </div>

                {/* 2. TEXT CONTENT AREA */}
                {/* Mobile: Stacks below image, no negative margin, full width.
                   Desktop: 50% width, pulls left (-ml-20) to overlap image.
                */}
                <div className="w-full lg:w-[50%] lg:-ml-20 relative z-20 mt-0 lg:mt-16">
                   
                   <div className="bg-white shadow-xl lg:shadow-[0_30px_60px_rgba(0,0,0,0.15)] relative overflow-hidden rounded-b-xl lg:rounded-sm border-t lg:border-t-0 border-gray-100">
                      
                      {/* Glow Effect */}
                      <div className={`absolute -top-20 -right-20 w-[250px] h-[250px] bg-gradient-to-bl ${machine.color} via-transparent to-transparent rounded-full pointer-events-none blur-3xl opacity-50 lg:opacity-80`} />

                      {/* Content */}
                      <div className="p-6 sm:p-10 lg:p-14 relative z-10">
                          <div className="flex items-center gap-3 mb-4">
                            <machine.icon className="w-5 h-5 text-red-500" />
                            <span className="text-red-500 font-bold text-[11px] uppercase tracking-widest block">
                              {machine.category}
                            </span>
                          </div>
                          
                          <h3 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-[#111] uppercase leading-tight mb-4">
                             {machine.title}
                          </h3>
                          
                          <p className="text-gray-500 text-[14px] sm:text-[15px] leading-relaxed mb-8 max-w-md">
                             {machine.description}
                          </p>

                          <div className="flex flex-wrap gap-3">
                             <span className="px-4 py-2 border border-gray-200 rounded-full text-[10px] font-bold uppercase text-gray-400 tracking-wider hover:bg-[#111] hover:text-white hover:border-[#111] transition-colors cursor-pointer">
                               Latest Tech
                             </span>
                             <span className="px-4 py-2 border border-gray-200 rounded-full text-[10px] font-bold uppercase text-gray-400 tracking-wider hover:bg-[#111] hover:text-white hover:border-[#111] transition-colors cursor-pointer">
                               High Quality
                             </span>
                          </div>
                      </div>

                      {/* Bottom Action Bar */}
                      <div className="bg-red-500 h-[70px] lg:h-[85px] flex items-center justify-between px-6 lg:px-14 cursor-pointer hover:bg-red-600 transition-colors duration-300">
                          <span className="text-white font-bold text-[11px] lg:text-[12px] uppercase tracking-[0.15em]">
                            View Specifications
                          </span>
                          
                          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                             <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-[#111]" />
                          </div>
                      </div>

                   </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default OurWork;