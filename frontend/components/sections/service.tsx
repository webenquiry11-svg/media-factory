"use client";

import React, { useState, Fragment } from 'react';

// --- ICONS ---
const CustomSearchIcon = () => (
  <svg 
    width="36" 
    height="36" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="text-red-500 mb-4 shrink-0"
  >
    <path d="M4 4H14V10H20V20H4V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"/>
    <path d="M15 15L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CustomSearchIconYellow = () => (
  <svg 
    width="40" 
    height="40" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#fbbf24] mb-4 shrink-0"
  >
    <path d="M4 4H14V10H20V20H4V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"/>
    <path d="M15 15L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- COMPONENT 1: OUTDOOR SERVICES ---
const OutdoorServices = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Bus Branding",
      description: "Maximize moving visibility with bold, eye-catching bus wraps across high-traffic city routes.",
    },
    {
      id: 2,
      title: "Cab Branding",
      description: "Turn everyday rides into premium brand touchpoints with smart, city-wide cab advertising.",
    },
    {
      id: 3,
      title: "RWA Branding",
      description: "Engage trusted community spaces and influence residents where they live, relax, and interact.",
    },
    {
      id: 4,
      title: "Metro Branding",
      description: "Dominate daily commuter journeys with impactful metro ads in stations and inside trains.",
    },
    {
      id: 5,
      title: "Auto Branding",
      description: "Reach deep into local markets with continuous brand presence on high-frequency auto routes.",
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
          Media Factory is one of the best outdoor advertising companies in India, specializing in campaigns across buses, cabs, autos, metros, and RWAs.
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
                      <CustomSearchIcon />
                    </div>

                    {/* Desktop Title */}
                    <h3 className="hidden lg:block text-2xl font-extrabold text-[#111] uppercase mb-3 leading-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed mb-4 lg:mb-6 pl-14 lg:pl-0">
                      {step.description}
                    </p>
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
      description: "Double-sided roll up standees that showcase your message from every angle for maximum indoor visibility. Corporate Branding, Glowsign Board, Vinyl Printing, Customized Wallpaper Printing, Retail Shop Branding, In Shop Branding, X Banner Stand, Table Top Roll Up Stand, Catalogue Stand, Canopy, Cut Out Stand.",
    },
    {
      id: 2,
      title: "Dealer Boards Manufacturing",
      description: "Professional dealer boards crafted to elevate in-store branding, ensure high visibility, and strengthen dealer presence.",
    },
    {
      id: 3,
      title: "Promotional Umbrella",
      description: "Weather-resistant promotional umbrellas that display your brand prominently at events, storefronts, and outdoor activations.",
    },
    {
      id: 4,
      title: "Adjustable Banner Stand",
      description: "Versatile adjustable banner stands that adapt to any indoor space, ensuring clear, professional brand visibility.",
    },
    {
      id: 5,
      title: "Promo Table",
      description: "Engaging promo tables designed to showcase products, capture leads, and boost brand interaction at events.",
    },
    {
      id: 6,
      title: "More Branding Solutions",
      description: "Corporate Branding, Glowsign Board, Vinyl Printing, Customized Wallpaper Printing, Retail Shop Branding.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-12 lg:px-16 font-sans relative border-t border-gray-100">
      <div className="container mx-auto max-w-7xl flex flex-col items-center">
        
        {/* --- HEADER SECTION --- */}
        <div className="w-full max-w-[1200px] mb-8 sm:mb-12 text-center lg:text-right">
            <span className="block text-gray-500 font-bold text-[10px] sm:text-[12px] tracking-[0.2em] uppercase mb-4">
            INDOOR SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111] uppercase leading-[1.1] mb-4 sm:mb-6">
            Indoor Ads That <br className="hidden sm:block" /> <span className="text-red-500">Turn Heads</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-[16px] max-w-2xl mx-auto lg:ml-auto lg:mr-0 leading-relaxed">
            Discover powerful indoor advertising solutions that enhance visibility, engage visitors, and strengthen your brand presence across every touchpoint.
            </p>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col lg:flex-row w-full max-w-[1200px] h-auto lg:h-[450px] gap-3 lg:gap-4">
            {steps.map((step) => {
            const isActive = activeStep === step.id;

            return (
                <div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`
                    relative rounded-xl lg:rounded-[1rem] cursor-pointer overflow-hidden transition-all duration-500 ease-in-out shadow-sm
                    ${isActive
                    ? 'bg-white border-2 border-red-500 shadow-xl z-10 lg:scale-[1.02] flex-none lg:flex-[2.5] h-auto lg:h-full pb-6 lg:pb-0' 
                    : 'bg-gray-50 hover:bg-gray-100 border border-transparent flex-none lg:flex-[0.5] h-16 lg:h-full'}
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
                            <CustomSearchIcon />
                        </div>

                        <h3 className="hidden lg:block text-2xl font-extrabold text-[#111] uppercase mb-3 leading-tight">
                        {step.title}
                        </h3>

                        <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed mb-4 lg:mb-6 pl-14 lg:pl-0">
                        {step.description}
                        </p>
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
    </section>
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