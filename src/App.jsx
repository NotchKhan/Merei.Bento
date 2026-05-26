import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Instagram, Send, MapPin, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- Components ---

const Navbar = () => {
  const navRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      start: 'top -50',
      onEnter: () => {
        gsap.to(navRef.current, {
          backgroundColor: 'rgba(13, 13, 18, 0.95)',
          backdropFilter: 'blur(10px)',
          paddingY: '0.75rem',
          duration: 0.4,
          ease: 'power2.out'
        });
      },
      onLeaveBack: () => {
        gsap.to(navRef.current, {
          backgroundColor: 'transparent',
          backdropFilter: 'blur(0px)',
          paddingY: '1.5rem',
          duration: 0.4,
          ease: 'power2.out'
        });
      }
    });
  });

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[100] px-6 py-6 transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="text-xl md:text-2xl font-bold tracking-tighter text-gold flex-shrink-0">merey.bento</div>

        <div className="flex items-center gap-8 max-md:hidden">
          {['Мәзір', 'Процесс', 'Байланыс'].map((link) => (
            <a key={link} href={`#${link}`} className="text-[10px] font-bold text-ivory/80 hover:text-gold uppercase tracking-[0.2em] transition-colors">{link}</a>
          ))}
        </div>

        <a
          href="https://wa.me/77718994211"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-midnight px-5 md:px-6 py-2.5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-wider hover:scale-105 transition-transform flex-shrink-0"
        >
          Тапсырыс беру
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.5
      });
    }, heroRef);
    return () => ctx.revert();
  });

  return (
    <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 text-center">
        <img src="/hero.png" alt="Hero Cake" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/40 to-obsidian"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1 className="hero-anim text-ivory text-lg md:text-2xl font-medium tracking-[0.3em] uppercase mb-6">
          Сарыағаштағы премиум бенто-торты
        </h1>
        <div className="hero-anim">
          <span className="text-drama text-[clamp(2.5rem,10vw,8rem)] text-gold leading-none block mb-8">
            Керемет дәм.
          </span>
        </div>
        <p className="hero-anim text-ivory/90 max-w-xl mx-auto text-base md:text-lg mb-10 font-light leading-relaxed">
          Әр тортымыз — бұл тек дәм ғана емес, сіз үшін арнайы жасалған нағыз қолөнер туындысы.
        </p>
        <div className="hero-anim">
          <a
            href="https://wa.me/77718994211"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-gold text-midnight px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform shadow-2xl"
          >
            ТАПСЫРЫС БЕРУ <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    { src: '/cake2.png', title: 'Балақайға арналған' },
    { src: '/cake3.png', title: 'Қызыл барқыт & Oreo' },
    { src: '/cake4.png', title: 'Нәзік банан торты' },
    { src: '/cake5.png', title: 'Шоколадты капкейктер' },
    { src: '/cake6.png', title: 'Банан-карамель торты' },
    { src: '/cake7.png', title: 'Тәтті түтікшелер' }
  ];

  return (
    <section id="Мәзір" className="py-20 md:py-32 px-6 bg-obsidian text-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 text-center">
          <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase block mb-4">Мәзір</span>
          <h2 className="text-ivory text-3xl md:text-6xl font-bold tracking-tight">Таңдаулы туындылар</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-[3rem] border border-white/5 shadow-2xl bg-slate/10">
              <img src={img.src} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={img.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                <span className="text-gold text-[10px] font-mono tracking-[0.3em] uppercase mb-2">ҚОЛӨНЕР</span>
                <h3 className="text-ivory text-xl md:text-2xl font-bold">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => (
  <section className="py-24 md:py-48 bg-ivory text-center px-6">
    <div className="max-w-5xl mx-auto">
      <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase block mb-10">Біздің ұстаным</span>
      <h2 className="text-obsidian text-3xl md:text-7xl leading-tight font-bold mb-12">
        Әр деталь маңызды. <br />Әр дәм — <span className="text-drama italic text-gold">естелік.</span>
      </h2>
      <p className="text-slate/70 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
        Сарыағашта біз тек торт емес, қуаныш пен эстетика сыйлаймыз. Тек табиғи өнімдер мен авторлық рецепттер.
      </p>
    </div>
  </section>
);

const Process = () => {
  const steps = [
    {
      title: "Премиум ингредиенттер",
      desc: "Біз тек ең үздік өнімдерді пайдаланамыз: жоғары сұрыпты ұн, табиғи қаймақ пен бельгиялық шоколад.",
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Нәзік бисквит",
      desc: "Торттың негізі — бұл махаббатпен және шеберлікпен дайындалған, ауызда еритін бисквит.",
      img: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Мінсіз нәтиже",
      desc: "Әрбір торт — эстетика мен дәмнің үйлесімі, сіздің мерекеңіздің сәні.",
      img: "/cake7.png"
    }
  ];

  return (
    <section id="Процесс" className="py-20 md:py-36 px-6 bg-obsidian text-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 text-center">
          <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase block mb-4">Жұмыс барысы</span>
          <h2 className="text-ivory text-3xl md:text-6xl font-bold tracking-tight">Қалай жасаймыз?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="group">
              <div className="aspect-square rounded-[3rem] overflow-hidden mb-8 border border-white/5 relative shadow-2xl">
                <img src={step.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={step.title} />
                <div className="absolute top-8 left-8 w-12 h-12 bg-gold text-midnight rounded-full flex items-center justify-center font-bold text-xl shadow-lg ring-8 ring-black/10">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-ivory text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-ivory/50 leading-relaxed text-sm md:text-base">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="Байланыс" className="bg-obsidian pt-32 pb-20 px-10 text-ivory relative z-[50] border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-24">
        <div>
          <h2 className="text-3xl font-bold mb-6 tracking-tighter text-gold">merey.bento</h2>
          <p className="text-ivory/60 max-w-sm mb-12">Сарыағаш қаласындағы премиум үй наубайханасы. Тәтті сәттеріңізді бізге сеніп тапсырыңыз.</p>
          <div className="flex items-center gap-4 text-gold font-mono text-[10px] tracking-widest">
            <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
            SYSTEM OPERATIONAL
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h4 className="text-gold text-[10px] uppercase tracking-widest font-bold">Сілтемелер</h4>
          <div className="flex flex-col gap-4">
            {['Басты бет', 'Мәзір', 'Процесс'].map(l => (
              <a key={l} href="#" className="text-ivory/60 hover:text-ivory transition-colors">{l}</a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h4 className="text-gold text-[10px] uppercase tracking-widest font-bold">Байланыс</h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-ivory/60"><MapPin size={16} className="text-gold" /> Сарыағаш</div>
            <a
              href="https://instagram.com/merey.bento"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-ivory/60 hover:text-ivory transition-colors"
            >
              <Instagram size={16} className="text-gold" /> @merey.bento
            </a>
            <a
              href="https://wa.me/77718994211"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-ivory/60 hover:text-ivory transition-colors"
            >
              <Send size={16} className="text-gold" /> +7 771 899 42 11
            </a>
          </div>
        </div>
      </div>

      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-ivory/20 text-[10px] tracking-[0.3em] font-mono gap-4">
        <span>© 2026 MEREY.BENTO. SARYAGASH, KAZAKHSTAN</span>
        <span>PREMIUM BAKERY EXPERIENCE</span>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-obsidian min-h-screen selection:bg-gold selection:text-midnight">
      <div className="noise-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Philosophy />
        <Process />

        <section className="py-40 px-10 bg-ivory text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-drama text-5xl md:text-7xl mb-8 text-obsidian leading-tight">Тәтті таңдау <br />жасауға дайынсыз ба?</h2>
            <p className="text-slate/70 mb-12 text-lg font-light leading-relaxed">
              Біз сіздің тапсырысыңызды ең жоғары деңгейде орындаймыз. Бізге WhatsApp арқылы жазыңыз.
            </p>
            <a
              href="https://wa.me/77718994211"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-midnight px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transition-transform inline-block shadow-2xl shadow-gold/20"
            >
              WHATSAPP-ҚА ӨТУ
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
