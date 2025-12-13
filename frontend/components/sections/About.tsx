"use client";
import React from 'react';
import { ArrowUpRight, ArrowRight, Star, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,    
  });

  const headline = "TRANSFORMING THE BRANDING OUTDOORS";
  const words = headline.split(" ");

  const subHeadline = "EXPERT SOLUTIONS. TANGIBLE RESULTS.";
  const subHeadlineWords = subHeadline.split(" ");

  const companies = [
    { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Spotify", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
    { name: "Airbnb", url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
    { name: "Stripe", url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
  ];

  return (
    <section ref={ref} className="bg-white pt-12 sm:pt-20 lg:pt-24 pb-8 px-4 sm:px-8 lg:px-16 xl:px-24 font-sans overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        {/* Main Grid: Content Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16 lg:mb-20">
          
          {/* --- LEFT CONTENT SIDE --- */}
          <div className="relative z-10 pt-4">
            
            {/* Header Tagline */}
            <div className={`flex items-center gap-3 mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
               <div className="w-3 h-3 bg-red-500 rotate-45" /> 
               <span className="text-gray-500 font-bold tracking-[0.2em] text-[10px] sm:text-[11px] uppercase">Get To Know Us</span>
            </div>
            
            {/* Main Headline (Animated) */}
            <h2 className="text-3xl sm:text-4xl md:text-[3.2rem] font-extrabold text-[#111] uppercase leading-[1.1] tracking-tight mb-6">
              {words.map((word, index) => (
                <span key={index} className="inline-block overflow-hidden mr-2 sm:mr-3">
                  <span 
                    className={`inline-block transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${inView ? 'translate-y-0' : 'translate-y-full'}`}
                    style={{ transitionDelay: `${100 + index * 50}ms` }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h2>
            
            {/* Description Text */}
            <div className="overflow-hidden mb-8 sm:mb-12">
              <p className={`text-gray-500 leading-relaxed text-[14px] sm:text-[15px] max-w-lg font-medium transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${inView ? 'translate-y-0' : 'translate-y-full'}`} style={{ transitionDelay: '400ms' }}>
                At Media Factory, we redefine outdoor and indoor advertising for leading brands. Every campaign is carefully crafted using the latest methods and a deep understanding of real-world consumer behavior, ensuring your message stands out in high-traffic spaces.
              </p>
            </div>

            {/* Inner Content Grid (Circle Image + List) */}
            {/* Mobile: Flex Column (Stacked) | Tablet+: Flex Row */}
            <div className={`flex flex-col sm:flex-row gap-8 mb-8 sm:mb-12 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '500ms' }}>
              
              {/* Circular Image */}
              <div className="relative shrink-0 mx-auto sm:mx-0">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                   <div className={`absolute inset-0 rounded-full border-2 border-transparent border-l-red-500 border-b-red-500 rotate-[-45deg] transition-transform duration-1000 ${inView ? 'scale-110' : 'scale-75'}`} />
                   <div className={`w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10 transition-transform duration-1000 ${inView ? 'scale-100' : 'scale-75'}`}>
                     <img 
                       src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                       alt="Meeting" 
                       className="w-full h-full object-cover"
                     />
                   </div>
                   <div className="absolute -top-1 -right-2 text-red-500 z-20">
                      <Star className="w-6 h-6 sm:w-8 sm:h-8 fill-current rotate-12 animate-[pulse-zoom_2s_ease-in-out_infinite]" />
                   </div>
                </div>
              </div>

              {/* Feature List & Sub-headline */}
              <div className="flex flex-col justify-center pt-2 text-center sm:text-left">
                <h3 className="text-red-500 font-bold uppercase tracking-wide text-[14px] sm:text-[15px] leading-tight mb-5">
                  {subHeadlineWords.map((word, index) => (
                    <span key={index} className="inline-block overflow-hidden mr-2">
                      <span 
                        className={`inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${inView ? 'translate-y-0' : 'translate-y-full'}`}
                        style={{ transitionDelay: `${600 + index * 50}ms` }}
                      >
                        {word}
                      </span>
                    </span>
                  ))}
                </h3>
                
                <ul className="space-y-3 inline-block sm:block text-left mx-auto sm:mx-0">
                  {[
                    "Targeted Indoor Campaigns",
                    "High-Impact Print & Digital Displays",
                    "Creative Strategy & Execution",
                    "Certified Production & Install Teams"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-center gap-3 transition-all duration-500 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`} style={{ transitionDelay: `${700 + index * 100}ms` }}>
                      <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                        <ArrowRight className="w-3 h-3 text-red-600" />
                      </div>
                      <span className="text-[#111] font-bold text-[12px] sm:text-[13px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Row: Avatars + Button */}
            <div className={`flex flex-col sm:flex-row items-center gap-6 sm:gap-8 border-t border-gray-100 pt-8 max-w-lg transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '900ms' }}>
              <button className="px-10 py-4 bg-red-500 hover:bg-red-600 text-white text-sm font-bold uppercase tracking-widest rounded-full transition-all shadow-md hover:shadow-lg w-full sm:w-auto">
                MORE ABOUT US
              </button>
            </div>
          </div>

          {/* --- RIGHT IMAGE SIDE --- */}
          <div className="relative pl-0 lg:pl-10 mt-8 lg:mt-0">
            {/* Main Arch Image */}
            <div 
              className="relative rounded-t-full rounded-b-none overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px] shadow-2xl transition-[clip-path] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ clipPath: inView ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)' }}
            >
              <img 
                src="/media factory images/get to know us.png" 
                alt="Team working" 
                className={`w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${inView ? 'scale-100' : 'scale-125'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* NEW ICON: ArrowUpRight (replacing Play) */}
              <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/40 flex items-center justify-center bg-white/10 backdrop-blur-md group cursor-pointer hover:bg-red-500 hover:border-red-500 transition-all duration-500">
                  <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-black transition-colors" />
                </div>
              </div>
            </div>

            {/* Floating "Awards" Badge */}
            {/* Mobile: Top-Left overlapping image slightly | Desktop: floating out left */}
            <div className={`absolute top-8 left-4 sm:-left-4 md:-left-10 bg-white p-4 sm:p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-sm min-w-[140px] sm:min-w-[180px] text-center z-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '500ms' }}>
               <div className="flex justify-center mb-2">
                 <Award className="w-8 h-8 sm:w-10 sm:h-10 text-red-500 stroke-[1.5]" />
               </div>
               <h4 className="text-2xl sm:text-3xl font-extrabold text-[#111] mb-1">38+</h4>
               <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider">Awards Won</p>
            </div>

            {/* Decorative Sparkle */}
            <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-4 text-red-500">
               <svg width="60" height="60" sm-width="90" sm-height="90" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 sm:w-24 sm:h-24 animate-spin [animation-duration:5s]">
                 <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
               </svg>
            </div>
          </div>
        </div>

        {/* --- TRUSTED BY SECTION --- */}
        <div className={`border border-gray-200 p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-12 transition-all duration-1000 delay-[800ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Left Text */}
          <div className="w-full md:w-auto flex-shrink-0 flex items-center justify-center md:justify-start md:pr-12 md:border-r border-gray-200 pb-4 md:pb-0 border-b md:border-b-0">
             <h4 className="font-extrabold text-[#111] uppercase leading-tight text-[12px] sm:text-[13px] tracking-wide text-center md:text-left">
               Trusted By <br className="hidden md:block"/> Top Companies
             </h4>
          </div>

          {/* Right Logo Row */}
          <div className="flex-1 w-full flex flex-wrap justify-center md:justify-between items-center gap-8">
             {companies.map((company, index) => (
                <img 
                  key={index}
                  src={company.url} 
                  alt={company.name} 
                  className="h-5 sm:h-6 md:h-8 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                />
             ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;