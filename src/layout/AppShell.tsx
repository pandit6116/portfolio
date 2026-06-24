import { motion } from 'framer-motion'
import { navLinks, profile } from '../data/portfolioData'
import { ThemeToggle } from '../ui/ThemeToggle'
import { ScrollProgressBar } from '../ui/ScrollProgressBar'

const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`

export function AppShell({ children }) {
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

  const handleNavClick = (event, href) => {
    event.preventDefault()

    const sectionId = href.startsWith('#') ? href.slice(1) : href
    scrollToSection(sectionId)
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div className="hero-orb hero-orb-one" animate={{ x: [0, 24, 0], y: [0, -18, 0], scale: [1, 1.05, 1] }} transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="hero-orb hero-orb-two" animate={{ x: [0, -14, 0], y: [0, 22, 0], scale: [1, 1.08, 1] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} />
      </div>
      <ScrollProgressBar />
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/70 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" onClick={(event) => handleNavClick(event, '#home')} className="text-lg font-semibold tracking-[0.25em] text-slate-900 dark:text-white">
            {profile.name}
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(event) => handleNavClick(event, link.href)} className="text-sm font-medium text-slate-600 transition hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href={resumeHref} download="Anurag-Tripathi-Resume.pdf" className="hidden rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-700 transition hover:bg-violet-500/20 dark:text-violet-300 sm:inline-flex">
              Resume
            </a>
            <ThemeToggle />
          </div>
        </div>
        <div className="border-t border-slate-200/70 px-4 py-3 md:hidden dark:border-white/10">
          <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(event) => handleNavClick(event, link.href)} className="whitespace-nowrap rounded-full border border-slate-200/70 bg-white/70 px-3 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <motion.main className="relative z-10" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: 'easeOut' }}>
        {children}
      </motion.main>

      <footer className="relative z-10 border-t border-slate-200/80 bg-white/70 py-8 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 dark:text-slate-300">
          <p>Designed and developed with React, Tailwind, and Framer Motion.</p>
          <p>© 2026 {profile.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
