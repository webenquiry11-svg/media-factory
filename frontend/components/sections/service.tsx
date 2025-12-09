"use client";

import React, { useState } from 'react';

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

const Service = () => {
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
    <div className="bg-[#111111] text-white p-8 w-full min-h-screen flex flex-col justify-center items-center font-sans">
      
      {/* Top Text Section - Heading Size Increased */}
      <div className="w-full max-w-[1200px] mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Guided Roadmap to Your <span className="text-red-500">Digital Success</span>
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
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
                  ? 'flex-[2] bg-[#1a1a1a] border border-red-500' 
                  : 'flex-[0.6] bg-[#1a1a1a] hover:bg-[#222] border border-transparent'}
              `}
            >
              <div className="h-full w-full relative flex flex-col">
                
                {/* Number Circle */}
                <div className={`
                  absolute top-6 left-0 right-0 mx-auto flex items-center justify-center rounded-full font-bold text-base transition-all duration-300 z-10
                  ${isActive 
                    ? 'w-14 h-14 bg-[#252525] border border-gray-600 text-white left-6 right-auto mx-0'
                    : 'w-10 h-10 border border-gray-600 text-white'}
                `}>
                  0{step.id}
                </div>

                {/* Content Logic */}
                {isActive ? (
                  // === ACTIVE STATE CONTENT ===
                  <div className="flex flex-col h-full pt-24 px-6 pb-6 animate-fadeIn">
                    
                    <CustomSearchIcon />

                    <h3 className="text-2xl font-bold text-red-500 mb-3 leading-tight">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {step.description || "Detailed description regarding this specific step in the roadmap process."}
                    </p>

                    <button className="mt-auto text-white text-sm font-semibold hover:text-red-500 transition-colors flex items-center gap-2">
                      Read More <span className="text-lg">&rarr;</span>
                    </button>
                  </div>
                ) : (
                  // === INACTIVE STATE CONTENT ===
                  <div className="h-full w-full flex items-end justify-center pb-8">
                    <h3 
                      className="text-gray-400 font-medium tracking-wide uppercase whitespace-nowrap text-xs"
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

export default Service;