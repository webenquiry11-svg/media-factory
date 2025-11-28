"use client";
import React from 'react';
import { Building2, Phone, MapPin, Mail, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="font-sans text-[#111]">
      
      {/* =========================================
          CONTACT SECTION
      ========================================= */}
      <section className="bg-white py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          
          {/* --- TOP CARDS SECTION --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            
            {/* Card 1: About Us */}
            <div className="bg-white p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100/50 rounded-bl-[4rem] z-0 transition-colors group-hover:bg-red-500/10" />
              <div className="relative z-10">
                <span className="text-red-500 font-bold text-[11px] uppercase tracking-widest mb-2 block">Know</span>
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-extrabold uppercase mb-4">About Us</h3>
                  <div className="p-3 bg-white rounded-full shadow-sm">
                     <Building2 className="w-8 h-8 text-[#111] stroke-1" />
                  </div>
                </div>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  Empowering brands and ideas with creative design and digital expertise.
                </p>
              </div>
            </div>

            {/* Card 2: Contact */}
            <div className="bg-white p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100/50 rounded-bl-[4rem] z-0 transition-colors group-hover:bg-red-500/10" />
              <div className="relative z-10">
                <span className="text-red-500 font-bold text-[11px] uppercase tracking-widest mb-2 block">Call</span>
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-extrabold uppercase mb-4">Contact</h3>
                  <div className="p-3 bg-white rounded-full shadow-sm">
                     <Phone className="w-8 h-8 text-[#111] stroke-1" />
                  </div>
                </div>
                <div className="text-gray-500 text-[15px] leading-relaxed space-y-1">
                  <p>Mon-Sat 8:00 - 6:30 Sunday Off</p>
                  <p className="hover:text-red-500 transition-colors cursor-pointer">needhelp@company.com</p>
                  <p className="font-bold text-[#111] mt-1">+ 92 (246) 0088</p>
                </div>
              </div>
            </div>

            {/* Card 3: Address */}
            <div className="bg-white p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100/50 rounded-bl-[4rem] z-0 transition-colors group-hover:bg-red-500/10" />
              <div className="relative z-10">
                <span className="text-red-500 font-bold text-[11px] uppercase tracking-widest mb-2 block">Visit</span>
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-extrabold uppercase mb-4">Address</h3>
                  <div className="p-3 bg-white rounded-full shadow-sm">
                     <MapPin className="w-8 h-8 text-[#111] stroke-1" />
                  </div>
                </div>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  80 Broklyn Golden Seven Street New York. United States of America
                </p>
              </div>
            </div>

          </div>

          {/* --- FORM SECTION --- */}
          <div className="max-w-4xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-[#f4f5f7] border-none rounded-sm px-6 py-4 text-sm text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-[#f4f5f7] border-none rounded-sm px-6 py-4 text-sm text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                />
                <input 
                  type="tel" 
                  placeholder="Phone" 
                  className="w-full bg-[#f4f5f7] border-none rounded-sm px-6 py-4 text-sm text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                />
                <div className="relative">
                  <select className="w-full bg-[#f4f5f7] border-none rounded-sm px-6 py-4 text-sm text-gray-400 focus:ring-1 focus:ring-red-500 outline-none appearance-none cursor-pointer transition-all">
                    <option>Select Service</option>
                    <option>Web Development</option>
                    <option>Digital Marketing</option>
                    <option>Brand Identity</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <textarea 
                rows={6} 
                placeholder="Write A Message" 
                className="w-full bg-[#f4f5f7] border-none rounded-sm px-6 py-4 text-sm text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-red-500 outline-none resize-none transition-all"
              ></textarea>
              <div className="flex justify-center pt-4">
                <button type="submit" className="px-10 py-4 bg-red-500 hover:bg-[#111] hover:text-white text-white font-bold uppercase text-[12px] tracking-widest rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  Send a Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* =========================================
          FOOTER SECTION
      ========================================= */}
      <footer className="bg-[#0b0b0b] pt-20 pb-10 relative overflow-hidden text-white border-t border-[#111]">
        
        {/* --- GEOMETRIC BACKGROUND CURVES (ANIMATED) --- */}
        {/* Curve 1: Large sweeping curve from the right */}
        <div 
            className="absolute -top-[50%] -right-[10%] w-[80%] h-[200%] bg-[#121212] rounded-[100%] pointer-events-none z-0 drift-animation" 
        />

        {/* Curve 2: Intersecting curve from the bottom/center */}
        <div 
            className="absolute top-[20%] -right-[20%] w-[90%] h-[150%] bg-[#161616] rounded-[100%] pointer-events-none z-0 opacity-80 drift-reverse-animation"
        />
        
        {/* Curve 3: Subtle bottom-left fill */}
        <div className="absolute -bottom-[40%] -left-[10%] w-[60%] h-[100%] bg-[#0e0e0e] rounded-full blur-3xl opacity-50 pointer-events-none z-0 pulse-animation" />


        <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
          
          {/* Top Row: Logo & Subscribe */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 relative">
                 {/* Simple geometric logo icon */}
                 <div className="absolute inset-0 bg-red-500 rotate-45 rounded-sm"></div>
                 <div className="absolute inset-0 border-2 border-white rotate-45 rounded-sm scale-75"></div>
              </div>
              <span className="text-2xl font-bold tracking-wider text-white">CILOX</span>
            </div>

            {/* Subscribe Form */}
            <div className="relative w-full max-w-lg">
               <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-[#111]/50 backdrop-blur-sm border border-gray-700 rounded-full py-4 pl-8 pr-40 text-sm text-white placeholder-gray-500 focus:border-red-500 outline-none transition-colors relative z-10"
               />
               <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-white hover:bg-red-500 text-black font-bold text-[11px] tracking-widest uppercase px-8 rounded-full transition-all duration-300 z-20">
                 Subscribe
               </button>
            </div>
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-gray-800/50 pb-12 mb-10 relative">
             
             {/* Column 1: Intro (Span 4) */}
             <div className="lg:col-span-4">
                <h3 className="text-lg font-medium text-white leading-relaxed mb-8 max-w-xs">
                   WELCOME TO CREATIVE AGENCY & PORTFOLIO THEME.
                </h3>
                <div className="flex gap-4">
                   {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                      <a key={i} href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#222] flex items-center justify-center group hover:bg-red-500 hover:border-red-500 transition-all duration-300">
                         <Icon className="w-4 h-4 text-white group-hover:text-black transition-colors" />
                      </a>
                   ))}
                </div>
             </div>

             {/* Column 2: Explore Links (Span 5 - 2 Columns internally) */}
             <div className="lg:col-span-5">
                <h4 className="font-bold text-lg mb-8 uppercase text-white">EXPLORE</h4>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                   {/* Sub-col 1 */}
                   <ul className="space-y-3">
                      {['Services', 'Meet Team', 'Portfolio', 'What We Do', 'Latest News'].map((item) => (
                         <li key={item}>
                            <a href="#" className="text-gray-400 hover:text-red-500 text-[14px] transition-colors">{item}</a>
                         </li>
                      ))}
                   </ul>
                   {/* Sub-col 2 */}
                   <ul className="space-y-3">
                      {['Faqs', 'Contact', 'Pricing Plans', 'Support'].map((item) => (
                         <li key={item}>
                            <a href="#" className="text-gray-400 hover:text-red-500 text-[14px] transition-colors">{item}</a>
                         </li>
                      ))}
                   </ul>
                </div>
             </div>

             {/* Column 3: Contact Info (Span 3) */}
             <div className="lg:col-span-3">
                <h4 className="font-bold text-lg mb-8 uppercase text-white">CONTACT</h4>
                <p className="text-gray-400 text-[14px] mb-6 leading-relaxed">
                   36 broklyn golden street. New York. USA
                </p>
                <div className="space-y-4">
                   <div className="flex items-center gap-3 group cursor-pointer">
                      <Phone className="w-4 h-4 text-red-500" />
                      <span className="text-white text-[14px] group-hover:text-red-500 transition-colors font-medium">+92 (3680) 00 - 6800</span>
                   </div>
                   <div className="flex items-center gap-3 group cursor-pointer">
                      <Mail className="w-4 h-4 text-red-500" />
                      <span className="text-white text-[14px] group-hover:text-red-500 transition-colors">needhelp@company.com</span>
                   </div>
                </div>
             </div>

          </div>

          {/* Bottom Copyright */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center relative z-10">
             <p className="text-gray-500 text-[13px]">
                © Copyright 2025 by Cilox HTML Template.
             </p>
          </div>

        </div>

        {/* Global Styles for Animations */}
        <style>{`
            .drift-animation {
                animation: zoomDrift 15s ease-in-out infinite;
            }
            .drift-reverse-animation {
                animation: zoomDriftReverse 20s ease-in-out infinite;
            }
            .pulse-animation {
                animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }

            @keyframes zoomDrift { 
                0% { transform: rotate(12deg) scale(1); }
                50% { transform: rotate(15deg) scale(1.1); }
                100% { transform: rotate(12deg) scale(1); }
            }
            @keyframes zoomDriftReverse {
                0% { transform: rotate(-25deg) scale(1); }
                50% { transform: rotate(-22deg) scale(1.15); }
                100% { transform: rotate(-25deg) scale(1); }
            }
            @keyframes pulse { /* Corrected from 'string' to 'number' for percentage values */
                0%, 100% { opacity: 0.5; }
                50% { opacity: 0.3; }
            }
        `}</style>
      </footer>
    </div>
  );
}

export default Contact;