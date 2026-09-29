import { PROGRAMMES, IMAGES } from '../data/content.js'
import { useLang } from '../context/LanguageContext.jsx'
import { Icon } from './Icon.jsx'

const TAG_STYLES = {
  navy: 'bg-navy text-white',
  polar: 'bg-polar text-white',
  primary: 'bg-primary text-white',
}

export default function Programmes() {
  const { lang } = useLang()
  const t = (pair) => (typeof pair === 'object' ? pair[lang] : pair)

  return (
    <section id="stations" aria-labelledby="programmes-heading" className="bg-ice py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[12.5px] font-bold uppercase tracking-widest text-primary">
              {t({ en: 'Priority initiatives', hi: 'प्रमुख पहल' })}
            </span>
            <h2 id="programmes-heading" className={`text-3xl font-bold tracking-tight text-navy dark:text-chart-1 ${lang === 'hi' ? 'lang-hi' : ''}`}>
              {t({ en: 'Programmes & Major Capabilities', hi: 'कार्यक्रम एवं प्रमुख क्षमताएँ' })}
            </h2>
            <p className="mt-1 text-[15px] text-ink-soft">
              {t({ en: 'Polar programmes delivering national science priorities', hi: 'राष्ट्रीय विज्ञान प्राथमिकताओं को पूरा करते ध्रुवीय कार्यक्रम' })}
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {PROGRAMMES.map((pr) => (
            <div key={pr.title} className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={IMAGES[pr.image].src}
                  alt={pr.imageAlt || IMAGES[pr.image].alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <span className={`absolute left-3 top-3 rounded px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider ${TAG_STYLES[pr.tagColor]}`}>
                  {pr.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between gap-3 p-4">
                <div className="flex flex-col gap-2">
                  <h3 className={`text-[17px] font-bold text-navy dark:text-chart-1 ${lang === 'hi' ? 'lang-hi' : ''}`}>
                    {t({ en: pr.title, hi: pr.title })}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-ink-soft">{pr.text}</p>
                </div>
                <a href="#stations" className="flex items-center gap-1 text-[13px] font-bold text-primary hover:underline">
                  {pr.link} <Icon name="arrowRight" size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
