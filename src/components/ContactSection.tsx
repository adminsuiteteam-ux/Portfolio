/* eslint-disable @shopify/jsx-no-hardcoded-content */
import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { ContactButton } from './ContactButton';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct WhatsApp message link from form data
    const messageText = `Hello Dimacode,%0A%0AName: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0AMessage: ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/2348060249813?text=${messageText}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative z-10 bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 border-t border-[#D7E2EA]/10"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Contact
          </h2>
          <p className="text-[#D7E2EA]/70 text-sm sm:text-base md:text-lg max-w-xl mx-auto mt-4 font-light uppercase tracking-wider">
            Let&apos;s build something incredible together. Reach out for collaborations and projects.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 w-full mt-16 sm:mt-20">
          {/* Contact Details Cards (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Phone & WhatsApp Card */}
            <FadeIn delay={0.1} y={20}>
              <a
                href="https://wa.me/2348060249813"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl bg-[#121212] border border-[#D7E2EA]/15 p-6 flex items-center gap-5 hover:border-[#25D366]/50 transition-all duration-300 block"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-medium block">
                    Phone / WhatsApp
                  </span>
                  <span className="text-base sm:text-lg font-semibold text-white group-hover:text-[#25D366] transition-colors">
                    +234 806 024 9813
                  </span>
                </div>
              </a>
            </FadeIn>

            {/* Email Card */}
            <FadeIn delay={0.2} y={20}>
              <a
                href="mailto:dimacode02@gmail.com"
                className="group rounded-3xl bg-[#121212] border border-[#D7E2EA]/15 p-6 flex items-center gap-5 hover:border-[#B600A8]/50 transition-all duration-300 block"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#B600A8]/10 border border-[#B600A8]/30 flex items-center justify-center text-[#B600A8] group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-medium block">
                    Email Address
                  </span>
                  <span className="text-base sm:text-lg font-semibold text-white group-hover:text-[#B600A8] transition-colors">
                    dimacode02@gmail.com
                  </span>
                </div>
              </a>
            </FadeIn>

            {/* Address Location Card */}
            <FadeIn delay={0.3} y={20}>
              <div className="rounded-3xl bg-[#121212] border border-[#D7E2EA]/15 p-6 flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#7621B0]/10 border border-[#7621B0]/30 flex items-center justify-center text-[#7621B0]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-medium block">
                    Location / Office
                  </span>
                  <span className="text-base sm:text-lg font-semibold text-white">
                    Yenagoa, Bayelsa State, Nigeria
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Quick Contact Form (7 cols on lg) */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} y={30}>
              <div className="rounded-3xl bg-[#121212] border border-[#D7E2EA]/15 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-medium uppercase text-[#D7E2EA] mb-6">
                  Send a Direct Message
                </h3>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-[#18011F]/50 border border-[#B600A8]/40 text-center flex flex-col items-center gap-3">
                    <CheckCircle className="w-12 h-12 text-[#25D366]" />
                    <h4 className="text-lg font-bold text-white uppercase tracking-wide">
                      Message Redirected to WhatsApp!
                    </h4>
                    <p className="text-xs sm:text-sm text-[#D7E2EA]/70 max-w-md">
                      Thank you for getting in touch. Your message draft has opened in WhatsApp for instant chatting.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2 rounded-full border border-[#D7E2EA]/20 text-xs text-[#D7E2EA] uppercase tracking-wider"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-2 font-medium">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-2 font-medium">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-2 font-medium">
                        Project Details & Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Describe your project, app idea, or request..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-full font-medium uppercase tracking-widest text-xs sm:text-sm bg-gradient-to-r from-[#18011F] via-[#B600A8] to-[#7621B0] text-white hover:opacity-95 transition-opacity shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Send Message via WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
