import { useLang } from '../context/LanguageContext.jsx'
import { Icon } from './Icon.jsx'

const CAREER_CARDS = [
  { icon: 'school', title: { en: 'Internships & Fellowships', hi: 'इंटर्नशिप एवं फेलोशिप' }, sub: { en: 'For students and scholars', hi: 'छात्रों और विद्वानों के लिए' } },
  { icon: 'calendar', title: { en: 'Expedition Schedule', hi: 'अभियान कार्यक्रम' }, sub: { en: 'Ships, flights & voyages', hi: 'जहाज़, उड़ानें और यात्राएँ' } },
  { icon: 'database', title: { en: 'Polar Data Centre', hi: 'पोलर डेटा केंद्र' }, sub: { en: 'Open science datasets', hi: 'खुले विज्ञान डेटासेट' } },
  { icon: 'globe', title: { en: 'Antarctic Treaty', hi: 'अंटार्कटिका संधि' }, sub: { en: 'Treaty & policy documents', hi: 'संधि एवं नीति दस्तावेज़' } },
]

const STATS = [
  { value: '1981', label: { en: 'First Indian Antarctic expedition', hi: 'पहला भारतीय अंटार्कटिक अभियान' } },
  { value: '1998', label: { en: 'NCPOR established in Goa', hi: 'एनसीपीओआर की स्थापना, गोवा' } },
  { value: '3', label: { en: 'Permanent research stations', hi: 'स्थायी अनुसंधान स्टेशन' } },
  { value: '40+', label: { en: 'Expeditions to Antarctica', hi: 'अंटार्कटिका अभियान' } },
]

const MISSIONS = [
  {
    icon: 'ship',
    text: { en: 'Lead India\u2019s research in Antarctica, the Arctic and the Southern Ocean', hi: 'अंटार्कटिका, आर्कटिक और दक्षिणी महासागर में भारत के अनुसंधान का नेतृत्व करना' },
  },
  {
    icon: 'mountain',
    text: { en: 'Study Himalayan glaciers and the Indian cryosphere', hi: 'हिमालयन ग्लेशियरों और भारतीय हिममंडल का अध्ययन करना' },
  },
  {
    icon: 'database',
    text: { en: 'Maintain the national ice core archive and open polar datasets', hi: 'राष्ट्रीय आइस कोर संग्रह और खुले ध्रुवीय डेटासेट का रखरखाव करना' },
  },
  {
    icon: 'school',
    text: { en: 'Take polar science to schools, colleges and every citizen', hi: 'ध्रुवीय विज्ञान को विद्यालयों, कॉलेजों और हर नागरिक तक पहुँचाना' },
  },
]

