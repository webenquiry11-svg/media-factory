"use client";
import React from 'react';
import { 
  ArrowRight, 
  Bus, 
  Car, 
  Building2, 
  Train, 
  Zap, 
  ScrollText, 
  Lightbulb, 
  Image as ImageIcon, 
  Store, 
  ShoppingBag, 
  Printer, 
  Hammer, 
  Flag, 
  LayoutTemplate, 
  Umbrella, 
  Sliders, 
  Table, 
  BookOpen,
  Tent,
  Frame
} from "lucide-react";

// --- DATA: OUTDOOR OFFERINGS ---
const OUTDOOR_SERVICES = [
  { id: "01", title: "Bus Branding", description: "High-impact transit advertising to reach commuters across the city.", icon: <Bus className="w-12 h-12 text-red-500 stroke-[1.5]" /> },
  { id: "02", title: "Cab Branding", description: "Mobile billboards that take your brand to every corner of the streets.", icon: <Car className="w-12 h-12 text-red-500 stroke-[1.5]" /> },
  { id: "03", title: "RWA Branding", description: "Targeted visibility in residential welfare associations and societies.", icon: <Building2 className="w-12 h-12 text-red-500 stroke-[1.5]" /> },
  { id: "04", title: "Metro Branding", description: "Capture the attention of millions of daily metro commuters.", icon: <Train className="w-12 h-12 text-red-500 stroke-[1.5]" /> },
  { id: "05", title: "Auto Branding", description: "Cost-effective local advertising with high ground-level visibility.", icon: <Zap className="w-12 h-12 text-red-500 stroke-[1.5]" /> },
];

// --- DATA: INDOOR BRANDING SOLUTIONS ---
const INDOOR_SERVICES = [
  { id: "01", title: "Roll Up Banner Stand", description: "Portable and professional display stands for events and retail.", icon: <ScrollText className="w-12 h-12 text-red-500 stroke-[1.5]" /> },
  { id: "02", title: "Double-Sided Roll-Up", description: "Maximize visibility from both directions with dual-sided displays.", icon: <ScrollText className="w-12 h-12 text-red-500 stroke-[1.5]" /> },
  { id: "03", title: "Glowsign Board", description: "Illuminated signage to make your brand shine day and night.", icon: <Lightbulb className="w-12 h-12 text-red-500 stroke-[1.5]" /> },
  { id: "04", title: "Customized Wallpaper", description: "Transform interiors with bespoke branding and decorative prints.", icon: <ImageIcon className="w-12 h-12 text-red-500 stroke-[1.5]" /> },
  { id: "05", title: "Retail Shop Branding", description: "Complete visual identity solutions for retail storefronts.", icon: <Store className="w-12 h-12 text-red-500 stroke-[1.5]" /> },
  { id: "06", title: "In Shop Branding", description: "Engage customers inside the store with point-of-sale branding.", icon: <ShoppingBag className="w-12 h-12 text-red-500 stroke-[1.5]" /> },
  { id: "07", title: "Vinyl Printing", description: "High-quality vinyl prints for glass, walls, and surfaces.", icon: <Printer className="w-12 h-12 text-red-500 stroke-[1.5]" /> },
  { id: "08", title: "Dealer Boards", description: "Durable manufacturing of dealer and distributor signboards.", icon: <Hammer className="w-12 h-12 text-red-500 stroke-[1.5]" /> },
  { id: "09", title: "X Banner Stand", description: "Lightweight and economical banner stands for quick promotions.", icon: <Flag className="w-12 h-12 text-red-500 stroke-[1.5]" /> },
  { id: "10", title: "Table Top Roll Up", description: "Miniature roll-ups perfect for reception desks and tables.", icon: <LayoutTemplate className="w-12 h-12 text-red-500 stroke-[1.5]" /> },
  { id: "11", title: "Promotional Umbrella", description: "Functional branding that provides shade and visibility outdoors.", icon: <Umbrella className="w-12 h-12 text-red-500 stroke-[1.5]" /> },
  { id: "12", title: "Adjustable Banner", description: "Versatile stands with adjustable width and height options.", icon: <Sliders className="w-12 h-12 text-red-500 stroke-[1.5]" /> },
  { id: "13", title: "Promo Table", description: "Portable counters for product demonstrations and sampling.", icon: <Table className="w-12 h-12 text-red-500 stroke-[1.5]" /> },
  { id: "14", title: "Catalogue Stand", description: "Organized display racks for brochures, magazines, and flyers.", icon: <BookOpen className="w-12 h-12 text-red-500 stroke-[1.5]" /> },
  { id: "15", title: "Canopy", description: "Sheltered branding setup ideal for outdoor events and roadshows.", icon: <Tent className="w-12 h-12 text-red-500 stroke-[1.5]" /> },
  { id: "16", title: "Cut Out Stand", description: "Eye-catching life-size cutouts for high-impact visual marketing.", icon: <Frame className="w-12 h-12 text-red-500 stroke-[1.5]" /> },
];

