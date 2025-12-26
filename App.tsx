
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MaintenanceBot from './components/MaintenanceBot';
import Logo from './components/Logo';
import { Page } from './types';
import { SERVICES, STATS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Technical Maintenance"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a3d62]/95 via-[#0a3d62]/70 to-[#4db748]/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <div className="mb-8 animate-in fade-in zoom-in duration-1000">
             <Logo className="h-40 md:h-56 mx-auto" light={true} />
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 animate-in fade-in slide-in-from-top-12 duration-1000 delay-300 leading-tight">
            Mepdream <span className="text-[#f58220]">Operation</span> Solutions <span className="text-[#f58220] block md:inline text-3xl md:text-5xl opacity-90">Pvt Ltd</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-blue-50/90 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 font-medium">
            India's premier MEP specialists. Delivering precision engineering, high-voltage installations, and 24/7 technical operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
            <button 
              onClick={() => setCurrentPage(Page.Services)}
              className="px-10 py-4 bg-[#f58220] hover:bg-white hover:text-[#f58220] rounded-full font-bold text-lg transition-all shadow-xl shadow-black/20"
            >
              Our Solutions
            </button>
            <button 
              onClick={() => setCurrentPage(Page.Contact)}
              className="px-10 py-4 border-2 border-white/40 hover:bg-white/10 backdrop-blur-sm rounded-full font-bold text-lg transition-all"
            >
              Contact Team
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 relative z-20 -mt-16 rounded-t-[4rem] shadow-2xl border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-4xl md:text-5xl font-black text-[#0a3d62] mb-2 group-hover:text-[#f58220] transition-colors">
                  {stat.value}{stat.suffix}
                </div>
                <div className="h-1 w-8 bg-[#4db748] mx-auto mb-3 rounded-full group-hover:w-16 transition-all"></div>
                <p className="text-slate-500 font-bold uppercase tracking-tighter text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[#f58220] font-black tracking-[0.3em] uppercase text-sm">Expertise</span>
            <h2 className="text-[#0a3d62] text-4xl md:text-5xl font-bold">MEP Excellence</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-[#4db748]/30">
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-8 relative">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner group-hover:bg-[#0a3d62] group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0a3d62] mb-3 leading-tight group-hover:text-[#f58220] transition-colors">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const renderServices = () => (
    <div className="pt-40 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold text-[#0a3d62] mb-8">Professional Services</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
            From industrial maintenance to residential safety, we deliver dreams with operational perfection.
          </p>
        </div>

        <div className="space-y-32">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#4db748]/10 rounded-full blur-3xl" />
                <div className="bg-white p-4 rounded-[3rem] shadow-2xl relative z-10">
                  <img src={service.image} className="w-full h-96 object-cover rounded-[2.5rem]" alt={service.title} />
                </div>
              </div>
              <div className="flex-1 space-y-8">
                <div className="inline-block px-4 py-1 bg-[#f58220]/10 text-[#f58220] rounded-full font-bold text-xs uppercase tracking-widest">
                  Operation 0{idx + 1}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0a3d62]">{service.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed">{service.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {['High Quality', 'Eco-Friendly', 'Certified', 'Efficient'].map(tag => (
                    <div key={tag} className="flex items-center gap-3 font-bold text-slate-800">
                      <div className="w-2 h-2 bg-[#4db748] rounded-full" />
                      {tag}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => setCurrentPage(Page.Contact)}
                  className="bg-[#0a3d62] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#f58220] transition-all transform hover:-translate-y-1 shadow-xl shadow-blue-900/10"
                >
                  Request Quotation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="pt-40 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0a3d62] mb-6">Connect with <span className="text-[#f58220]">Dream Team</span></h1>
              <p className="text-slate-600 text-lg max-w-lg">
                Your technical challenges deserve our expert solutions. We respond to all queries within 2 hours.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                { icon: "📞", title: "Helpline", detail: "+91 93372 25129", color: "bg-blue-50" },
                { icon: "✉️", title: "Operations", detail: "mepdreamoperations.25@gmail.com", color: "bg-orange-50" },
                { icon: "📍", title: "Corporate Hub", detail: "Plot No: 97/P, Suffah Colony, Gopanpally, Cyberabad – 500045", color: "bg-green-50" }
              ].map((item, i) => (
                <div key={i} className={`flex gap-6 p-8 rounded-3xl ${item.color} border border-transparent hover:border-[#4db748]/20 transition-all group`}>
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl group-hover:rotate-12 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-[#0a3d62] uppercase text-xs tracking-widest mb-1">{item.title}</h3>
                    <p className="text-slate-800 font-bold text-lg">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-[3rem] overflow-hidden shadow-2xl h-80 border-8 border-slate-50 group">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3806.94191680584!2d78.2917730751855!3d17.414522983481228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI0JzUyLjMiTiA3OMKwMTcnMzkuNyJF!5e0!3m2!1sen!2sin!4v1740924976451!5m2!1sen!2sin" 
                className="w-full h-full border-none grayscale group-hover:grayscale-0 transition-all duration-700" 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="bg-[#0a3d62] p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <h2 className="text-3xl font-bold text-white mb-10">Direct Message</h2>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:bg-white/20 outline-none transition-all" placeholder="Your Name" />
              <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:bg-white/20 outline-none transition-all" placeholder="Email Address" />
              <select className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white focus:bg-white/20 outline-none transition-all appearance-none">
                <option className="text-black">Electrical Installation</option>
                <option className="text-black">Maintenance Contract</option>
                <option className="text-black">Safety Compliance</option>
              </select>
              <textarea rows={5} className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:bg-white/20 outline-none transition-all" placeholder="Project Description"></textarea>
              <button className="w-full bg-[#f58220] hover:bg-white hover:text-[#f58220] text-white py-5 rounded-2xl font-black text-lg shadow-2xl transition-all active:scale-95">
                SUBMIT REQUEST
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main>
        {currentPage === Page.Home && renderHome()}
        {currentPage === Page.Services && renderServices()}
        {currentPage === Page.Contact && renderContact()}
      </main>

      <footer className="bg-[#0a3d62] text-white pt-24 pb-12 rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16">
          <div className="col-span-2 space-y-8">
             <Logo className="h-32 mr-auto" light={true} />
             <p className="text-blue-100/70 max-w-sm text-lg leading-relaxed">
               Redefining MEP operations with a dream for perfection and a commitment to operational excellence.
             </p>
             <div className="flex gap-4">
               {['fb', 'tw', 'ln', 'ig'].map(soc => (
                 <div key={soc} className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-[#4db748] hover:border-transparent transition-all cursor-pointer font-bold">
                   {soc}
                 </div>
               ))}
             </div>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-8 border-b border-white/10 pb-4">Solutions</h4>
            <ul className="space-y-4 text-blue-100/60">
              <li className="hover:text-[#f58220] transition-colors cursor-pointer">Maintenance</li>
              <li className="hover:text-[#f58220] transition-colors cursor-pointer">Installations</li>
              <li className="hover:text-[#f58220] transition-colors cursor-pointer">Safety Audits</li>
              <li className="hover:text-[#f58220] transition-colors cursor-pointer">Tech Support</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-8 border-b border-white/10 pb-4">Company</h4>
            <ul className="space-y-4 text-blue-100/60">
              <li className="hover:text-[#4db748] transition-colors cursor-pointer" onClick={() => setCurrentPage(Page.Home)}>About Us</li>
              <li className="hover:text-[#4db748] transition-colors cursor-pointer" onClick={() => setCurrentPage(Page.Services)}>Our Services</li>
              <li className="hover:text-[#4db748] transition-colors cursor-pointer" onClick={() => setCurrentPage(Page.Contact)}>Contact</li>
              <li className="hover:text-[#4db748] transition-colors cursor-pointer">Careers</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 mt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-blue-100/30 text-xs font-bold tracking-widest uppercase">
          <div>© 2025 Mepdream Operation Solution Pvt. Ltd.</div>
          <div className="flex gap-10">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
            <span className="hover:text-white transition-colors cursor-pointer">Cookies</span>
          </div>
        </div>
      </footer>

      <MaintenanceBot />
    </div>
  );
};

export default App;
