/* eslint-disable @shopify/jsx-no-hardcoded-content */
// securecoder-disable jsx-no-hardcoded-content
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
    <section className="relative h-screen min-h-[600px] w-full flex flex-col justify-between overflow-hidden bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full px-4 sm:px-6 md:px-10 pt-5 sm:pt-6 md:pt-8 z-30">
        <nav className="w-full flex justify-between items-center max-w-7xl mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#D7E2EA] font-semibold uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.35rem] hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading Container - Centered and Bold on both Mobile and Desktop */}
      <div className="w-full relative z-0 flex flex-col justify-center items-center px-4 my-auto pt-4 pb-20 sm:pb-32 md:pb-40">
        <FadeIn delay={0.1} y={30} className="w-full flex justify-center">
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-[0.92] text-center select-none max-w-6xl mx-auto"
            style={{ fontSize: 'clamp(2.4rem, 10vw, 150px)' }}
          >
            Hi, i&apos;m dimacode
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait - Always perfectly centered at the bottom */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center items-end pointer-events-none">
        <div className="pointer-events-auto flex justify-center items-end max-w-full">
          <Magnet
            padding={120}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="flex justify-center items-end"
          >
            <img
              src="./dimacode-portrait.png"
              alt="Dimacode Portrait"
              className="w-[280px] xs:w-[320px] sm:w-[400px] md:w-[480px] lg:w-[560px] max-h-[50vh] sm:max-h-[58vh] md:max-h-[64vh] h-auto object-contain object-bottom pointer-events-none drop-shadow-2xl brightness-110 mx-auto block select-none"
            />
          </Magnet>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-4 sm:px-6 md:px-10 pb-5 sm:pb-7 md:pb-9 flex justify-start items-end z-20 max-w-7xl mx-auto pointer-events-none">
        {/* Left text */}
        <FadeIn delay={0.3} y={20} className="max-w-[240px] sm:max-w-[290px] md:max-w-[370px] pointer-events-auto bg-[#0C0C0C]/60 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none p-1.5 sm:p-0 rounded-md">
          <p
            className="text-[#D7E2EA] font-normal uppercase tracking-wide leading-snug"
            style={{ fontSize: 'clamp(0.72rem, 1.35vw, 1.25rem)' }}
          >
            web & mobile software developer, videographer, graphic designer & social media manager
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
