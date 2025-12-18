"use client";
import React, { useState } from 'react';
import { 
  Building2, Phone, MapPin, Mail, Send, Loader2, CheckCircle, AlertCircle, 
  Facebook, Twitter, Instagram, Linkedin,
  // Media Icons
  Clapperboard, Mic, Video, Radio, Tv, Music, Megaphone, Play, Film, Camera, Aperture, Cast
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    source: 'Contact Page'
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        setFormData({ name: '', email: '', phone: '', service: '', message: '', source: 'Contact Page' });
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      } else {
        setStatus({ submitting: false, success: false, error: data.message || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ submitting: false, success: false, error: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <div className="font-sans text-[#111]">
      
      {/* =========================================
          CONTACT SECTION
      ========================================= */}
      <section id="contact" className="bg-white py-24 px-6 sm:px-12 lg:px-24 overflow-hidden relative">
        <div className="container mx-auto max-w-7xl relative z-10">
          
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
                  <p className="hover:text-red-500 transition-colors cursor-pointer font-medium text-[#111]">support@mediafactory.co.in</p>
                  <p className="font-bold text-[#111] text-lg mt-2">9814746565</p>
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
                  Ludhiana, Punjab, 141001
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-5">
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
                                    <span className="text-sm font-bold">9814746565</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-300">
                                    <Mail className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Email</span>
                                    <span className="text-sm font-bold">support@mediafactory.co.in</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-red-500 rounded-full opacity-20 blur-[50px]" />
                    <div className="absolute top-10 -left-10 w-20 h-20 bg-blue-500 rounded-full opacity-10 blur-2xl" />
                </div>
                <div className="lg:col-span-3 p-8 md:p-12">
                    <h3 className="text-2xl font-bold text-[#111] mb-2 uppercase">Send a Message</h3>
                    <p className="text-gray-500 text-sm mb-8">We would love to hear from you!</p>
                    {status.success && (
                      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700">
                        <CheckCircle className="w-5 h-5 shrink-0" />
                        <p className="text-sm font-medium">Message sent successfully! We'll get back to you soon.</p>
                      </div>
                    )}
                    {status.error && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <p className="text-sm font-medium">{status.error}</p>
                      </div>
                    )}
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="relative group">
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:bg-white focus:border-red-500 outline-none transition-all" />
                            </div>
                            <div className="relative group">
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:bg-white focus:border-red-500 outline-none transition-all" />
                            </div>
                            <div className="relative group">
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:bg-white focus:border-red-500 outline-none transition-all" />
                            </div>
                            <div className="relative group">
                                <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-500 focus:ring-1 focus:ring-red-500 focus:bg-white focus:border-red-500 outline-none appearance-none cursor-pointer transition-all">
                                <option value="">Select Service</option>
                                <option value="Outdoor Advertising">Outdoor Advertising</option>
                                <option value="Indoor Advertising">Indoor Advertising</option>
                                <option value="Digital Branding">Digital Branding</option>
                                <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="relative group">
                            <textarea rows={5} name="message" value={formData.message} onChange={handleChange} required placeholder="Write Your Message Here..." className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:bg-white focus:border-red-500 outline-none resize-none transition-all"></textarea>
                        </div>
                        <div className="pt-2">
                            <button type="submit" disabled={status.submitting} className="w-full md:w-auto px-8 py-3.5 bg-red-500 hover:bg-[#111] text-white font-bold uppercase text-[11px] tracking-widest rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed">
                                {status.submitting ? 'Sending...' : 'Send Message'}
                                {status.submitting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          FOOTER SECTION (UPDATED: "MEDIA STUDIO" ANIMATION)
      ========================================= */}
      <footer className="relative bg-white pt-24 pb-12 overflow-hidden text-[#111]">
        
        {/* --- ANIMATED BACKGROUND (Floating Media Icons) --- */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-white select-none pointer-events-none">
            
            {/* --- ICON GROUP 1 (Large, Very Faint) --- */}
            <div className="absolute top-[10%] left-[5%] text-gray-100 animate-float-slow opacity-60">
                <Clapperboard size={180} strokeWidth={1} />
            </div>
            <div className="absolute bottom-[20%] right-[10%] text-gray-100 animate-float-medium opacity-60">
                <Mic size={160} strokeWidth={1} className="rotate-12" />
            </div>
             <div className="absolute top-[40%] left-[40%] text-gray-50 animate-float-fast opacity-50">
                <Aperture size={250} strokeWidth={0.5} className="animate-spin-slow" />
            </div>

            {/* --- ICON GROUP 2 (Medium, Subtle Red Accent) --- */}
            <div className="absolute top-[20%] right-[20%] text-red-50 animate-float-medium delay-1000 opacity-80">
                <Video size={80} strokeWidth={1.5} />
            </div>
            <div className="absolute bottom-[10%] left-[20%] text-red-50 animate-float-slow delay-2000 opacity-80">
                <Megaphone size={90} strokeWidth={1.5} className="-rotate-12" />
            </div>
             <div className="absolute top-[60%] right-[40%] text-gray-100 animate-float-fast delay-500 opacity-70">
                <Tv size={100} strokeWidth={1} />
            </div>

            {/* --- ICON GROUP 3 (Small, Detail) --- */}
            <div className="absolute top-[15%] left-[25%] text-gray-200 animate-pulse-slow">
                <Play size={40} strokeWidth={2} />
            </div>
            <div className="absolute bottom-[30%] right-[5%] text-gray-200 animate-pulse-slow delay-1000">
                <Music size={35} strokeWidth={2} />
            </div>
            <div className="absolute top-[5%] right-[50%] text-gray-200 animate-bounce-slow">
                <Radio size={45} strokeWidth={2} />
            </div>
            <div className="absolute bottom-[5%] left-[50%] text-red-100 animate-float-medium">
                <Film size={50} strokeWidth={2} />
            </div>
            <div className="absolute top-[80%] right-[5%] text-gray-200 animate-float-slow">
                <Cast size={60} strokeWidth={1} />
            </div>
            <div className="absolute top-[30%] left-[80%] text-gray-200 animate-spin-reverse-slow">
                <Camera size={55} strokeWidth={1.5} />
            </div>

            {/* --- Subtle Grain Texture Overlay for Professional Feel --- */}
             <div className='absolute inset-0 bg-transparent opacity-[0.4] mix-blend-overlay' style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

             {/* --- Bottom Fade Gradient --- */}
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-20">
          
          {/* Top Row: Logo & Subscribe */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8 border-b border-gray-100 pb-12">
            <a href="/" className="flex items-center">
               <img src="/logo.png" alt="Cilox Logo" className="h-12 w-auto" />
            </a>
            <div className="relative w-full max-w-lg">
               <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full py-4 pl-8 pr-40 text-sm text-gray-800 placeholder-gray-400 focus:border-red-500 outline-none transition-colors shadow-sm"
               />
               <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#111] hover:bg-red-500 text-white font-bold text-[11px] tracking-widest uppercase px-8 rounded-full transition-all duration-300 shadow-md">
                 Subscribe
               </button>
            </div>
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative mb-16">
              {/* 1. INTRO */}
              <div className="lg:col-span-4">
                  <h3 className="text-lg font-bold text-[#111] leading-relaxed mb-4 max-w-xs">
                    Welcome to Media Factory, your trusted partner for impactful indoor and outdoor advertising.
                  </h3>
              </div>
              {/* 2. EXPLORE */}
              <div className="lg:col-span-2">
                  <h4 className="font-extrabold text-sm mb-6 uppercase text-[#111] tracking-widest">EXPLORE</h4>
                  <ul className="space-y-3">
                    {[
                       { name: 'Home', href: '#' },
                       { name: 'About Us', href: '#about' },
                       { name: 'Services', href: '#services' },
                       { name: 'Our Work', href: '#work' },
                       { name: 'Contact', href: '#contact' }
                    ].map((item) => (
                       <li key={item.name}>
                          <a href={item.href} className="text-slate-600 hover:text-red-600 text-[15px] font-medium transition-colors">{item.name}</a>
                       </li>
                    ))}
                  </ul>
              </div>
              {/* 3. FOLLOW US */}
              <div className="lg:col-span-3">
                  <h4 className="font-extrabold text-sm mb-6 uppercase text-[#111] tracking-widest">FOLLOW US</h4>
                  <div className="flex gap-3">
                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                       <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#111] hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                          <Icon className="w-4 h-4" />
                       </a>
                    ))}
                  </div>
              </div>
              {/* 4. CONTACT */}
              <div className="lg:col-span-3">
                  <h4 className="font-extrabold text-sm mb-6 uppercase text-[#111] tracking-widest">CONTACT</h4>
                  <p className="text-slate-600 text-[15px] mb-4 leading-relaxed font-medium">
                    Ludhiana, Punjab, 141001
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 group cursor-pointer">
                       <Phone className="w-4 h-4 text-red-600" />
                       <span className="text-[#111] text-[15px] group-hover:text-red-600 transition-colors font-bold">9814746565</span>
                    </div>
                    <div className="flex items-center gap-3 group cursor-pointer">
                       <Mail className="w-4 h-4 text-red-600" />
                       <span className="text-[#111] text-[15px] group-hover:text-red-600 transition-colors font-medium">support@mediafactory.co.in</span>
                    </div>
                  </div>
              </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-100 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-gray-500 text-[13px] font-medium">
                 © Copyright 2025 by Media Factory.
             </p>
             <div className="flex gap-6">
                <a href="#" className="text-gray-500 hover:text-red-500 text-[13px] font-medium transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-500 hover:text-red-500 text-[13px] font-medium transition-colors">Terms of Use</a>
             </div>
          </div>
        </div>

        {/* CSS for Animations */}
        <style jsx>{`
            @keyframes float {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(5deg); }
            }
            @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            @keyframes spin-reverse-slow {
                from { transform: rotate(360deg); }
                to { transform: rotate(0deg); }
            }
            @keyframes bounce-slow {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-15px); }
            }
            .animate-float-slow { animation: float 15s ease-in-out infinite; }
            .animate-float-medium { animation: float 10s ease-in-out infinite reverse; }
            .animate-float-fast { animation: float 8s ease-in-out infinite; }
            .animate-spin-slow { animation: spin-slow 60s linear infinite; }
            .animate-spin-reverse-slow { animation: spin-reverse-slow 50s linear infinite; }
            .animate-pulse-slow { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
            .animate-bounce-slow { animation: bounce-slow 6s ease-in-out infinite; }
        `}</style>
      </footer>
    </div>
  );
}

export default Contact;