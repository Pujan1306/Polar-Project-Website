import { FOOTER_LINKS } from '../data/content.js'
import { useLang } from '../context/LanguageContext.jsx'
import { Icon } from './Icon.jsx'

export default function Footer() {
  const { lang } = useLang()
  const t = (pair) => (typeof pair === 'object' ? pair[lang] : pair)

  return (
    <footer className="bg-ice-dark/40 border-t border-border">
      {/* Statement strip */}
      <div className="border-b border-border bg-ice">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-2 px-4 py-4 md:flex-row md:items-center lg:px-6">
          <Icon name="gov" size={26} className="shrink-0 text-polar" />
          <p className="text-[13px] leading-relaxed text-ink-soft">
            {t({
              en: 'Content on this portal is owned, maintained and updated by the National Centre for Polar and Ocean Research, Ministry of Earth Sciences, Government of India.',
              hi: 'इस पोर्टल की सामग्री का स्वामित्व, रखरखाव और अद्यतन राष्ट्रीय ध्रुवीय एवं समुद्री अनुसंधान केन्द्र, पृथ्वी विज्ञान मंत्रालय, भारत सरकार द्वारा किया जाता है।',
            })}
          </p>
        </div>
      </div>

      {/* Main footer columns */}
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-2 lg:grid-cols-5 lg:px-6">
        <div className="flex flex-col gap-3 lg:col-span-2">
          <div className="flex items-center gap-3">
            <img src="/favicon.svg" alt="" className="h-9 w-9" />
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-navy dark:text-chart-1">
                {t({ en: 'NCPOR', hi: 'एनसीपीओआर' })}
              </span>
              <span className="text-[12px] text-ink-soft">
                {t({ en: 'Ministry of Earth Sciences, Government of India', hi: 'पृथ्वी विज्ञान मंत्रालय, भारत सरकार' })}
              </span>
            </div>
          </div>
          <p className="text-[13px] leading-relaxed text-ink-soft">
            {t({ en: 'Leading India\u2019s polar and ocean research, and sharing it with everyone.', hi: 'भारत के ध्रुवीय एवं समुद्री अनुसंधान का नेतृत्व, और इसे सबके साथ साझा करना।' })}
          </p>

          <div className="mt-2 flex flex-col gap-1.5">
            <span className="text-[13px] font-bold">{t({ en: 'Polar Field Updates', hi: 'पोलर फ़ील्ड अपडेट' })}</span>
            <p className="text-[12px] text-ink-soft">
              {t({ en: 'Receive expedition updates, new publications and outreach stories.', hi: 'अभियान अपडेट, नई प्रकाशनाएँ और आउटरीच कहानियाँ प्राप्त करें।' })}
            </p>
            <form className="mt-1 flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder={t({ en: 'Enter your email address', hi: 'अपना ईमेल पता दर्ज करें' })}
                aria-label="Email address for newsletter"
                className="w-full rounded-lg border border-input bg-card px-3 py-2 text-[13px] outline-none placeholder:text-ink-soft focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-navy px-4 py-2 text-[13px] font-bold text-white transition hover:bg-navy-2"
              >
                {t({ en: 'Subscribe', hi: 'सदस्यता लें' })}
              </button>
            </form>
          </div>
        </div>

        {[
          { title: { en: 'Science & Data', hi: 'विज्ञान एवं डेटा' }, links: FOOTER_LINKS.science },
          { title: { en: 'Stations & Expeditions', hi: 'स्टेशन एवं अभियान' }, links: FOOTER_LINKS.stations },
          { title: { en: 'About & Policy', hi: 'परिचय एवं नीति' }, links: FOOTER_LINKS.about },
        ].map((col) => (
          <div key={col.title.en} className="flex flex-col gap-2">
            <span className={`text-[13px] font-bold uppercase tracking-wider text-navy dark:text-chart-1 ${lang === 'hi' ? 'lang-hi' : ''}`}>
              {col.title[lang]}
            </span>
            <ul className="flex flex-col gap-1.5">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#footer" className="text-[13px] text-ink-soft transition hover:text-primary">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom legal bar */}
      <div className="border-t border-border bg-ice">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-4 md:flex-row md:items-center lg:px-6">
          <span className="text-[12.5px] text-ink-soft">
            {t({ en: '© NCPOR, Ministry of Earth Sciences, Government of India', hi: '© एनसीपीओआर, पृथ्वी विज्ञान मंत्रालय, भारत सरकार' })}
          </span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {FOOTER_LINKS.legal.map((l) => (
              <a key={l} href="#footer" className="text-[12.5px] text-ink-soft transition hover:text-primary">
                {t({ en: l, hi: l })}
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-4 lg:px-6">
          <span className="text-[12px] text-ink-soft">
            {t({ en: 'Last updated: 29 September 2026', hi: 'अंतिम अद्यतन: 29 सितंबर 2026' })}
          </span>
        </div>
      </div>
    </footer>
  )
}
