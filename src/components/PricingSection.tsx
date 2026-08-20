/* eslint-disable @shopify/jsx-no-hardcoded-content */
// securecoder-disable jsx-no-hardcoded-content
import React, { useState, useRef } from 'react';
import { FadeIn } from './FadeIn';
import { CheckCircle2, MessageSquare, Info, Zap, Smartphone, Code2, Layers, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';

interface PricingTier {
  id: string;
  title: string;
  price: string;
  subPrice?: string;
  tag: string;
  tagIcon: React.ElementType;
  tagColor: string;
  badge?: string;
  description: string;
  features: string[];
  featured?: boolean;
}

const PRICING_TIERS: PricingTier[] = [
  {
    id: 'landing-page',
    title: 'Landing Page',
    price: '₦250,000',
    tag: 'Fast Launch',
    tagIcon: Zap,
    tagColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    description: 'High-converting, responsive single-page landing site built with pure web standards.',
    features: [
      'HTML5, CSS3 & JavaScript Stack',
      'Fully Responsive Mobile & Desktop Layout',
      'SEO Performance & Speed Optimization',
      'Contact Form & WhatsApp Integration',
      'Fast Delivery & Clean Architecture',
    ],
  },
  {
    id: 'react-native',
    title: 'React Native App',
    price: '₦350,000',
    tag: 'Cross-Platform',
    tagIcon: Smartphone,
    tagColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    description: 'Cross-platform iOS and Android mobile application using Expo and React Native.',
    features: [
      'React Native & React Expo Engine',
      'Single Codebase for iOS & Android',
      'Modern Mobile UI/UX Components',
      'Push Notifications & Local Storage',
      'App Store / Play Store Build Prep',
    ],
  },
  {
    id: 'frontend-react',
    title: 'Frontend (Strictly React)',
    price: '₦450,000',
    tag: 'Modern React',
    tagIcon: Code2,
    tagColor: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    description: 'Dynamic, feature-rich single page applications built with React and TypeScript.',
    features: [
      'React.js & TypeScript Modern Architecture',
      'Advanced State Management & Hooks',
      'Smooth Page Transitions & Micro-interactions',
      'REST API & Webhook Integration',
      'Reusable Component Design System',
    ],
  },
  {
    id: 'fullstack-webapp',
    title: 'Full Stack Web App',
    price: '₦700,000',
    featured: true,
    badge: 'Most Popular',
    tag: 'Full Stack Power',
    tagIcon: Layers,
    tagColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    description: 'End-to-end full stack web application with backend server, database, and admin portal.',
    features: [
      'React Frontend + Django / Node.js Backend',
      'Scalable Database (PostgreSQL / MongoDB)',
      'Secure User Authentication & RBAC',
      'Custom Admin Management Portal',
      'Payment Gateway Integration & Webhooks',
    ],
  },
  {
    id: 'custom-mobile-enterprise',
    title: 'Custom Mobile & Enterprise',
    price: 'Varies',
    subPrice: 'Based on workload & stack',
    tag: 'Bespoke Scale',
    tagIcon: Cpu,
    tagColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    description: 'Bespoke software solution designed for complex workflows, high workload, and scalability.',
    features: [
      'Custom Architecture Tailored to Workload',
      'Scales with Feature Count & User Base',
      'Real-time Chat & WebSockets Support',
      'Third-party Cloud APIs & Microservices',
      'Dedicated Maintenance & Priority Support',
    ],
  },
];

export const PricingSection: React.FC = () => {
  const whatsappBaseUrl =
    'https://wa.me/2348060249813?text=Hello%20Dimacode!%20I%20am%20interested%20in%20the%20';

  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const nextIdx = Math.max(0, Math.min(index, PRICING_TIERS.length - 1));
    setCurrentIndex(nextIdx);
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / PRICING_TIERS.length;
      carouselRef.current.scrollTo({
        left: nextIdx * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => {
    scrollToIndex(currentIndex - 1);
  };

  const handleNext = () => {
    scrollToIndex(currentIndex + 1);
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / PRICING_TIERS.length;
      const index = Math.round(carouselRef.current.scrollLeft / cardWidth);
      if (index !== currentIndex) {
        setCurrentIndex(index);
      }
    }
  };

  return (
    <section
      id="pricing"
      className="relative z-10 bg-[#0C0C0C] px-4 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 border-t border-[#D7E2EA]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#161616] text-[#D7E2EA]/80 text-xs font-semibold uppercase tracking-widest mb-4">
            Transparent Pricing
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.8rem, 11vw, 150px)' }}
          >
            Pricing
          </h2>
          <p className="text-[#D7E2EA]/70 text-xs sm:text-sm md:text-base max-w-xl mx-auto mt-4 font-light uppercase tracking-wider">
            Tailored engineering packages built for speed, performance, and scalability.
          </p>
        </FadeIn>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between w-full max-w-6xl mt-12 sm:mt-14 px-2">
          <div className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
            Swipe or use arrows to explore plans
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous Plan"
              className="w-10 h-10 rounded-full border border-[#D7E2EA]/20 bg-[#161616] flex items-center justify-center text-[#D7E2EA] hover:bg-[#222222] disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === PRICING_TIERS.length - 1}
              aria-label="Next Plan"
              className="w-10 h-10 rounded-full border border-[#D7E2EA]/20 bg-[#161616] flex items-center justify-center text-[#D7E2EA] hover:bg-[#222222] disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Pricing Carousel Container - Clean Matte Zero-Glow Finish */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-6 w-full max-w-6xl mt-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PRICING_TIERS.map((tier) => {
            const TagIcon = tier.tagIcon;
            const encodedTitle = encodeURIComponent(`${tier.title} package`);
            return (
              <div
                key={tier.id}
                className={`snap-center flex-shrink-0 w-[88vw] sm:w-[360px] md:w-[380px] rounded-[28px] p-6 sm:p-7 flex flex-col justify-between transition-colors duration-300 relative ${
                  tier.featured
                    ? 'bg-[#161616] border-2 border-[#D7E2EA]'
                    : 'bg-[#121212] border border-[#D7E2EA]/15 hover:border-[#D7E2EA]/40'
                }`}
              >
                {/* Popular Badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-white text-black border border-white">
                    {tier.badge}
                  </div>
                )}

                <div>
                  {/* Tag badge with unique icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider border ${tier.tagColor}`}
                    >
                      <TagIcon className="w-3.5 h-3.5" />
                      {tier.tag}
                    </span>
                  </div>

                  <h3 className="font-medium uppercase text-xl sm:text-2xl text-[#D7E2EA] tracking-wide">
                    {tier.title}
                  </h3>

                  {/* Price display */}
                  <div className="my-4 flex flex-col">
                    <div className="flex items-baseline gap-2">
                      <span className="font-black text-3xl sm:text-4xl text-white tracking-tight">
                        {tier.price}
                      </span>
                    </div>
                    {tier.subPrice && (
                      <span className="text-xs uppercase text-[#D7E2EA]/60 font-light mt-1">
                        {tier.subPrice}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#D7E2EA]/75 font-light leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  <div className="w-full h-px bg-white/10 my-4" />

                  {/* Feature checklist */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D7E2EA]/90 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Action Button */}
                <a
                  href={`${whatsappBaseUrl}${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-full font-semibold uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer select-none ${
                    tier.featured
                      ? 'bg-white text-black hover:bg-neutral-200'
                      : 'bg-white/10 hover:bg-white/15 text-white border border-white/15'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  Order Package
                </a>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {PRICING_TIERS.map((tier, idx) => (
            <button
              key={tier.id}
              onClick={() => scrollToIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? 'w-8 bg-[#D7E2EA]'
                  : 'w-2 bg-[#D7E2EA]/20 hover:bg-[#D7E2EA]/50'
              }`}
              aria-label={`Jump to ${tier.title}`}
            />
          ))}
        </div>

        {/* Disclaimer Banner */}
        <FadeIn delay={0.35} y={20} className="w-full max-w-4xl mt-14 sm:mt-16">
          <div className="rounded-2xl bg-[#141414] border border-[#D7E2EA]/15 p-5 sm:p-6 flex items-start gap-4 text-xs sm:text-sm text-[#D7E2EA]/80 leading-relaxed">
            <Info className="w-5 h-5 text-[#D7E2EA] flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white uppercase tracking-wider block mb-1">
                Pricing Disclaimer & Custom Scope Note
              </span>
              Please note: All listed prices serve as standard baseline estimates. Final pricing for mobile apps and web platforms varies based on specific site functionality, custom workload, third-party API integrations, and total application size.
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