// --- REUSABLE SLIDER COMPONENT ---
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}
const ServiceSlider = ({ title, services, reverse = false }: { title: string; services: ServiceItem[]; reverse?: boolean }) => {
  // Duplicate items for infinite loop
  // We quadruple the list to ensure there's always enough content for a seamless loop
  const loopServices = [...services, ...services, ...services, ...services]; 
  
  // Calculate dynamic duration to ensure consistent speed
  // 3 seconds per item creates a consistent gliding speed
  // Multiplied by 2 because the animation scrolls 50% of the list (2 full sets of items)
  const duration = services.length * 2 * 3;

  return (
    <div className="mb-24 last:mb-0">
      <div className="container mx-auto px-4 sm:px-8 mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-[2px] w-8 bg-red-500"></div>
          <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight">
            {title}
          </h3>
        </div>
      </div>

      <div className="relative w-full overflow-hidden pause-on-hover py-10 -my-10">
        <div 
          className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
          style={{ animationDuration: `${duration}s` }}
        >
          {loopServices.map((service, index) => (
            <div 
              key={`${service.id}-${index}`} 
              className="w-[350px] md:w-[400px] flex-shrink-0 px-4"
            >
              <div className="relative pt-10 px-2 filter drop-shadow-xl h-full"> 
                
                {/* Floating Number */}
                <div className="absolute top-1 right-1 text-[3.5rem] leading-none font-normal text-red-500 z-20 select-none font-sans">
                  {service.id}
                </div>

                {/* The Card */}
                <div 
                  className="bg-[#151515] relative group transition-transform duration-300 hover:-translate-y-2 min-h-[420px] flex flex-col overflow-hidden h-full cursor-pointer"
                  style={{ 
                    clipPath: 'polygon(0 0, calc(100% - 70px) 0, calc(100% - 70px) 70px, 100% 70px, 100% 100%, 0 100%)'
                  }}
                >
                  {/* Spotlight */}
                  <div 
                    className="absolute top-0 left-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/25 via-[#151515] to-transparent pointer-events-none -translate-x-[40%] -translate-y-[40%] blur-2xl opacity-100" 
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full px-8 pt-16 pb-10">
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 uppercase leading-none tracking-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-[#999] leading-relaxed text-[13px] mb-8 flex-grow font-normal">
                      {service.description}
                    </p>
                    
                    <div className="h-px w-full bg-white/10 mb-6" />
                    
                    <button className="group/btn w-full border border-white/10 rounded-full py-2.5 px-2 pl-5 flex items-center justify-between text-[10px] font-bold tracking-[0.2em] text-[#bbb] uppercase hover:text-white transition-all duration-300 bg-transparent hover:border-red-500">
                      Read More
                      <div className="w-8 h-8 rounded-full bg-[#252525] flex items-center justify-center text-[#666] group-hover/btn:bg-red-500 group-hover/btn:text-white transition-all duration-300 border border-white/5">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </button>
                  </div>

                  {/* Bottom Reflection */}
                  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-red-600/20 to-transparent pointer-events-none mix-blend-screen" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-600/0" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="bg-white py-24 font-sans overflow-hidden">
      
      {/* Global CSS for Infinite Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: scroll linear infinite;
        }
        .animate-marquee-reverse {
          animation: scroll-reverse linear infinite;
        }
        .pause-on-hover:hover .animate-marquee,
        .pause-on-hover:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }
      `}</style>

      {/* Main Page Header */}
      <div className="container mx-auto px-4 sm:px-8 mb-20 relative">
        <div className="flex flex-col items-center text-center relative z-10">
           {/* Watermark */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none">
              <span className="text-[10vw] md:text-[140px] font-black text-gray-50 opacity-[0.04] leading-none uppercase tracking-widest whitespace-nowrap">
                Solutions
              </span>
           </div>

           {/* Tagline */}
           <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-red-500"></div>
              <span className="text-red-500 font-bold tracking-[0.2em] text-xs uppercase">What We Offer</span>
              <div className="h-[2px] w-8 bg-red-500"></div>
           </div>

           {/* Heading */}
           <h2 className="text-4xl md:text-6xl font-extrabold text-[#111] uppercase tracking-tight mb-6">
             Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Services</span>
           </h2>

           {/* Subtext */}
           <p className="text-gray-500 max-w-2xl text-lg font-medium leading-relaxed">
             From city-wide outdoor campaigns to precision indoor branding, we provide comprehensive solutions to elevate your business presence.
           </p>
        </div>
      </div>

      {/* SLIDER 1: OUTDOOR OFFERINGS (Right to Left) */}
      <ServiceSlider title="Our Outdoor Offerings" services={OUTDOOR_SERVICES} reverse={false} />

      {/* SLIDER 2: INDOOR BRANDING SOLUTIONS (Left to Right) */}
      <ServiceSlider title="Indoor Branding Solutions" services={INDOOR_SERVICES} reverse={true} />

    </section>
  );
}

export default ServicesSection;