import { useEffect, useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Education & Experience', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Works', href: '#works' },
]

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    if (!isSidebarOpen) return undefined

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsSidebarOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isSidebarOpen])

  function closeSidebar() {
    setIsSidebarOpen(false)
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 w-full rounded-b-[1rem] border-b border-slate-200 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.10)]">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
          aria-label="Main"
        >
          <a href="#home" className="font-serif text-2xl font-bold text-primary">
            Charlene.
          </a>

          <ul className="hidden flex-1 items-center justify-center gap-x-6 gap-y-2 text-sm text-nav-text xl:flex">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="font-serif transition hover:text-primary hover:underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden shrink-0 items-center justify-center rounded-full bg-primary px-6 py-2.5 font-serif text-sm font-medium text-white transition hover:bg-primary-dark xl:inline-flex"
          >
            Contact Me
          </a>
        </nav>
      </header>

      <button
        type="button"
        onClick={() => setIsSidebarOpen(true)}
        className="fixed right-4 top-2 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-primary font-serif text-xl font-semibold text-white shadow-[0_10px_24px_rgba(15,23,42,0.18)] transition hover:bg-primary-dark xl:hidden"
        aria-label="Open navigation menu"
        aria-expanded={isSidebarOpen}
      >
        C
      </button>

      <div
        className={`fixed inset-0 z-[70] bg-slate-900/30 transition-opacity duration-300 xl:hidden ${
          isSidebarOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeSidebar}
        aria-hidden={!isSidebarOpen}
      />

      <aside
        className={`fixed right-0 top-0 z-[80] flex h-svh w-[min(82vw,20rem)] flex-col bg-white px-6 pb-8 pt-6 shadow-[-12px_0_28px_rgba(15,23,42,0.18)] transition-transform duration-300 ease-out xl:hidden ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between">
          <span className="font-serif text-2xl font-bold text-primary">Charlene.</span>
          <button
            type="button"
            onClick={closeSidebar}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 text-2xl leading-none text-primary"
            aria-label="Close navigation menu"
          >
            ×
          </button>
        </div>

        <ul className="mt-10 space-y-5 text-nav-text">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={closeSidebar}
                className="font-serif text-lg transition hover:text-primary"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={closeSidebar}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-serif text-base font-medium text-white transition hover:bg-primary-dark"
        >
          Contact Me
        </a>
      </aside>
    </>
  )
}
