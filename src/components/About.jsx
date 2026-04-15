import { FaCheckCircle } from 'react-icons/fa'

const features = [
  '18+ Years of Industry Experience',
  '150+ Projects Successfully Delivered',
  'RERA Approved & Certified',
  'Timely Project Delivery',
  'Transparent Pricing Policy',
  'Dedicated After-Sales Support',
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white bg-pattern">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="animate-on-scroll relative">
            <div className="relative">
              <img
                src="https://picsum.photos/seed/modern-building-arch/700/500.jpg"
                alt="About Anantha Projects"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary-600 to-primary-700 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="text-4xl font-heading font-bold">18+</div>
                <div className="text-sm text-white/80 mt-1">Years of<br />Excellence</div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold-400/30 rounded-2xl hidden md:block" />
          </div>

          {/* Content */}
          <div className="animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
              <span className="text-sm font-semibold tracking-wide">About Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-900 mb-6 leading-tight">
              We Build With{' '}
              <span className="text-primary-600">Passion</span> &{' '}
              <span className="text-gold-500">Precision</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 2005, Anantha Projects has grown to become one of the most
              trusted names in the construction and real estate industry. Our journey
              began with a simple vision — to transform landscapes and create spaces
              that inspire living.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              With a dedicated team of architects, engineers, and project managers,
              we deliver projects that exceed expectations in quality, design, and
              value. Every project we undertake reflects our commitment to excellence
              and our deep understanding of what makes a space truly special.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <FaCheckCircle className="text-gold-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-dark-900 text-white font-semibold rounded-lg hover:bg-dark-800 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            >
              Learn More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
