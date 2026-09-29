import { IMAGES } from '../data/content.js'
import { useLang } from '../context/LanguageContext.jsx'
import { Icon } from './Icon.jsx'

export default function Hero() {
  const { lang, setLang } = useLang()
  const t = (pair) => (typeof pair === 'object' ? pair[lang] : pair)

  return (
    <section id="home" aria-label="Introduction" className="relative overflow-hidden bg-navy text-white">
      <img
        src={IMAGES.heroAntarctica.src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-14 pt-12 lg:grid-cols-12 lg:px-6 lg:pb-20 lg:pt-16">
        <div className="flex flex-col items-start gap-5 lg:col-span-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[12px] font-bold uppercase tracking-wider backdrop-blur">
              {t({ en: 'Indian Polar Programme', hi: 'भारतीय ध्रुवीय कार्यक्रम' })}
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-polar/80 px-3 py-1 text-[12px] font-bold uppercase tracking-wider">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-white" />
              {t({ en: 'Expedition Season 2026–27', hi: 'अभियान सीज़न 2026–27' })}
            </span>
          </div>

          <h1 className={`max-w-3xl text-4xl font-extrabold leading-tight tracking-tight lg:text-5xl ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {t({ en: 'India at the Poles: Explore, Learn, Discover', hi: 'ध्रुवों पर भारत: जानें, सीखें, खोजें' })}
          </h1>

          <p className={`max-w-2xl text-lg leading-relaxed text-white/85 ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {t({
              en: 'One home for India\u2019s polar science. Explore expedition reports, datasets, photographs and videos from Antarctica, the Arctic and the Himalaya, explained clearly for students, researchers and everyone curious.',
              hi: 'भारत के ध्रुवीय विज्ञान का एक घर। अंटार्कटिका, आर्कटिक और हिमालय की अभियान रिपोर्ट, डेटासेट, तस्वीरें और वीडियो देखें — छात्रों, शोधकर्ताओं और जिज्ञासु सभी के लिए आसान भाषा में।',
            })}
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <a href="#library" className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold shadow-md transition hover:bg-navy-2">
              <Icon name="library" size={17} />
              {t({ en: 'Browse the Knowledge Library', hi: 'ज्ञान पुस्तकालय देखें' })}
            </a>
            <a href="#assistant" className="flex items-center gap-2 rounded-lg border border-white/30 bg-white/15 px-5 py-2.5 text-sm font-bold backdrop-blur transition hover:bg-white/25">
              <Icon name="sparkle" size={17} />
              {t({ en: 'Ask the Polar Assistant', hi: 'पोलर असिस्टेंट से पूछें' })}
            </a>
            <a href="#cams" className="flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-bold backdrop-blur transition hover:bg-white/25">
              <Icon name="videocam" size={17} />
              {t({ en: 'Watch Station Cams', hi: 'स्टेशन कैम देखें' })}
            </a>
          </div>
        </div>

        {/* Photo of the Day card */}
        <aside className="flex flex-col gap-2 self-end rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-md lg:col-span-4">
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-bold uppercase tracking-wider text-white/90">
              {t({ en: 'Image of the Day', hi: 'आज की तस्वीर' })}
            </span>
            <span className="text-[11px] text-white/60">{IMAGES.photoOfDay.credit}</span>
          </div>
          <img
            src={IMAGES.photoOfDay.src}
            alt={IMAGES.photoOfDay.alt}
            className="h-44 w-full rounded-lg object-cover"
            loading="lazy"
          />
          <p className="text-[15px] font-semibold leading-snug">
            {t({ en: 'Low sun over the ice near Bharati Station', hi: 'भारती स्टेशन के पास बर्फ पर धूप कम ऊँचाई पर' })}
          </p>
          <p className="text-[12.5px] leading-relaxed text-white/75">
            {t({ en: 'Long shadows across the sea ice show how the polar light changes through the season.', hi: 'समुद्री बर्फ पर लंबी छाया दिखाती हैं कि मौसम के साथ ध्रुवीय रोशनी कैसे बदलती है।' })}
          </p>
          <p className="text-[11.5px] text-white/60">{t({ en: 'Photo: Expedition team, NCPOR', hi: 'फ़ोटो: अभियान दल, एनसीपीओआर' })}</p>
        </aside>
      </div>
    </section>
  )
}
