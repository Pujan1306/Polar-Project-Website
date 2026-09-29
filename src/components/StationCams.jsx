import { useState } from 'react'
import { CAM_FEEDS, IMAGES } from '../data/content.js'
import { useLang } from '../context/LanguageContext.jsx'
import { Icon } from './Icon.jsx'

export default function StationCams() {
  const { lang } = useLang()
  const [active, setActive] = useState(CAM_FEEDS[0].id)
  const t = (pair) => (typeof pair === 'object' ? pair[lang] : pair)
  const feed = CAM_FEEDS.find((f) => f.id === active)

  return (
    <section id="cams" aria-labelledby="cams-heading" className="bg-card py-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <Icon name="videocam" size={22} className="text-primary" />
            <h2 id="cams-heading" className={`text-xl font-bold text-navy dark:text-chart-1 ${lang === 'hi' ? 'lang-hi' : ''}`}>
              {t({ en: 'Station Cams', hi: 'स्टेशन कैम' })}
            </h2>
          </div>
          <a href="#cams" className="text-[13px] font-bold uppercase tracking-wider text-primary hover:text-navy">
            {t({ en: 'All feeds', hi: 'सभी फ़ीड' })} →
          </a>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {/* Main preview */}
          <div className="relative overflow-hidden rounded-xl bg-navy lg:col-span-2">
            <img
              src={IMAGES[feed.image].src}
              alt={IMAGES[feed.image].alt}
              className="h-72 w-full object-cover lg:h-96"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" aria-hidden="true" />
            <div className="absolute left-3 top-3 flex items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-full bg-live px-2.5 py-0.5 text-[11.5px] font-bold text-white">
                <span className="live-dot h-1.5 w-1.5 rounded-full bg-white" />
                {t({ en: 'LIVE', hi: 'लाइव' })}
              </span>
              <span className="rounded bg-navy/80 px-2 py-0.5 font-mono text-[11.5px] text-white">IST</span>
              <span className="rounded bg-navy/60 px-2 py-0.5 text-[11.5px] text-white">
                {t({ en: 'sample feed', hi: 'नमूना फ़ीड' })}
              </span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
              <div>
                <span className="block text-[15px] font-bold text-white">{feed.label}</span>
                <span className="text-[12px] text-white/80">{feed.sub}</span>
              </div>
              <span className="rounded-full bg-white/25 p-2 text-white backdrop-blur" title="Fullscreen (demo)">
                <Icon name="contrast" size={18} />
              </span>
            </div>
          </div>

          {/* Feed chips */}
          <div className="flex flex-col gap-2">
            <span className="text-[12px] font-bold uppercase tracking-wider text-ink-soft">
              {t({ en: 'Choose a feed', hi: 'फ़ीड चुनें' })}
            </span>
            {CAM_FEEDS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(f.id)}
                aria-pressed={active === f.id}
                className={`flex items-center justify-between rounded-lg border px-3 py-2.5 text-left text-[13.5px] font-semibold transition ${
                  active === f.id
                    ? 'border-primary bg-accent text-accent-foreground'
                    : 'border-border bg-background hover:bg-ice'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${active === f.id ? 'bg-live' : 'bg-flag-green'}`} />
                  {f.label}
                </span>
                <Icon name="chevronRight" size={15} className="text-ink-soft" />
              </button>
            ))}
            <div className="mt-1 flex items-center justify-between border-t border-border pt-2 text-[12px] text-ink-soft">
              <span className="flex items-center gap-1">
                <Icon name="satellite" size={14} className="text-flag-green" />
                {t({ en: 'Data link operational', hi: 'डेटा लिंक सक्रिय' })}
              </span>
              <span className="font-mono">NCPOR-NET</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
