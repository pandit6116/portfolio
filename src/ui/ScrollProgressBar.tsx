import { motion, useScroll } from 'framer-motion'

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
