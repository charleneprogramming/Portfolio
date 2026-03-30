import { useEffect, useMemo, useRef, useState } from 'react'

function SocialIconGitHub(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function SocialIconFacebook(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function SocialIconLinkedIn(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function DownloadIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 4v9m0 0l-3.5-3.5M12 13l3.5-3.5M5 17.5h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/charleneprogramming', Icon: SocialIconGitHub },
  { label: 'Facebook', href: 'https://facebook.com', Icon: SocialIconFacebook },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/charlene-barrientos-baa32a3a8?utm_source=share_via&utm_content=profile&utm_medium=member_ios', Icon: SocialIconLinkedIn },
]

export default function Footer() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const currentYear = useMemo(() => new Date().getFullYear(), [])
  const resumeHref = import.meta.env.VITE_RESUME_URL || '/RESUME (2026).pdf'

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
    <footer
      id="footer"
      ref={sectionRef}
      className="bg-white px-0 pt-20"
    >
      <div
        className={`mx-auto w-full max-w-[96rem] rounded-t-[3rem] bg-primary px-6 pb-8 pt-12 text-center text-white transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-10 sm:pt-14 lg:px-12 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="font-serif text-[3rem] font-semibold leading-none sm:text-[3.45rem]">
          Charlene.
        </h2>

        <ul className="mt-8 flex items-center justify-center gap-6">
          {socialLinks.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="transition hover:opacity-80"
              >
                <Icon className="h-10 w-10 text-black" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={resumeHref}
          download
          className="mx-auto mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-white/55 px-6 py-3 font-serif text-[1.05rem] font-semibold text-white transition hover:bg-white/10"
        >
          <DownloadIcon className="h-5 w-5" />
          Download Resume
        </a>

        <div className="mx-auto mt-10 h-px w-full max-w-[88rem] bg-white/45" />

        <p className="mt-10 font-serif text-[1rem] text-white/95 sm:text-[1.08rem]">
          Copyright © {currentYear}. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
