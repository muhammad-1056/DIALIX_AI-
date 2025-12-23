
import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Calendar, 
  UserCheck, 
  ShieldCheck, 
  BarChart3, 
  ArrowRight, 
  MessageSquare, 
  Zap, 
  Clock, 
  Database, 
  Menu, 
  X, 
  CheckCircle2,
  HelpCircle,
  Plus,
  Minus,
  Briefcase,
  Stethoscope,
  Home,
  Dumbbell,
  Scale,
  Sparkles,
  Shield,
  Target,
  ExternalLink,
  Loader2,
  Layers,
  Settings,
  Rocket,
  ShieldAlert,
  ChevronDown,
  Building2,
  Users,
  Globe
} from 'lucide-react';

// --- Constants ---
const CAL_LINK = "https://cal.com/afeef-uddin-rji4qb/15min";
const EMBED_URL = `${CAL_LINK}?embed=true`;

// --- Components ---

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Industries', href: '#industries' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group" onClick={(e) => handleNavClick(e, '#top')}>
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center glow-blue group-hover:scale-110 transition-transform">
            <Phone className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight">DIALIX<span className="text-blue-500">AI</span></span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#booking"
            onClick={(e) => handleNavClick(e, '#booking')}
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all glow-blue"
          >
            Book a Demo
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 py-6 px-6 flex flex-col gap-4 border-t border-white/10 animate-in slide-in-from-top duration-300 shadow-2xl">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-lg font-medium text-slate-300 py-2" 
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#booking"
            className="bg-blue-600 text-white w-full py-4 rounded-xl font-bold mt-2 text-center shadow-lg"
            onClick={(e) => handleNavClick(e, '#booking')}
          >
            Book a Demo
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/0 to-slate-950/0 pointer-events-none" />
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-8">
          <Zap className="w-3 h-3 fill-current" /> Leading Voice Automation
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
          <span className="block">Never Miss Another</span>
          <span className="gradient-text">Customer Call</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
          The world's most intelligent AI phone agent. Answers instantly, qualifies perfectly, and books your calendar 24/7.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-10 py-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white rounded-full font-bold text-lg transition-all text-center flex items-center justify-center gap-2 group shadow-xl"
          >
            See How it Works <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Seamless Integration",
      desc: "Connect your business line in seconds. Our agent fits perfectly into your existing CRM workflows without a single line of code.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Infinite Knowledge",
      desc: "Train your agent on your website data, pricing sheets, and custom scripts. It handles edge cases with human-like precision.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Automated Growth",
      desc: "Dialix handles the front line while you focus on the work. Get detailed transcripts and automatic CRM updates for every call.",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4">Deployment Path</div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Built for Rapid Scale</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Elite call automation tailored to your business needs.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden lg:block absolute top-[45px] left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-blue-500/20 flex items-center justify-center text-blue-500 mb-8 glow-blue relative">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-[#020617]">
                  {i+1}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustriesSection: React.FC = () => {
  const industries = [
    { name: "Real Estate", icon: <Home className="w-6 h-6" />, desc: "Instantly screen buyer inquiries and book viewings around the clock." },
    { name: "Medical & Health", icon: <Stethoscope className="w-6 h-6" />, desc: "Handle appointment requests and triage patient intake securely." },
    { name: "Legal Firms", icon: <Scale className="w-6 h-6" />, desc: "Screen new clients and intake case details with professional poise." },
    { name: "Home Services", icon: <Building2 className="w-6 h-6" />, desc: "Book contractors and provide instant quotes for HVAC, roofing, and more." },
    { name: "Agencies", icon: <Users className="w-6 h-6" />, desc: "Qualify high-ticket leads and schedule discovery calls automatically." },
    { name: "E-Commerce", icon: <Globe className="w-6 h-6" />, desc: "Answer support questions and manage order statuses over the phone." }
  ];

  return (
    <section id="industries" className="py-24 bg-slate-950/50 scroll-mt-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Versatile Across Sectors</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">The infrastructure your industry has been waiting for.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <div key={i} className="glass p-8 rounded-[2rem] border-white/5 hover:border-blue-500/20 transition-all group hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {industry.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{industry.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingSection: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <section id="booking" className="py-24 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
             <Shield className="w-3 h-3 fill-current" /> Official Implementation Portal
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Secure Your Demo</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Choose a slot to see Dialix AI in action with your custom business knowledge base.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="glass p-8 rounded-[2rem] border-white/10 flex flex-col h-full bg-blue-600/5 shadow-inner">
               <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-white">
                 <Target className="text-blue-500" /> Session Roadmap
               </h3>
               
               <div className="space-y-10 relative">
                  <div className="absolute left-[19px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-blue-500 via-blue-500/20 to-transparent" />
                  
                  {[
                    { title: "Revenue Audit", desc: "Identify leaked leads and missed call ROI loss.", icon: <BarChart3 className="w-4 h-4" /> },
                    { title: "Knowledge Mapping", desc: "Outline how our AI learns your business data.", icon: <Layers className="w-4 h-4" /> },
                    { title: "Deployment Plan", desc: "Timeline for 24/7 autonomous phone operation.", icon: <Rocket className="w-4 h-4" /> }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-5 relative z-10">
                      <div className="w-10 h-10 rounded-full bg-slate-950 border border-blue-500/30 flex items-center justify-center flex-shrink-0 text-blue-400 shadow-lg">
                        {step.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base mb-1">{step.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
               </div>

               <div className="mt-12 p-6 rounded-2xl bg-slate-950/80 border border-blue-500/20">
                 <p className="text-xs text-slate-400 font-medium mb-4 uppercase tracking-wider text-center">Trouble viewing the calendar?</p>
                 <a 
                  href={CAL_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all text-sm shadow-xl glow-blue"
                 >
                   Open Booking in New Tab <ExternalLink className="w-4 h-4" />
                 </a>
                 <p className="text-[10px] text-slate-600 text-center mt-4">Cal.com encrypted booking service.</p>
               </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="glass rounded-[2rem] border-white/10 shadow-2xl relative overflow-hidden flex flex-col h-[700px] bg-slate-950/40">
              <div className="bg-slate-900 border-b border-white/10 py-4 px-8 flex items-center justify-between z-20 relative">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5 mr-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                  </div>
                  <div className="px-3 py-1 bg-slate-800 rounded-lg border border-white/5 flex items-center gap-2">
                    <ShieldCheck className="w-3 h-3 text-blue-400" />
                    <span className="text-[9px] text-slate-300 font-black uppercase tracking-widest">Dialix Safe-Connect</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Active</span>
                </div>
              </div>

              <div className="flex-grow relative bg-slate-950">
                {loading && (
                  <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-slate-950">
                    <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-6" />
                    <p className="text-slate-400 font-bold tracking-widest uppercase text-xs animate-pulse">Establishing Secure Stream...</p>
                    <div className="mt-12 grid grid-cols-7 gap-3 w-3/4 opacity-10">
                      {Array.from({length: 49}).map((_, i) => (
                        <div key={i} className="aspect-square bg-slate-700 rounded-md" />
                      ))}
                    </div>
                  </div>
                )}
                
                <iframe 
                  src={EMBED_URL} 
                  className="w-full h-full relative z-20" 
                  frameBorder="0" 
                  onLoad={() => setLoading(false)}
                  allowFullScreen 
                  title="Schedule Dialix Demo"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesGrid: React.FC = () => {
  const features = [
    { title: "24/7 Live Intake", description: "Your phone is always manned. Even at 3 AM on a holiday.", icon: <Clock /> },
    { title: "Deep Qualification", description: "Our AI filters out time-wasters and identifies high-intent leads.", icon: <UserCheck /> },
    { title: "Real-Time CRM", description: "Instant synchronization with Salesforce, HubSpot, and GoHighLevel.", icon: <Database /> },
    { title: "Voice Precision", description: "Ultra-low latency responses with native, human Cadence.", icon: <MessageSquare /> },
  ];

  return (
    <section id="features" className="py-24 bg-slate-950/30 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="glass p-8 rounded-[1.5rem] border-white/5 flex flex-col items-start gap-4 hover:bg-slate-900/50 transition-colors">
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 mb-2">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
              <a 
                href="#booking" 
                onClick={(e) => { e.preventDefault(); document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="text-blue-500 text-[10px] font-black uppercase tracking-widest mt-auto flex items-center gap-1 hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto glass p-10 md:p-16 rounded-[3rem] border-blue-500/20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -mr-32 -mt-32" />
          <div className="grid md:grid-cols-2 gap-12 text-left items-center relative z-10">
            <div>
              <h3 className="text-3xl font-extrabold mb-4 text-white">Enterprise Ready</h3>
              <p className="text-slate-400 mb-8 leading-relaxed text-base">
                We design custom implementation packages tailored to your monthly volume. No hidden fees, just guaranteed ROI.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-200 text-sm"><CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" /> Custom Knowledge Base Training</li>
                <li className="flex items-center gap-3 text-slate-200 text-sm"><CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" /> Dedicated Technical Account Manager</li>
                <li className="flex items-center gap-3 text-slate-200 text-sm"><CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" /> Unlimited Concurrent Call Handling</li>
              </ul>
            </div>
            <div className="text-center md:border-l md:border-white/10 md:pl-12">
              <div className="text-6xl font-black mb-4 uppercase tracking-tighter text-blue-500">CUSTOM</div>
              <div className="text-lg font-bold text-white uppercase tracking-[0.2em] mb-4">Elite Tier</div>
              <p className="text-sm text-slate-500 mb-8 italic">
                Get your custom quote and implementation timeline during your 1:1 strategy call.
              </p>
              <a 
                href="#booking" 
                onClick={(e) => { e.preventDefault(); document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-block w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-500 glow-blue transition-all shadow-xl"
              >
                Book Strategy Session
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Can the AI handle multiple calls at once?",
      a: "Yes. Unlike a human receptionist, Dialix AI can handle hundreds of concurrent calls simultaneously without any wait times or drop in quality."
    },
    {
      q: "Does it sound like a robot?",
      a: "Not at all. We use state-of-the-art neural voice technology that mimics human speech patterns, breathing, and cadence. Most callers never realize they are speaking to an AI."
    },
    {
      q: "How long does implementation take?",
      a: "A standard enterprise setup takes 3-7 business days. This includes training the AI on your data, setting up CRM integrations, and testing call flows."
    },
    {
      q: "Can I use my existing phone number?",
      a: "Yes. You can simply forward your missed or after-hours calls to our secure AI line, or we can provide you with a new dedicated business number."
    },
    {
      q: "What CRMs do you support?",
      a: "We integrate natively with HubSpot, Salesforce, GoHighLevel, Pipedrive, and over 5,000+ apps via Zapier and Make."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-950/30 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Common Questions</h2>
          <p className="text-slate-400">Everything you need to know about the future of phone automation.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`glass rounded-2xl border-white/5 overflow-hidden transition-all duration-500 ${openIndex === i ? 'bg-slate-900/60 ring-1 ring-blue-500/20' : ''}`}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 text-left flex items-center justify-between group"
              >
                <span className="font-bold text-lg text-slate-100 group-hover:text-blue-400 transition-colors pr-8">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-500 flex-shrink-0 ${openIndex === i ? 'rotate-180 text-blue-500' : ''}`} />
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === i ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 border-t border-white/5 pt-6">
                  <p className="text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-8 text-white tracking-tight">Zero Missed Calls.<br/><span className="gradient-text">Pure Growth.</span></h2>
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">Stop letting revenue leak through your phone line. Deploy Dialix AI today.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
           <a 
            href="#booking"
            onClick={(e) => { e.preventDefault(); document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="w-full sm:w-auto px-16 py-6 bg-blue-600 text-white rounded-full font-black text-2xl hover:bg-blue-500 glow-blue transition-all shadow-2xl hover:scale-105"
           >
            Get Started
           </a>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                <Phone className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-white tracking-tighter uppercase text-2xl">Dialix AI</span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-6">
              Empowering enterprise businesses with autonomous, intelligent voice infrastructure that works 24/7/365.
            </p>
            <div className="flex gap-4">
               {/* Social placeholders could go here */}
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#features" className="hover:text-blue-500 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-blue-500 transition-colors">How it Works</a></li>
              <li><a href="#industries" className="hover:text-blue-500 transition-colors">Industries</a></li>
              <li><a href="#booking" className="hover:text-blue-500 transition-colors font-bold text-blue-600">Book Session</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#faq" className="hover:text-blue-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Terms</a></li>
              <li className="text-xs pt-4 text-slate-700">© 2024 Dialix AI International</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-[10px] text-center uppercase tracking-[0.4em] font-black text-slate-800">
          The Future of Phone Automation is Dialix
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 selection:bg-blue-500/30 selection:text-white">
      <Header />
      <Hero />
      <FeaturesGrid />
      <HowItWorks />
      <IndustriesSection />
      <BookingSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;
