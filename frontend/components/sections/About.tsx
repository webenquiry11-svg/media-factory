"use client";
import React from 'react';
import { Play, ArrowRight, Star, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    // triggerOnce: true, 
    threshold: 0.1,    
  });

  const headline = "TRANSFORMING THE BRANDING OUTDOORS";
  const words = headline.split(" ");

  const subHeadline = "EXPERT SOLUTIONS. TANGIBLE RESULTS.";
  const subHeadlineWords = subHeadline.split(" ");

  // Real Company Logo URLs
  const companies = [
    { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Spotify", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
    { name: "Airbnb", url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
    { name: "Stripe", url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
  ];

  return (
    <section ref={ref} className="bg-white py-24 px-6 sm:px-16 lg:px-32 xl:px-48 font-sans overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          
          {/* --- LEFT CONTENT SIDE --- */}
          <div className="relative z-10 pt-4">
            {/* Header Tagline */}
            <div className={`flex items-center gap-3 mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
               <div className="w-3 h-3 bg-red-500 rotate-45" /> 
               <span className="text-gray-500 font-bold tracking-[0.2em] text-[11px] uppercase">Get To Know Us</span>
            </div>
            
            {/* Main Headline (Animated) */}
            <h2 className="text-4xl md:text-[3.2rem] font-extrabold text-[#111] uppercase leading-[1.1] tracking-tight mb-6">
              {words.map((word, index) => (
                <span key={index} className="inline-block overflow-hidden mr-3">
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
            <div className="overflow-hidden mb-12">
              <p className={`text-gray-500 leading-relaxed text-[15px] max-w-lg font-medium transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${inView ? 'translate-y-0' : 'translate-y-full'}`} style={{ transitionDelay: '400ms' }}>
                At Media Factory, we redefine outdoor and indoor advertising for leading brands. Every campaign is carefully crafted using the latest methods and a deep understanding of real-world consumer behavior, ensuring your message stands out in high-traffic spaces.
              </p>
            </div>

            {/* Inner Content Grid (Circle Image + List) */}
            <div className={`flex flex-col sm:flex-row gap-8 mb-12 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '500ms' }}>
              
              {/* Circular Image */}
              <div className="relative shrink-0">
                <div className="relative w-56 h-56 flex items-center justify-center">
                   <div className={`absolute inset-0 rounded-full border-2 border-transparent border-l-red-500 border-b-red-500 rotate-[-45deg] transition-transform duration-1000 ${inView ? 'scale-110' : 'scale-75'}`} />
                   <div className={`w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10 transition-transform duration-1000 ${inView ? 'scale-100' : 'scale-75'}`}>
                     <img 
                       src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                       alt="Meeting" 
                       className="w-full h-full object-cover"
                     />
                   </div>
                   <div className="absolute -top-1 -right-2 text-red-500 z-20">
                      <Star className="w-8 h-8 fill-current rotate-12 animate-[pulse-zoom_2s_ease-in-out_infinite]" />
                   </div>
                </div>
              </div>

              {/* Feature List & Sub-headline */}
              <div className="flex flex-col justify-center pt-2">
                <h3 className="text-[#fbbf24] font-bold uppercase tracking-wide text-[15px] leading-tight mb-5">
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
                
                <ul className="space-y-3">
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
                      <span className="text-[#111] font-bold text-[13px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Row: Avatars + Button */}
            <div className={`flex flex-col sm:flex-row items-center gap-8 border-t border-gray-100 pt-8 max-w-lg transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '900ms' }}>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  ].map((src, i) => (
                    <img key={i} src={src} alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                  ))}
                </div>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wide">50+ Major Brands Empowered</span>
              </div>
              <button className="px-8 py-3.5 bg-red-500 hover:bg-red-600 text-white text-[11px] font-bold uppercase tracking-widest rounded-full transition-all shadow-md hover:shadow-lg">
                More About Us
              </button>
            </div>
          </div>

          {/* --- RIGHT IMAGE SIDE --- */}
          <div className="relative pl-0 lg:pl-10">
            {/* Main Arch Image */}
            <div 
              className="relative rounded-t-full rounded-b-none overflow-hidden h-[600px] shadow-2xl transition-[clip-path] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ clipPath: inView ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Team working" 
                className={`w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${inView ? 'scale-100' : 'scale-125'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-10 right-10">
                <div className="w-20 h-20 rounded-full border border-white/40 flex items-center justify-center bg-white/10 backdrop-blur-md group cursor-pointer hover:bg-red-500 hover:border-red-500 transition-all duration-500">
                  <Play className="w-7 h-7 text-white fill-white group-hover:text-black group-hover:fill-black transition-colors" />
                </div>
              </div>
            </div>

            {/* Floating "Awards" Badge */}
            <div className={`absolute top-12 -left-4 md:-left-10 bg-white p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-sm min-w-[180px] text-center z-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '500ms' }}>
               <div className="flex justify-center mb-2">
                 <Award className="w-10 h-10 text-red-500 stroke-[1.5]" />
               </div>
               <h4 className="text-3xl font-extrabold text-[#111] mb-1">38+</h4>
               <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Awards Won</p>
            </div>

            {/* Decorative Sparkle */}
            <div className="absolute -top-8 -right-4 text-red-500">
               <svg width="90" height="90" viewBox="0 0 24 24" fill="currentColor" className="animate-spin [animation-duration:5s]">
                 <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
               </svg>
            </div>
          </div>
        </div>

        {/* --- NEW TRUSTED BY SECTION --- */}
        <div className={`border border-gray-200 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-1000 delay-[800ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Left Text */}
          <div className="w-full md:w-auto flex-shrink-0 flex items-center justify-center md:justify-start md:pr-12 md:border-r border-gray-200">
             <h4 className="font-extrabold text-[#111] uppercase leading-tight text-[13px] tracking-wide text-center md:text-left">
               Trusted By <br className="hidden md:block"/> Top Companies
             </h4>
          </div>

          {/* Right Logo Row */}
          <div className="flex-1 w-full flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-10">
             {companies.map((company, index) => (
                <img 
                  key={index}
                  src={company.url} 
                  alt={company.name} 
                  className="h-6 md:h-8 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                />
             ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;