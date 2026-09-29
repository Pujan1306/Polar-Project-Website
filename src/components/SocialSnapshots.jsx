import { SOCIALS, IMAGES } from '../data/content.js'
import { useLang } from '../context/LanguageContext.jsx'
import { Icon } from './Icon.jsx'

const PLACE_STYLES = {
  Maitri: 'bg-navy',
  Himadri: 'bg-polar',
  Bharati: 'bg-primary',
  'Goa Lab': 'bg-flag-green',
  'At Sea': 'bg-navy-2',
}

export default function SocialSnapshots() {
  const { lang } = useLang()
  const t = (pair) => (typeof pair === 'object' ? pair[lang] : pair)

  return (
    <section aria-labelledby="social-heading" className="border-t border-border bg-ice py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-primary">#PolarIndia</span>
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[12px] font-bold text-primary">
                {t({ en: 'Station Community', hi: 'स्टेशन समुदाय' })}
              </span>
            </div>
            <p className="mt-1 text-[13.5px] text-ink-soft">
              {t({ en: 'Real stories and field snapshots from scientists and support staff at the poles.', hi: 'ध्रुवों पर वैज्ञानिकों और सहायक कर्मियों की असली कहानियाँ और फ़ील्ड तस्वीरें।' })}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {['X', 'YouTube', 'Facebook'].map((s) => (
              <a
                key={s}
                href="#social"
                className="rounded border border-border bg-card px-3 py-1.5 text-[12.5px] font-semibold text-ink shadow-sm transition hover:bg-accent"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SOCIALS.map((s) => (
            <article key={s.place + s.date} className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md">
              <div>
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={IMAGES[s.image].src}
                    alt={IMAGES[s.image].alt}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className={`absolute left-2 top-2 rounded px-1.5 py-0.5 font-mono text-[11px] text-white ${PLACE_STYLES[s.place]}`}>
                    {s.place}
                  </span>
                </div>
                <p className="line-clamp-4 p-3 text-[13px] leading-relaxed">{s.text}</p>
              </div>
              <div className="flex items-center justify-between border-t border-border px-3 py-2 text-[12px] text-ink-soft">
                <span>{s.date}</span>
                <a href="#social" className="flex items-center gap-1 font-bold text-primary hover:underline">
                  {t({ en: 'View post', hi: 'पोस्ट देखें' })}
                  <Icon name="external" size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
