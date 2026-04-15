import { useState } from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: 'Our Office',
    details: ['Plot No. 42, Financial District', 'Gachibowli, Hyderabad', 'Telangana - 500032'],
  },
  {
    icon: FaPhoneAlt,
    title: 'Call Us',
    details: ['+91 98765 43210', '+91 87654 32109'],
  },
  {
    icon: FaEnvelope,
    title: 'Email Us',
    details: ['info@ananthaprojects.com', 'sales@ananthaprojects.com'],
  },
  {
    icon: FaClock,
    title: 'Working Hours',
    details: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: By Appointment'],
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
            <span className="text-sm font-semibold tracking-wide">Contact Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-900 mb-4">
            Get In <span className="text-primary-600">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Have a project in mind? Reach out to us and let's discuss how we can
            bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6 animate-on-scroll">
            {contactInfo.map((info) => (
              <div key={info.title} className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-600/20">
                  <info.icon className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-900 mb-1">{info.title}</h4>
                  {info.details.map((d, i) => (
                    <p key={i} className="text-gray-600 text-sm">{d}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden h-48 bg-gray-200 relative">
              <img
                src="https://picsum.photos/seed/hyderabad-map-aerial/600/300.jpg"
                alt="Location Map"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
                  <FaMapMarkerAlt className="text-primary-600" />
                  <span className="text-sm font-semibold text-dark-900">Gachibowli, Hyderabad</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3 animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100">
              {submitted && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-sm font-medium flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Thank you! We'll get back to you within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-dark-900 mb-2">
                      Full Name <span className="text-primary-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark-900 mb-2">
                      Email <span className="text-primary-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-dark-900 mb-2">
                      Phone <span className="text-primary-600">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark-900 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm text-gray-600"
                    >
                      <option value="">Select Subject</option>
                      <option value="residential">Residential Projects</option>
                      <option value="commercial">Commercial Projects</option>
                      <option value="plots">Plots & Land</option>
                      <option value="investment">Investment Query</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-900 mb-2">
                    Message <span className="text-primary-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
