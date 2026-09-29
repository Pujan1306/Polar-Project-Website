import { useMemo, useState } from 'react'
import { NAV_ITEMS } from '../data/content.js'
import { useLang } from '../context/LanguageContext.jsx'
import { Icon } from './Icon.jsx'

export default function Header({ onSearch, search, onSearchChange }) {
  const { lang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const [focused, setFocused] = useState(false)

  const suggestions = useMemo(() => {
    if (!search) return []
    const q = search.toLowerCase()
    return NAV_ITEMS.map((n) => n[lang]).filter((label) => label.toLowerCase().includes(q)).slice(0, 5)
  }, [search, lang])

  return (
    <header className="sticky top-0 z-40 bg-card shadow-sm">
      {/* Masthead */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
        <a href="#home" className="flex items-center gap-3">
          <img src="/favicon.svg" alt="NCPOR emblem" className="h-11 w-11 shrink-0" />
          <span className="flex flex-col leading-tight">
            <span className={`text-[19px] font-bold text-navy ${lang === 'hi' ? 'lang-hi' : ''}`}>
              {lang === 'hi' ? 'राष्ट्रीय ध्रुवीय एवं समुद्री अनुसंधान केन्द्र' : 'National Centre for Polar and Ocean Research'}
            </span>
            <span className="text-[12.5px] text-ink-soft">
              {lang === 'hi' ? 'पृथ्वी विज्ञान मंत्रालय • भारत सरकार' : 'Ministry of Earth Sciences • Government of India'}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="relative w-80">
            <div className="flex items-center gap-2 rounded-lg border border-input bg-ice px-3 py-2">
              <Icon name="search" size={16} className="text-ink-soft" />
              <input
                type="search"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setTimeout(() => setFocused(false), 150)}
                placeholder={lang === 'hi' ? 'रिपोर्ट, डेटासेट, तस्वीरें, वीडियो खोजें…' : 'Search reports, datasets, photos, videos…'}
                aria-label="Search the portal"
                className="w-full bg-transparent text-sm outline-none placeholder:text-ink-soft"
              />
              <kbd className="hidden rounded border border-border bg-card px-1.5 text-[11px] font-semibold text-ink-soft xl:inline">/</kbd>
            </div>
            {focused && suggestions.length > 0 && (
              <ul className="absolute z-50 mt-1 w-full rounded-lg border border-border bg-card py-1 shadow-md">
                {suggestions.map((s) => (
                  <li key={s}>
                    <button
                      type="button"
                      className="flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm hover:bg-accent"
                      onMouseDown={() => { onSearchChange(s); onSearch?.(s) }}
                    >
                      <Icon name="search" size={13} className="text-ink-soft" /> {s}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex items-center gap-2 rounded-full bg-accent px-3 py-1.5">
            <span className="live-dot h-2 w-2 rounded-full bg-flag-green" />
            <span className="whitespace-nowrap text-[12.5px] font-semibold text-accent-foreground">
              {lang === 'hi' ? 'ध्रुवीय विज्ञान, सबके लिए खुला' : 'Polar science, open to everyone'}
            </span>
          </div>
        </div>
        <button
          type="button"
          className="rounded-lg border border-border p-2 lg:hidden"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
      </div>

      {/* Primary navigation */}
      <nav aria-label="Primary" className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <ul className="no-scrollbar hidden items-center overflow-x-auto md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.en}>
                <a
                  href={item.href}
                  className={`block whitespace-nowrap px-4 py-2.5 text-[13.5px] font-semibold hover:bg-navy-2 ${lang === 'hi' ? 'lang-hi' : ''}`}
                >
                  {item[lang]}
                </a>
              </li>
            ))}
            <li className="ml-auto flex items-center gap-1.5 pr-2 text-[12px] font-semibold text-white/85">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-flag-green" />
              {lang === 'hi' ? 'स्टेशन: लाइव (नमूना)' : 'Stations: Live (sample)'}
            </li>
          </ul>
          {menuOpen && (
            <ul className="flex flex-col pb-2 md:hidden">
              {NAV_ITEMS.map((item) => (
                <li key={item.en}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded px-3 py-2 text-sm font-semibold hover:bg-navy-2 ${lang === 'hi' ? 'lang-hi' : ''}`}
                  >
                    {item[lang]}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  )
}
