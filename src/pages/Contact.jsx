import { useEffect, useRef, useState } from 'react'
import { submitContactMessage } from '../services/contactMessages'

const initialForm = {
  fullName: '',
  phoneNumber: '',
  email: '',
  message: '',
}

export default function Contact() {
  const sectionRef = useRef(null)
  const [form, setForm] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null)
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

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus(null)
    setIsSubmitting(true)

    try {
      await submitContactMessage(form)
      setForm(initialForm)
      setStatus({
        type: 'success',
        message: 'Your message has been sent successfully.',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Something went wrong while sending your message.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-white px-0 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-serif text-[3rem] font-semibold leading-none text-primary sm:text-[3.35rem]">
          Contact Me
        </h2>

        <div className="relative mt-12 grid gap-10 lg:min-h-[32rem] lg:grid-cols-[1.08fr_1fr] lg:items-center lg:gap-14">
          <div
            className={`rounded-r-[2.25rem] bg-primary px-8 py-10 text-white shadow-[0_10px_26px_rgba(15,23,42,0.14)] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-10 sm:py-12 lg:absolute lg:bottom-0 lg:left-[calc(50%-50vw)] lg:top-0 lg:w-[56vw] lg:max-w-[48rem] lg:rounded-l-none lg:rounded-r-[2.75rem] lg:px-0 lg:py-0 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-[18%] opacity-0'
            }`}
          >
            <div className="h-full px-8 py-10 sm:px-10 sm:py-12 lg:flex lg:h-full lg:flex-col lg:justify-center lg:pl-[max(2rem,calc(50vw-34rem))] lg:pr-12">
            <h3 className="max-w-[19rem] font-serif text-[2.4rem] font-semibold leading-[1.05] sm:max-w-[22rem] sm:text-[3rem]">
              Don&apos;t Hesitate to Reach out
            </h3>

            <div className="mt-7 h-px w-full bg-white/45" />

            <p className="mt-7 max-w-[28rem] font-serif text-[1.15rem] leading-[1.2] text-white/95">
              Feel free to reach out to me through the form or using the
              contact details below.
            </p>

            <div className="mt-10 space-y-7 font-serif text-[1.05rem] leading-[1.15] sm:text-[1.2rem]">
              <p className="break-all">charlene.a.barrientos@gmail.com</p>
              <p className="max-w-[24rem]">
                Looc, Mandaue City Cebu A.C Cortes Avenue Riverside 2, 6014
              </p>
              <p>+639614721275</p>
            </div>
            </div>
          </div>

          <div className="px-6 sm:px-8 lg:col-start-2 lg:px-0">
            <h3 className="font-serif text-[2rem] font-semibold text-primary sm:text-[2.2rem]">
              Send Me A Message
            </h3>

            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="h-12 rounded-[0.95rem] border border-primary/55 px-4 font-serif text-[1rem] text-slate-800 outline-none transition placeholder:text-primary/70 focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="h-12 rounded-[0.95rem] border border-primary/55 px-4 font-serif text-[1rem] text-slate-800 outline-none transition placeholder:text-primary/70 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
                className="h-12 w-full rounded-[0.95rem] border border-primary/55 px-4 font-serif text-[1rem] text-slate-800 outline-none transition placeholder:text-primary/70 focus:border-primary focus:ring-1 focus:ring-primary"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Leave a message"
                required
                rows={7}
                className="min-h-[10rem] w-full resize-none rounded-[1rem] border border-primary/55 px-4 py-3 font-serif text-[1rem] text-slate-800 outline-none transition placeholder:text-primary/70 focus:border-primary focus:ring-1 focus:ring-primary"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-w-[11.5rem] items-center justify-center rounded-[0.95rem] bg-primary px-8 py-3 font-serif text-[1.05rem] font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send a Message'}
              </button>

              {status ? (
                <p
                  className={`font-serif text-[0.98rem] ${
                    status.type === 'success'
                      ? 'text-emerald-600'
                      : 'text-rose-600'
                  }`}
                >
                  {status.message}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
