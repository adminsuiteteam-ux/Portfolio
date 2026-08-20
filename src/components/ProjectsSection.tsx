/* eslint-disable */
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';

interface ProjectData {
  number: string;
  title: string;
  category: string;
  href: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
}

const PROJECTS_DATA: ProjectData[] = [
  {
    number: '01',
    title: 'Egold Technology',
    category: 'Client',
    href: 'https://egoldtechnology.com',
    col1Img1: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fegoldtechnology.com?w=800',
    col1Img2: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fegoldtechnology.com?w=1000',
    col2Img: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fegoldtechnology.com?w=1280',
  },
  {
    number: '02',
    title: 'Gabstep',
    category: 'Client',
    href: 'https://gabstep.com',
    col1Img1: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fgabstep.com?w=800',
    col1Img2: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fgabstep.com?w=1000',
    col2Img: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fgabstep.com?w=1280',
  },
  {
    number: '03',
    title: 'Tarepet Montessori',
    category: 'Client',
    href: 'https://tarepetmontessorischool.com',
    col1Img1: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Ftarepetmontessorischool.com?w=800',
    col1Img2: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Ftarepetmontessorischool.com?w=1000',
    col2Img: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Ftarepetmontessorischool.com?w=1280',
  },
  {
    number: '04',
    title: 'Brownforte Mechanical',
    category: 'Client',
    href: 'https://brownfortemechanical.com',
    col1Img1: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fbrownfortemechanical.com?w=800',
    col1Img2: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fbrownfortemechanical.com?w=1000',
    col2Img: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fbrownfortemechanical.com?w=1280',
  },
  {
    number: '05',
    title: 'AdminSuite',
    category: 'Full Stack App',
    href: 'https://adminsuite.onrender.com',
    col1Img1: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fadminsuite.onrender.com?w=800',
    col1Img2: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fadminsuite.onrender.com?w=1000',
    col2Img: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fadminsuite.onrender.com?w=1280',
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
      className="h-[85vh] flex items-center justify-center sticky"
      style={{
        top: `calc(6rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl overflow-hidden"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="font-light uppercase tracking-wider text-xs sm:text-sm text-[#D7E2EA]/70">
                {project.category}
              </span>
              <h3 className="font-medium uppercase text-lg sm:text-2xl md:text-3xl text-[#D7E2EA]">
                {project.title}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={project.href} />
        </div>

        {/* Bottom row: Two-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 w-full items-stretch">
          {/* Left Column (40% width / 5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
            <div className="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-neutral-900 border border-[#D7E2EA]/10">
              <img
                src={project.col1Img1}
                alt={`${project.title} live screenshot preview 1`}
                loading="lazy"
                className="w-full object-cover object-top hover:scale-105 transition-transform duration-500"
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
              />
            </div>
            <div className="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-neutral-900 border border-[#D7E2EA]/10">
              <img
                src={project.col1Img2}
                alt={`${project.title} live screenshot preview 2`}
                loading="lazy"
                className="w-full object-cover object-top hover:scale-105 transition-transform duration-500"
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
              />
            </div>
          </div>

          {/* Right Column (60% width / 7 cols) */}
          <div className="md:col-span-7 flex h-full">
            <div className="w-full h-full min-h-[260px] sm:min-h-[350px] overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-neutral-900 border border-[#D7E2EA]/10">
              <img
                src={project.col2Img}
                alt={`${project.title} main live screenshot showcase`}
                loading="lazy"
                className="w-full h-full min-h-[260px] sm:min-h-[350px] object-cover object-top hover:scale-105 transition-transform duration-500"
              />
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
      className="relative z-10 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40} className="w-full text-center mb-12 sm:mb-16 md:mb-20">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      {/* Sticky Stacking Project Cards */}
      <div className="relative flex flex-col gap-12 sm:gap-16">
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
