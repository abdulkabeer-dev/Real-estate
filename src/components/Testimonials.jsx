import { useState } from 'react'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Homeowner, Anantha Elite',
    image: 'https://picsum.photos/seed/indian-man-portrait-1/100/100.jpg',
    text: 'Anantha Projects delivered our dream home exactly as promised. The quality of construction and attention to detail is outstanding. The team was always responsive and transparent throughout the process.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Investor, Anantha Business Park',
    image: 'https://picsum.photos/seed/indian-woman-portrait-2/100/100.jpg',
    text: 'As a real estate investor, I\'ve worked with many builders. Anantha Projects stands out for their professionalism and commitment to timelines. My commercial space has excellent rental returns.',
    rating: 5,
  },
  {
    name: 'Srinivas Reddy',
    role: 'Villa Owner, Anantha Green Villas',
    image: 'https://picsum.photos/seed/indian-man-portrait-3/100/100.jpg',
    text: 'The villa we purchased exceeded all our expectations. The landscaping, interior fittings, and overall build quality are truly premium. Highly recommend Anantha Projects to anyone looking for quality construction.',
    rating: 5,
  },
  {
    name: 'Meena Patel',
    role: 'Apartment Owner, Anantha Lake View',
    image: 'https://picsum.photos/seed/indian-woman-portrait-4/100/100.jpg',
    text: 'From booking to handover, the experience was seamless. The amenities, location, and construction quality are all top-notch. We feel proud to be Anantha homeowners.',
    rating: 4,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section id="testimonials" className="section-padding bg-white bg-pattern">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
            <span className="text-sm font-semibold tracking-wide">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-900 mb-4">
            What Our <span className="text-primary-600">Clients</span> Say
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it — hear from the families who trust us.
          </p>
        </div>

        {/* Testimonial card */}
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <div className="relative bg-gradient-to-br from-dark-900 to-dark-800 rounded-3xl p-8 md:p-12 shadow-2xl">
            <FaQuoteLeft className="text-primary-600/30 text-6xl absolute top-6 left-8" />

            <div className="relative z-10">
              <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold-400"
                  />
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonials[current].name}</h4>
                    <p className="text-white/50 text-sm">{testimonials[current].role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-sm ${
                        i < testimonials[current].rating ? 'text-gold-400' : 'text-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-gold-400 w-8' : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-gold-400 hover:bg-gold-400/10 transition-all"
                >
                  <FaChevronLeft className="text-sm" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-gold-400 hover:bg-gold-400/10 transition-all"
                >
                  <FaChevronRight className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
