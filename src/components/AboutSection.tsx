/* eslint-disable @shopify/jsx-no-hardcoded-content */
import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { Code, Smartphone, Video, Palette, Share2, Server } from 'lucide-react';

const TECH_STACK = [
  { name: 'HTML5', category: 'Frontend', color: 'border-orange-500/30 text-orange-400 bg-orange-500/10' },
  { name: 'CSS3', category: 'Frontend', color: 'border-blue-500/30 text-blue-400 bg-blue-500/10' },
  { name: 'JavaScript', category: 'Language', color: 'border-yellow-500/30 text-yellow-300 bg-yellow-500/10' },
  { name: 'TypeScript', category: 'Language', color: 'border-sky-500/30 text-sky-400 bg-sky-500/10' },
  { name: 'React Native', category: 'Mobile', color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10' },
  { name: 'React Expo', category: 'Mobile', color: 'border-indigo-500/30 text-indigo-300 bg-indigo-500/10' },
  { name: 'Python', category: 'Backend', color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' },
  { name: 'Django', category: 'Backend', color: 'border-green-600/30 text-green-400 bg-green-600/10' },
  { name: 'Node.js', category: 'Backend', color: 'border-lime-500/30 text-lime-400 bg-lime-500/10' },
];

export const AboutSection: React.FC = () => {
  const aboutText =
    "I'm Dimacode, a versatile web & mobile software developer and creative strategist. With expertise spanning HTML, CSS, JS, React Native, React Expo, TypeScript, Django, Python, and Node.js, I build robust full-stack applications. Alongside engineering, I produce high-impact videography, graphic design, and social media campaigns.";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden"
    >
      {/* Decorative 3D images in corners */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none opacity-40 md:opacity-100"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="3D Moon Icon"
          className="w-[100px] sm:w-[160px] md:w-[210px] h-auto object-contain"
        />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none opacity-40 md:opacity-100"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Object"
          className="w-[90px] sm:w-[140px] md:w-[180px] h-auto object-contain"
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none opacity-40 md:opacity-100"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="3D Lego Icon"
          className="w-[100px] sm:w-[160px] md:w-[210px] h-auto object-contain"
        />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none opacity-40 md:opacity-100"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Group"
          className="w-[110px] sm:w-[170px] md:w-[220px] h-auto object-contain"
        />
      </FadeIn>

      {/* Central content container */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Character-by-character animated paragraph */}
        <div className="mt-10 sm:mt-14 md:mt-16 flex flex-col items-center">
          <AnimatedText
            text={aboutText}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[640px] text-base sm:text-lg md:text-xl"
          />
        </div>

        {/* Tech Stack Grid */}
        <FadeIn delay={0.3} y={30} className="mt-12 w-full">
          <h3 className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold mb-6">
            Core Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {TECH_STACK.map((tech) => (
              <span
                key={tech.name}
                className={`px-4 py-2 rounded-full border text-xs sm:text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:scale-105 ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Contact Button */}
        <FadeIn delay={0.45} y={30} className="mt-14 sm:mt-16">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
