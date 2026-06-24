import { motion } from 'framer-motion'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/portfolioData'

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Selected work with product thinking and polished execution"
        description="These projects highlight the blend of modern UI, reusable components, and user-centered problem solving I bring to teams."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
