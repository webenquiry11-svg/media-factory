"use client";
import React, { useState, useEffect } from "react";
import { 
  Mail, 
  MapPin, 
  Send,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Loader2,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const SLIDES = [
  {
    id: 1,
    image: "/media factory images/hero1.png",
    title: "GROW FASTER.\nSPEND SMARTER.",
    buttonText: "Connect Now",
    link: "#contact"
  },
  {
    id: 2,
    image: "/media factory images/hero2.jpg",
    title: "TURN SPACES INTO\nPROFIT POINTS",
    buttonText: "View Services",
    link: "#services"
  },
  {
    id: 3,
    image: "/media factory images/hero3.png",
    title: "CAPTURE MORE EYES,\nDELIVER MORE SALES",
    buttonText: "Start Your Campaign",
    link: "#contact"
  }
];

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);

  // --- FORM STATE ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    source: 'Hero Section'
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: '' });

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setStatus({ submitting: false, success: true, error: '' });
        setFormData({ name: '', email: '', message: '', source: 'Hero Section' });
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      } else {
        setStatus({ submitting: false, success: false, error: data.message || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ submitting: false, success: false, error: 'Failed to send.' });
    }
  };

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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

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
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6 w-full md:w-auto">
            <div className="flex items-center gap-2 hover:text-red-500 transition-colors cursor-pointer">
              <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-500 shrink-0" />
              <span className="truncate">support@mediafactory.co.in</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 hover:text-red-500 transition-colors cursor-pointer">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-500 shrink-0" />
              <span className="truncate">Ludhiana, Punjab, 141001</span>
            </div>
          </div>
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
      <div className="relative min-h-[500px] h-[100dvh] lg:h-screen w-full bg-gray-900 overflow-hidden group">
        
        {/* === BACKGROUND SLIDER === */}
        <div className="absolute inset-0 z-0">
          {SLIDES.map((slide, index) => (
            <div key={`bg-${slide.id}`} className="absolute inset-0">
              <div className={`absolute inset-0 w-full h-full overflow-hidden ${getSlideWrapperClass(index)}`}>
                <img 
                  src={slide.image} 
                  alt="Slide Background" 
                  className={`w-full h-full object-cover ${getImageZoomClass(index)}`}
                />
                <div className="absolute inset-0 bg-transparent z-0 lg:z-[-1]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-black/30 lg:via-black/40 sm:to-transparent lg:to-black/90 z-10" />
              </div>
              
              {/* RED LAYER - Adjusted clip-path for laptop screens */}
              <div className={`absolute inset-0 w-full h-full pointer-events-none ${getLayerClass(index)}`}>
                <div 
                  className="absolute top-0 right-0 h-full w-[50%] lg:w-[60%] bg-gradient-to-bl from-red-900/95 via-red-600/90 to-red-500/80 mix-blend-multiply hidden lg:block"
                  style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0% 100%)' }}
                />
                <div 
                  className="absolute top-0 right-0 h-full w-[50%] lg:w-[60%] bg-gradient-to-b from-transparent to-black/50 hidden lg:block"
                  style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0% 100%)' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* NAVIGATION */}
        <nav className="absolute top-4 sm:top-6 lg:top-8 left-0 w-full z-[100]">
          <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center shrink-0">
               <img src="/logo.png" alt="Cilox Logo" className="h-8 sm:h-10 lg:h-12 w-auto object-contain" />
            </a>

            {/* Desktop Menu - Compacted for Laptop (lg) */}
            <div className="hidden lg:flex bg-black rounded-full px-6 xl:px-8 py-3 xl:py-4 items-center gap-4 xl:gap-8 shadow-2xl shadow-black/50 border border-white/5">
              <NavLink href="#services" active>Our Services</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#our-work">Our Work</NavLink>
              <NavLink href="#why-choose-us">Why Choose Us</NavLink>
              <NavLink href="#contact">Contact Us</NavLink>
            </div>

            <div className="flex items-center gap-3 sm:gap-6">
              
              {/* === ATTRACTIVE "REQUEST A QUOTE" BUTTON (DESKTOP) === */}
              <div className="relative hidden lg:inline-block">
                <a href="#contact" className="group relative inline-flex items-center justify-center px-6 xl:px-8 py-3 font-bold text-white transition-all duration-300 bg-red-600 rounded-full hover:bg-red-500 hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.7)] border-t border-white/20 overflow-hidden">
                   
                   {/* Sheen Effect */}
                   <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-10" />
                   
                   {/* Button Text */}
                   <span className="relative z-20 text-[10px] xl:text-[11px] uppercase tracking-widest flex items-center gap-2">
                     Request a Quote
                     <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                   </span>
                </a>
              </div>
              
              {/* Mobile Hamburger */}
              <button 
                className="lg:hidden z-[100] relative w-10 h-10 flex flex-col justify-center items-center gap-[6px] group"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                <span className={`h-[2px] w-7 bg-white rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-[8px] bg-red-500' : 'group-hover:bg-red-500'}`} />
                <span className={`h-[2px] w-7 bg-white rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0 translate-x-3' : 'group-hover:bg-red-500'}`} />
                <span className={`h-[2px] w-7 bg-white rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-[8px] bg-red-500' : 'group-hover:bg-red-500'}`} />
              </button>
            </div>
          </div>
        </nav>

        {/* === PERMANENT FLOATING FORM (DESKTOP ONLY) === */}
        {/* Adjusted Position: Closer to right edge, reduced width for laptops */}
        <div className="absolute hidden lg:block right-4 xl:right-36 top-1/2 -translate-y-1/2 z-[60] w-[320px] xl:w-[380px]">
          <div className="bg-black/80 backdrop-blur-lg text-white p-5 xl:p-6 rounded-xl shadow-2xl border border-white/10 relative overflow-hidden">
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
              
              {status.success ? (
                <div className="flex flex-col items-center justify-center py-8 text-green-500 space-y-3">
                  <CheckCircle className="w-12 h-12" />
                  <p className="font-bold text-sm">Request Sent!</p>
                </div>
              ) : (
                <form className="space-y-3" onSubmit={handleSubmit}>
                  {status.error && (
                    <div className="p-2 bg-red-500/20 border border-red-500/50 rounded text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {status.error}
                    </div>
                  )}
                  <input 
                    type="text" name="name" value={formData.name} onChange={handleChange} required 
                    placeholder="Your Name" className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-sm placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none transition-all" 
                  />
                  <input 
                    type="email" name="email" value={formData.email} onChange={handleChange} required 
                    placeholder="Your Email" className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-sm placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none transition-all" 
                  />
                  <textarea 
                    name="message" value={formData.message} onChange={handleChange} required 
                    placeholder="Tell us about your project..." rows={3} className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-sm resize-none placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                  ></textarea>
                  <button type="submit" disabled={status.submitting} className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-2 transition-colors duration-300 shadow-[0_5px_20px_rgba(239,68,68,0.3)] hover:shadow-[0_8px_25px_rgba(239,68,68,0.4)] disabled:opacity-70 disabled:cursor-not-allowed">
                    {status.submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Send Request'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* HERO CONTENT AREA (TEXT) */}
        <div className="relative z-30 container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center">
          <div className="w-full md:max-w-2xl lg:max-w-4xl space-y-4 sm:space-y-8 relative mt-16 sm:mt-0">
            
            {SLIDES.map((slide, index) => (
              <div 
                key={`text-${slide.id}`} 
                className={`transition-all absolute top-0 left-0 w-full ${getTextContainerClass(index)}`}
                style={{ position: index === currentSlide ? 'relative' : 'absolute' }}
              >
                
                {/* 1. HEADLINE - Reduced size for LG screens */}
                <div className="overflow-hidden pb-2 pr-4 sm:pr-0">
                   <h1 className={`text-2xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold text-white leading-[1.1] sm:leading-[0.9] tracking-tight drop-shadow-lg block ${getMaskedContentClass(index, 'delay-700')}`}>
                    {slide.title.split('\n').map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </h1>
                </div>

                {/* 2. BUTTON (Permanently Red) */}
                <div className="pt-4 sm:pt-8 overflow-hidden">
                   <div className={`${getMaskedContentClass(index, 'delay-[900ms]')}`}>
                      <a href={slide.link} className="group relative px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-red-500 text-white font-bold tracking-widest text-[10px] sm:text-xs md:text-sm hover:bg-red-600 border border-red-500 transition-all duration-300 uppercase inline-flex items-center gap-3 shadow-[0_5px_20px_rgba(239,68,68,0.3)] hover:shadow-[0_8px_25px_rgba(239,68,68,0.4)]">
                        {slide.buttonText}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                   </div>
                </div>

              </div>
            ))}
          </div>

          {/* CONTROLS */}
          <div className="absolute bottom-6 right-4 sm:bottom-12 sm:right-10 lg:right-20 z-40">
            <div className="flex items-center gap-3 sm:gap-4 border border-red-500/50 rounded-full p-1.5 sm:p-2 bg-black/40 sm:bg-black/20 backdrop-blur-md shadow-lg">
              <div className="text-lg sm:text-2xl font-light tracking-widest text-white/50 select-none pl-3 sm:pl-4 hidden sm:block">
                <span className="text-white font-bold text-xl sm:text-3xl">{currentSlide + 1}</span> 
                <span className="mx-2">/</span>
                {SLIDES.length}
              </div>
 
              <div className="flex gap-1 sm:gap-2">
                <button 
                 onClick={prevSlideAction}
                 className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 hover:border-red-500 hover:bg-red-500 hover:text-black flex items-center justify-center transition-all duration-300 group/btn bg-black/30 sm:bg-transparent"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-5 sm:h-5 group-hover/btn:scale-110 transition-transform" />
                </button>
                <button 
                 onClick={nextSlide}
                 className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 hover:border-red-500 hover:bg-red-500 hover:text-black flex items-center justify-center transition-all duration-300 group/btn bg-black/30 sm:bg-transparent"
                >
                  <ChevronRight className="w-5 h-5 sm:w-5 sm:h-5 group-hover/btn:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 bg-black/95 z-[90] flex items-center justify-center transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible backdrop-blur-md' : 'opacity-0 invisible pointer-events-none'}`}>
          
          <div className="flex flex-col items-center space-y-6 sm:space-y-8 text-center p-4 w-full max-h-screen overflow-y-auto">
             <div className={`w-16 h-1 bg-red-500 mb-4 shrink-0 transition-all duration-700 ease-out ${isMobileMenuOpen ? 'w-16 opacity-100' : 'w-0 opacity-0'}`} />
             <MobileNavLink href="#services" onClick={() => setIsMobileMenuOpen(false)} isOpen={isMobileMenuOpen} delay={100}>Our Services</MobileNavLink>
             <MobileNavLink href="#about" onClick={() => setIsMobileMenuOpen(false)} isOpen={isMobileMenuOpen} delay={200}>About</MobileNavLink>
             <MobileNavLink href="#our-work" onClick={() => setIsMobileMenuOpen(false)} isOpen={isMobileMenuOpen} delay={300}>Our Work</MobileNavLink>
             <MobileNavLink href="#why-choose-us" onClick={() => setIsMobileMenuOpen(false)} isOpen={isMobileMenuOpen} delay={400}>Why Choose Us</MobileNavLink>
             <MobileNavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)} isOpen={isMobileMenuOpen} delay={500}>Contact Us</MobileNavLink>
             
             {/* === ATTRACTIVE "REQUEST A QUOTE" BUTTON (MOBILE) === */}
             <div className={`pt-8 pb-8 transition-all duration-700 ease-out delay-[600ms] ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-red-600 rounded-full hover:bg-red-500 hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.4)] border-t border-white/20 overflow-hidden">
                   <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-10" />
                   <span className="relative z-20 text-sm uppercase tracking-widest flex items-center gap-2">
                     Request a Quote
                     <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                   </span>
                </a>
             </div>
          </div>
      </div>

      {/* Styles for the Shimmer Animation */}
      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

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

function MobileNavLink({ href, children, onClick, isOpen, delay }: { href: string; children: React.ReactNode; onClick: () => void; isOpen: boolean; delay: number }) {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className={`text-2xl sm:text-3xl font-bold tracking-wider text-white hover:text-red-500 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-12 opacity-0 blur-sm'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </a>
  );
}