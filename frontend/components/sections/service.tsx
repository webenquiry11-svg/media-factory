"use client";

import React, { useState, Fragment } from 'react';

// --- CUSTOM ICONS ---
const BusIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="6" width="20" height="10" rx="2" />
    <path d="M4 16v3a1 1 0 0 0 1 1h1" />
    <path d="M18 16v3a1 1 0 0 0 1 1h1" />
    <path d="M2 11h20" />
    <path d="M6 6v5" />
    <path d="M10 6v5" />
    <path d="M14 6v5" />
    <path d="M18 6v5" />
  </svg>
);

const CabIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
    <circle cx="6.5" cy="16.5" r="2.5" />
    <circle cx="16.5" cy="16.5" r="2.5" />
    <path d="M10 5h4v2h-4z" />
  </svg>
);

const RWAIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 21h18" />
    <path d="M5 21V7l8-4 8 4v14" />
    <path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
    <path d="M9 21v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5" />
  </svg>
);

const MetroIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="3" width="16" height="16" rx="2" />
    <path d="M4 11h16" />
    <path d="M12 3v8" />
    <path d="M8 19l-2 3" />
    <path d="M16 19l2 3" />
    <circle cx="8" cy="15" r="1" />
    <circle cx="16" cy="15" r="1" />
  </svg>
);

const AutoIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18.5 17a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    <path d="M5.5 17a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    <path d="M16 12H5.5L3 9h3l2-4h8l2 4h3l-2.5 3" />
    <path d="M8 5v4" />
    <path d="M12 5v7" />
  </svg>
);

const StandeeIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="6" y="3" width="12" height="16" rx="1" />
    <path d="M4 21h16" />
    <path d="M12 19v2" />
    <path d="M8 7h8" />
    <path d="M8 11h8" />
    <path d="M8 15h4" />
  </svg>
);

const DealerBoardIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="6" width="18" height="12" rx="1" />
    <path d="M7 6V3h10v3" />
    <path d="M12 3V2" />
    <path d="M8 10h8" />
    <path d="M8 14h5" />
  </svg>
);

const UmbrellaIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22v-9" />
    <path d="M12 13A10 10 0 0 0 2 3h20a10 10 0 0 0-10 10z" />
    <path d="M12 3v-1" />
  </svg>
);

const BannerStandIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="5" y="3" width="14" height="15" />
    <path d="M5 18l-2 4" />
    <path d="M19 18l2 4" />
    <path d="M12 18v4" />
    <path d="M9 8h6" />
    <path d="M9 12h6" />
  </svg>
);

const PromoTableIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
    <path d="M3 9l2-4h14l2 4" />
    <path d="M12 5v4" />
    <path d="M8 13h8" />
    <path d="M8 17h8" />
  </svg>
);

const MoreIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

