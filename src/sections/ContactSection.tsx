import { motion } from 'framer-motion'
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { contactLinks, profile } from '../data/portfolioData'

const iconMap = {
  Email: <FiMail className="h-4 w-4" />,
  Phone: <FiPhone className="h-4 w-4" />,
  LinkedIn: <FiLinkedin className="h-4 w-4" />,
  GitHub: <FiGithub className="h-4 w-4" />,
}

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5"
          >
            <div className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-700 dark:text-violet-300">
              Contact
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
                Let&apos;s connect
              </h2>
              <p className="max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Open to opportunities and interesting collaborations. Reach out anytime.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}?subject=Hello%20from%20your%20portfolio`} className="button-primary px-5 py-3 font-medium">
                Send an email <FiArrowRight />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="button-secondary px-5 py-3 font-medium text-slate-700 dark:text-slate-200">
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[1.5rem] border border-slate-200/70 bg-slate-50/70 p-5 shadow-sm dark:border-white/10 dark:bg-slate-900/70"
          >
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-200">
              <FiMapPin className="h-4 w-4 text-violet-500" />
              <span>{profile.location}</span>
            </div>

            <div className="mt-4 space-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200/70 bg-white/70 p-3 text-sm text-slate-700 transition hover:-translate-y-0.5 hover:border-violet-400 hover:bg-white dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-200"
                >
                  <span className="flex items-center gap-3">
                    {iconMap[link.label]}
                    <span>{link.value}</span>
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
