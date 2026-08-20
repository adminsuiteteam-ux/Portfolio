import React, { useRef, useState, useEffect } from 'react';

const LIVE_SITE_SCREENSHOTS = [
  'https://s0.wp.com/mshots/v1/https%3A%2F%2Fegoldtechnology.com?w=1280',
  'https://s0.wp.com/mshots/v1/https%3A%2F%2Fgabstep.com?w=1280',
  'https://s0.wp.com/mshots/v1/https%3A%2F%2Ftarepetmontessorischool.com?w=1280',
  'https://s0.wp.com/mshots/v1/https%3A%2F%2Fbrownfortemechanical.com?w=1280',
  'https://s0.wp.com/mshots/v1/https%3A%2F%2Fadminsuite.onrender.com?w=1280',
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

  // Repeat live site screenshots for infinite smooth marquee movement
  const row1ImagesTripled = [
    ...LIVE_SITE_SCREENSHOTS,
    ...LIVE_SITE_SCREENSHOTS,
    ...LIVE_SITE_SCREENSHOTS,
    ...LIVE_SITE_SCREENSHOTS,
  ];

  const row2ImagesTripled = [
    ...LIVE_SITE_SCREENSHOTS.slice().reverse(),
    ...LIVE_SITE_SCREENSHOTS.slice().reverse(),
    ...LIVE_SITE_SCREENSHOTS.slice().reverse(),
    ...LIVE_SITE_SCREENSHOTS.slice().reverse(),
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full select-none"
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
                className="w-[420px] h-[270px] rounded-2xl overflow-hidden border border-[#D7E2EA]/15 bg-neutral-900 flex-shrink-0"
              >
                <img
                  src={url}
                  alt={`Live Site Screenshot Row 1 - ${idx}`}
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
                className="w-[420px] h-[270px] rounded-2xl overflow-hidden border border-[#D7E2EA]/15 bg-neutral-900 flex-shrink-0"
              >
                <img
                  src={url}
                  alt={`Live Site Screenshot Row 2 - ${idx}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
