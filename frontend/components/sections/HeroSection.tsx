"use client";
import React, { useState, useEffect } from "react";
import { 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Phone, 
  Search, 
  ShoppingCart, 
  Menu, 
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight} from "lucide-react";

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

  // 1. SLIDE WRAPPER (Movement)
  const getSlideWrapperClass = (index) => {
    const baseClass = "transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]";
    if (index === currentSlide) return `translate-x-0 opacity-100 z-20 ${baseClass} delay-0`;
    if (index === prevSlide) return `translate-x-full opacity-0 z-10 ${baseClass} delay-500`;
    return `translate-x-full opacity-0 z-0 duration-0`;
  };

  // 2. IMAGE ZOOM (Ken Burns)
  const getImageZoomClass = (index) => {
    if (index === currentSlide) return "scale-100 transition-transform duration-[6000ms] ease-linear";
    return "scale-125 transition-none"; 
  };

  // 3. RED LAYER (Right Side)
  const getLayerClass = (index) => {
    const baseClass = "transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]";
    if (index === currentSlide) return `translate-x-0 opacity-100 z-30 ${baseClass} delay-500`;
    if (index === prevSlide) return `translate-x-full opacity-0 z-20 ${baseClass} delay-0`;
    return `translate-x-full opacity-0 z-0 duration-0`;
  };

  // 4. TEXT CONTAINER (Left Side Global Move)
  const getTextContainerClass = (index) => {
    const baseClass = "transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]";
    if (index === currentSlide) return `translate-x-0 opacity-100 z-30 ${baseClass} delay-500`;
    if (index === prevSlide) return `-translate-x-full opacity-0 z-20 ${baseClass} delay-0`;
    return `-translate-x-full opacity-0 z-0 duration-0`;
  };

  // 5. MASKED TEXT REVEAL (The New Animation)
  // Instead of fading, we slide the text up from a hidden "mask" (overflow-hidden parent)
  const getMaskedContentClass = (index, delayClass) => {
    // Standard cubic-bezier for a "snap" feel
    const ease = "ease-[cubic-bezier(0.65,0,0.35,1)]"; 
    
    if (index === currentSlide) {
      // ENTER: Slide Up from 100% to 0%
      return `translate-y-0 opacity-100 transition-transform duration-1000 ${ease} ${delayClass}`;
    }
    if (index === prevSlide) {
      // EXIT: Slide Up from 0% to -100% (Vanishing upward)
      return `-translate-y-[110%] opacity-0 transition-transform duration-700 ${ease}`;
    }
    // WAITING: Sit below at 100%
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
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="flex items-center space-x-4 border-r border-gray-700 pr-6">
              <a href="#" className="hover:text-red-500 transition-colors">Help</a>
              <span className="text-gray-700">/</span>
              <a href="#" className="hover:text-red-500 transition-colors">Support</a>
              <span className="text-gray-700">/</span>
              <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-red-500 transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><Twitter className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
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
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10" />
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
            <a href="/" className="flex items-center gap-3 group/logo">
               <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                  <div className="absolute inset-0 border-2 border-red-500 rotate-45 group-hover/logo:rotate-90 transition-transform duration-500" />
                  <div className="w-2 h-2 bg-red-500" />
               </div>
               <span className="text-2xl font-bold tracking-tight text-white uppercase">Cilox</span>
            </a>

            <div className="hidden lg:flex bg-black rounded-full px-8 py-4 items-center gap-8 shadow-2xl shadow-black/50 border border-white/5">
              <NavLink href="#home" active>HOME</NavLink>
              <NavLink href="#about">ABOUT</NavLink>
              <NavLink href="#services">SERVICES</NavLink>
              <NavLink href="#project">PROJECT</NavLink>
              <NavLink href="#award">AWARD</NavLink>
              <NavLink href="#testimonial">TESTIMONIAL</NavLink>
              <NavLink href="#blog">BLOG</NavLink>
            </div>

            <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-4 pr-6 border-r border-gray-500/30">
                <button className="hover:text-red-500 transition-colors"><Search className="w-5 h-5" /></button>
                <button className="hover:text-red-500 transition-colors relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">0</span>
                </button>
              </div>
              <div className="hidden lg:flex items-center gap-3 pl-2">
                <div className="w-10 h-10 border border-red-500 rounded flex items-center justify-center text-red-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] text-gray-300 font-medium tracking-wider">CALL ANYTIME</span>
                  <span className="text-sm font-bold text-white tracking-wide">(303) 555-0105</span>
                </div>
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

        {/* HERO CONTENT AREA */}
        <div className="relative z-30 container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-4xl space-y-8 mt-20 relative">
            
            {SLIDES.map((slide, index) => (
              <div 
                key={`text-${slide.id}`} 
                className={`transition-all absolute top-0 left-0 w-full ${getTextContainerClass(index)}`}
                style={{ position: index === currentSlide ? 'relative' : 'absolute' }}
              >
                {/* 
                   MASKED REVEAL STRATEGY:
                   1. We wrap the text in a <div> with `overflow-hidden`. This acts as the "window".
                   2. We move the inner text element.
                   3. When it's "waiting", it's pushed down 100% (hidden below the window).
                   4. When "active", it slides up to 0%.
                */}
                
                {/* 1. HEADLINE */}
                <div className="overflow-hidden pb-2"> {/* Added padding bottom to prevent text clipping descenders */}
                   <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight drop-shadow-lg block ${getMaskedContentClass(index, 'delay-700')}`}>
                    {slide.title.split('\n').map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </h1>
                </div>

                {/* 2. SUBTITLE (No mask, standard slide-in for contrast) */}
                {/* Or we can mask this too for consistency. Let's mask it! */}
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
             <MobileNavLink href="#home" onClick={() => setIsMobileMenuOpen(false)}>HOME</MobileNavLink>
             <MobileNavLink href="#about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</MobileNavLink>
             <MobileNavLink href="#services" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</MobileNavLink>
             <MobileNavLink href="#project" onClick={() => setIsMobileMenuOpen(false)}>PROJECT</MobileNavLink>
             <MobileNavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</MobileNavLink>
             
             <div className="flex flex-col items-center mt-8 space-y-4">
                <span className="text-red-500 font-bold text-xl">(303) 555-0105</span>
                <div className="flex gap-6">
                  <Facebook className="w-6 h-6 hover:text-red-500 cursor-pointer" />
                  <Twitter className="w-6 h-6 hover:text-red-500 cursor-pointer" />
                  <Instagram className="w-6 h-6 hover:text-red-500 cursor-pointer" />
                </div>
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