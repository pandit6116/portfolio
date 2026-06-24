import { motion } from 'framer-motion'

export function StatCard({ value, label }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      className="glass-panel rounded-[1.35rem] p-6 text-center"
    >
      <p className="text-3xl font-semibold text-slate-950 dark:text-white">{value}</p>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{label}</p>
    </motion.div>
  )
}
