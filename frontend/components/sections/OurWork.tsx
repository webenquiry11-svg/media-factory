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
    // NOTE: 'overflow-hidden' removed from section to allow sticky behavior
    <section ref={ref} className="bg-white py-24 px-6 sm:px-12 lg:px-8 font-sans relative">
      <div className="container mx-auto max-w-7xl">
        
        {/* --- HEADER SECTION --- */}
        <div className={`text-center mb-24 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Logo Icon */}
          <div className="flex justify-center mb-5">
             <div className="w-8 h-8 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rotate-45 rounded-sm" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#111] rotate-45 rounded-sm" />
             </div>
          </div>
          
          <span className="block text-gray-500 font-bold text-[12px] tracking-[0.2em] uppercase mb-4">
            How We Work
          </span>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111] uppercase leading-[1.1] mb-6">
            Our Printing Machines <br /> & Technology
          </h2>

          <p className="text-gray-500 text-[16px] max-w-2xl mx-auto leading-relaxed mb-8">
            In this section, we will represent our printing machines and explain how we work, utilizing the latest technology.
          </p>

          {/* Decorative Yellow Ring */}
          <div className="flex justify-center">
             <div className="w-3 h-3 rounded-full border-[3px] border-red-500" />
          </div>
        </div>

        {/* --- STACKING CARDS SECTION --- */}
        <div className="relative">
          
          {machines.map((machine, index) => (
            <div 
              key={index}
              className={`sticky top-32 mb-24 transition-all duration-700 ease-out`}
              style={{ 
                zIndex: index + 1,
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(100px)',
              }}
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-start">
                
                {/* 1. Left Image Area */}
                <div className="w-full lg:w-[60%] relative z-10">
                   <div className="relative h-[450px] lg:h-[550px] overflow-hidden rounded-sm group bg-white">
                      <img
                        src={machine.image}
                        alt={machine.title}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 p-8"
                      />
                   </div>
                </div>

                {/* 2. Right Content Box (Overlapping) */}
                <div className="w-full lg:w-[50%] lg:-ml-20 relative z-20 mt-[-50px] lg:mt-16">
                   
                   <div className="bg-white shadow-[0_30px_60px_rgba(0,0,0,0.15)] relative overflow-hidden rounded-sm border-t border-gray-100">
                      
                      {/* Soft Glow Effect (Dynamic Color) */}
                      <div className={`absolute -top-20 -right-20 w-[300px] h-[300px] bg-gradient-to-bl ${machine.color} via-transparent to-transparent rounded-full pointer-events-none blur-3xl opacity-80`} />

                      {/* Text Content */}
                      <div className="p-10 lg:p-14 relative z-10">
                         <div className="flex items-center gap-3 mb-4">
                           <machine.icon className="w-5 h-5 text-red-500" />
                           <span className="text-red-500 font-bold text-[11px] uppercase tracking-widest block">
                              {machine.category}
                           </span>
                         </div>
                         
                         <h3 className="text-3xl lg:text-[2.2rem] font-extrabold text-[#111] uppercase leading-[1.1] mb-6">
                            {machine.title}
                         </h3>
                         <p className="text-gray-500 text-[15px] leading-relaxed mb-10 max-w-md">
                            {machine.description}
                         </p>

                         {/* Tags / Action */}
                         <div className="flex flex-wrap gap-4 mb-2">
                            <span className="px-6 py-2 border border-gray-200 rounded-full text-[10px] font-bold uppercase text-gray-400 tracking-wider hover:bg-[#111] hover:text-white hover:border-[#111] transition-colors cursor-pointer">
                               Latest Tech
                            </span>
                            <span className="px-6 py-2 border border-gray-200 rounded-full text-[10px] font-bold uppercase text-gray-400 tracking-wider hover:bg-[#111] hover:text-white hover:border-[#111] transition-colors cursor-pointer">
                               High Quality
                            </span>
                         </div>
                      </div>

                      {/* Bottom Red Action Bar */}
                      <div className="bg-red-500 h-[85px] flex items-center justify-between px-10 lg:px-14 cursor-pointer group hover:bg-red-600 transition-colors duration-300">
                         <span className="text-white font-bold text-[12px] uppercase tracking-[0.15em]">
                            View Specifications
                         </span>
                         
                         {/* Circular White Arrow Button */}
                         <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm transform group-hover:scale-110 transition-transform duration-300">
                            <ArrowRight className="w-5 h-5 text-[#111]" />
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