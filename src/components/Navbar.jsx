import { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map(link => link.href.substring(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Top bar */}
      <div className="bg-dark-950 text-white/80 text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
              <FaPhoneAlt className="text-xs" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@ananthaprojects.com" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
              <FaEnvelope className="text-xs" />
              <span>info@ananthaprojects.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/50">Mon - Sat: 9:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home') }} className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-gold-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-xl font-heading font-bold text-dark-900 leading-tight">
                  Anantha
                </h1>
                <p className="text-[10px] uppercase tracking-[3px] text-primary-600 font-medium">
                  Projects
                </p>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href.substring(1)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 hover:-translate-y-0.5"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pb-6 pt-2 bg-white border-t border-gray-100 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="block mt-3 text-center px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-semibold rounded-lg"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </nav>
    </>
  )
      }
