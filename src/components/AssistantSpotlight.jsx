import { useState } from 'react'
import { ASSISTANT_FAQS } from '../data/content.js'
import { useLang } from '../context/LanguageContext.jsx'
import { Icon } from './Icon.jsx'

export default function AssistantSpotlight() {
  const { lang } = useLang()
  const [open, setOpen] = useState(0)
  const t = (pair) => (typeof pair === 'object' ? pair[lang] : pair)

  return (
    <section id="assistant" aria-labelledby="assistant-heading" className="relative overflow-hidden bg-navy py-10 text-white">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-96 w-96 rounded-full bg-primary/25 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 lg:grid-cols-12 lg:px-6">
        <div className="flex flex-col gap-3 lg:col-span-7">
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 rounded bg-polar px-2.5 py-0.5 text-[12px] font-bold uppercase tracking-wider">
              <Icon name="sparkle" size={13} />
              {t({ en: 'New: AI-Assisted', hi: 'नया: एआई सहायता' })}
            </span>
            <span className="text-[12.5px] text-white/75">{t({ en: 'Polar Assistant', hi: 'पोलर असिस्टेंट' })}</span>
          </div>
          <h2 id="assistant-heading" className={`text-3xl font-bold tracking-tight ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {t({ en: 'Ask the Polar Assistant', hi: 'पोलर असिस्टेंट से पूछें' })}
          </h2>
          <p className={`max-w-2xl text-[15px] leading-relaxed text-white/85 ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {t({
              en: 'Get simple answers about polar science in English or Hindi. Every answer links back to the NCPOR report or dataset it came from, and all public posts are reviewed by NCPOR staff before publishing.',
              hi: 'अंग्रेज़ी या हिंदी में ध्रुवीय विज्ञान के आसान उत्तर पाएँ। हर उत्तर मूल एनसीपीओआर रिपोर्ट या डेटासेट से जुड़ा होता है, और सभी सार्वजनिक पोस्ट प्रकाशित होने से पहले एनसीपीओआर कर्मियों द्वारा समीक्षित होते हैं।',
            })}
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <a href="#assistant" className="flex items-center gap-2 rounded-lg bg-polar px-5 py-2.5 text-sm font-bold shadow-md transition hover:bg-polar/85">
              <Icon name="sparkle" size={16} />
              {t({ en: 'Try the Assistant', hi: 'असिस्टेंट आज़माएँ' })}
            </a>
            <a href="#assistant" className="rounded-lg border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-bold transition hover:bg-white/20">
              {t({ en: 'How it works', hi: 'यह कैसे काम करता है' })}
            </a>
          </div>
        </div>

        {/* Sample Q&A accordion — shows how reviewed answers look */}
        <div className="flex flex-col gap-2 lg:col-span-5">
          <span className="text-[12px] font-bold uppercase tracking-wider text-white/70">
            {t({ en: 'Reviewed sample questions', hi: 'समीक्षित नमूना प्रश्न' })}
          </span>
          {ASSISTANT_FAQS.map((f, i) => (
            <div key={i} className="overflow-hidden rounded-lg border border-white/15 bg-white/10 backdrop-blur">
              <button
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
                className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-[14px] font-semibold hover:bg-white/10 ${lang === 'hi' ? 'lang-hi' : ''}`}
              >
                {f.q[lang]}
                <Icon name="chevronRight" size={16} className={`shrink-0 transition-transform ${open === i ? 'rotate-90' : ''}`} />
              </button>
              {open === i && (
                <p className={`border-t border-white/15 px-4 py-3 text-[13.5px] leading-relaxed text-white/85 ${lang === 'hi' ? 'lang-hi' : ''}`}>
                  {f.a[lang]}
                </p>
              )}
            </div>
          ))}
          <span className="text-[11.5px] text-white/60">
            {t({ en: 'Sample answers shown; live assistant connects to the NCPOR knowledge base.', hi: 'नमूना उत्तर दिखाए गए हैं; लाइव असिस्टेंट एनसीपीओआर ज्ञान आधार से जुड़ता है।' })}
          </span>
        </div>
      </div>
    </section>
  )
}
