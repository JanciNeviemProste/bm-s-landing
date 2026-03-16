import { useEffect, useRef } from 'react'

export default function Hero() {
  const contentRef = useRef(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const timer = setTimeout(() => el.classList.add('visible'), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="uvod"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950"
      aria-label="Úvodná sekcia"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div ref={contentRef} className="fade-in text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" aria-hidden="true" />
              Nová generácia fitness technológie
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Sledujte svoj pokrok.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Dosiahnite svoje ciele.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              FitTrack je inteligentný mobilný fitness tracker, ktorý v reálnom čase monitoruje váš pohyb,
              srdcový tep, kvalitu spánku a kalorický výdaj. Získajte komplexný prehľad o svojom zdraví
              priamo na zápästí.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
              {[
                { value: '50 000+', label: 'aktívnych používateľov' },
                { value: '4.9 ★', label: 'hodnotenie v App Store' },
                { value: '30 dní', label: 'batéria na jedno nabitie' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold text-base transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
              >
                Stiahnuť zadarmo
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <a
                href="#funkcie"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-gray-700 text-gray-300 font-semibold text-base transition-all duration-300 hover:border-gray-500 hover:text-white hover:bg-gray-800/50 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-950"
              >
                Zistiť viac
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="fade-in fade-in-delay-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-blue-600/20 rounded-3xl blur-2xl scale-95" aria-hidden="true" />
              <div className="relative rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl aspect-[4/3]">
                <img
                  src="https://loremflickr.com/800/600/fitness,tracker,smartwatch?random=1"
                  alt="FitTrack inteligentný fitness tracker na zápästí"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Overlay card */}
                <div className="absolute bottom-4 left-4 right-4 bg-gray-900/80 backdrop-blur-md rounded-xl p-4 border border-gray-700/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-xl" aria-hidden="true">
                      💓
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Srdcový tep</div>
                      <div className="text-xl font-bold text-white">72 bpm</div>
                    </div>
                    <div className="ml-auto">
                      <div className="flex gap-0.5 items-end" aria-label="Graf srdcového tepu">
                        {[4, 7, 5, 8, 6, 9, 7].map((h, i) => (
                          <div
                            key={i}
                            className="w-1.5 rounded-sm bg-blue-500"
                            style={{ height: `${h * 3}px` }}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce" aria-hidden="true">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