// --- COMPONENT 1: OUTDOOR SERVICES ---
const OutdoorServices = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Bus Branding",
      description: (
        <Fragment>
          Maximize moving visibility with bold, eye-catching bus wraps across high-traffic city routes.
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Full-coverage vinyl wraps with sharp, high-resolution artwork.</li>
            <li>Weather-resistant materials built for long-term outdoor exposure.</li>
            <li>Strategic route planning to maximize impressions and frequency.</li>
          </ul>
        </Fragment>
      ),
      icon: BusIcon,
    },
    {
      id: 2,
      title: "Unipole / Billboard",
      description: (
        <Fragment>
          Capture attention with impactful unipoles and billboards on high-traffic routes for maximum visibility.
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Large-format displays designed for long-distance readability and impact.</li>
            <li>Premium flex and printing quality for vivid, sharp visuals.</li>
            <li>Prime locations selected for high daily reach and recall.</li>
          </ul>
        </Fragment>
      ),
      icon: DealerBoardIcon,
    },
    {
      id: 3,
      title: "Corporate Branding",
      description: (
        <Fragment>
          Boost your brand presence with cohesive display solutions across corporate touchpoints and campuses.
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Professional branding aligned with corporate guidelines.</li>
            <li>High-finish signage, wall graphics, and displays.</li>
            <li>Consistent brand experience across multiple high-traffic areas.</li>
          </ul>
        </Fragment>
      ),
      icon: RWAIcon,
    },
    {
      id: 4,
      title: "Metro Branding",
      description: (
        <Fragment>
          Dominate daily commuter journeys with impactful metro ads in stations and inside trains.
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>High-frequency exposure to office-goers and daily commuters.</li>
            <li>Multiple formats including panels, pillars, train wraps, and screens.</li>
            <li>Strategically placed creatives for dwell-time engagement and recall.</li>
          </ul>
        </Fragment>
      ),
      icon: MetroIcon,
    },
    {
      id: 5,
      title: "Auto Branding",
      description: (
        <Fragment>
          Reach deep into local markets with continuous brand presence on high-frequency auto routes.
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Compact yet prominent panels optimized for local visibility.</li>
            <li>Durable prints that withstand dust, heat, and daily wear.</li>
            <li>Ideal for hyperlocal targeting and repeat neighborhood impressions.</li>
          </ul>
        </Fragment>
      ),
      icon: AutoIcon,
    },
  ];

  return (
    <div className="bg-white text-[#111] py-16 sm:py-24 px-4 sm:px-12 lg:px-16 w-full flex flex-col justify-center items-center font-sans">
      
      {/* Top Text Section */}
      <div className="w-full max-w-[1200px] mb-8 sm:mb-12 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          Strategic Pathway to Your <span className="text-red-500 block sm:inline">Outdoor Success</span>
        </h2>
        <p className="text-gray-600 max-w-2xl text-base sm:text-lg leading-relaxed mx-auto lg:mx-0">
          Media Factory is one of the best outdoor advertising companies in India, specializing in campaigns across buses, cabs, autos, metros, and RWAs to enhance brand visibility.
        </p>
      </div>

      {/* Accordion Container */}
      {/* Mobile: Flex Column (Vertical Stack) | Desktop: Flex Row (Horizontal Accordion) */}
      <div className="flex flex-col lg:flex-row w-full max-w-[1200px] h-auto lg:h-[450px] gap-3 lg:gap-2">
        {steps.map((step) => {
          const isActive = activeStep === step.id;

          return (
            <div
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`
                relative rounded-xl lg:rounded-[1.5rem] cursor-pointer overflow-hidden transition-all duration-500 ease-in-out
                ${isActive
                  ? 'bg-white border-2 border-red-500 shadow-xl z-10 lg:scale-[1.02] flex-none lg:flex-[2.5] h-auto lg:h-full pb-6 lg:pb-0'
                  : 'bg-gray-50 hover:bg-gray-100 border border-transparent shadow-sm flex-none lg:flex-[0.5] h-16 lg:h-full'}
              `}
            >
              <div className="h-full w-full relative flex flex-row lg:flex-col items-center lg:items-stretch">
                
                {/* Number Circle */}
                <div className={`
                  flex items-center justify-center rounded-full font-bold text-sm sm:text-base transition-all duration-300 z-10 shrink-0
                  lg:absolute lg:top-6 lg:left-0 lg:right-0 lg:mx-auto
                  ${isActive
                    ? 'w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#111] text-red-500 ml-4 lg:ml-0 lg:left-8 lg:right-auto lg:mx-0 shadow-lg'
                    : 'w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10 border border-gray-300 text-gray-400 bg-white ml-4 lg:ml-0'}
                `}>
                  0{step.id}
                </div>

                {/* --- CONTENT LOGIC --- */}
                
                {/* MOBILE TITLE (Always visible next to number) */}
                <span className={`lg:hidden ml-4 font-bold uppercase text-sm ${isActive ? 'text-[#111]' : 'text-gray-400'}`}>
                    {step.title}
                </span>

                {isActive ? (
                  // === ACTIVE STATE ===
                  <div className="flex flex-col h-full lg:pt-24 px-4 lg:px-8 animate-fadeIn w-full mt-4 lg:mt-0 ml-0 lg:ml-0">
                    
                    {/* Icon - Hidden on Mobile to save space, visible on Desktop */}
                    <div className="hidden lg:block">
                      <step.icon className="w-9 h-9 text-red-500 mb-4 shrink-0" strokeWidth={1.5} />
                    </div>

                    {/* Desktop Title */}
                    <h3 className="hidden lg:block text-2xl font-extrabold text-[#111] uppercase mb-3 leading-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <div className="text-gray-500 text-sm sm:text-[15px] leading-relaxed mb-4 lg:mb-6 pl-14 lg:pl-0">
                      {step.description}
                    </div>
                    <a href="#contact" className="inline-block px-6 py-3 bg-red-500 hover:bg-[#111] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-widest rounded-lg transition-colors w-fit mb-4 lg:mb-0 ml-14 lg:ml-0">
                      Talk to us about your next print.
                    </a>
                  </div>
                ) : (
                  // === INACTIVE STATE (DESKTOP ONLY) ===
                  // On mobile, the title is already handled above next to the number
                  <div className="hidden lg:flex h-full w-full items-end justify-center pb-8">
                    <h3 
                      className="text-gray-400 font-bold tracking-[0.15em] uppercase whitespace-nowrap text-[11px]"
                      style={{ 
                        writingMode: 'vertical-rl', 
                        transform: 'rotate(180deg)',
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- COMPONENT 2: INDOOR SERVICES ---
const IndoorServices = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Double-Sided Roll-Up Standee",
      description: "Double-sided roll up standees that showcase your message from every angle for maximum indoor visibility.",
      icon: StandeeIcon,
    },
    {
      id: 2,
      title: "Dealer Boards Manufacturing",
      description: "Professional dealer boards crafted to elevate in-store branding, ensure high visibility, and strengthen dealer presence.",
      icon: DealerBoardIcon,
    },
    {
      id: 3,
      title: "Promotional Umbrella",
      description: "Weather-resistant promotional umbrellas that display your brand prominently at events, storefronts, and outdoor activations.",
      icon: UmbrellaIcon,
    },
    {
      id: 4,
      title: "Adjustable Banner Stand",
      description: "Versatile adjustable banner stands that adapt to any indoor space, ensuring clear, professional brand visibility.",
      icon: BannerStandIcon,
    },
    {
      id: 5,
      title: "Promo Table",
      description: "Engaging promo tables designed to showcase products, capture leads, and boost brand interaction at events.",
      icon: PromoTableIcon,
    },
    {
      id: 6,
      title: "More Branding Solutions",
      description: "Corporate Branding, Glowsign Board, Vinyl Printing, Customized Wallpaper Printing, Retail Shop Branding, In Shop Branding, X Banner Stand, Table Top Roll Up Stand, Catalogue Stand, Canopy, Cut Out Stand.",
      icon: MoreIcon,
    },
  ];

  return (
    <div className="bg-white text-[#111] pt-8 pb-16 sm:pt-12 sm:pb-24 px-4 sm:px-12 lg:px-16 w-full flex flex-col justify-center items-center font-sans border-t border-gray-100">
      
      {/* --- HEADER SECTION --- */}
      <div className="w-full max-w-[1200px] mb-8 sm:mb-12 text-center lg:text-right">
        <span className="block text-gray-500 font-bold text-[10px] sm:text-[12px] tracking-[0.2em] uppercase mb-4">
          INDOOR SOLUTIONS
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111] uppercase leading-[1.1] mb-4 sm:mb-6">
          Indoor Ads That <span className="text-red-500">Turn Heads</span>
        </h2>
        <p className="text-gray-500 text-sm sm:text-[16px] max-w-2xl mx-auto lg:ml-auto lg:mr-0 leading-relaxed">
          Discover powerful indoor advertising solutions that enhance visibility, engage visitors, and strengthen your brand presence across every touchpoint.
        </p> 
      </div>

      {/* Accordion Container */}
      <div className="flex flex-col lg:flex-row w-full max-w-[1200px] h-auto lg:h-[450px] gap-3 lg:gap-2">
            {steps.map((step) => {
            const isActive = activeStep === step.id;

            return (
                <div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`
                    relative rounded-xl lg:rounded-[1.5rem] cursor-pointer overflow-hidden transition-all duration-500 ease-in-out
                    ${isActive
                    ? 'bg-white border-2 border-red-500 shadow-xl z-10 lg:scale-[1.02] flex-none lg:flex-[2.5] h-auto lg:h-full pb-6 lg:pb-0' 
                    : 'bg-gray-50 hover:bg-gray-100 border border-transparent shadow-sm flex-none lg:flex-[0.5] h-16 lg:h-full'}
                `}
                >
                <div className="h-full w-full relative flex flex-row lg:flex-col items-center lg:items-stretch">
                    
                    {/* Number Circle */}
                    <div className={`
                    flex items-center justify-center rounded-full font-bold text-sm sm:text-base transition-all duration-300 z-10 shrink-0
                    lg:absolute lg:top-6 lg:left-0 lg:right-0 lg:mx-auto
                    ${isActive
                        ? 'w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#111] text-red-500 ml-4 lg:ml-0 lg:left-8 lg:right-auto lg:mx-0 shadow-lg' 
                        : 'w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10 border border-gray-300 text-gray-400 bg-white ml-4 lg:ml-0'}
                    `}>
                    0{step.id}
                    </div>

                    {/* MOBILE TITLE */}
                    <span className={`lg:hidden ml-4 font-bold uppercase text-sm ${isActive ? 'text-[#111]' : 'text-gray-400'}`}>
                        {step.title}
                    </span>

                    {/* Active Content */}
                    {isActive ? (
                    <div className="flex flex-col h-full lg:pt-24 px-4 lg:px-8 animate-fadeIn w-full mt-4 lg:mt-0 ml-0 lg:ml-0">
                        
                        <div className="hidden lg:block">
                            <step.icon className="w-9 h-9 text-red-500 mb-4 shrink-0" strokeWidth={1.5} />
                        </div>

                        <h3 className="hidden lg:block text-2xl font-extrabold text-[#111] uppercase mb-3 leading-tight">
                        {step.title}
                        </h3>

                        <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed mb-4 lg:mb-6 pl-14 lg:pl-0">
                        {step.description}
                        </p>
                        <a href="#contact" className="inline-block px-6 py-3 bg-red-500 hover:bg-[#111] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-widest rounded-lg transition-colors w-fit mb-4 lg:mb-0 ml-14 lg:ml-0">
                          Talk to us about your next print.
                        </a>
                    </div>
                    ) : (
                    // Inactive Content (Vertical Text - Desktop Only)
                    <div className="hidden lg:flex h-full w-full items-end justify-center pb-10">
                        <h3 
                        className="text-gray-400 font-bold tracking-[0.15em] uppercase whitespace-nowrap text-[11px]"
                        style={{ 
                            writingMode: 'vertical-rl', 
                            transform: 'rotate(180deg)',
                        }}
                        >
                        {step.title}
                        </h3>
                    </div>
                    )}
                </div>
                </div>
            );
            })}
      </div>
    </div>
  );
}


// --- Main export combines both roadmap components ---
export default function Service() {
  return (
    <Fragment>
      <OutdoorServices />
      <IndoorServices />
    </Fragment>
  )
}