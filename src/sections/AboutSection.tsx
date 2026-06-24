import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import { SectionHeading } from '../components/SectionHeading'
import { strengths } from '../data/portfolioData'

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="About"
            title="Building scalable, high-performance frontend systems for modern enterprise products"
            description="I combine product thinking, engineering discipline, and hands-on React expertise to build interfaces that are clean, scalable, and production-ready."
          />
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            Over the past 4 years, I’ve worked on enterprise-grade applications in finance and publishing domains, focusing on UI architecture, performance optimization, and reusable design systems that support long-term scalability.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="glass-panel relative overflow-hidden rounded-[1.8rem] p-8"
        >
          <div className="grid gap-4">
            {strengths.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-slate-800/70">
                <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-violet-600 dark:text-violet-400" />
                <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
