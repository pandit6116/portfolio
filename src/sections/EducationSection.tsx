import { SectionHeading } from '../components/SectionHeading'
import { education } from '../data/portfolioData'

export function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Education"
        title="A strong technical foundation that keeps evolving"
        description="My academic background has shaped the analytical thinking and engineering rigor I bring to modern web products."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {education.map((item) => (
          <div key={item.degree} className="glass-panel rounded-[1.5rem] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">{item.period}</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">{item.degree}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.school}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
