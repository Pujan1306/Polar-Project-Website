import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const LangContext = createContext({ lang: 'en', setLang: () => {}, t: (x) => x })

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('ncpor-lang') || 'en')

  useEffect(() => {
    localStorage.setItem('ncpor-lang', lang)
    document.documentElement.lang = lang === 'hi' ? 'hi' : 'en'
  }, [lang])

  const value = useMemo(() => ({ lang, setLang }), [lang])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}

// Pick a string from an { en, hi } pair based on current language
export function useT() {
  const { lang } = useLang()
  return (pair) => (pair && typeof pair === 'object' ? (pair[lang] ?? pair.en) : pair)
}
