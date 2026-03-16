import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Funkcie', href: '#funkcie' },
  { label: 'Výhody', href: '#vyhody' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/90 backdrop-blur-md border-b border-gray-800 shadow-lg'
          : 'bg-transparent'
      }`}
      aria-label="Hlavná navigácia"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-white font-bold text-xl transition-all duration-300 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 rounded-lg px-1"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white text-sm font-bold">
              FT
            </span>
            <span style={{ fontFamily: "'Playfair Display', serif" }}>FitTrack</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-2 py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold transition-all duration-300 hover:bg-blue-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              Stiahnuť zadarmo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-gray-950/95 backdrop-blur-md border-t border-gray-800 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white text-base font-medium py-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center px-4 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold transition-all duration-300 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
          >
            Stiahnuť zadarmo
          </a>
        </div>
      </div>
    </nav>
  )
}
