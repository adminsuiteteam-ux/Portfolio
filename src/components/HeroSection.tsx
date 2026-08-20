/* eslint-disable @shopify/jsx-no-hardcoded-content */
import React from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';

export const HeroSection: React.FC = () => {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#services' },
    { label: 'Price', href: '#pricing' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full px-6 md:px-10 pt-6 md:pt-8 z-20">
        <nav className="w-full flex justify-between items-center max-w-7xl mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading Container */}
      <div className="overflow-hidden w-full relative z-0 flex justify-center items-center px-4 my-auto">
        <FadeIn delay={0.15} y={40} className="w-full flex justify-center">
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center select-none"
            style={{ fontSize: 'clamp(2rem, 11vw, 150px)' }}
          >
            Hi, i&apos;m dimacode
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait (Increased size, positioned closer to bottom subtext) */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 bottom-0 -translate-x-1/2 z-10 w-[320px] sm:w-[400px] md:w-[480px] lg:w-[560px] pointer-events-auto flex justify-center items-end"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full flex justify-center items-center"
        >
          <img
            src="/dimacode-portrait.png"
            alt="Dimacode Portrait"
            className="w-full h-auto object-contain object-bottom pointer-events-none drop-shadow-2xl brightness-105 mx-auto block"
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-start items-end z-20 max-w-7xl mx-auto">
        {/* Left text */}
        <FadeIn delay={0.35} y={20} className="max-w-[200px] sm:max-w-[260px] md:max-w-[340px]">
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.35rem)' }}
          >
            web & mobile software developer, videographer, graphic designer & social media manager
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
