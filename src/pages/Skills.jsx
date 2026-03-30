import { useEffect, useRef, useState } from 'react'

function FigmaIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <rect x="18" y="8" width="14" height="14" rx="7" fill="#F24E1E" />
      <rect x="18" y="22" width="14" height="14" rx="7" fill="#A259FF" />
      <rect x="18" y="36" width="14" height="14" rx="7" fill="#0ACF83" />
      <rect x="32" y="8" width="14" height="14" rx="7" fill="#FF7262" />
      <rect x="32" y="22" width="14" height="14" rx="7" fill="#1ABCFE" />
    </svg>
  )
}

function ReactIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <circle cx="32" cy="32" r="4.5" fill="#61DAFB" />
      <ellipse
        cx="32"
        cy="32"
        rx="22"
        ry="8.5"
        stroke="#61DAFB"
        strokeWidth="2.8"
      />
      <ellipse
        cx="32"
        cy="32"
        rx="22"
        ry="8.5"
        transform="rotate(60 32 32)"
        stroke="#61DAFB"
        strokeWidth="2.8"
      />
      <ellipse
        cx="32"
        cy="32"
        rx="22"
        ry="8.5"
        transform="rotate(120 32 32)"
        stroke="#61DAFB"
        strokeWidth="2.8"
      />
    </svg>
  )
}

function LaravelIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 20.5L27 13l10 6v12l-12 7-10-6v-11.5z"
        stroke="#F05340"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path
        d="M37 19l11-6 10 6v12l-11 6-10-6"
        stroke="#F05340"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path
        d="M25 38l12-7 10 6-12 7-10-6zm0 0v13l10 6 12-7V37M27 13v13l10 6"
        stroke="#F05340"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FramerIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <rect x="10" y="10" width="44" height="44" rx="12" fill="#5B2BE0" />
      <path
        d="M24 20h16v8H32l8 8v8l-8-8h-8l8-8h-8v-8z"
        fill="#fff"
      />
    </svg>
  )
}

function NextIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <circle cx="32" cy="32" r="26" fill="#000" />
      <path
        d="M22 43V21h3.1l13 16.6V21H42v22h-3L25.8 26.1V43H22z"
        fill="#fff"
      />
      <path d="M37.8 36.3L43 43" stroke="#fff" strokeWidth="2.4" />
    </svg>
  )
}

function FlutterIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <path d="M40.5 10L18 32.5l7.5 7.5L55.5 10H40.5z" fill="#54A7F5" />
      <path d="M33 47.5L25.5 40l15-15H55.5L33 47.5z" fill="#54A7F5" />
      <path d="M25.5 40l7.5 7.5L48 32.5H40.5l-15 15z" fill="#2E73D4" />
    </svg>
  )
}

function MySqlIcon(props) {
  return (
    <svg viewBox="0 0 120 64" fill="none" aria-hidden="true" {...props}>
      <text
        x="16"
        y="38"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="#0A6A8D"
      >
        My
      </text>
      <text
        x="47"
        y="38"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="#F39C12"
      >
        SQL
      </text>
      <path
        d="M85 20c5 1 10 6 10 12m-18-9c2-4 6-6 11-6m-8 15c3 3 6 5 10 5"
        stroke="#0A6A8D"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function FirebaseIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <path d="M20 44L30 10l8 15-18 19z" fill="#FFA000" />
      <path d="M20 44l5-31 19 21-24 10z" fill="#F57C00" />
      <path d="M20 44l24-10-3 18c-.3 1.4-1.8 2.1-3.1 1.5L20 44z" fill="#FFCA28" />
    </svg>
  )
}

function PhpMyAdminIcon(props) {
  return (
    <svg viewBox="0 0 150 64" fill="none" aria-hidden="true" {...props}>
      <text
        x="10"
        y="35"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="24"
        fontStyle="italic"
        fontWeight="700"
        fill="#8085AA"
      >
        php
      </text>
      <text
        x="48"
        y="35"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="24"
        fontStyle="italic"
        fontWeight="700"
        fill="#F0A020"
      >
        MyAdmin
      </text>
    </svg>
  )
}

function TailwindIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <path
        d="M16 24c4-7 8-10 16-10 8 0 12 3 16 10-4-3.5-7-5-12-5-8 0-10 5-12 10-2 5-4 10-12 10-5 0-8-1.5-12-5 4 7 8 10 16 10 8 0 10-5 12-10 2-5 4-10 12-10 5 0 8 1.5 12 5-4 7-8 10-16 10-8 0-12-3-16-10z"
        fill="#38BDF8"
      />
    </svg>
  )
}

const skills = [
  { name: 'Figma', level: '98%', Icon: FigmaIcon, spreadX: '44px', spreadY: '26px' },
  { name: 'React', level: '90%', Icon: ReactIcon, spreadX: '22px', spreadY: '20px' },
  { name: 'Laravel', level: '85%', Icon: LaravelIcon, spreadX: '0px', spreadY: '14px' },
  { name: 'Framer', level: '80%', Icon: FramerIcon, spreadX: '-22px', spreadY: '20px' },
  { name: 'Next.js', level: '90%', Icon: NextIcon, spreadX: '-44px', spreadY: '26px' },
  { name: 'Flutter', level: '96%', Icon: FlutterIcon, spreadX: '44px', spreadY: '-26px' },
  { name: 'MySQL', level: '85%', Icon: MySqlIcon, spreadX: '22px', spreadY: '-20px' },
  { name: 'Firebase', level: '95%', Icon: FirebaseIcon, spreadX: '0px', spreadY: '-14px' },
  { name: 'phpMyAdmin', level: '95%', Icon: PhpMyAdminIcon, spreadX: '-22px', spreadY: '-20px' },
  { name: 'Tailwind CSS', level: '95%', Icon: TailwindIcon, spreadX: '-44px', spreadY: '-26px' },
]

export default function Skills() {
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
        threshold: 0.25,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-serif text-[3rem] font-semibold leading-none text-primary sm:text-[3.4rem]">
            Skills
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 justify-items-center gap-x-1 gap-y-2 sm:grid-cols-3 md:mt-16 md:grid-cols-5 md:gap-x-4 md:gap-y-11">
          {skills.map(({ name, level, Icon, spreadX, spreadY }, index) => (
            <article
              key={name}
              className={`flex h-[11rem] w-[6.7rem] flex-col items-center rounded-[999px] bg-white px-3 pb-6 pt-7 shadow-[0_10px_24px_rgba(15,23,42,0.14)] sm:h-[11.5rem] sm:w-[7.2rem] ${
                isVisible ? 'animate-skills-spread' : 'opacity-0'
              }`}
              style={{
                '--spread-x': spreadX,
                '--spread-y': spreadY,
                animationDelay: isVisible ? `${index * 70}ms` : '0ms',
              }}
            >
              <div className="flex h-[4.2rem] w-full items-center justify-center">
                <Icon className="max-h-12 w-auto max-w-[4.4rem]" />
              </div>
              <p className="mt-6 font-serif text-[1.15rem] font-semibold leading-none text-primary sm:text-[1.25rem]">
                {level}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
