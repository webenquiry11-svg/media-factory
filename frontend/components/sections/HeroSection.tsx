"use client";
import React, { useState, useEffect } from "react";
import { 
  Mail, 
  MapPin, 
  Send,
  Menu, 
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from "lucide-react";

const SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "GROW FASTER.\nSPEND SMARTER.",
    buttonText: "Start Your Campaign"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    title: "TURN SPACES INTO\nPROFIT POINTS",
    buttonText: "Start Your Campaign"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "CAPTURE MORE EYES,\nDELIVER MORE SALES",
    buttonText: "Start Your Campaign"
  }
];

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);

  const nextSlide = () => {
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const prevSlideAction = () => {
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  // --- ANIMATION CLASSES ---
  const getSlideWrapperClass = (index: number) => {
    const baseClass = "transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]";
    if (index === currentSlide) return `translate-x-0 opacity-100 z-20 ${baseClass} delay-0`;
    if (index === prevSlide) return `translate-x-full opacity-0 z-10 ${baseClass} delay-500`;
    return `translate-x-full opacity-0 z-0 duration-0`;
  };

  const getImageZoomClass = (index: number) => {
    if (index === currentSlide) return "scale-100 transition-transform duration-[6000ms] ease-linear";
    return "scale-125 transition-none"; 
  };

  const getLayerClass = (index: number) => {
    const baseClass = "transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]";
    if (index === currentSlide) return `translate-x-0 opacity-100 z-30 ${baseClass} delay-500`;
    if (index === prevSlide) return `translate-x-full opacity-0 z-20 ${baseClass} delay-0`;
    return `translate-x-full opacity-0 z-0 duration-0`;
  };

  const getTextContainerClass = (index: number) => {
    const baseClass = "transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]";
    if (index === currentSlide) return `translate-x-0 opacity-100 z-30 ${baseClass} delay-500`;
    if (index === prevSlide) return `-translate-x-full opacity-0 z-20 ${baseClass} delay-0`;
    return `-translate-x-full opacity-0 z-0 duration-0`;
  };

  const getMaskedContentClass = (index: number, delayClass: string) => {
    const ease = "ease-[cubic-bezier(0.65,0,0.35,1)]"; 
    if (index === currentSlide) {
      return `translate-y-0 opacity-100 transition-transform duration-1000 ${ease} ${delayClass}`;
    }
    if (index === prevSlide) {
      return `-translate-y-[110%] opacity-0 transition-transform duration-700 ${ease}`;
    }
    return `translate-y-[110%] opacity-0 transition-none`;
  };

  return (
    <div className="font-sans text-white relative w-full overflow-x-hidden">
      
      {/* 1. TOP BAR */}
      <div className="bg-[#111] text-gray-400 text-[11px] sm:text-xs py-3 border-b border-white/5 relative z-50">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left: Contact Info */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2 hover:text-red-500 transition-colors cursor-pointer">
              <Mail className="w-3.5 h-3.5 text-red-500" />
              <span>needhelp@company.com</span>
            </div>
            <div className="hidden md:flex items-center gap-2 hover:text-red-500 transition-colors cursor-pointer">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>88 Brooklyn Golden Street, New York</span>
            </div>
          </div>

          {/* Right: Links & Socials */}
          <div className="flex items-center">
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-red-500 transition-colors">Help</a>
              <span className="text-gray-700">/</span>
              <a href="#" className="hover:text-red-500 transition-colors">Support</a>
              <span className="text-gray-700">/</span>
              <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. COMBINED HEADER & HERO SECTION */}
      <div className="relative h-[850px] lg:h-screen w-full bg-gray-900 overflow-hidden group">
        
        {/* === BACKGROUND SLIDER === */}
        <div className="absolute inset-0 z-0">
          {SLIDES.map((slide, index) => (
            <div key={`bg-${slide.id}`} className="absolute inset-0">
              {/* IMAGE WRAPPER */}
              <div className={`absolute inset-0 w-full h-full overflow-hidden ${getSlideWrapperClass(index)}`}>
                <img 
                  src={slide.image} 
                  alt="Slide Background" 
                  className={`w-full h-full object-cover ${getImageZoomClass(index)}`}
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-black/90 via-black/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-black/40 z-0" />
              </div>
              
              {/* RED LAYER */}
              <div className={`absolute inset-0 w-full h-full pointer-events-none ${getLayerClass(index)}`}>
                <div 
                  className="absolute top-0 right-0 h-full w-[60%] bg-gradient-to-bl from-red-900/95 via-red-600/90 to-red-500/80 mix-blend-multiply hidden lg:block"
                  style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0% 100%)' }}
                />
                <div 
                  className="absolute top-0 right-0 h-full w-[60%] bg-gradient-to-b from-transparent to-black/50 hidden lg:block"
                  style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0% 100%)' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* NAVIGATION */}
        <nav className="absolute top-8 left-0 w-full z-50">
          <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
            <a href="/" className="flex items-center">
               <img src="/logo.png" alt="Cilox Logo" className="h-12 w-auto" />
            </a>

            <div className="hidden lg:flex bg-black rounded-full px-8 py-4 items-center gap-8 shadow-2xl shadow-black/50 border border-white/5">
              <NavLink href="#services" active>Our Services</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#our-work">Our Work</NavLink>
              <NavLink href="#why-choose-us">Our Promise</NavLink>
              <NavLink href="#contact">Contact Us</NavLink>
            </div>

            <div className="flex items-center gap-6">
              <div className="relative hidden lg:inline-block">
                <a href="#contact" className="inline-block px-6 py-3 bg-red-500 text-white font-bold text-xs tracking-widest uppercase rounded-full hover:bg-red-600 transition-colors">
                  Request a Quote
                </a>
              </div>
              
              <button 
                className="lg:hidden text-white hover:text-red-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </nav>

        {/* === PERMANENT FLOATING FORM (RIGHT CENTER - SHIFTED LEFT) === */}
        {/* Changed 'right-8' to 'right-36' to move it left a little bit */}
        <div className="absolute hidden lg:block right-36 top-1/2 -translate-y-1/2 z-[60] w-[380px]">
          <div className="bg-black/80 backdrop-blur-lg text-white p-6 rounded-xl shadow-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-red-500/20 via-transparent to-transparent animate-[spin_20s_linear_infinite]" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center">
                  <Send className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Quick Quote</h4>
                  <p className="text-xs text-gray-400">Get a fast response from our team.</p>
                </div>
              </div>
              <form className="space-y-3">
                <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-sm placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none transition-all" />
                <input type="email" placeholder="Your Email" className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-sm placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none transition-all" />
                <textarea placeholder="Tell us about your project..." rows={3} className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-sm resize-none placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none transition-all"></textarea>
                <button type="submit" className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-2 transition-colors duration-300 shadow-[0_5px_20px_rgba(239,68,68,0.3)] hover:shadow-[0_8px_25px_rgba(239,68,68,0.4)]">
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* HERO CONTENT AREA (TEXT) */}
        <div className="relative z-30 container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-4xl space-y-8 mt-20 relative">
            
            {SLIDES.map((slide, index) => (
              <div 
                key={`text-${slide.id}`} 
                className={`transition-all absolute top-0 left-0 w-full ${getTextContainerClass(index)}`}
                style={{ position: index === currentSlide ? 'relative' : 'absolute' }}
              >
                
                {/* 1. HEADLINE */}
                <div className="overflow-hidden pb-2">
                   <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight drop-shadow-lg block ${getMaskedContentClass(index, 'delay-700')}`}>
                    {slide.title.split('\n').map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </h1>
                </div>

                {/* 2. SUBTITLE */}
                <div className="overflow-hidden mt-8 pl-1 border-l-4 border-red-500/50">
                  <p className={`text-gray-300 max-w-md text-lg block ${getMaskedContentClass(index, 'delay-[900ms]')}`}>
                    We provide creative solutions to turn your ideas into digital reality with precision and style.
                  </p>
                </div>

                {/* 3. BUTTON */}
                <div className="pt-8 overflow-hidden">
                   <div className={`${getMaskedContentClass(index, 'delay-[1100ms]')}`}>
                      <button className="group relative px-8 py-4 rounded-full border border-red-500 text-red-500 font-bold tracking-widest text-sm hover:bg-red-500 hover:text-white transition-all duration-300 uppercase flex items-center gap-3">
                        {slide.buttonText}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                   </div>
                </div>

              </div>
            ))}
          </div>

          {/* CONTROLS */}
          <div className="absolute bottom-12 right-4 lg:right-20 z-40">
            <div className="flex items-center gap-4 border border-red-500/50 rounded-full p-2 bg-black/20 backdrop-blur-sm shadow-lg">
              <div className="text-2xl font-light tracking-widest text-white/50 select-none pl-4">
                <span className="text-white font-bold text-3xl">{currentSlide + 1}</span> 
                <span className="mx-2">/</span>
                {SLIDES.length}
              </div>
 
              <div className="flex gap-2">
                <button 
                 onClick={prevSlideAction}
                 className="w-12 h-12 rounded-full border border-white/20 hover:border-red-500 hover:bg-red-500 hover:text-black flex items-center justify-center transition-all duration-300 group/btn"
                >
                  <ChevronLeft className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                </button>
                <button 
                 onClick={nextSlide}
                 className="w-12 h-12 rounded-full border border-white/20 hover:border-red-500 hover:bg-red-500 hover:text-black flex items-center justify-center transition-all duration-300 group/btn"
                >
                  <ChevronRight className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-red-500"
          >
            <X className="w-10 h-10" />
          </button>
          
          <div className="flex flex-col items-center space-y-8 text-center p-4">
             <div className="w-16 h-1 bg-red-500 mb-4" />
             <MobileNavLink href="#services" onClick={() => setIsMobileMenuOpen(false)}>Our Services</MobileNavLink>
             <MobileNavLink href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</MobileNavLink>
             <MobileNavLink href="#our-work" onClick={() => setIsMobileMenuOpen(false)}>Our Work</MobileNavLink>
             <MobileNavLink href="#why-choose-us" onClick={() => setIsMobileMenuOpen(false)}>Our Promise</MobileNavLink>
             <MobileNavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</MobileNavLink>
             
             <div className="pt-8">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="px-8 py-4 bg-red-500 text-white font-bold text-sm tracking-widest uppercase rounded-full hover:bg-red-600 transition-colors">
                  Request a Quote
                </a>
             </div>
          </div>
        </div>
      )}

    </div>
  );
}

// --- HELPER COMPONENTS ---

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <a 
      href={href} 
      className={`text-[13px] font-bold tracking-widest transition-colors hover:text-red-500 relative group py-2 ${active ? "text-red-500" : "text-white"}`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${active ? 'scale-x-100' : ''}`} />
    </a>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="text-2xl font-bold tracking-wider text-white hover:text-red-500 transition-colors"
    >
      {children}
    </a>
  );
}