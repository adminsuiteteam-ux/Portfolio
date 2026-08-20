/* eslint-disable @shopify/jsx-no-hardcoded-content */
// securecoder-disable jsx-no-hardcoded-content
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';

interface ProjectData {
  number: string;
  title: string;
  category: string;
  href: string;
  heroImg: string;
  featuresImg: string;
  showcaseImg: string;
}

const PROJECTS_DATA: ProjectData[] = [
  {
    number: '01',
    title: 'Egold Technology',
    category: 'Client Website',
    href: 'https://egoldtechnology.com',
    heroImg: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fegoldtechnology.com?w=800',
    featuresImg: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fegoldtechnology.com?w=1000',
    showcaseImg: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fegoldtechnology.com?w=1280',
  },
  {
    number: '02',
    title: 'Gabstep',
    category: 'E-Commerce / Brand',
    href: 'https://gabstep.com',
    heroImg: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fgabstep.com?w=800',
    featuresImg: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fgabstep.com?w=1000',
    showcaseImg: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fgabstep.com?w=1280',
  },
  {
    number: '03',
    title: 'Tarepet Montessori',
    category: 'School Web Portal',
    href: 'https://tarepetmontessorischool.com',
    heroImg: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Ftarepetmontessorischool.com?w=800',
    featuresImg: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Ftarepetmontessorischool.com?w=1000',
    showcaseImg: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Ftarepetmontessorischool.com?w=1280',
  },
  {
    number: '04',
    title: 'Brownforte Mechanical',
    category: 'Engineering Portal',
    href: 'https://brownfortemechanical.com',
    heroImg: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fbrownfortemechanical.com?w=800',
    featuresImg: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fbrownfortemechanical.com?w=1000',
    showcaseImg: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fbrownfortemechanical.com?w=1280',
  },
  {
    number: '05',
    title: 'AdminSuite',
    category: 'Full Stack App',
    href: 'https://adminsuite.onrender.com',
    heroImg: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fadminsuite.onrender.com?w=800',
    featuresImg: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fadminsuite.onrender.com?w=1000',
    showcaseImg: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fadminsuite.onrender.com?w=1280',
  },
];

const ProjectCard: React.FC<{
  project: ProjectData;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}> = ({ project, index, totalCards, progress }) => {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(
    progress,
    [index / totalCards, 1],
    [1, targetScale]
  );

  return (
    <div
      className="min-h-[85vh] flex items-center justify-center sticky"
      style={{
        top: `calc(5rem + ${index * 24}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[36px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl overflow-hidden"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-5 sm:mb-6">
          <div className="flex items-center gap-3 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 5.5rem)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="font-light uppercase tracking-wider text-xs sm:text-sm text-[#D7E2EA]/70">
                {project.category}
              </span>
              <h3 className="font-medium uppercase text-base sm:text-2xl md:text-3xl text-[#D7E2EA]">
                {project.title}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={project.href} />
        </div>

        {/* Bottom row: Two-column image grid displaying DIFFERENT sections of the live site */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 w-full items-stretch">
          {/* Left Column (40% width / 5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
            {/* Section 1: Hero / Header Area Crop */}
            <div className="group relative w-full overflow-hidden rounded-[24px] sm:rounded-[36px] bg-neutral-900 border border-[#D7E2EA]/15">
              <img
                src={project.heroImg}
                alt={`${project.title} - Header & Hero Section`}
                loading="lazy"
                className="w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                style={{ height: 'clamp(140px, 16vw, 220px)' }}
              />
              <div className="absolute bottom-2 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-white/90 border border-white/10">
                Header & Navigation
              </div>
            </div>

            {/* Section 2: Body / Features / Content Zoom Crop */}
            <div className="group relative w-full overflow-hidden rounded-[24px] sm:rounded-[36px] bg-neutral-900 border border-[#D7E2EA]/15">
              <img
                src={project.featuresImg}
                alt={`${project.title} - Features & Content Section`}
                loading="lazy"
                className="w-full object-cover object-bottom group-hover:scale-110 transition-transform duration-500"
                style={{ height: 'clamp(160px, 20vw, 300px)' }}
              />
              <div className="absolute bottom-2 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-white/90 border border-white/10">
                Features & Content
              </div>
            </div>
          </div>

          {/* Right Column (60% width / 7 cols) - Full Live Website Overview */}
          <div className="md:col-span-7 flex h-full">
            <div className="group relative w-full h-full min-h-[260px] sm:min-h-[350px] overflow-hidden rounded-[24px] sm:rounded-[36px] bg-neutral-900 border border-[#D7E2EA]/15">
              <img
                src={project.showcaseImg}
                alt={`${project.title} - Full Live Showcase`}
                loading="lazy"
                className="w-full h-full min-h-[260px] sm:min-h-[350px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-4 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold text-white/90 border border-white/10">
                Live Overview
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative z-10 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-4 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40} className="w-full text-center mb-10 sm:mb-16 md:mb-20">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(2.8rem, 11vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      {/* Sticky Stacking Project Cards */}
      <div className="relative flex flex-col gap-10 sm:gap-16">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={PROJECTS_DATA.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};
