import { useState, useRef, useEffect } from 'react'

const contactInfo = [
  {
    icon: '📧',
    label: 'E-mail',
    value: 'info@fittrack.sk',
    href: 'mailto:info@fittrack.sk',
  },
  {
    icon: '📞',
    label: 'Telefón',
    value: '+421 900 123 456',
    href: 'tel:+421900123456',
  },
  {
    icon: '📍',
    label: 'Adresa',
    value: 'Mlynské nivy 16, 821 09 Bratislava',
    href: null,
  },
  {
    icon: '🕐',
    label: 'Pracovné hodiny',
    value: 'Po – Pi: 9:00 – 17:00',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ meno: '', email: '', predmet: '', sprava: '' })
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.fade-in').forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * 150)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="kontakt" className="py-16 lg:py-24 bg-gray-900" aria-label="Kontakt" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="fade-in text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
            Spojte sa s nami
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Máte otázky alebo záujem?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Neváhajte nás kontaktovať. Radi vám zodpovieme všetky otázky o FitTrack
            alebo vás zaradíme na zoznam čakateľov na exkluzívnu zľavu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="fade-in fade-in-delay-1">
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Napíšte nám</h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-3xl" aria-hidden="true">
                    ✅
                  </div>
                  <h4 className="text-xl font-semibold text-white">Správa odoslaná!</h4>
                  <p className="text-gray-400">
                    Ďakujeme za váš záujem. Ozveme sa vám do 24 hodín.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ meno: '', email: '', predmet: '', sprava: '' }) }}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-2 py-1"
                  >
                    Odoslať ďalšiu správu
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="meno" className="block text-sm font-medium text-gray-300 mb-2">
                        Meno a priezvisko <span className="text-blue-400" aria-label="povinné pole">*</span>
                      </label>
                      <input
                        id="meno"
                        name="meno"
                        type="text"
                        value={form.meno}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        placeholder="Ján Novák"
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 hover:border-gray-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        E-mail <span className="text-blue-400" aria-label="povinné pole">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        placeholder="jan@example.sk"
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 hover:border-gray-600"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="predmet" className="block text-sm font-medium text-gray-300 mb-2">
                      Predmet <span className="text-blue-400" aria-label="povinné pole">*</span>
                    </label>
                    <input
                      id="predmet"
                      name="predmet"
                      type="text"
                      value={form.predmet}
                      onChange={handleChange}
                      required
                      placeholder="Záujem o FitTrack"
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 hover:border-gray-600"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="sprava" className="block text-sm font-medium text-gray-300 mb-2">
                      Správa <span className="text-blue-400" aria-label="povinné pole">*</span>
                    </label>
                    <textarea
                      id="sprava"
                      name="sprava"
                      rows={5}
                      value={form.sprava}
                      onChange={handleChange}
                      required
                      placeholder="Napíšte nám o vašom záujme alebo otázke..."
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 hover:border-gray-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-blue-600 text-white font-semibold text-base transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    Odoslať správu
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact info */}
          <div className="fade-in fade-in-delay-2 flex flex-col gap-6">
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Kontaktné informácie</h3>
              <ul className="flex flex-col gap-5" role="list">
                {contactInfo.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-xl flex-shrink-0" aria-hidden="true">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-medium mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-200 hover:text-blue-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-gray-200">{item.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter teaser */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-blue-500/20 p-8">
              <div className="text-3xl mb-3" aria-hidden="true">🎁</div>
              <h4 className="text-lg font-semibold text-white mb-2">Prvý dostane zľavu 20 %</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Zaregistrujte sa ešte dnes a buďte medzi prvými, ktorí sa dozvedia o spustení
                FitTrack. Prvých 500 záujemcov získa exkluzívnu zľavu 20 % na prvý nákup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
