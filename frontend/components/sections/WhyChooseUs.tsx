"use client";
import React from 'react';
import { Check } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const WhyChooseUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.2,
  });

  const benefits = [
    {
      title: "Innovative Approach",
      description: "We deliver strategic, creative campaigns that make your brand impossible to ignore in indoor and outdoor spaces.",
    },
    {
      title: "Premium Quality",
      description: "Every project benefits from advanced technology, meticulous production, and uncompromising quality control.",
    },
    {
      title: "Expert Team",
      description: "Our dedicated professionals manage everything, from concept to installation, with precision and expertise.",
    }
  ];

  return (
    <section ref={ref} className="bg-[#111] py-16 sm:py-24 relative overflow-hidden font-sans text-white rounded-t-3xl sm:rounded-t-[3rem]">
      
      {/* Decorative Yellow Warning Stripes (Hidden on Mobile to save width) */}
      <div className="absolute top-0 bottom-0 left-0 w-8 overflow-hidden z-10 hidden xl:block">
        <div className="w-full h-[120%] -mt-10 bg-[repeating-linear-gradient(45deg,theme(colors.red.500),theme(colors.red.500)_10px,transparent_10px,transparent_20px)] opacity-80" />
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* --- LEFT IMAGE SECTION --- */}
          <div className={`relative transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-[350px] sm:h-[500px] lg:h-[600px] w-full group shadow-2xl">
              <img 
                src="/media factory images/why choose us.png" 
                alt="Woman in Suit" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* --- RIGHT CONTENT SECTION --- */}
          <div className={`pl-0 lg:pl-4 xl:pl-8 transition-all duration-1000 delay-300 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Header */}
            <div className="mb-8 sm:mb-10 text-center lg:text-left">
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase leading-tight">
                 WHY CHOOSE US?
               </h2>
               <div className="h-1 w-20 bg-red-500 mt-4 mx-auto lg:mx-0" />
            </div>

            {/* Benefits Grid 
                - Mobile: 1 Column
                - Tablet: 2 Columns
                - Desktop (lg): 1 Column (to fit tight space)
                - Wide Desktop (xl): 2 Columns
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-10">
               {benefits.map((item, i) => (
                 <div key={i} className="group flex flex-col items-center lg:items-start text-center lg:text-left">
                    {/* Icon */}
                    <div className="mb-3 sm:mb-4 relative inline-block">
                       <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#222] border border-[#333] flex items-center justify-center group-hover:border-red-500 transition-colors duration-300 shadow-lg shadow-black/50">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                       </div>
                    </div>
                    {/* Text */}
                    <h4 className="text-white font-bold text-lg sm:text-xl uppercase mb-2 group-hover:text-red-500 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed max-w-sm lg:max-w-none">
                      {item.description}
                    </p>
                 </div>
               ))}
            </div>
            
            {/* Big "VISIBILITY" Text Overlay Effect */}
             <div className="mt-8 sm:mt-10 relative h-24 sm:h-28 overflow-hidden select-none pointer-events-none w-full">
                <div className="flex whitespace-nowrap animate-marquee-infinite">
                   <span className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-black text-transparent stroke-text opacity-10 uppercase leading-none px-4">
                     VISIBILITY • DOMINANCE •
                   </span>
                   <span className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-black text-transparent stroke-text opacity-10 uppercase leading-none px-4">
                     VISIBILITY • DOMINANCE •
                   </span>
                   <span className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-black text-transparent stroke-text opacity-10 uppercase leading-none px-4">
                     VISIBILITY • DOMINANCE •
                   </span>
                   <span className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-black text-transparent stroke-text opacity-10 uppercase leading-none px-4">
                     VISIBILITY • DOMINANCE •
                   </span>
                </div>
             </div>

          </div>
        </div>
      </div>
      
      {/* Bottom Large Scrolling Text (Marquee) */}
      <div className="absolute bottom-[-10px] sm:bottom-[-20px] left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
         <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite]">
            <span className="text-[6rem] sm:text-[10rem] md:text-[14rem] font-black text-white uppercase leading-none tracking-tighter">
               VISIBILITY • DOMINANCE • WE GROW BRANDS • 
            </span>
         </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px white;
        }
        @media (min-width: 640px) {
          .stroke-text {
            -webkit-text-stroke: 2px white;
          }
        }
        .animate-marquee-infinite {
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

export default WhyChooseUs;