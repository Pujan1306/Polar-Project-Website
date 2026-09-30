import { useLang } from '../context/LanguageContext.jsx'
import { Icon } from './Icon.jsx'

export default function TopBar({ onTextScale, highContrast, onToggleContrast }) {
  const { lang, setLang } = useLang()

  return (
    <div className="bg-ice border-b border-border text-ink-soft">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-1.5 text-[13px] font-medium lg:px-6">
        <a
          href="#main-content"
          className="skip-link"
          onClick={() => document.getElementById('main-content')?.focus()}
        >
          Skip to main content
        </a>

        <div className="flex min-w-0 flex-1 items-center gap-2">
          <Icon name="gov" size={16} className="shrink-0 text-navy" />
          <span className="truncate font-semibold">
            {lang === 'hi' ? 'भारत सरकार | मंत्रालय: पृथ्वी विज्ञान' : 'Government of India | Ministry of Earth Sciences'}
          </span>
          <span className="hidden text-border md:inline">|</span>
          <span className="hidden truncate md:inline">
            {lang === 'hi' ? 'राष्ट्रीय ध्रुवीय एवं समुद्री अनुसंधान केन्द्र' : 'National Centre for Polar and Ocean Research'}
          </span>
        </div>

        <nav aria-label="Utility links" className="hidden items-center gap-3 xl:flex">
          {[
            { label: { en: 'Station Cams', hi: 'स्टेशन कैम' }, href: '#cams' },
            { label: { en: 'Expedition Schedule', hi: 'अभियान कार्यक्रम' }, href: '#stations' },
            { label: { en: 'Polar Data Centre', hi: 'पोलर डेटा केंद्र' }, href: '#library' },
            { label: { en: 'Contact', hi: 'संपर्क' }, href: '#about' },
          ].map((l) => (
            <a key={l.label.en} href={l.href} className={`transition hover:text-navy ${lang === 'hi' ? 'lang-hi' : ''}`}>
              {l.label[lang]}
            </a>
          ))}
          <span className="h-4 w-px bg-border" aria-hidden="true" />
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button type="button" onClick={() => onTextScale('down')} aria-label="Decrease text size" title="Decrease text size (A−)"
            className="rounded border border-border bg-card px-1.5 py-0.5 font-semibold hover:bg-accent">
            A−
          </button>
          <button type="button" onClick={() => onTextScale('reset')} aria-label="Reset text size" title="Reset text size (A)"
            className="rounded border border-border bg-card px-1.5 py-0.5 font-semibold hover:bg-accent">
            A
          </button>
          <button type="button" onClick={() => onTextScale('up')} aria-label="Increase text size" title="Increase text size (A+)"
            className="rounded border border-border bg-card px-1.5 py-0.5 font-semibold hover:bg-accent">
            A+
          </button>
          <span className="mx-1 h-4 w-px bg-border" aria-hidden="true" />
          <button type="button" onClick={onToggleContrast} aria-pressed={highContrast} title="Toggle high contrast"
            className="flex items-center gap-1 rounded border border-border bg-card px-2 py-0.5 font-semibold hover:bg-accent">
            <Icon name="contrast" size={14} />
            <span className="hidden sm:inline">Contrast</span>
          </button>
          <button type="button" onClick={() => setLang(lang === 'en' ? 'hi' : 'en')} title="Switch language"
            className="w-[72px] rounded border border-border bg-card px-2 py-0.5 text-center font-semibold hover:bg-accent">
            {lang === 'en' ? 'हिंदी' : 'English'}
          </button>
        </div>
      </div>
    </div>
  )
}
