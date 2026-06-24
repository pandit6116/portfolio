import { motion } from 'framer-motion'

export function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      className="glass-panel group rounded-[1.6rem] p-6"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{project.title}</h3>
        <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-300">
          Featured
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-full border border-slate-200/70 px-3 py-1 text-sm text-slate-600 dark:border-white/10 dark:text-slate-300">
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  )
}
