/* eslint-disable @shopify/jsx-no-hardcoded-content */
// securecoder-disable jsx-no-hardcoded-content
import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/2348060249813?text=Hello%20Dimacode!%20I%20would%20like%20to%20discuss%20a%20project.';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Dimacode on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 active:scale-95 cursor-pointer"
      style={{
        boxShadow: '0 10px 25px -5px rgba(37, 211, 102, 0.5), 0 0 15px rgba(37, 211, 102, 0.4)',
      }}
    >
      <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-sm font-medium uppercase tracking-wider pr-1">
        Quick Message
      </span>
      {/* Subtle pulse ring */}
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400"></span>
      </span>
    </a>
  );
};
