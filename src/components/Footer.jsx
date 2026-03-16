const footerLinks = [
  {
    heading: 'Produkt',
    links: [
      { label: 'Funkcie', href: '#funkcie' },
      { label: 'Výhody', href: '#vyhody' },
      { label: 'Ceny', href: '#kontakt' },
      { label: 'Stiahnuť', href: '#kontakt' },
    ],
  },
  {
    heading: 'Spoločnosť',
    links: [
      { label: 'O nás', href: '#' },
      { label: 'Kariéra', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Tlač', href: '#' },
    ],
  },
  {
    heading: 'Podpora',
    links: [
      { label: 'Kontakt', href: '#kontakt' },
      { label: 'Pomoc', href: '#' },
      { label: 'Záruka', href: '#' },
      { label: 'Doprava', href: '#' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 border-t border-gray-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-2 text-white font-bold text-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white text-sm font-bold" aria-hidden="true">
                FT
              </span>
              <span style={{ fontFamily: "'Playfair Display', serif" }}>FitTrack</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Inteligentný mobilný fitness tracker pre moderný životný štýl. Sledujte zdravie, dosahujte ciele.
            </p>
            {/* Social icons */}
            <div className="flex gap-3" aria-label="Sociálne siete">
              {[
                { label: 'Instagram', icon: '📸' },
                { label: 'Facebook', icon: '👤' },
                { label: 'Twitter / X', icon: '🐦' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-base transition-all duration-300 hover:bg-gray-700 hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm text-center sm:text-left">
            © {year} FitTrack s.r.o. Všetky práva vyhradené.
          </p>
          <div className="flex gap-6">
            {[
              { label: 'Ochrana súkromia', href: '#' },
              { label: 'Podmienky použitia', href: '#' },
              { label: 'Cookies', href: '#' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-gray-400 text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
