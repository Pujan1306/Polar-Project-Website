import { MEDIA_CARDS, IMAGES } from '../data/content.js'
import { useLang } from '../context/LanguageContext.jsx'
import { Icon } from './Icon.jsx'

export default function MediaCards() {
  const { lang } = useLang()
  const t = (pair) => (typeof pair === 'object' ? pair[lang] : pair)

  return (
    <section id="ocean" aria-labelledby="media-heading" className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
      <div className="grid gap-5 md:grid-cols-3">
        {MEDIA_CARDS.map((m) => (
          <div key={m.title} className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md">
            <div className="relative h-52 overflow-hidden">
              <img src={IMAGES[m.image].src} alt={IMAGES[m.image].alt} className="h-full w-full object-cover" loading="lazy" />
              <span className="absolute left-3 top-3 rounded bg-navy px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                {m.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col justify-between gap-3 p-4">
              <div className="flex flex-col gap-2">
                <h3 className={`text-[17px] font-bold text-navy dark:text-chart-1 ${lang === 'hi' ? 'lang-hi' : ''}`}>
                  {t({ en: m.title, hi: m.title })}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-ink-soft">{m.text}</p>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-3">
                <a href="#ocean" className="text-[13px] font-bold text-primary hover:underline">{m.link} →</a>
                <Icon name="play" size={16} className="text-ink-soft" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
