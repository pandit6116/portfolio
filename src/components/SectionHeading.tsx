export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-600 dark:text-violet-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">{title}</h2>
      {description ? <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p> : null}
    </div>
  )
}
