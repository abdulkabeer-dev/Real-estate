import { FaBuilding, FaHome, FaDraftingCompass, FaHardHat, FaPalette, FaHandshake } from 'react-icons/fa'

const services = [
  {
    icon: FaBuilding,
    title: 'Commercial Construction',
    description: 'State-of-the-art commercial spaces designed for productivity and growth, from office complexes to retail hubs.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FaHome,
    title: 'Residential Projects',
    description: 'Beautifully crafted homes and apartments that combine modern living with comfort and functionality.',
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: FaDraftingCompass,
    title: 'Architectural Design',
    description: 'Innovative architectural solutions that blend aesthetics with practical design principles.',
    color: 'from-gold-500 to-gold-600',
  },
  {
    icon: FaHardHat,
    title: 'Civil Engineering',
    description: 'Robust civil engineering services ensuring structural integrity and long-lasting construction.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: FaPalette,
    title: 'Interior Design',
    description: 'Elegant interior solutions that transform spaces into stunning, functional environments.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: FaHandshake,
    title: 'Project Consulting',
    description: 'Expert consultation services guiding you through every phase of your construction journey.',
    color: 'from-rose-500 to-rose-600',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
            <span className="text-sm font-semibold tracking-wide">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-900 mb-4">
            Comprehensive Construction <span className="text-primary-600">Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            From concept to completion, we offer end-to-end construction services
            tailored to your unique requirements.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-on-scroll card-hover bg-white rounded-2xl p-8 border border-gray-100 group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-heading font-bold text-dark-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group/link"
                >
                  Learn More
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
