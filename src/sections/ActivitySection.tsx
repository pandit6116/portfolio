import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { activityHighlights } from '../data/portfolioData'

export function ActivitySection() {
  return (
    <section id="activity" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="GitHub & Engineering Rhythm"
        title="Focused on product quality, collaboration, and long-term maintainability"
        description="My engineering approach emphasizes clean architecture, thoughtful delivery, and dependable handoffs in team environments."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-[1.8rem] border border-white/20 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-500 p-8 text-white shadow-[0_20px_90px_rgba(124,58,237,0.25)]"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em]">Available for</p>
          <h3 className="mt-3 text-2xl font-semibold">Senior Frontend roles and product-focused engineering work</h3>
          <p className="mt-4 text-sm leading-7 text-violet-100">
            I enjoy building experiences that balance design, performance, and maintainability across diverse product teams.
          </p>
        </motion.div>
        <div className="grid gap-4">
          {activityHighlights.map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              className="glass-panel rounded-[1.2rem] p-5"
            >
              <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