export default function AboutUs() {
  const { lang } = useLang()
  const t = (pair) => (typeof pair === 'object' ? pair[lang] : pair)

  return (
    <section id="about" aria-labelledby="about-heading" className="bg-ice py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-start gap-8 lg:grid-cols-12">
          {/* Text column */}
          <div className="flex flex-col gap-4 lg:col-span-7">
            <div>
              <span className="text-[12.5px] font-bold uppercase tracking-widest text-primary">
                {t({ en: 'Who We Are', hi: 'हम कौन हैं' })}
              </span>
              <h2 id="about-heading" className={`text-3xl font-bold tracking-tight text-navy dark:text-chart-1 ${lang === 'hi' ? 'lang-hi' : ''}`}>
                {t({ en: 'About Us', hi: 'हमारे बारे में' })}
              </h2>
            </div>
            <p className={`text-[15px] leading-relaxed text-ink-soft ${lang === 'hi' ? 'lang-hi' : ''}`}>
              {t({
                en: 'The National Centre for Polar and Ocean Research (NCPOR), formerly the National Centre for Antarctic and Ocean Research, is India\u2019s nodal agency for polar and Southern Ocean science. Established in 1998 and headquartered at Vasco da Gama, Goa, we work under the Ministry of Earth Sciences, Government of India.',
                hi: 'राष्ट्रीय ध्रुवीय एवं समुद्री अनुसंधान केन्द्र (एनसीपीओआर), पूर्व नाम राष्ट्रीय अंटार्कटिक एवं समुद्री अनुसंधान केन्द्र, ध्रुवीय एवं दक्षिणी महासागर विज्ञान में भारत की नोडल एजेंसी है। 1998 में स्थापित और वास्को द गामा, गोवा में मुख्यालय, हम पृथ्वी विज्ञान मंत्रालय, भारत सरकार के अंतर्गत कार्य करते हैं।',
              })}
            </p>
            <p className={`text-[15px] leading-relaxed text-ink-soft ${lang === 'hi' ? 'lang-hi' : ''}`}>
              {t({
                en: 'From the first Indian Antarctic expedition in 1981 to today\u2019s year-round presence at Maitri, Bharati and Himadri, NCPOR coordinates logistics, science and international cooperation across the poles — and shares what we learn with everyone.',
                hi: '1981 के पहले भारतीय अंटार्कटिक अभियान से आज मैत्री, भारती और हिमाद्री में चौबीसों घंटे की उपस्थिति तक, एनसीपीओआर ध्रुवों पर रसद, विज्ञान और अंतर्राष्ट्रीय सहयोग का समन्वय करता है — और जो सीखते हैं उसे सबके साथ साझा करता है।',
              })}
            </p>

            <ul className="flex flex-col gap-2.5 pt-1">
              {MISSIONS.map((m) => (
                <li key={m.icon} className={`flex items-start gap-2.5 text-[14px] text-ink ${lang === 'hi' ? 'lang-hi' : ''}`}>
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon name={m.icon} size={15} />
                  </span>
                  {t(m.text)}
                </li>
              ))}
            </ul>
          </div>

          {/* Career panel */}
          <div className="career-panel relative overflow-hidden rounded-xl border border-border bg-navy p-5 text-white shadow-md lg:col-span-5">
            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-primary/30 blur-2xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-polar/30 blur-2xl" aria-hidden="true" />
            <div className="relative flex flex-col gap-1">
              <span className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-saffron">
                <Icon name="sparkle" size={14} />
                {t({ en: 'Build Your Career With Us', hi: 'हमारे साथ अपना करियर बनाएँ' })}
              </span>
              <p className={`text-[14px] leading-relaxed text-white/85 ${lang === 'hi' ? 'lang-hi' : ''}`}>
                {t({
                  en: 'From student internships to polar expeditions — start your journey with NCPOR.',
                  hi: 'छात्र इंटर्नशिप से ध्रुवीय अभियान तक — एनसीपीओआर के साथ अपनी यात्रा शुरू करें।',
                })}
              </p>
              <div className="mt-2 grid gap-2.5 sm:grid-cols-2">
                {CAREER_CARDS.map((c, i) => (
                  <a
                    key={c.icon}
                    href="#about"
                    className="career-card group flex items-center gap-3 rounded-lg border border-white/15 bg-white/10 px-3.5 py-3 backdrop-blur transition hover:border-saffron/60 hover:bg-white/20"
                    style={{ animationDelay: `${i * 90}ms` }}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15 text-saffron transition group-hover:scale-110 group-hover:bg-saffron group-hover:text-navy">
                      <Icon name={c.icon} size={18} />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className={`text-[13.5px] font-bold leading-tight ${lang === 'hi' ? 'lang-hi' : ''}`}>{t(c.title)}</span>
                      <span className={`text-[11.5px] leading-snug text-white/70 ${lang === 'hi' ? 'lang-hi' : ''}`}>{t(c.sub)}</span>
                    </span>
                    <Icon name="arrowRight" size={15} className="ml-auto shrink-0 text-white/50 transition group-hover:translate-x-1 group-hover:text-saffron" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.value} className="flex flex-col items-center gap-1 rounded-xl border border-border bg-card px-4 py-5 text-center shadow-sm">
              <span className="text-3xl font-extrabold tracking-tight text-navy dark:text-chart-1">{s.value}</span>
              <span className={`text-[12.5px] leading-snug text-ink-soft ${lang === 'hi' ? 'lang-hi' : ''}`}>
                {t(s.label)}
              </span>
            </div>
          ))}
        </div>

        {/* Contact / address strip */}
        <div className="mt-6 flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-center">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-white">
            <Icon name="mail" size={18} />
          </span>
          <div>
            <span className={`block text-[14px] font-bold text-navy dark:text-chart-1 ${lang === 'hi' ? 'lang-hi' : ''}`}>
              {t({ en: 'Contact Us', hi: 'संपर्क करें' })}
            </span>
            <p className={`text-[13px] leading-relaxed text-ink-soft ${lang === 'hi' ? 'lang-hi' : ''}`}>
              {t({
                en: 'National Centre for Polar and Ocean Research, Ministry of Earth Sciences, Headland Sada, Vasco da Gama, Goa 403804, India.',
                hi: 'राष्ट्रीय ध्रुवीय एवं समुद्री अनुसंधान केन्द्र, पृथ्वी विज्ञान मंत्रालय, हेडलैंड सदा, वास्को द गामा, गोवा 403804, भारत।',
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
