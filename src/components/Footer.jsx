import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaArrowUp } from 'react-icons/fa'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

const projects = [
  'Anantha Elite Residences',
  'Anantha Business Park',
  'Anantha Green Villas',
  'Anantha Lake View',
  'Anantha Smart Plots',
  'Anantha Royale Villas',
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-950 text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom px-4 md:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                Ready to Build Your Dream?
              </h3>
              <p className="text-white/80">
                Schedule a free consultation with our experts today.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <FaPhoneAlt />
                Call Now
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home') }} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-gold-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold leading-tight">Anantha</h3>
                <p className="text-[10px] uppercase tracking-[3px] text-gold-400 font-medium">Projects</p>
              </div>
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Building dreams into reality since 2005. Premium construction and
              real estate development you can trust.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/50 hover:bg-primary-600 hover:border-primary-600 hover:text-white transition-all duration-300"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className="text-white/50 hover:text-gold-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-gold-400 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Our Projects</h4>
            <ul className="space-y-3">
              {projects.map((project) => (
                <li key={project}>
                  <a
                    href="#projects"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#projects') }}
                    className="text-white/50 hover:text-gold-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-gold-400 transition-colors" />
                    {project}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                <p className="text-white/50 text-sm">
                  Plot No. 42, Financial District,<br />
                  Gachibowli, Hyderabad - 500032
                </p>
              </div>
              <a href="tel:+919876543210" className="flex gap-3 items-center text-white/50 hover:text-gold-400 transition-colors text-sm">
                <FaPhoneAlt className="text-primary-500 flex-shrink-0" />
                +91 98765 43210
              </a>
              <a href="mailto:info@ananthaprojects.com" className="flex gap-3 items-center text-white/50 hover:text-gold-400 transition-colors text-sm">
                <FaEnvelope className="text-primary-500 flex-shrink-0" />
                info@ananthaprojects.com
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-custom px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} Anantha Projects. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">RERA Info</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center shadow-xl shadow-primary-600/30 hover:bg-primary-700 hover:-translate-y-1 transition-all duration-300 z-40"
      >
        <FaArrowUp />
      </button>
    </footer>
  )
}
