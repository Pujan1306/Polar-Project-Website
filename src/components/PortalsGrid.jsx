import { PORTALS, IMAGES } from '../data/content.js'
import { useLang } from '../context/LanguageContext.jsx'
import { Icon } from './Icon.jsx'

export default function PortalsGrid() {
  const { lang } = useLang()
  const t = (pair) => (typeof pair === 'object' ? pair[lang] : pair)

  return (
    <section aria-labelledby="portals-heading" className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
      <div className="mb-7 flex flex-col gap-1.5">
        <span className="text-[12.5px] font-bold uppercase tracking-widest text-primary">
          {t({ en: 'One portal, four doors', hi: 'एक पोर्टल, चार द्वार' })}
        </span>
        <h2 id="portals-heading" className={`text-3xl font-bold tracking-tight text-navy dark:text-chart-1 ${lang === 'hi' ? 'lang-hi' : ''}`}>
          {t({ en: 'Core Portals', hi: 'मुख्य पोर्टल' })}
        </h2>
        <p className="max-w-2xl text-[15px] text-ink-soft">
          {t({ en: 'Start from what you need — science, media, stations, or learning.', hi: 'अपनी ज़रूरत से शुरू करें — विज्ञान, मीडिया, स्टेशन या सीखना।' })}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {PORTALS.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-lg"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={IMAGES[p.image].src}
                alt={IMAGES[p.image].alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" aria-hidden="true" />
              <span className="absolute left-4 top-4 rounded bg-white/90 px-3 py-1 text-[11.5px] font-bold uppercase tracking-wider text-navy backdrop-blur">
                {p.tag}
              </span>
              <h3 className={`absolute bottom-3 left-4 right-4 text-xl font-bold text-white ${lang === 'hi' ? 'lang-hi' : ''}`}>
                {p.title[lang]}
              </h3>
            </div>
            <div className="flex flex-1 flex-col justify-between gap-4 p-4">
              <p className="text-[14px] leading-relaxed text-ink-soft">{p.text}</p>
              <div className="flex items-center justify-between border-t border-border pt-3 text-[14px] font-bold text-primary">
                <span>{p.footer}</span>
                <Icon name="arrowRight" size={17} className="transition group-hover:translate-x-1" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
