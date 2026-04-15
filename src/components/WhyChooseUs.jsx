import { FaShieldAlt, FaClock, FaRupeeSign, FaAward, FaUsers, FaLeaf } from 'react-icons/fa'

const reasons = [
  {
    icon: FaShieldAlt,
    title: 'RERA Registered',
    description: 'All our projects are RERA approved ensuring complete legal compliance and buyer protection.',
  },
  {
    icon: FaClock,
    title: 'On-Time Delivery',
    description: 'We pride ourselves on delivering projects on schedule without compromising on quality standards.',
  },
  {
    icon: FaRupeeSign,
    title: 'Transparent Pricing',
    description: 'No hidden costs. What you see is what you pay. Complete transparency in all transactions.',
  },
  {
    icon: FaAward,
    title: 'Quality Materials',
    description: 'We use only premium-grade materials from certified suppliers for lasting construction.',
  },
  {
    icon: FaUsers,
    title: 'Expert Team',
    description: 'Our team of 200+ professionals brings decades of combined experience to every project.',
  },
  {
    icon: FaLeaf,
    title: 'Eco-Friendly',
    description: 'Sustainable construction practices with green building certifications and eco-conscious designs.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
              <span className="text-sm font-semibold tracking-wide">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-900 mb-6 leading-tight">
              What Sets Us <span className="text-primary-600">Apart</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              At Anantha Projects, we don't just build structures — we build trust.
              Here's why thousands of families have chosen us as their building partner.
            </p>

            <div className="space-y-6">
              {reasons.slice(0, 3).map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-600/20">
                    <reason.icon className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-900 mb-1">{reason.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Cards */}
          <div className="animate-on-scroll space-y-6" style={{ transitionDelay: '0.2s' }}>
            {reasons.slice(3).map((reason) => (
              <div
                key={reason.title}
                className="card-hover bg-white rounded-2xl p-6 border border-gray-100 flex gap-5 items-start"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-gold-400/20">
                  <reason.icon className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-900 mb-1.5 text-lg">{reason.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-dark-900 to-dark-800 rounded-2xl p-8 text-center">
              <p className="text-white/60 text-sm mb-2">Customer Satisfaction Rate</p>
              <div className="text-5xl font-heading font-bold text-gold-400 mb-2">98%</div>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
