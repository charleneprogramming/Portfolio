import { useEffect, useMemo, useRef, useState } from 'react'
import donMacchiatosImage from '../assets/works/don-macchiatos-pos.png'
import foodMenuImage from '../assets/works/foodmenu.png'
import motoResQImage from '../assets/works/motoresq.png'
import trackingMomentsImage from '../assets/works/tracking-moments.png'

function TrackingMomentsPreview() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[1.15rem] bg-[#7a955d]">
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-3 py-2 text-[0.34rem] font-medium uppercase tracking-[0.18em] text-white/80">
        <div className="flex items-center gap-1.5">
          <div className="flex h-3 w-3 items-center justify-center rounded-[0.2rem] bg-[#1f2a1f] text-[0.38rem] text-white">
            B
          </div>
          <span>Tracking Moments</span>
        </div>
        <div className="rounded-full border border-white/40 px-2 py-0.5">Get App</div>
      </div>
      <div className="absolute left-[7%] top-[34%] max-w-[34%] font-serif text-[0.7rem] leading-[1.05] text-[#efe7d7] sm:text-[0.8rem]">
        TRACK YOUR
        <br />
        JOURNEY,
        <br />
        CELEBRATE YOUR
        <br />
        PROGRESS.
      </div>
      <div className="absolute left-[8%] top-[70%] max-w-[26%] text-[0.32rem] uppercase tracking-[0.16em] text-white/65">
        Personal growth and reflection tool for daily habits and journaling.
      </div>
      <div className="absolute bottom-[15%] left-[47%] h-[43%] w-[39%] rounded-[0.7rem] border-[3px] border-[#232c21] bg-[#d6d1bb] shadow-[0_4px_8px_rgba(0,0,0,0.18)]">
        <div className="absolute inset-x-[10%] top-[8%] h-[8%] rounded-full bg-[#202720]" />
        <div className="absolute inset-x-[16%] top-[23%] font-serif text-[0.45rem] tracking-[0.18em] text-[#4c593d]">
          TRACKING MOMENTS
        </div>
      </div>
      <div className="absolute bottom-[14%] left-[39%] h-[22%] w-[8%] rotate-[-10deg] rounded-[0.45rem] border-[2px] border-[#232c21] bg-[#d6d1bb] shadow-[0_4px_6px_rgba(0,0,0,0.16)]" />
    </div>
  )
}

function DonMacchiatosPreview() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[1.15rem] bg-[linear-gradient(115deg,#d6d1c9_0%,#b08f77_32%,#403a52_67%,#26283f_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(255,255,255,0.28),transparent_38%)]" />
      <div className="absolute left-[7%] top-[8%] flex h-5 w-5 items-center justify-center rounded-full bg-white text-[0.38rem] font-semibold text-slate-700 shadow">
        DM
      </div>
      <div className="absolute bottom-[0%] left-[4%] h-[78%] w-[41%] rounded-t-[2rem] bg-[linear-gradient(180deg,#f3e3d8_0%,#dfc7b9_100%)] opacity-70 blur-[1px]" />
      <div className="absolute bottom-[6%] left-[9%] h-[38%] w-[18%] rotate-[-10deg] rounded-[0.7rem] bg-[#c48868] opacity-90 shadow-[0_8px_10px_rgba(0,0,0,0.18)]" />
      <div className="absolute bottom-[7%] left-[25%] h-[44%] w-[16%] rotate-[8deg] rounded-[0.7rem] bg-[#9dc6ac] opacity-95 shadow-[0_8px_10px_rgba(0,0,0,0.18)]" />
      <div className="absolute right-[7%] top-[16%] w-[38%] rounded-[1rem] border border-white/10 bg-[#232338]/70 p-3 text-white shadow-[0_10px_24px_rgba(0,0,0,0.25)] backdrop-blur-[1px]">
        <div className="mb-1 text-center text-[0.34rem] uppercase tracking-[0.26em] text-white/70">
          Don Macchiatos
        </div>
        <div className="mb-3 text-center font-serif text-[0.8rem]">Login</div>
        <div className="space-y-1.5">
          <div className="h-3 rounded-full bg-white/15" />
          <div className="h-3 rounded-full bg-white/15" />
          <div className="mt-1 h-3 rounded-full bg-[#b58b4d]" />
        </div>
      </div>
    </div>
  )
}

