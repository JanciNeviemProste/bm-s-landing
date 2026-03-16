import { useEffect, useRef } from 'react'

const features = [
  {
    icon: '🗺️',
    title: 'GPS sledovanie trás',
    description:
      'Presné GPS sledovanie každého behu, jazdy na bicykli alebo turistiky. FitTrack zaznamenáva vašu trasu v reálnom čase s presnosťou na meter, meria vzdialenosť, tempo a výškový profil. Po tréningu si môžete trasu zobraziť na interaktívnej mape a porovnať výkony z rôznych dní.',
    stat: '< 1 m presnosť',
  },
  {
    icon: '💓',
    title: 'Monitoring srdcového tepu',
    description:
      'Nepretržité meranie srdcového tepu pomocou pokročilého optického senzora priamo na zápästí. FitTrack automaticky rozpoznáva zóny intenzity cvičenia a upozorní vás, keď prekročíte odporúčanú tepovú frekvenciu. Detailné grafy vám pomôžu optimalizovať tréning pre maximálny výkon.',
    stat: '24/7 monitorovanie',
  },
  {
    icon: '🌙',
    title: 'Analýza kvality spánku',
    description:
      'Rozumejte svojmu spánku ako nikdy predtým. FitTrack analyzuje jednotlivé fázy spánku – ľahký, hlboký a REM – a každé ráno vám poskytne skóre kvality odpočinku. Na základe vašich dát ponúka personalizované odporúčania na zlepšenie spánkových návykov a celkovej regenerácie.',
    stat: 'REM + hlboký spánok',
  },
  {
    icon: '🔥',
    title: 'Kalorický výdaj',
    description:
      'Presný výpočet spálených kalórií počas všetkých aktivít aj počas kľudu. Algoritmus FitTracku zohľadňuje vaše fyzické parametre, srdcový tep a typ aktivity, aby poskytol čo najpresnejšie hodnoty. Synchronizujte data s obľúbenou diétnou aplikáciou pre kompletný prehľad energetickej bilancie.',
    stat: '±5% presnosť',
  },
  {
    icon: '🏆',
    title: 'Výzvy a motivácia',
    description:
      'Zostante motivovaní vďaka denným, týždenným a mesačným výzvam. Súťažte s priateľmi v rebríčkoch aktivity, získavajte odznaky za splnené ciele a sledujte svoj progres pomocou prehľadných štatistík. FitTrack vás každý deň inšpiruje k tomu, aby ste sa hýbali viac a cítili sa lepšie.',
    stat: '200+ výziev',
  },
  {
    icon: '🔋',
    title: 'Výdrž batérie 30 dní',
    description:
      'Zabudnite na každodenné nabíjanie. Vďaka energeticky efektívnym senzorom a inteligentnému operačnému systému vydrží FitTrack v bežnom režime až 30 dní bez nabitia. V režime GPS sledovania trás ponúka výdrž až 14 hodín, čo pokryje aj tú najdlhšiu horskú túru.',
    stat: '30 dní / 14 h GPS',
  },
]

function FeatureCard({ feature, delay }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => card.classList.add('visible'), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(card)
    return () => observer.disconnect()
  }, [delay])

  return (
    <article
      ref={cardRef}
      className="fade-in group p-8 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/40 hover:bg-gray-800/80 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="w-14 h-14 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
      <p className="text-gray-400 text-base leading-relaxed mb-4">{feature.description}</p>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        {feature.stat}
      </div>
    </article>
  )
}

export default function Features() {
  const headingRef = useRef(null)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="funkcie" className="py-16 lg:py-24 bg-gray-950" aria-label="Funkcie produktu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div ref={headingRef} className="fade-in text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
            Prečo FitTrack?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Všetko, čo potrebujete
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              pre zdravší životný štýl
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            FitTrack kombinuje pokročilé senzory, umelú inteligenciu a intuitívny dizajn do jediného
            zariadenia, ktoré vás každý deň motivuje žiť aktívnejšie a zdravšie.
          </p>
        </div>

        {/* Features grid */}
        <div id="vyhody" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-blue-500/20 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Pripravený začať svoju fitness cestu?
          </h3>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Prihláste sa na odber noviniek a ako prví sa dozviete o spustení FitTrack.
            Prví záujemcovia získajú 20 % zľavu.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold text-base transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Chcem zľavu 20 %
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
