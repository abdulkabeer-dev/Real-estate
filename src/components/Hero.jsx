import { FaPlay, FaChevronDown } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/construction-luxury-tower/1920/1080.jpg"
          alt="Construction"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-32 md:py-0 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-medium tracking-wide">
              Trusted Since 2005
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6"
          >
            Building Your{' '}
            <span className="text-gradient bg-gradient-to-r from-gold-400 to-primary-400 bg-clip-text text-transparent">
              Dreams
            </span>
            <br />
            Into Reality
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-10 max-w-xl"
          >
            Premium construction and real estate development company delivering
            exceptional residential and commercial projects with uncompromising quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); handleScroll('#projects') }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-xl shadow-primary-600/30 hover:shadow-primary-600/50 hover:-translate-y-1"
            >
              Explore Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <button
              onClick={() => {
                const modal = document.getElementById('video-modal')
                if (modal) modal.classList.remove('hidden')
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <FaPlay className="text-xs ml-0.5" />
              </span>
              Watch Video
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => handleScroll('#about')}
          className="text-white/50 hover:text-white/80 transition-colors"
        >
          <FaChevronDown className="text-xl" />
        </button>
      </div>

      {/* Video Modal */}
      <div
        id="video-modal"
        className="hidden fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.classList.add('hidden')
        }}
      >
        <div className="bg-dark-900 rounded-2xl p-6 max-w-3xl w-full relative">
          <button
            onClick={() => document.getElementById('video-modal').classList.add('hidden')}
            className="absolute -top-4 -right-4 w-10 h-10 bg-primary-600 rounded-full text-white flex items-center justify-center hover:bg-primary-700 transition-colors"
          >
            ✕
          </button>
          <div className="aspect-video bg-dark-800 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <FaPlay className="text-4xl text-gold-400 mx-auto mb-3" />
              <p className="text-white/60 text-sm">Company Overview Video</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
    }
