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

const DigitalRoadmap = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Search & Business Analysis",
      description: "We conduct deep consultation to understand your business goals and technical needs.",
    },
    { id: 2, title: "Opportunity and Risk Assessment" },
    { id: 3, title: "Solution Architecture Design" },
    { id: 4, title: "Technology Choices & Prototyping" },
    { id: 5, title: "Agile Software Development" },
    { id: 6, title: "System Integration & Testing" },
    { id: 7, title: "Deployment & End-User Training" },
    { id: 8, title: "Continuous Support & Optimization" },
  ];

  return (
    <div className="bg-white text-[#111] py-24 px-6 sm:px-12 lg:px-16 w-full flex flex-col justify-center items-center font-sans">
      
      {/* Top Text Section - Heading Size Increased */}
      <div className="w-full max-w-[1200px] mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Guided Roadmap to Your <span className="text-red-500">Digital Success</span>
        </h2>
        <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
          Apptechies is a top-notch mobile app development company in usa. We have an expert team that delivers apps for iPhone, iPad, Android & web development.
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
                      {step.description || "Detailed description regarding this specific step in the roadmap process."}
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
const OutdoorRoadmap = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Location Scouting & Analysis",
      description: "We identify and analyze high-traffic locations to ensure your message reaches the maximum number of potential customers.",
    },
    { id: 2, title: "Audience & Demographic Research" },
    { id: 3, title: "Creative Concept & Design" },
    { id: 4, title: "Media Planning & Selection" },
    { id: 5, title: "Production & Material Sourcing" },
    { id: 6, title: "Installation & Logistics" },
    { id: 7, title: "Campaign Launch & Monitoring" },
    { id: 8, title: "Performance Reporting & ROI Analysis" },
  ];

  return (
    <section className="bg-white py-24 px-6 sm:px-12 lg:px-16 font-sans relative border-t border-gray-100">
      <div className="container mx-auto max-w-7xl flex flex-col items-center">
        
        {/* --- HEADER SECTION (Right Aligned) --- */}
        <div className="w-full max-w-[1200px] mb-12 text-right">
            <span className="block text-gray-500 font-bold text-[12px] tracking-[0.2em] uppercase mb-4">
            OUR APPROACH
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111] uppercase leading-[1.1] mb-6">
            Blueprint for <br /> <span className="text-red-500">Outdoor Impact</span>
            </h2>
            <p className="text-gray-500 text-[16px] max-w-2xl ml-auto leading-relaxed">
            Discover our strategic 8-step process for launching high-visibility outdoor advertising campaigns that capture attention and drive results.
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
                        {step.description || "We execute this phase with meticulous attention to detail, ensuring your campaign objectives are met with the highest quality standards."}
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
      <DigitalRoadmap />
      <OutdoorRoadmap />
    </Fragment>
  )
}