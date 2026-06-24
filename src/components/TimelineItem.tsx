import { motion } from 'framer-motion'

export function TimelineItem({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="glass-panel relative rounded-[1.6rem] p-6"
    >
      <div className="absolute left-0 top-7 h-3 w-3 -translate-x-1/2 rounded-full bg-violet-500" />
      <div className="ml-4 space-y-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{item.role}</h3>
            <p className="text-sm font-medium text-violet-600 dark:text-violet-400">{item.company}</p>
          </div>
          <span className="text-sm text-slate-500 dark:text-slate-400">{item.period}</span>
        </div>
        <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
        <ul className="space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-500" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
