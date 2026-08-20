/* eslint-disable @shopify/jsx-no-hardcoded-content */
// securecoder-disable jsx-no-hardcoded-content
import React from 'react';
import { FadeIn } from './FadeIn';
import { CheckCircle2, MessageSquare, Info } from 'lucide-react';

interface PricingTier {
  title: string;
  price: string;
  subPrice?: string;
  badge?: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

const PRICING_TIERS: PricingTier[] = [
  {
    title: 'Landing Page',
    price: '₦250,000',
    description: 'High-converting, responsive single-page landing site built with pure web standards.',
    features: [
      'HTML5, CSS3 & JavaScript',
      'Fully Responsive & Mobile Optimized',
      'SEO & Performance Tuning',
      'Contact Form & WhatsApp Quick-Connect',
      'Fast Delivery & Clean Code',
    ],
  },
  {
    title: 'React Native Mobile App',
    price: '₦350,000',
    description: 'Cross-platform iOS and Android mobile application using Expo and React Native.',
    features: [
      'React Native & React Expo',
      'iOS & Android Support',
      'Modern Mobile UI/UX Components',
      'Push Notifications & Local Storage',
      'App Store / Play Store Build Prep',
    ],
  },
  {
    title: 'Frontend (Strictly React)',
    price: '₦450,000',
    recommended: true,
    badge: 'Popular',
    description: 'Dynamic, feature-rich single page applications built with React and TypeScript.',
    features: [
      'React.js & TypeScript Stack',
      'Advanced State Management',
      'Smooth Page Animations & Micro-interactions',
      'REST API & Webhook Integration',
      'Component-Driven Scalable Architecture',
    ],
  },
  {
    title: 'Full Stack Web App',
    price: '₦700,000',
    badge: 'Enterprise',
    description: 'End-to-end full stack web application with backend server, database, and admin dashboard.',
    features: [
      'React Frontend + Django / Node.js Backend',
      'Database Architecture (PostgreSQL/MongoDB)',
      'Secure User Authentication & RBAC',
      'Custom Admin Management Portal',
      'Payment Gateway Integration',
    ],
  },
  {
    title: 'Custom Mobile Enterprise',
    price: 'Varies',
    subPrice: 'Based on stack & workload',
    description: 'Bespoke mobile solution designed for complex workflows, high workload, and scalability.',
    features: [
      'Custom App Architecture & Tech Stack',
      'Scales with Workload & Feature Size',
      'Real-time Chat & WebSockets Support',
      'Custom Backend & Third-party Integrations',
      'Dedicated Maintenance & Support',
    ],
  },
];

export const PricingSection: React.FC = () => {
  const whatsappBaseUrl =
    'https://wa.me/2348060249813?text=Hello%20Dimacode!%20I%20am%20interested%20in%20the%20';

  return (
    <section
      id="pricing"
      className="relative z-10 bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 border-t border-[#D7E2EA]/10"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Pricing
          </h2>
          <p className="text-[#D7E2EA]/70 text-sm sm:text-base md:text-lg max-w-xl mx-auto mt-4 font-light uppercase tracking-wider">
            Transparent pricing plans designed for speed, performance, and scalability.
          </p>
        </FadeIn>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mt-16 sm:mt-20">
          {PRICING_TIERS.map((tier, index) => {
            const encodedTitle = encodeURIComponent(`${tier.title} package`);
            return (
              <FadeIn
                key={tier.title}
                delay={index * 0.1}
                y={30}
                className={`relative rounded-[32px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.recommended
                    ? 'bg-gradient-to-b from-[#1c0828] to-[#0C0C0C] border-2 border-[#B600A8] shadow-2xl shadow-[#B600A8]/20'
                    : 'bg-[#121212] border border-[#D7E2EA]/15 hover:border-[#D7E2EA]/40'
                }`}
              >
                {/* Badge if present */}
                {tier.badge && (
                  <span
                    className={`absolute -top-3 right-6 px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest ${
                      tier.recommended
                        ? 'bg-[#B600A8] text-white'
                        : 'bg-[#D7E2EA]/20 text-[#D7E2EA]'
                    }`}
                  >
                    {tier.badge}
                  </span>
                )}

                <div>
                  <h3 className="font-medium uppercase text-xl sm:text-2xl text-[#D7E2EA]">
                    {tier.title}
                  </h3>

                  <div className="my-4 flex items-baseline gap-2">
                    <span className="font-black text-3xl sm:text-4xl text-white tracking-tight">
                      {tier.price}
                    </span>
                    {tier.subPrice && (
                      <span className="text-xs uppercase text-[#D7E2EA]/60 font-light">
                        {tier.subPrice}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  <div className="w-full h-px bg-[#D7E2EA]/10 my-4" />

                  {/* Feature list */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D7E2EA]">
                        <CheckCircle2 className="w-4 h-4 text-[#B600A8] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href={`${whatsappBaseUrl}${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-full font-medium uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer ${
                    tier.recommended
                      ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white hover:opacity-90 shadow-lg'
                      : 'bg-[#D7E2EA]/10 hover:bg-[#D7E2EA]/20 text-[#D7E2EA] border border-[#D7E2EA]/20'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  Order Project
                </a>
              </FadeIn>
            );
          })}
        </div>

        {/* Disclaimer Banner */}
        <FadeIn delay={0.4} y={20} className="w-full max-w-4xl mt-14 sm:mt-16">
          <div className="rounded-2xl bg-[#161616] border border-[#D7E2EA]/15 p-5 sm:p-6 flex items-start gap-4 text-xs sm:text-sm text-[#D7E2EA]/80 leading-relaxed">
            <Info className="w-5 h-5 text-[#B600A8] flex-shrink-0 mt-0.5" />
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
