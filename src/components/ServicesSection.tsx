/* eslint-disable @shopify/jsx-no-hardcoded-content */
// securecoder-disable jsx-no-hardcoded-content
import React from 'react';
import { FadeIn } from './FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  subTitle: string;
  description: string;
  tags: string[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    number: '01',
    name: 'Software Developer',
    subTitle: 'Web & Mobile Development',
    description:
      'Architecting responsive web applications and cross-platform mobile apps using HTML, CSS, JavaScript, React, React Native, React Expo, TypeScript, Django, Python, and Node.js.',
    tags: ['React', 'React Native', 'TypeScript', 'Django', 'Node.js', 'Python'],
  },
  {
    number: '02',
    name: 'Videographer',
    subTitle: 'Video Production & Editing',
    description:
      'Shooting high-definition video content, promotional reels, cinematic brand stories, color grading, visual effects, and professional video editing for digital media.',
    tags: ['Video Editing', 'Cinematography', 'Color Grading', 'Promotional Reels'],
  },
  {
    number: '03',
    name: 'Graphic Designer',
    subTitle: 'Visual & Brand Identity',
    description:
      'Designing compelling brand logos, modern visual identity packages, social media assets, marketing collateral, and intuitive user interfaces with precision typography.',
    tags: ['Logo Design', 'Brand Identity', 'UI/UX Assets', 'Print & Digital'],
  },
  {
    number: '04',
    name: 'Social Media Manager',
    subTitle: 'Strategy & Brand Growth',
    description:
      'Developing data-driven content calendars, managing active brand channels, crafting engagement strategies, and running targeted campaigns to expand audience reach.',
    tags: ['Content Strategy', 'Brand Management', 'Audience Growth', 'Analytics'],
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative z-0 bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 text-[#0C0C0C]"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40} className="w-full text-center">
        <h2
          className="font-black uppercase text-[#0C0C0C] tracking-tight leading-none mb-16 sm:mb-20 md:mb-28 text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skillset
        </h2>
      </FadeIn>

      {/* Services List */}
      <div className="max-w-5xl mx-auto border-t border-[#0C0C0C]/15">
        {SERVICES_DATA.map((service, i) => (
          <FadeIn
            key={service.number}
            delay={i * 0.1}
            y={30}
            className="py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12"
          >
            {/* Number on left */}
            <div
              className="font-black text-[#0C0C0C] leading-none tracking-tight flex-shrink-0"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.number}
            </div>

            {/* Name + Description stacked vertically on right */}
            <div className="flex flex-col gap-3 flex-grow">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3
                  className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                  style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2.2rem)' }}
                >
                  {service.name}
                </h3>
                <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0C0C0C]/60">
                  {service.subTitle}
                </span>
              </div>
              <p
                className="font-light leading-relaxed text-[#0C0C0C] opacity-75 max-w-2xl"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
              >
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] uppercase tracking-wider font-medium px-3 py-1 bg-[#0C0C0C]/5 border border-[#0C0C0C]/15 rounded-full text-[#0C0C0C]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
