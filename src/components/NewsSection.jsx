import { NEWS, IMAGES } from '../data/content.js'
import { useLang } from '../context/LanguageContext.jsx'
import { Icon } from './Icon.jsx'

const TAG_COLORS = {
  Outreach: 'bg-navy',
  'Expedition Life': 'bg-primary',
  'Ocean Science': 'bg-polar',
}

export default function NewsSection() {
  const { lang } = useLang()
  const t = (pair) => (typeof pair === 'object' ? pair[lang] : pair)

  return (
    <section id="news" aria-labelledby="news-heading" className="bg-card py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <Icon name="newspaper" size={26} className="text-navy" />
            <h2 id="news-heading" className={`text-2xl font-bold text-navy dark:text-chart-1 ${lang === 'hi' ? 'lang-hi' : ''}`}>
              {t({ en: 'Latest News & Field Updates', hi: 'ताज़ा समाचार एवं फ़ील्ड अपडेट' })}
            </h2>
          </div>
          <a href="#news" className="flex items-center gap-1 text-[13px] font-bold uppercase tracking-wider text-primary hover:text-navy">
            {t({ en: 'See all news', hi: 'सभी समाचार' })}
            <Icon name="arrowRight" size={15} />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {NEWS.map((n) => (
            <article key={n.title} className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm transition hover:shadow-md">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={IMAGES[n.image].src}
                  alt={IMAGES[n.image].alt}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span className={`absolute left-2 top-2 rounded px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white ${TAG_COLORS[n.tag]}`}>
                  {t({ en: n.tag, hi: n.tag })}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <span className="flex items-center gap-1.5 text-[12px] text-ink-soft">
                  <Icon name="calendar" size={13} />
                  {n.date}
                </span>
                <h3 className="line-clamp-3 text-[16px] font-semibold leading-snug hover:text-primary">
                  {t({ en: n.title, hi: n.title })}
                </h3>
                <p className="line-clamp-2 flex-1 text-[13.5px] text-ink-soft">
                  {t({ en: n.text, hi: n.text })}
                </p>
                <div className="mt-2 flex items-center justify-between border-t border-border pt-2">
                  <span className="text-[12.5px] font-bold text-primary">{t({ en: n.footer, hi: n.footer })}</span>
                  <Icon name="chevronRight" size={17} className="text-ink-soft group-hover:text-primary" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
