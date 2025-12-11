"use client";
import React from 'react';
import { Building2, Phone, MapPin, Mail, ArrowRight, Facebook, Twitter, Instagram, Linkedin, Pin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="font-sans text-[#111]">
      
      {/* =========================================
          CONTACT SECTION
      ========================================= */}
      <section className="bg-gray-50 py-24 px-6 sm:px-12 lg:px-24 overflow-hidden relative">
        
        {/* Background Decor (Subtle Angle) */}
        <div className="absolute top-0 left-0 w-full h-2/3 bg-white -skew-y-1 origin-top-left z-0" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
             <div className="flex justify-center mb-4">
                <div className="w-10 h-1 bg-red-500 rounded-full" />
             </div>
             <span className="text-red-500 font-bold text-[13px] tracking-[0.2em] uppercase mb-4 block">
                Get In Touch
             </span>
             <h2 className="text-4xl md:text-5xl font-extrabold text-[#111] uppercase leading-tight mb-6">
                Let's Build Something <br/> Great Together
             </h2>
             <p className="text-gray-500 text-lg leading-relaxed">
                We are here to help and answer any question you might have. We look forward to hearing from you.
             </p>
          </div>

          {/* --- TOP CARDS SECTION --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            
            {/* Card 1: About Us */}
            <div className="bg-white p-10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-[4rem] z-0 transition-colors group-hover:bg-red-500" />
              <div className="absolute top-6 right-6 z-10">
                 <Building2 className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors duration-500" />
              </div>
              
              <div className="relative z-10 mt-4">
                <span className="text-red-500 font-bold text-[11px] uppercase tracking-widest mb-3 block group-hover:text-red-600 transition-colors">Know</span>
                <h3 className="text-2xl font-extrabold uppercase mb-4">About Us</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  Empowering brands and ideas with creative design and digital expertise.
                </p>
              </div>
            </div>

            {/* Card 2: Contact */}
            <div className="bg-white p-10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-[4rem] z-0 transition-colors group-hover:bg-red-500" />
              <div className="absolute top-6 right-6 z-10">
                 <Phone className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors duration-500" />
              </div>

              <div className="relative z-10 mt-4">
                <span className="text-red-500 font-bold text-[11px] uppercase tracking-widest mb-3 block group-hover:text-red-600 transition-colors">Call</span>
                <h3 className="text-2xl font-extrabold uppercase mb-4">Contact</h3>
                <div className="text-gray-500 text-[15px] leading-relaxed space-y-1">
                  <p>Mon-Sat 8:00 - 6:30 Sunday Off</p>
                  <p className="hover:text-red-500 transition-colors cursor-pointer font-medium text-[#111]">needhelp@company.com</p>
                  <p className="font-bold text-[#111] text-lg mt-2">+ 92 (246) 0088</p>
                </div>
              </div>
            </div>

            {/* Card 3: Address */}
            <div className="bg-white p-10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-[4rem] z-0 transition-colors group-hover:bg-red-500" />
              <div className="absolute top-6 right-6 z-10">
                 <MapPin className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors duration-500" />
              </div>

              <div className="relative z-10 mt-4">
                <span className="text-red-500 font-bold text-[11px] uppercase tracking-widest mb-3 block group-hover:text-red-600 transition-colors">Visit</span>
                <h3 className="text-2xl font-extrabold uppercase mb-4">Address</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  80 Broklyn Golden Seven Street New York. United States of America
                </p>
              </div>
            </div>

          </div>

          {/* --- FORM SECTION (New Layout) --- */}
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-5">
                
                {/* Left Side: Info Panel */}
                <div className="hidden lg:block lg:col-span-2 bg-[#111] p-10 relative overflow-hidden text-white flex flex-col justify-between">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4 uppercase">Let's Talk</h3>
                        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                            Fill out the form and our expert team will get back to you within 24 hours.
                        </p>
                        
                        <div className="space-y-6 mt-8">
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-300">
                                    <Phone className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Phone</span>
                                    <span className="text-sm font-bold">+92 (246) 0088</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-300">
                                    <Mail className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Email</span>
                                    <span className="text-sm font-bold">info@company.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Decor Circles */}
                    <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-red-500 rounded-full opacity-20 blur-[50px]" />
                    <div className="absolute top-10 -left-10 w-20 h-20 bg-blue-500 rounded-full opacity-10 blur-2xl" />
                </div>

                {/* Right Side: Form */}
                <div className="lg:col-span-3 p-8 md:p-12">
                    <h3 className="text-2xl font-bold text-[#111] mb-2 uppercase">Send a Message</h3>
                    <p className="text-gray-500 text-sm mb-8">We would love to hear from you!</p>
                    
                    <form className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="relative group">
                                <input 
                                type="text" 
                                placeholder="Your Name" 
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:bg-white focus:border-red-500 outline-none transition-all"
                                />
                            </div>
                            <div className="relative group">
                                <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:bg-white focus:border-red-500 outline-none transition-all"
                                />
                            </div>
                            <div className="relative group">
                                <input 
                                type="tel" 
                                placeholder="Phone" 
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:bg-white focus:border-red-500 outline-none transition-all"
                                />
                            </div>
                            <div className="relative group">
                                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-400 focus:ring-1 focus:ring-red-500 focus:bg-white focus:border-red-500 outline-none appearance-none cursor-pointer transition-all">
                                <option>Select Service</option>
                                <option>Web Development</option>
                                <option>Digital Marketing</option>
                                <option>Brand Identity</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor">
                                        <path d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <textarea 
                                rows={5}
                                placeholder="Write Your Message Here..." 
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:bg-white focus:border-red-500 outline-none resize-none transition-all"
                            ></textarea>
                        </div>
                        <div className="pt-2">
                            <button type="submit" className="w-full md:w-auto px-8 py-3.5 bg-red-500 hover:bg-[#111] text-white font-bold uppercase text-[11px] tracking-widest rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group">
                                Send Message
                                <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          FOOTER SECTION (Unchanged)
      ========================================= */}
      <footer className="bg-[#0b0b0b] pt-20 pb-10 relative overflow-hidden text-white border-t border-[#111]">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
           <img src="/media factory images/footer.jpg" alt="Footer Background" className="w-full h-full object-cover opacity-25" />
        </div>
        
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
            <a href="/" className="flex items-center">
               <img src="/logo.png" alt="Cilox Logo" className="h-12 w-auto" />
            </a>

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
                   Welcome to Media Factory, your trusted partner for impactful indoor and outdoor advertising.
                </h3>
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
            @keyframes pulse {
                0%, 100% { opacity: 0.5; }
                50% { opacity: 0.3; }
            }
        `}</style>
      </footer>
    </div>
  );
}

export default Contact;