function MotoResQPreview() {
  return (
    <div className="relative flex h-full w-full items-center justify-center gap-1 overflow-hidden rounded-[1.15rem] bg-[linear-gradient(180deg,#242771_0%,#11153e_100%)] px-3 py-3">
      {['Login', 'Welcome', 'Create'].map((label, index) => (
        <div
          key={label}
          className={`relative h-full flex-1 rounded-[0.7rem] bg-white ${
            index === 0 ? 'max-w-[31%]' : 'max-w-[30%]'
          }`}
        >
          <div className="absolute inset-x-0 top-0 h-[23%] rounded-t-[0.7rem] bg-[linear-gradient(180deg,#1b226e_0%,#161c55_100%)]" />
          <div className="absolute inset-x-[16%] top-[11%] h-[7%] rounded-full bg-white/85" />
          <div className="absolute left-[50%] top-[4.5%] h-5 w-8 -translate-x-1/2 rounded-t-full rounded-b-[0.5rem] bg-[#d92b53]" />
          <div className="absolute inset-x-[15%] top-[35%] h-[8%] rounded-full bg-[#eef0fb]" />
          <div className="absolute inset-x-[15%] top-[48%] h-[8%] rounded-full bg-[#eef0fb]" />
          <div className="absolute inset-x-[24%] top-[64%] h-[8%] rounded-full bg-[#243087]" />
          <div className="absolute bottom-[10%] left-[50%] -translate-x-1/2 text-[0.35rem] font-semibold text-slate-400">
            {label}
          </div>
        </div>
      ))}
    </div>
  )
}

const designWorks = [
  {
    title: 'MotoResQ',
    subtitle: 'UI/UX Design for signal immediate vehicle assistance.',
    image: motoResQImage,
    alt: 'MotoResQ UI screens displayed on three mobile phones.',
  },
  {
    title: 'FoodMenu',
    subtitle: 'UI/UX Design for digital food menu.',
    image: foodMenuImage,
    alt: 'FoodMenu mobile ordering interface shown across multiple phone screens.',
  },
  {
    title: 'Tracking Moments',
    subtitle: 'Web Design for digital journal.',
    image: trackingMomentsImage,
    alt: 'Tracking Moments web design preview for a digital journal.',
  },
  {
    title: 'Don Macchiatos: POS',
    subtitle: 'Web Design for Point Of Sales of Don Macchiatos',
    image: donMacchiatosImage,
    alt: 'Don Macchiatos point of sale web interface preview.',
  },
]

const carouselWorks = [
  {
    title: 'Tracking Moments: Daily Journal',
    subtitle: 'UI Design, Web Development',
    href: 'https://example.com/tracking-moments',
    Preview: TrackingMomentsPreview,
  },
  {
    title: 'Don Macchiatos: POS',
    subtitle: 'UI Design, Web Development',
    href: 'https://example.com/don-macchiatos-pos',
    Preview: DonMacchiatosPreview,
  },
  {
    title: 'MotoResQ: Request Assistance',
    subtitle: 'UI Design, Mobile Development',
    href: 'https://example.com/motoresq',
    Preview: MotoResQPreview,
  },
  {
    title: 'Sample Project 04',
    subtitle: 'UI Design, Web Development',
    href: 'https://example.com/sample-project-04',
    Preview: TrackingMomentsPreview,
  },
  {
    title: 'Sample Project 05',
    subtitle: 'UI Design, Mobile Development',
    href: 'https://example.com/sample-project-05',
    Preview: DonMacchiatosPreview,
  },
  {
    title: 'Sample Project 06',
    subtitle: 'UI Design, Web Development',
    href: 'https://example.com/sample-project-06',
    Preview: MotoResQPreview,
  },
]

