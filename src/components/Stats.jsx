import { useEffect, useState, useRef } from 'react'

const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 18, suffix: '+', label: 'Years Experience' },
  { value: 2500, suffix: '+', label: 'Happy Families' },
  { value: 12, suffix: 'M+', label: 'Sq.ft Built' },
]

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [hasStarted, value])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-heading font-bold text-white">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/construction-aerial-view/1920/600.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-950/85" />
      </div>
      <div className="relative z-10 container-custom px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-white/60 text-sm md:text-base mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
