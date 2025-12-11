"use client";

import React, { useState, Fragment } from 'react';

const CustomSearchIcon = () => (
  <svg 
    width="36" 
    height="36" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="text-red-500 mb-4"
  >
    <path d="M4 4H14V10H20V20H4V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"/>
    <path d="M15 15L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- NEW: Custom Icon for the White Theme ---
const CustomSearchIconYellow = () => (
  <svg 
    width="40" 
    height="40" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#fbbf24] mb-4"
  >
    <path d="M4 4H14V10H20V20H4V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"/>
    <path d="M15 15L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

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
    <div className="bg-white text-[#111] py-24 px-6 sm:px-12 lg:px-16 w-full flex flex-col justify-center items-center font-sans">
      
      {/* Top Text Section - Heading Size Increased */}
      <div className="w-full max-w-[1200px] mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Strategic Pathway to Your <span className="text-red-500">Outdoor Success</span>
        </h2>
        <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
          Media Factory is one of the best outdoor advertising companies in India, specializing in campaigns across buses, cabs, autos, metros, and RWAs to enhance brand visibility.
        </p>
      </div>

      {/* Accordion Container - Height Increased to 450px */}
      <div className="flex w-full max-w-[1200px] h-[450px] gap-2">
        {steps.map((step) => {
          const isActive = activeStep === step.id;

          return (
            <div
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`
                relative rounded-[1.5rem] cursor-pointer overflow-hidden transition-all duration-500 ease-in-out
                ${isActive
                  ? 'flex-[2.5] bg-white border-2 border-red-500 shadow-xl scale-[1.02] z-10'
                  : 'flex-[0.5] bg-gray-50 hover:bg-gray-100 border border-transparent shadow-sm'}
              `}
            >
              <div className="h-full w-full relative flex flex-col">
                
                {/* Number Circle */}
                <div className={`
                  absolute top-6 left-0 right-0 mx-auto flex items-center justify-center rounded-full font-bold text-base transition-all duration-300 z-10
                  ${isActive
                    ? 'w-12 h-12 bg-[#111] text-red-500 left-8 right-auto mx-0 shadow-lg'
                    : 'w-10 h-10 border border-gray-300 text-gray-400 bg-white'}
                `}>
                  0{step.id}
                </div>

                {/* Content Logic */}
                {isActive ? (
                  // === ACTIVE STATE CONTENT ===
                  <div className="flex flex-col h-full pt-24 px-8 pb-8 animate-fadeIn">
                    
                    <CustomSearchIcon />

                    <h3 className="text-2xl font-extrabold text-[#111] uppercase mb-3 leading-tight">
                      {step.title}
                    </h3>

                    <p className="text-gray-500 text-[15px] leading-relaxed mb-6 line-clamp-3">
                      {step.description}
                    </p>

                    <div className="mt-auto flex items-center gap-3 group w-fit">
                        <span className="text-[#111] font-bold text-[12px] uppercase tracking-wider">Read More</span>
                    </div>
                  </div>
                ) : (
                  // === INACTIVE STATE CONTENT ===
                  <div className="h-full w-full flex items-end justify-center pb-8">
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

// --- NEW: Outdoor Advertising Roadmap (White Theme) ---
const IndoorServices = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Double-Sided Roll-Up Standee",
      description: "Double-sided roll up standees that showcase your message from every angle for maximum indoor visibility.",
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
      description: "Corporate Branding, Glowsign Board, Vinyl Printing, Customized Wallpaper Printing, Retail Shop Branding, In Shop Branding, X Banner Stand, Table Top Roll Up Stand, Catalogue Stand, Canopy, Cut Out Stand.",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 sm:px-12 lg:px-16 font-sans relative border-t border-gray-100">
      <div className="container mx-auto max-w-7xl flex flex-col items-center">
        
        {/* --- HEADER SECTION (Right Aligned) --- */}
        <div className="w-full max-w-[1200px] mb-12 text-right">
            <span className="block text-gray-500 font-bold text-[12px] tracking-[0.2em] uppercase mb-4">
            INDOOR SOLUTIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111] uppercase leading-[1.1] mb-6">
            Indoor Ads That <br /> <span className="text-red-500">Turn Heads</span>
            </h2>
            <p className="text-gray-500 text-[16px] max-w-2xl ml-auto leading-relaxed">
            Discover powerful indoor advertising solutions that enhance visibility, engage visitors, and strengthen your brand presence across every touchpoint.
            </p>
        </div>

        <div className="flex w-full max-w-[1200px] h-[450px] gap-2 md:gap-4">
            {steps.map((step) => {
            const isActive = activeStep === step.id;

            return (
                <div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`
                    relative rounded-[1rem] cursor-pointer overflow-hidden transition-all duration-500 ease-in-out shadow-sm
                    ${isActive
                    ? 'flex-[2.5] bg-white border-2 border-red-500 shadow-xl scale-[1.02] z-10' 
                    : 'flex-[0.5] bg-gray-50 hover:bg-gray-100 border border-transparent'}
                `}
                >
                <div className="h-full w-full relative flex flex-col">
                    
                    {/* Number Circle */}
                    <div className={`
                    absolute top-6 left-0 right-0 mx-auto flex items-center justify-center rounded-full font-bold text-base transition-all duration-300 z-10
                    ${isActive
                        ? 'w-12 h-12 bg-[#111] text-red-500 left-8 right-auto mx-0 shadow-lg' 
                        : 'w-10 h-10 border border-gray-300 text-gray-400 bg-white'}
                    `}>
                    0{step.id}
                    </div>

                    {/* Active Content */}
                    {isActive ? (
                    <div className="flex flex-col h-full pt-24 px-8 pb-8 animate-fadeIn">
                        {/* Use the red icon from the first section */}
                        <CustomSearchIcon />

                        <h3 className="text-2xl font-extrabold text-[#111] uppercase mb-3 leading-tight">
                        {step.title}
                        </h3>

                        <p className="text-gray-500 text-[15px] leading-relaxed mb-6 line-clamp-3">
                        {step.description}
                        </p>

                        <div className="mt-auto flex items-center gap-3 group w-fit">
                            <span className="text-[#111] font-bold text-[12px] uppercase tracking-wider">
                                Read More
                            </span>
                        </div>
                    </div>
                    ) : (
                    // Inactive Content (Vertical Text)
                    <div className="h-full w-full flex items-end justify-center pb-10">
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