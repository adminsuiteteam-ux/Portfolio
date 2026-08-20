/* eslint-disable @shopify/jsx-no-hardcoded-content */
// securecoder-disable jsx-no-hardcoded-content
import React, { useRef, useState, useEffect } from 'react';

const ROW1_SCREENSHOTS = [
  'https://s0.wp.com/mshots/v1/https%3A%2F%2Fegoldtechnology.com?w=1280',
  'https://s0.wp.com/mshots/v1/https%3A%2F%2Fgabstep.com?w=1280',
  'https://s0.wp.com/mshots/v1/https%3A%2F%2Ftarepetmontessorischool.com?w=1280',
  'https://s0.wp.com/mshots/v1/https%3A%2F%2Fbrownfortemechanical.com?w=1280',
  'https://s0.wp.com/mshots/v1/https%3A%2F%2Fadminsuite.onrender.com?w=1280',
];

const ROW2_SCREENSHOTS = [
  'https://s0.wp.com/mshots/v1/https%3A%2F%2Fadminsuite.onrender.com?w=900',
  'https://s0.wp.com/mshots/v1/https%3A%2F%2Fbrownfortemechanical.com?w=900',
  'https://s0.wp.com/mshots/v1/https%3A%2F%2Ftarepetmontessorischool.com?w=900',
  'https://s0.wp.com/mshots/v1/https%3A%2F%2Fgabstep.com?w=900',
  'https://s0.wp.com/mshots/v1/https%3A%2F%2Fegoldtechnology.com?w=900',
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1ImagesTripled = [
    ...ROW1_SCREENSHOTS,
    ...ROW1_SCREENSHOTS,
    ...ROW1_SCREENSHOTS,
    ...ROW1_SCREENSHOTS,
  ];

  const row2ImagesTripled = [
    ...ROW2_SCREENSHOTS,
    ...ROW2_SCREENSHOTS,
    ...ROW2_SCREENSHOTS,
    ...ROW2_SCREENSHOTS,
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-10 overflow-hidden w-full select-none"
    >
      <div className="flex flex-col gap-4 w-full">
        {/* Row 1: Moves RIGHT on scroll */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-4 w-max"
            style={{
              transform: `translateX(${scrollOffset - 200}px)`,
              willChange: 'transform',
            }}
          >
            {row1ImagesTripled.map((url, idx) => (
              <div
                key={`r1-${idx}`}
                className="w-[300px] sm:w-[380px] md:w-[420px] h-[190px] sm:h-[240px] md:h-[270px] rounded-2xl overflow-hidden border border-[#D7E2EA]/15 bg-neutral-900 flex-shrink-0"
              >
                <img
                  src={url}
                  alt={`Live Site Snapshot Row 1 - ${idx}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-4 w-max"
            style={{
              transform: `translateX(${-(scrollOffset - 200)}px)`,
              willChange: 'transform',
            }}
          >
            {row2ImagesTripled.map((url, idx) => (
              <div
                key={`r2-${idx}`}
                className="w-[300px] sm:w-[380px] md:w-[420px] h-[190px] sm:h-[240px] md:h-[270px] rounded-2xl overflow-hidden border border-[#D7E2EA]/15 bg-neutral-900 flex-shrink-0"
              >
                <img
                  src={url}
                  alt={`Live Site Snapshot Row 2 - ${idx}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
