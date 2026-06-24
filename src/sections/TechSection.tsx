import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { techStacks } from '../data/portfolioData'

export function TechSection() {
  return (
    <section id="tech" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Tech Stack"
        title="A modern toolkit for high-impact frontend delivery"
        description="I work across the full frontend spectrum, from scalable component systems to polished user experiences and delivery workflows."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {techStacks.map((stack, index) => (
          <motion.div
            key={stack.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: index * 0.06 }}
            className="glass-panel rounded-[1.5rem] p-6"
          >
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{stack.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {stack.items.map((item) => (
                <span key={item} className="rounded-full border border-slate-200/70 px-3 py-1 text-sm text-slate-600 dark:border-white/10 dark:text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
