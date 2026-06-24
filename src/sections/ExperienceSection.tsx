import { SectionHeading } from '../components/SectionHeading'
import { TimelineItem } from '../components/TimelineItem'
import { experience } from '../data/portfolioData'

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Experience"
        title="Building dependable products in fast-moving teams"
        description="My work spans enterprise banking applications, integration services, and reusable platform components that need to stand up in production."
      />
      <div className="mt-10 space-y-6 border-l border-slate-200/80 pl-6 dark:border-white/10">
        {experience.map((item) => (
          <TimelineItem key={item.role} item={item} />
        ))}
      </div>
    </section>
  )
}