export default function Works() {
  const sectionRef = useRef(null)
  const pointerStartXRef = useRef(0)
  const pointerStartYRef = useRef(0)
  const isPointerDownRef = useRef(false)
  const didDragRef = useRef(false)
  const [cardsPerPage, setCardsPerPage] = useState(3)
  const [activePage, setActivePage] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  function goToNextPage() {
    setActivePage((current) => (current + 1) % pages.length)
  }

  function goToPreviousPage() {
    setActivePage((current) => (current - 1 + pages.length) % pages.length)
  }

  function handleSwipeEnd(endX, endY) {
    const deltaX = endX - pointerStartXRef.current
    const deltaY = endY - pointerStartYRef.current

    if (Math.abs(deltaX) < 45 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return
    }

    didDragRef.current = true

    if (deltaX < 0) {
      goToNextPage()
      return
    }

    goToPreviousPage()
  }

  function handlePointerDown(event) {
    pointerStartXRef.current = event.clientX
    pointerStartYRef.current = event.clientY
    isPointerDownRef.current = true
    didDragRef.current = false
    setIsHovered(true)
    event.currentTarget.setPointerCapture?.(event.pointerId)
  }

  function handlePointerMove(event) {
    if (!isPointerDownRef.current) return

    const deltaX = event.clientX - pointerStartXRef.current
    const deltaY = event.clientY - pointerStartYRef.current

    if (Math.abs(deltaX) > 10 && Math.abs(deltaX) > Math.abs(deltaY)) {
      didDragRef.current = true
    }
  }

  function handlePointerUp(event) {
    if (!isPointerDownRef.current) return

    isPointerDownRef.current = false
    setIsHovered(false)
    handleSwipeEnd(event.clientX, event.clientY)
  }

  function handlePointerCancel() {
    isPointerDownRef.current = false
    setIsHovered(false)
  }

  function handleClickCapture(event) {
    if (!didDragRef.current) return

    event.preventDefault()
    event.stopPropagation()
    didDragRef.current = false
  }

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth >= 1280) {
        setCardsPerPage(3)
        return
      }

      if (window.innerWidth >= 768) {
        setCardsPerPage(2)
        return
      }

      setCardsPerPage(1)
    }

    updateCardsPerPage()
    window.addEventListener('resize', updateCardsPerPage)
    return () => window.removeEventListener('resize', updateCardsPerPage)
  }, [])

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
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  const pages = useMemo(() => {
    const chunks = []
    for (let index = 0; index < carouselWorks.length; index += cardsPerPage) {
      chunks.push(carouselWorks.slice(index, index + cardsPerPage))
    }
    return chunks
  }, [cardsPerPage])

  useEffect(() => {
    setActivePage((current) => Math.min(current, Math.max(pages.length - 1, 0)))
  }, [pages.length])

  useEffect(() => {
    if (pages.length <= 1) return undefined
    if (!isVisible) return undefined
    if (isHovered) return undefined

    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches

      if (prefersReducedMotion) return undefined
    }

    const intervalId = window.setInterval(() => {
      goToNextPage()
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [isHovered, isVisible, pages.length])

  return (
    <section
      id="works"
      ref={sectionRef}
      className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-center gap-6 sm:gap-8">
          <div className="h-px flex-1 bg-primary/25" />
          <h2 className="font-serif text-[3rem] font-semibold leading-none text-primary sm:text-[3.35rem]">
            Recent Works
          </h2>
          <div className="h-px flex-1 bg-primary/25" />
        </div>

        <div
          className={`mt-12 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="px-1 text-center md:text-left">
            <h3 className="font-serif text-[clamp(2rem,1.55rem+2.2vw,3.05rem)] font-semibold leading-none text-primary">
              UI/UX Design
            </h3>
            <p className="mt-3 max-w-3xl font-serif text-[clamp(1rem,0.92rem+0.45vw,1.2rem)] leading-relaxed text-primary/75 md:mx-0">
              I created inclusive, minimal, and future-oriented user experiences
              to people in need.
            </p>
          </div>

          <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2">
            {designWorks.map(({ title, subtitle, image, alt }) => (
              <article
                key={title}
                className="group px-1"
              >
                <div className="overflow-hidden rounded-[1.35rem] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.12)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_16px_30px_rgba(15,23,42,0.16)]">
                  <img
                    src={image}
                    alt={alt}
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="pt-5 text-center md:text-left">
                  <h4 className="font-serif text-[clamp(1.75rem,1.45rem+1vw,2.35rem)] font-semibold leading-tight text-primary">
                    {title}
                  </h4>
                  <p className="mt-2 font-serif text-[clamp(1rem,0.9rem+0.35vw,1.16rem)] leading-relaxed text-primary">
                    {subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-24">
          <div className="px-1 text-center md:text-left">
            <h3 className="font-serif text-[clamp(2rem,1.55rem+2.2vw,3.05rem)] font-semibold leading-none text-primary">
              Website and Mobile Development
            </h3>
            <p className="mt-3 max-w-3xl font-serif mb-6 text-[clamp(1rem,0.92rem+0.45vw,1.2rem)] leading-relaxed text-primary/75 md:mx-0">
              I created responsive and interactive websites and mobile applications.
            </p>
          </div>
            <div
              className="-mx-3 -my-3 overflow-hidden px-3 py-3 touch-pan-y"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerCancel}
              onClickCapture={handleClickCapture}
            >
              <div
                className="flex transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(-${activePage * 100}%)` }}
              >
                {pages.map((page, pageIndex) => (
                  <div
                    key={`page-${pageIndex}`}
                    className="grid min-w-full gap-8 px-1 md:grid-cols-2 xl:grid-cols-3"
                  >
                    {page.map(({ title, subtitle, href, Preview }) => (
                      <a
                        key={title}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="group overflow-hidden rounded-[1.35rem] bg-white p-3 shadow-[0_8px_18px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_22px_rgba(15,23,42,0.1)]"
                      >
                        <div className="h-[11.2rem] overflow-hidden rounded-[1.15rem]">
                          <Preview />
                        </div>
                        <div className="px-1 pb-2 pt-5">
                          <h3 className="font-serif text-[1.65rem] font-semibold leading-tight text-primary transition group-hover:text-primary-dark">
                            {title}
                          </h3>
                          <p className="mt-3 font-serif text-[1.12rem] leading-tight text-primary/90">
                            {subtitle}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14 flex items-center justify-center gap-3">
              {pages.map((_, pageIndex) => (
                <button
                  key={`dot-${pageIndex}`}
                  type="button"
                  onClick={() => setActivePage(pageIndex)}
                  className={`transition-all duration-300 ${
                    activePage === pageIndex
                      ? 'h-[0.23rem] w-6 rounded-full bg-primary'
                      : 'h-px w-4 bg-primary/35'
                  }`}
                  aria-label={`Go to works page ${pageIndex + 1}`}
                  aria-pressed={activePage === pageIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
