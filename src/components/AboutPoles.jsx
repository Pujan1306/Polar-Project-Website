import { IMAGES } from '../data/content.js'
import { useLang } from '../context/LanguageContext.jsx'
import { Icon } from './Icon.jsx'

const POLES = [
  {
    tag: { en: 'The Antarctic', hi: 'अंटार्कटिका' },
    title: { en: 'The White Continent', hi: 'श्वेत महाद्वीप' },
    text: {
      en: 'Antarctica is the coldest, windiest and driest continent, covered by an ice sheet nearly 5 km thick in places. It holds about 70% of Earth\u2019s fresh water and drives global ocean circulation and sea level.',
      hi: 'अंटार्कटिका सबसे ठंडा, सबसे तेज़ हवाओं वाला और सबसे शुष्क महाद्वीप है, जहाँ बर्फ की चादर कहीं-कहीं लगभग 5 किमी मोटी है। इसमें पृथ्वी का लगभग 70% ताज़ा जल है और यह वैश्विक समुद्री परिसंचरण तथा समुद्र स्तर को नियंत्रित करता है।',
    },
    facts: [
      { en: 'Ice sheet up to ~4.8 km thick', hi: '~4.8 किमी तक मोटी बर्फ की चादर' },
      { en: 'Penguins, seals and krill thrive here', hi: 'पेंगुइन, सील और क्रिल यहाँ पनपते हैं' },
      { en: 'Governed by the Antarctic Treaty', hi: 'अंटार्कटिका संधि द्वारा शासित' },
    ],
    image: 'heroAntarctica',
  },
  {
    tag: { en: 'The Arctic', hi: 'आर्कटिक' },
    title: { en: 'An Ocean Surrounded by Land', hi: 'थल से घिरा महासागर' },
    text: {
      en: 'Unlike Antarctica, the Arctic is a frozen ocean ringed by continents. Its floating sea ice doubles in size each winter and shrinks each summer, shaping weather patterns far away — including the Indian monsoon.',
      hi: 'अंटार्कटिका के विपरीत, आर्कटिक महाद्वीपों से घिरा एक जमा हुआ महासागर है। इसकी तैरती समुद्री बर्फ हर सर्दियों में दोगुनी और हर गर्मियों में सिकुड़ती है, जिससे भारतीय मानसून सहित दूर-दराज़ के मौसम प्रभावित होते हैं।',
    },
    facts: [
      { en: 'Sea ice expands and retreats every year', hi: 'समुद्री बर्फ हर साल फैलती और सिमटती है' },
      { en: 'Home to polar bears and Arctic terns', hi: 'ध्रुवीय भालू और आर्कटिक टर्न का घर' },
      { en: 'Warming nearly 4× faster than Earth\u2019s average', hi: 'पृथ्वी के औसत से लगभग 4 गुना तेज़ गर्म हो रहा है' },
    ],
    image: 'himadriArctic',
  },
  {
    tag: { en: 'The Third Pole', hi: 'तृतीय ध्रुव' },
    title: { en: 'The Himalaya & the Indian Cryosphere', hi: 'हिमालय एवं भारतीय हिममंडल' },
    text: {
      en: 'The Himalaya holds the largest reserve of ice outside the polar regions, which is why it is called the "Third Pole". Its glaciers feed rivers that sustain more than a billion people across Asia.',
      hi: 'हिमालय में ध्रुवीय क्षेत्रों के बाहर सबसे बड़ा बर्फ भंडार है, इसीलिए इसे "तृतीय ध्रुव" कहा जाता है। इसके ग्लेशियर उन नदियों को जल देते हैं जो एशिया में एक अरब से अधिक लोगों का जीवन चलाती हैं।',
    },
    facts: [
      { en: 'Largest ice reserve outside the poles', hi: 'ध्रुवों के बाहर सबसे बड़ा बर्फ भंडार' },
      { en: 'Feeds the Ganga, Indus and Brahmaputra', hi: 'गंगा, सिंधु और ब्रह्मपुत्र का जल स्रोत' },
      { en: 'Monitored from NCPOR\u2019s ice core archive', hi: 'एनसीपीओआर के आइस कोर संग्रह से निगरानी' },
    ],
    image: 'himalaya',
  },
]

