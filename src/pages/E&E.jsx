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
    <div className="grid gap-2 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-6">
      <div className="min-w-0">
        <div className="flex items-start gap-3">
          <span className="mt-[0.38rem] h-2.5 w-2.5 shrink-0 rotate-45 bg-[#f7f1d8]" />
          <div className="min-w-0">
            <h3 className="font-serif text-[1.15rem] font-semibold leading-tight text-white sm:text-[1.28rem]">
              {title}
            </h3>
            {subtitle ? (
              <p className="mt-1 font-serif text-[1rem] leading-snug text-white/90 sm:text-[1.08rem]">
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>
      </div>
      <p className="pl-[1.35rem] text-right font-serif text-[0.9rem] leading-none text-[#f3ead6] lg:pl-0 lg:pt-1">
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
          <h2 className="font-serif text-[2.75rem] font-semibold leading-none text-primary sm:text-[3.2rem]">
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
            <div className="max-w-[37rem]">
              <h2 className="font-serif text-[2rem] font-medium text-white sm:text-[2.2rem]">
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

              <h2 className="font-serif text-[2rem] font-medium text-white sm:text-[2.2rem]">
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
