import { useState } from 'react'
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa'

const categories = ['All', 'Residential', 'Commercial', 'Villa', 'Plots']

const projects = [
  {
    title: 'Anantha Elite Residences',
    category: 'Residential',
    location: 'Hyderabad, Telangana',
    image: 'https://picsum.photos/seed/luxury-apartments-1/800/600.jpg',
    specs: { beds: '3 BHK', baths: '2', area: '1850 sq.ft' },
    status: 'Ready to Move',
    price: '₹85 L - ₹1.2 Cr',
  },
  {
    title: 'Anantha Business Park',
    category: 'Commercial',
    location: 'Gachibowli, Hyderabad',
    image: 'https://picsum.photos/seed/office-complex-modern/800/600.jpg',
    specs: { beds: 'Office', baths: '-', area: '2000-5000 sq.ft' },
    status: 'Under Construction',
    price: '₹1.5 Cr - ₹4 Cr',
  },
  {
    title: 'Anantha Green Villas',
    category: 'Villa',
    location: 'Shamshabad, Hyderabad',
    image: 'https://picsum.photos/seed/luxury-villa-pool/800/600.jpg',
    specs: { beds: '4 BHK', baths: '3', area: '3200 sq.ft' },
    status: 'Ready to Move',
    price: '₹2.5 Cr - ₹3.5 Cr',
  },
  {
    title: 'Anantha Lake View',
    category: 'Residential',
    location: 'Narsingi, Hyderabad',
    image: 'https://picsum.photos/seed/apartment-lake-view/800/600.jpg',
    specs: { beds: '2-3 BHK', baths: '2', area: '1250-1850 sq.ft' },
    status: 'Pre-Launch',
    price: '₹65 L - ₹95 L',
  },
  {
    title: 'Anantha Smart Plots',
    category: 'Plots',
    location: 'Shadnagar, Hyderabad',
    image: 'https://picsum.photos/seed/farm-land-green/800/600.jpg',
    specs: { beds: 'Plot', baths: '-', area: '1200-2400 sq.yds' },
    status: 'Open Booking',
    price: '₹28K - ₹45K /sq.yd',
  },
  {
    title: 'Anantha Royale Villas',
    category: 'Villa',
    location: 'Mokila, Hyderabad',
    image: 'https://picsum.photos/seed/premium-villa-garden/800/600.jpg',
    specs: { beds: '5 BHK', baths: '4', area: '4500 sq.ft' },
    status: 'Under Construction',
    price: '₹4 Cr - ₹6 Cr',
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  const statusColor = {
    'Ready to Move': 'bg-emerald-100 text-emerald-700',
    'Under Construction': 'bg-amber-100 text-amber-700',
    'Pre-Launch': 'bg-blue-100 text-blue-700',
    'Open Booking': 'bg-purple-100 text-purple-700',
  }

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
            <span className="text-sm font-semibold tracking-wide">Our Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-900 mb-4">
            Signature <span className="text-primary-600">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our portfolio of premium residential and commercial developments
            across prime locations.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-on-scroll">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="animate-on-scroll card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor[project.status]}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-semibold text-lg">{project.price}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-heading font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
                  <FaMapMarkerAlt className="text-primary-500 text-xs" />
                  {project.location}
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-gray-600 text-sm">
                    <FaBed className="text-gray-400" />
                    <span>{project.specs.beds}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-600 text-sm">
                    <FaBath className="text-gray-400" />
                    <span>{project.specs.baths}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-600 text-sm">
                    <FaRulerCombined className="text-gray-400" />
                    <span>{project.specs.area}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
