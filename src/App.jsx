import { useCallback, useEffect, useState } from 'react'
import { LanguageProvider } from './context/LanguageContext.jsx'
import TopBar from './components/TopBar.jsx'
import Header from './components/Header.jsx'
import TelemetryStrip from './components/TelemetryStrip.jsx'
import Hero from './components/Hero.jsx'
import NewsSection from './components/NewsSection.jsx'
import StationCams from './components/StationCams.jsx'
import PortalsGrid from './components/PortalsGrid.jsx'
import AboutPoles from './components/AboutPoles.jsx'
import Programmes from './components/Programmes.jsx'
import AssistantSpotlight from './components/AssistantSpotlight.jsx'
import MediaCards from './components/MediaCards.jsx'
import SocialSnapshots from './components/SocialSnapshots.jsx'
import AboutUs from './components/AboutUs.jsx'
import Footer from './components/Footer.jsx'

// Ordered smallest → largest: index 0 = A− (14px), 1 = A (default 16px), 2 = A+ (18px)
const TEXT_SCALES = ['text-sm-text', 'text-base-text', 'text-lg-text']
const DEFAULT_SCALE_IDX = 1

export default function App() {
  const [search, setSearch] = useState('')
  const [textIdx, setTextIdx] = useState(() => {
    const saved = localStorage.getItem('ncpor-text')
    const i = TEXT_SCALES.indexOf(saved)
    return i >= 0 ? i : DEFAULT_SCALE_IDX
  })
  const [highContrast, setHighContrast] = useState(() => localStorage.getItem('ncpor-contrast') === '1')

  // Apply text scale + contrast classes to <html>
  useEffect(() => {
    document.documentElement.classList.remove(...TEXT_SCALES)
    document.documentElement.classList.add(TEXT_SCALES[textIdx])
    localStorage.setItem('ncpor-text', TEXT_SCALES[textIdx])
  }, [textIdx])

  useEffect(() => {
    document.documentElement.classList.toggle('high-contrast', highContrast)
    localStorage.setItem('ncpor-contrast', highContrast ? '1' : '0')
  }, [highContrast])

  // "/" focuses search from anywhere
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault()
        document.querySelector('input[type="search"]')?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const handleSearch = useCallback((value) => {
    setSearch(value)
    document.getElementById('library')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <LanguageProvider>
      <TopBar
        onTextScale={(dir) =>
          setTextIdx((i) =>
            dir === 'reset' ? DEFAULT_SCALE_IDX : Math.min(TEXT_SCALES.length - 1, Math.max(0, dir === 'up' ? i + 1 : i - 1))
          )
        }
        highContrast={highContrast}
        onToggleContrast={() => setHighContrast((v) => !v)}
      />
      <Header search={search} onSearchChange={setSearch} onSearch={handleSearch} />

      <main id="main-content" tabIndex={-1} className="outline-none">
        <TelemetryStrip />
        <Hero />
        <StationCams />
        <PortalsGrid />
        <AboutPoles />
        <Programmes />
        <AssistantSpotlight />
        <MediaCards />
        <NewsSection />
        <SocialSnapshots />
        <AboutUs />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
