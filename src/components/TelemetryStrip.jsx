import { TELEMETRY } from '../data/content.js'
import { useLang } from '../context/LanguageContext.jsx'
import { Icon } from './Icon.jsx'

export default function TelemetryStrip() {
  const { lang } = useLang()
  return (
    <section aria-label="Live field telemetry" className="border-b border-border bg-ice">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2.5 md:flex-row md:items-center md:justify-between lg:px-6">
        <div className="flex items-center gap-2">
          <span className="live-dot inline-block h-2.5 w-2.5 rounded-full bg-polar" />
          <span className="text-[12.5px] font-bold uppercase tracking-wider text-navy">
            {lang === 'hi' ? 'लाइव फ़ील्ड टेलीमेट्री' : 'Live Field Telemetry'}
          </span>
          <span className="hidden text-border sm:inline">•</span>
          <span className="hidden text-[12px] text-ink-soft sm:inline">
            {lang === 'hi' ? 'एनसीपीओआर स्टेशन नेटवर्क (नमूना डेटा)' : 'NCPOR Station Network (sample data)'}
          </span>
        </div>
        <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-1 md:justify-end md:pb-0">
          {TELEMETRY.map((t) => (
            <div
              key={t.station}
              className={`flex shrink-0 items-center gap-2 rounded px-3 py-1 shadow-sm ${
                t.kind === 'vessel' ? 'bg-primary text-primary-foreground' : 'bg-card'
              }`}
            >
              <Icon name={t.kind === 'vessel' ? 'ship' : 'thermometer'} size={15} />
              <span className="text-[12.5px] font-semibold">{t.station}:</span>
              {t.kind === 'vessel' ? (
                <span className="text-[12.5px] font-bold">{t.note}</span>
              ) : (
                <>
                  <span className="text-[12.5px] font-bold text-navy dark:text-chart-1">{t.temp}</span>
                  <span className="text-[12px] text-ink-soft">{t.wind}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
