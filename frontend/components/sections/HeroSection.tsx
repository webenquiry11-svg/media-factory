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
    image: "/media factory images/hero1.png",
    title: "GROW FASTER.\nSPEND SMARTER.",
    buttonText: "Start Your Campaign"
  },
  {
    id: 2,
    image: "/media factory images/hero2.jpg",
    title: "TURN SPACES INTO\nPROFIT POINTS",
    buttonText: "Start Your Campaign"
  },
  {
    id: 3,
    image: "/media factory images/hero3.png",
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
      <div className="bg-[#111] text-gray-400 text-[10px] sm:text-xs py-2 sm:py-3 border-b border-white/5 relative z-50">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 hover:text-red-500 transition-colors cursor-pointer">
              <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-500" />
              <span>needhelp@company.com</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 hover:text-red-500 transition-colors cursor-pointer">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-500" />
              <span>88 Brooklyn Golden Street, NY</span>
            </div>
          </div>

          {/* Right: Links & Socials */}
          <div className="hidden sm:flex items-center">
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
      <div className="relative min-h-[600px] h-[100dvh] lg:h-screen w-full bg-gray-900 overflow-hidden group">
        
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
                
                {/* Responsive Gradient Overlay: 
                    Mobile: Darker overall base + vertical gradient.
                    Desktop: Transparent base + horizontal gradient starting with TRANSPARENT on the left.
                */}
                <div className="absolute inset-0 bg-black/40 lg:bg-transparent z-0 lg:z-[-1]" />
                {/* CHANGED LINE BELOW: Added `sm:from-transparent` to make the left side clear on tablet/desktop */}
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/80 sm:from-transparent via-black/20 lg:via-black/40 to-black/80 lg:to-black/90 z-10" />
              </div>
              
              {/* RED LAYER (Right Side Only - Hidden on Mobile/Tablet) */}
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
        <nav className="absolute top-6 sm:top-8 left-0 w-full z-50">
          <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center">
               <img src="/logo.png" alt="Cilox Logo" className="h-8 sm:h-10 lg:h-12 w-auto" />
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex bg-black rounded-full px-8 py-4 items-center gap-8 shadow-2xl shadow-black/50 border border-white/5">
              <NavLink href="#services" active>Our Services</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#our-work">Our Work</NavLink>
              <NavLink href="#why-choose-us">Our Promise</NavLink>
              <NavLink href="#contact">Contact Us</NavLink>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              {/* CTA - Hidden on mobile, visible on lg */}
              <div className="relative hidden lg:inline-block">
                <a href="#contact" className="inline-block px-6 py-3 bg-red-500 text-white font-bold text-xs tracking-widest uppercase rounded-full hover:bg-red-600 transition-colors">
                  Request a Quote
                </a>
              </div>
              
              {/* Mobile Hamburger */}
              <button 
                className="lg:hidden text-white hover:text-red-500 transition-colors p-1"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </nav>

        {/* === PERMANENT FLOATING FORM (DESKTOP ONLY) === */}
        <div className="absolute hidden lg:block right-20 xl:right-36 top-1/2 -translate-y-1/2 z-[60] w-[350px] xl:w-[380px]">
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
          <div className="max-w-full md:max-w-2xl lg:max-w-4xl space-y-6 sm:space-y-8 relative">
            
            {SLIDES.map((slide, index) => (
              <div 
                key={`text-${slide.id}`} 
                className={`transition-all absolute top-0 left-0 w-full ${getTextContainerClass(index)}`}
                style={{ position: index === currentSlide ? 'relative' : 'absolute' }}
              >
                
                {/* 1. HEADLINE */}
                <div className="overflow-hidden pb-2">
                   <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] sm:leading-[0.9] tracking-tight drop-shadow-lg block ${getMaskedContentClass(index, 'delay-700')}`}>
                    {slide.title.split('\n').map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </h1>
                </div>

                {/* 2. BUTTON (Permanently Red) */}
                <div className="pt-6 sm:pt-8 overflow-hidden">
                   <div className={`${getMaskedContentClass(index, 'delay-[900ms]')}`}>
                      <button className="group relative px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-red-500 text-white font-bold tracking-widest text-[10px] sm:text-xs md:text-sm hover:bg-red-600 border border-red-500 transition-all duration-300 uppercase flex items-center gap-3 shadow-[0_5px_20px_rgba(239,68,68,0.3)] hover:shadow-[0_8px_25px_rgba(239,68,68,0.4)]">
                        {slide.buttonText}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                   </div>
                </div>

              </div>
            ))}
          </div>

          {/* CONTROLS */}
          <div className="absolute bottom-8 right-4 sm:bottom-12 sm:right-10 lg:right-20 z-40">
            <div className="flex items-center gap-3 sm:gap-4 border border-red-500/50 rounded-full p-1.5 sm:p-2 bg-black/20 backdrop-blur-sm shadow-lg">
              <div className="text-lg sm:text-2xl font-light tracking-widest text-white/50 select-none pl-3 sm:pl-4 hidden sm:block">
                <span className="text-white font-bold text-xl sm:text-3xl">{currentSlide + 1}</span> 
                <span className="mx-2">/</span>
                {SLIDES.length}
              </div>
 
              <div className="flex gap-1 sm:gap-2">
                <button 
                 onClick={prevSlideAction}
                 className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 hover:border-red-500 hover:bg-red-500 hover:text-black flex items-center justify-center transition-all duration-300 group/btn"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:scale-110 transition-transform" />
                </button>
                <button 
                 onClick={nextSlide}
                 className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 hover:border-red-500 hover:bg-red-500 hover:text-black flex items-center justify-center transition-all duration-300 group/btn"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:scale-110 transition-transform" />
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
          
          <div className="flex flex-col items-center space-y-6 sm:space-y-8 text-center p-4">
             <div className="w-16 h-1 bg-red-500 mb-4" />
             <MobileNavLink href="#services" onClick={() => setIsMobileMenuOpen(false)}>Our Services</MobileNavLink>
             <MobileNavLink href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</MobileNavLink>
             <MobileNavLink href="#our-work" onClick={() => setIsMobileMenuOpen(false)}>Our Work</MobileNavLink>
             <MobileNavLink href="#why-choose-us" onClick={() => setIsMobileMenuOpen(false)}>Our Promise</MobileNavLink>
             <MobileNavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</MobileNavLink>
             
             <div className="pt-8">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="px-8 py-4 bg-red-500 text-white font-bold text-sm tracking-widest uppercase rounded-full hover:bg-red-600 transition-colors shadow-lg shadow-red-500/30">
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