import { useEffect, useRef, useState } from 'react'

function UiUxIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M5 5.5A1.5 1.5 0 016.5 4h3A1.5 1.5 0 0111 5.5v3A1.5 1.5 0 019.5 10h-3A1.5 1.5 0 015 8.5v-3zm8 0A1.5 1.5 0 0114.5 4h3A1.5 1.5 0 0119 5.5v3A1.5 1.5 0 0117.5 10h-3A1.5 1.5 0 0113 8.5v-3zM5 15.5A1.5 1.5 0 016.5 14h3a1.5 1.5 0 010 3h-3A1.5 1.5 0 015 15.5zm8-.5h4.75A1.25 1.25 0 0119 16.25v1.25A1.5 1.5 0 0117.5 19h-3A1.5 1.5 0 0113 17.5V15z" />
    </svg>
  )
}

function AppDesignIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7.5 4A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9zm-1 4.5A1.5 1.5 0 018 7h8a1.5 1.5 0 010 3H8a1.5 1.5 0 01-1.5-1.5zM8 12h2.5a1.5 1.5 0 010 3H8a1.5 1.5 0 010-3zm5.5 0H16a1.5 1.5 0 010 3h-2.5a1.5 1.5 0 010-3z" />
    </svg>
  )
}

function WebDesignIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M5 5a2 2 0 012-2h3.25a2 2 0 012 2v3.25a2 2 0 01-2 2H7a2 2 0 01-2-2V5zm6.75 0a2 2 0 012-2H17a2 2 0 012 2v3.25a2 2 0 01-2 2h-3.25a2 2 0 01-2-2V5zM5 13.75a2 2 0 012-2h3.25a2 2 0 012 2V17a2 2 0 01-2 2H7a2 2 0 01-2-2v-3.25zm8.75 6a2 2 0 01-2-2v-1.5a2 2 0 012-2H17a2 2 0 012 2V17a2 2 0 01-2 2h-3.25z" />
    </svg>
  )
}

function DevelopmentIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M5 6.5A2.5 2.5 0 017.5 4h9A2.5 2.5 0 0119 6.5v6A2.5 2.5 0 0116.5 15h-9A2.5 2.5 0 015 12.5v-6zm3.25 10h7.5c.69 0 1.25.56 1.25 1.25S16.44 19 15.75 19h-7.5C7.56 19 7 18.44 7 17.75s.56-1.25 1.25-1.25z" />
    </svg>
  )
}

const services = [
  {
    title: 'UI/UX Design',
    description:
      'Creating user-centered designs through research, wireframing, and high- & low-fidelity prototypes to ensure intuitive and engaging user experiences.',
    iconBg: 'bg-[#f4d6ff]',
    iconColor: 'text-[#c15fe5]',
    Icon: UiUxIcon,
  },
  {
    title: 'Project Management',
    description:
      'Planning, organizing, and overseeing projects from concept to deployment, ensuring timely delivery, clear communication, and alignment with project goals.',
    iconBg: 'bg-[#cae4ff]',
    iconColor: 'text-[#3a99ef]',
    Icon: AppDesignIcon,
  },
  {
    title: 'Front-End Development',
    description:
      'Building responsive and interactive websites using modern technologies',
    iconBg: 'bg-[#ffe3a7]',
    iconColor: 'text-[#f0ac15]',
    Icon: DevelopmentIcon,
  },
  {
    title: 'App & Website Design',
    description:
      'Designing modern, visually appealing, and responsive interfaces for mobile and web platforms with a focus on usability and consistency.',
    iconBg: 'bg-[#fff7b8]',
    iconColor: 'text-[#ded24a]',
    Icon: WebDesignIcon,
  },
]

export default function Services() {
  const cardRefs = useRef([])
  const [visibleCards, setVisibleCards] = useState([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches

      if (prefersReducedMotion) {
        setVisibleCards(services.map((_, index) => index))
        return
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const index = Number(entry.target.getAttribute('data-card-index'))
          setVisibleCards((current) =>
            current.includes(index) ? current : [...current, index],
          )
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      className="bg-white px-6 py-40 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-serif text-[2.75rem] font-semibold leading-none text-primary sm:text-[3.2rem]">
            Services
          </h2>
          <div className="mx-auto mt-3 h-[2px] w-44 bg-primary/70" />
        </div>

        <div className="mt-20 flex flex-wrap items-stretch justify-center gap-7">
          {services.map(
            ({ title, description, iconBg, iconColor, Icon }, index) => (
              <article
                key={title}
                ref={(element) => {
                  cardRefs.current[index] = element
                }}
                data-card-index={index}
                className={`w-full max-w-[15rem] rounded-[1.15rem] bg-white px-5 pb-8 pt-7 shadow-[0_10px_24px_rgba(15,23,42,0.14)] transition-all duration-700 ease-out sm:min-h-[15.5rem] ${
                  visibleCards.includes(index)
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBg} ${iconColor}`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-6 font-serif text-[1rem] font-semibold leading-[1.1] text-slate-900 sm:text-[1.08rem]">
                  {title}
                </h3>
                <p className="mt-4 max-w-[10.3rem] font-serif text-[0.84rem] leading-[1.2] text-slate-700 sm:text-[0.89rem]">
                  {description}
                </p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
