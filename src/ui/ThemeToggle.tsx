import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 bg-white/80 text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100"
    >
      {theme === 'dark' ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
    </button>
  )
}
