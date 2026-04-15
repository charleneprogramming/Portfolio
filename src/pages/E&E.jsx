import { useEffect, useRef, useState } from 'react'
import portrait from '../assets/education-portrait.png'

const educationItems = [
  {
    school: 'ACLC College of Mandaue',
    detail: 'Bachelor of Science in Computer Science',
    years: '2022 - 2026',
  },
  {
    school: 'Don Gerardo Ll. Ouano Memorial National High School',
    detail: 'General Academic Strand (GAS)',
    years: '2016 - 2022',
  },
  {
    school: 'Cesar M. Cabahug Elementary School',
    detail: '',
    years: '2009 - 2016',
  },
]

const experienceItems = [
  {
    company: 'FemeNova Medical Health Service',
    role: 'Computer Science Intern',
    years: 'July 2025 - August 2025',
  },
]

function TimelineRow({ title, subtitle, years }) {
  return (
    <div className="grid justify-items-center gap-2 text-center sm:grid-cols-[minmax(0,1fr)_max-content] sm:items-start sm:justify-items-stretch sm:gap-x-6 sm:gap-y-2 sm:text-left">
      <div className="min-w-0">
        <div className="flex items-start justify-center gap-3 sm:justify-start">
          <span className="mt-[0.38rem] h-2.5 w-2.5 shrink-0 rotate-45 bg-[#f7f1d8]" />
          <div className="min-w-0">
            <h3 className="break-words font-serif text-[clamp(1rem,0.95rem+1vw,1.55rem)] font-semibold leading-[1.15] text-white">
              {title}
            </h3>
            {subtitle ? (
              <p className="mt-1 break-words font-serif text-[clamp(0.9rem,0.86rem+0.55vw,1.08rem)] leading-[1.35] text-white/90">
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>
      </div>
      <p className="font-serif text-[clamp(0.82rem,0.8rem+0.35vw,0.98rem)] leading-snug text-[#f3ead6] sm:pt-1 sm:text-right">
        {years}
      </p>
    </div>
  )
}

export default function EducationExperience() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches

      if (prefersReducedMotion) {
        setIsVisible(true)
        return
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          setIsVisible(true)
          observer.disconnect()
        })
      },
      {
        threshold: 0.28,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="education"
      ref={sectionRef}
      className="overflow-x-hidden bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-[70rem]">
        <div className="text-center">
          <h2 className="font-serif text-[clamp(2rem,1.6rem+2.6vw,3.2rem)] font-semibold leading-none text-primary">
            Education & Experience
          </h2>
          <div className="mx-auto mt-3 mb-3 h-[2px] w-1/2 bg-primary/70" />
        </div>
        <div className="relative flex flex-col lg:block lg:min-h-[40rem]">
          <div className="relative z-10 mx-auto w-full max-w-[17.5rem] lg:absolute lg:left-0 lg:top-1/2 lg:mx-0 lg:w-[18rem] lg:-translate-y-1/2">
            <div className="overflow-hidden rounded-[3rem] bg-white p-0 shadow-[0_10px_28px_rgba(15,23,42,0.18)]">
              <img
                src={portrait}
                alt="Portrait in graduation attire."
                className="block h-[27rem] w-full object-cover object-top sm:h-[28rem] lg:h-[31rem]"
                width={430}
                height={720}
                decoding="async"
              />
            </div>
          </div>
          <div
            className={`relative -mt-16 rounded-[2rem] bg-primary px-6 pb-10 pt-24 shadow-[0_14px_36px_rgba(15,23,42,0.14)] transition-all duration-1000 ease-out sm:-mt-20 sm:px-8 sm:pt-28 lg:absolute lg:bottom-[1.2rem] lg:left-[12.75rem] lg:right-[calc(50%-50vw)] lg:top-[1.2rem] lg:mt-0 lg:rounded-l-[2.75rem] lg:rounded-r-none lg:px-16 lg:pb-16 lg:pl-[13.5rem] lg:pt-10 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-[18%] opacity-0'
            }`}
          >
            <div className="mx-auto max-w-[37rem] text-center lg:mx-0 lg:text-left">
              <h2 className="font-serif text-[clamp(1.6rem,1.35rem+1.4vw,2.2rem)] font-medium text-white">
                Education
              </h2>

              <div className="mt-8 space-y-8">
                {educationItems.map((item) => (
                  <TimelineRow
                    key={item.school}
                    title={item.school}
                    subtitle={item.detail}
                    years={item.years}
                  />
                ))}
              </div>

              <div className="my-9 h-px w-full bg-white/55" />

              <h2 className="font-serif text-[clamp(1.6rem,1.35rem+1.4vw,2.2rem)] font-medium text-white">
                Experience
              </h2>

              <div className="mt-8">
                {experienceItems.map((item) => (
                  <TimelineRow
                    key={item.company}
                    title={item.company}
                    subtitle={item.role}
                    years={item.years}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
