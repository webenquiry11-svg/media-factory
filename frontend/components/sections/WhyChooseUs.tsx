"use client";
import React from 'react';
import { Play, Check } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const WhyChooseUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Re-animates on scroll for impact
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
    <section ref={ref} className="bg-[#111] py-24 relative overflow-hidden font-sans text-white rounded-t-3xl">
      
      {/* Decorative Yellow Warning Stripes (Left Edge) */}
      <div className="absolute top-0 bottom-0 left-0 w-8 overflow-hidden z-10 hidden lg:block">
        <div className="w-full h-[120%] -mt-10 bg-[repeating-linear-gradient(45deg,theme(colors.red.500),theme(colors.red.500)_10px,transparent_10px,transparent_20px)] opacity-80" />
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* --- LEFT IMAGE SECTION --- */}
          <div className={`relative transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative rounded-lg overflow-hidden h-[500px] lg:h-[600px] w-full group">
              <img 
                src="/media factory images/why choose us.png" 
                alt="Woman in Suit" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Play Button with Rotating Text Ring */}
              <div className="absolute top-10 left-10 z-20">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  {/* Rotating Text SVG */}
                  <svg className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                    <defs>
                      <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    </defs>
                    <text fill="white" fontSize="11.5" fontWeight="bold" letterSpacing="1.2">
                      <textPath href="#circlePath" startOffset="0%">
                        • 3800+ SATISFIED CLIENTS • 3800+ SATISFIED
                      </textPath>
                    </text>
                  </svg>
                  
                  {/* Center Play Icon */}
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 cursor-pointer hover:bg-[#fbbf24] hover:border-[#fbbf24] hover:scale-110 transition-all duration-300">
                     <Play className="w-5 h-5 fill-white text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT CONTENT SECTION --- */}
          <div className={`pl-0 lg:pl-8 transition-all duration-1000 delay-300 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Header */}
            <div className="mb-10">
               <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase leading-tight">
                 WHY CHOOSE US?
               </h2>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {benefits.map((item, i) => (
                 <div key={i} className="group">
                    {/* Icon */}
                    <div className="mb-4 relative inline-block">
                       <div className="w-10 h-10 rounded-full bg-[#222] border border-[#333] flex items-center justify-center group-hover:border-red-500 transition-colors duration-300">
                          <Check className="w-4 h-4 text-red-500" />
                       </div>
                    </div>
                    {/* Text */}
                    <h4 className="text-white font-bold text-lg uppercase mb-2 group-hover:text-red-500 transition-colors">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                 </div>
               ))}
            </div>
            
            {/* Big "DIGITAL" Text Overlay Effect */}
             <div className="mt-16 relative h-20 overflow-hidden">
                <div className="absolute inset-0 flex items-center whitespace-nowrap animate-marquee">
                   <span className="text-[6rem] md:text-[8rem] font-black text-transparent stroke-text opacity-20 uppercase leading-none">
                      DIGITAL • DIGITAL • DIGITAL • DIGITAL •
                   </span>
                </div>
             </div>

          </div>
        </div>
      </div>
      
      {/* Bottom Large Scrolling Text (Marquee) - Outside container for full width */}
      <div className="absolute bottom-[-20px] left-0 w-full overflow-hidden pointer-events-none opacity-10">
         <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite]">
            <span className="text-[10rem] md:text-[14rem] font-black text-white uppercase leading-none tracking-tighter">
               DIGITAL MARKETING AGENCY • WE GROW BRANDS • 
            </span>
         </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 2px white;
        }
        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
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