import { QUICK_ACCESS } from '../data/content.js'
import { useLang } from '../context/LanguageContext.jsx'
import { Icon } from './Icon.jsx'

export default function QuickAccess() {
  const { lang } = useLang()
  const t = (pair) => (typeof pair === 'object' ? pair[lang] : pair)

  return (
    <section aria-label="Quick access" className="border-t border-border bg-card py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 lg:grid-cols-4 lg:px-6">
        {QUICK_ACCESS.map((q) => (
          <a
            key={q.title}
            href="#quick"
            className="group flex items-center gap-3 rounded-lg bg-ice p-4 transition hover:bg-accent"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
              <Icon name={q.icon} size={19} />
            </span>
            <span className="flex flex-col">
              <span className="text-[13.5px] font-bold">{q.title}</span>
              <span className="text-[12px] text-ink-soft">{t({ en: q.sub, hi: q.sub })}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