const WHY_MATTERS = [
  {
    icon: 'thermometer',
    title: { en: 'Climate Engine', hi: 'जलवायु इंजन' },
    text: { en: 'The poles set the temperature differences that drive India\u2019s monsoon winds.', hi: 'ध्रुव वे तापमान अंतर बनाते हैं जो भारत की मानसून हवाओं को संचालित करते हैं।' },
  },
  {
    icon: 'wave',
    title: { en: 'Sea Level', hi: 'समुद्र स्तर' },
    text: { en: 'Melting polar ice directly affects India\u2019s 7,500 km coastline.', hi: 'पिघलती ध्रुवीय बर्फ भारत के 7,500 किमी तट को सीधे प्रभावित करती है।' },
  },
  {
    icon: 'snowflake',
    title: { en: 'Fresh Water', hi: 'ताज़ा जल' },
    text: { en: 'Himalayan and polar ice store the water billions of people depend on.', hi: 'हिमालयन और ध्रुवीय बर्फ उस जल का भंडार है जिस पर अरबों लोग निर्भर हैं।' },
  },
  {
    icon: 'globe',
    title: { en: 'Ocean Conveyor', hi: 'महासागर परिसंचरण' },
    text: { en: 'Cold polar waters circulate the world, distributing heat and nutrients.', hi: 'ठंडा ध्रुवीय जल विश्व भर में परिसंचरित होकर ऊष्मा और पोषक तत्व वितरित करता है।' },
  },
]

export default function AboutPoles() {
  const { lang } = useLang()
  const t = (pair) => (typeof pair === 'object' ? pair[lang] : pair)

  return (
    <section id="about-poles" aria-labelledby="about-poles-heading" className="bg-card py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-7 max-w-3xl">
          <span className="text-[12.5px] font-bold uppercase tracking-widest text-primary">
            {t({ en: 'Education', hi: 'शिक्षा' })}
          </span>
          <h2 id="about-poles-heading" className={`text-3xl font-bold tracking-tight text-navy dark:text-chart-1 ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {t({ en: 'About the Poles', hi: 'ध्रुवों के बारे में' })}
          </h2>
          <p className={`mt-1 text-[15px] leading-relaxed text-ink-soft ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {t({
              en: 'The polar regions may seem far away, but they shape India\u2019s monsoon, coastline and rivers. Start here to understand the Antarctic, the Arctic and the Himalaya.',
              hi: 'ध्रुवीय क्षेत्र दूर दिखते हैं, पर ये भारत के मानसून, तट और नदियों को आकार देते हैं। अंटार्कटिका, आर्कटिक और हिमालय को समझने के लिए यहाँ से शुरुआत करें।',
            })}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {POLES.map((p) => (
            <article key={p.tag.en} className="flex flex-col overflow-hidden rounded-xl border border-border bg-ice shadow-sm transition hover:shadow-md">
              <div className="relative h-44 overflow-hidden">
                <img src={IMAGES[p.image].src} alt={IMAGES[p.image].alt} className="h-full w-full object-cover" loading="lazy" />
                <span className={`absolute left-3 top-3 rounded bg-navy px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white ${lang === 'hi' ? 'lang-hi' : ''}`}>
                  {t(p.tag)}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2.5 p-4">
                <h3 className={`text-[17px] font-bold text-navy dark:text-chart-1 ${lang === 'hi' ? 'lang-hi' : ''}`}>
                  {t(p.title)}
                </h3>
                <p className={`text-[13.5px] leading-relaxed text-ink-soft ${lang === 'hi' ? 'lang-hi' : ''}`}>
                  {t(p.text)}
                </p>
                <ul className="mt-auto flex flex-col gap-1.5 border-t border-border pt-3">
                  {p.facts.map((f) => (
                    <li key={f.en} className={`flex items-start gap-1.5 text-[12.5px] text-ink-soft ${lang === 'hi' ? 'lang-hi' : ''}`}>
                      <Icon name="chevronRight" size={13} className="mt-0.5 shrink-0 text-primary" />
                      {t(f)}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Why the poles matter to India */}
        <div className="mt-8 rounded-xl border border-border bg-ice p-5">
          <h3 className={`mb-4 flex items-center gap-2 text-[15px] font-bold text-navy dark:text-chart-1 ${lang === 'hi' ? 'lang-hi' : ''}`}>
            <Icon name="snowflake" size={17} className="text-primary" />
            {t({ en: 'Why the Poles Matter to India', hi: 'भारत के लिए ध्रुव क्यों महत्वपूर्ण हैं' })}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_MATTERS.map((w) => (
              <div key={w.title.en} className="flex flex-col gap-1.5">
                <span className="flex items-center gap-2 text-[13.5px] font-bold text-ink">
                  <Icon name={w.icon} size={15} className="shrink-0 text-primary" />
                  <span className={lang === 'hi' ? 'lang-hi' : ''}>{t(w.title)}</span>
                </span>
                <p className={`text-[12.5px] leading-relaxed text-ink-soft ${lang === 'hi' ? 'lang-hi' : ''}`}>
                  {t(w.text)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
