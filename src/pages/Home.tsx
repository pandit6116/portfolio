import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi'
import { AppShell } from '../layout/AppShell'
import { profile, stats } from '../data/portfolioData'
import { StatCard } from '../components/StatCard'

const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`

const scrollToSection = (sectionId) => {
  const target = document.getElementById(sectionId)

  if (target) {
    const offset = 96
    const top = window.scrollY + target.getBoundingClientRect().top - offset
    window.scrollTo({ top, left: 0, behavior: 'smooth' })
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  window.history.replaceState({}, '', `${window.location.pathname}${window.location.search}#${sectionId}`)
}

const AboutSection = lazy(() => import('../sections/AboutSection').then((module) => ({ default: module.AboutSection })))
const TechSection = lazy(() => import('../sections/TechSection').then((module) => ({ default: module.TechSection })))
const ExperienceSection = lazy(() => import('../sections/ExperienceSection').then((module) => ({ default: module.ExperienceSection })))
const ProjectsSection = lazy(() => import('../sections/ProjectsSection').then((module) => ({ default: module.ProjectsSection })))
const ActivitySection = lazy(() => import('../sections/ActivitySection').then((module) => ({ default: module.ActivitySection })))
const EducationSection = lazy(() => import('../sections/EducationSection').then((module) => ({ default: module.EducationSection })))
const ContactSection = lazy(() => import('../sections/ContactSection').then((module) => ({ default: module.ContactSection })))

function SectionFallback() {
  return <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8" />
}

export function Home() {
  return (
    <AppShell>
      <section id="home" className="mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-24 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-700 dark:text-violet-300">
              Frontend Engineer • 4 Years Experience
            </motion.span>
            <div className="space-y-4">
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-7xl dark:text-white">
                <span className="bg-gradient-to-r from-slate-950 via-violet-700 to-sky-500 bg-clip-text text-transparent dark:from-white dark:via-violet-200 dark:to-cyan-200">
                  {profile.name}
                </span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Building scalable, high-performance web applications with modern React architecture and enterprise-grade UI systems.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Specialized in React, Angular, and REST-driven frontend development for large-scale enterprise platforms.
              </motion.p>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="flex flex-wrap gap-4">
              <a href="#contact" onClick={(event) => { event.preventDefault(); scrollToSection('contact') }} className="button-primary px-5 py-3 font-medium">
                Let&apos;s connect <FiArrowRight />
              </a>
              <a href="#projects" onClick={(event) => { event.preventDefault(); scrollToSection('projects') }} className="button-secondary px-5 py-3 font-medium text-slate-700 dark:text-slate-200">
                Explore work
              </a>
              <a href={resumeHref} download="Anurag-Tripathi-Resume.pdf" className="button-secondary px-5 py-3 font-medium text-violet-700 dark:text-violet-300">
                Download Resume
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
              <span className="rounded-full border border-slate-200/80 bg-white/70 px-3 py-2 backdrop-blur dark:border-white/10 dark:bg-slate-900/70">React</span>
              <span className="rounded-full border border-slate-200/80 bg-white/70 px-3 py-2 backdrop-blur dark:border-white/10 dark:bg-slate-900/70">Framer Motion</span>
              <span className="rounded-full border border-slate-200/80 bg-white/70 px-3 py-2 backdrop-blur dark:border-white/10 dark:bg-slate-900/70">Enterprise UI</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="rounded-full border border-slate-200/80 bg-white/70 p-2.5 transition hover:border-violet-500 hover:text-violet-600 dark:border-white/10 dark:bg-slate-900/70 dark:hover:border-violet-400 dark:hover:text-violet-400">
                <FiLinkedin className="h-4 w-4" />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="rounded-full border border-slate-200/80 bg-white/70 p-2.5 transition hover:border-violet-500 hover:text-violet-600 dark:border-white/10 dark:bg-slate-900/70 dark:hover:border-violet-400 dark:hover:text-violet-400">
                <FiGithub className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45 }} className="glass-panel relative overflow-hidden rounded-[2rem] p-8">
            <div className="soft-ring" />
            <div className="relative">
              <div className="mb-5 flex items-center justify-between gap-3">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">Core focus</p>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">Available for impactful roles</span>
              </div>
              <ul className="space-y-4">
                {[
                  '4+ years delivering enterprise-grade interfaces',
                  'React, Angular, and REST-driven product experiences',
                  'Clean architecture and high-performance UI systems',
                ].map((item) => (
                  <li key={item} className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 text-sm leading-7 text-slate-700 shadow-sm dark:border-white/10 dark:bg-slate-800/70 dark:text-slate-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </section>

      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
        <TechSection />
        <ExperienceSection />
        <ProjectsSection />
        <ActivitySection />
        <EducationSection />
        <ContactSection />
      </Suspense>
    </AppShell>
  )
}
