import portrait from '../assets/charlene-hero.png'

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

const social = [
  {
    label: 'GitHub',
    href: 'https://github.com/charleneprogramming',
    Icon: SocialIconGitHub,
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    Icon: SocialIconFacebook,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    Icon: SocialIconLinkedIn,
  },
]

export default function Home() {
  return (
    <main id="home" className="animate-fade-in pt-[4.75rem]">
      <section className="relative flex min-h-[calc(100svh-4.75rem)] flex-col overflow-hidden rounded-b-[2.5rem] bg-primary sm:rounded-b-[3rem] md:rounded-b-[3.5rem]">
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-end px-4 pb-4 pt-8 text-center sm:px-6 sm:pb-6 sm:pt-12 md:pb-8 md:pt-14">
          <h1 className="max-w-[min(95vw,50rem)] font-serif text-[clamp(2.2rem,10vw,4rem)] font-medium leading-[1.05] tracking-tight text-white">
            <span className="not-italic">I&apos;m </span>
            <span className="italic">Charlene Barrientos</span>,
            <br />
            <span className="font-normal">UI/UX Designer</span>
          </h1>
          <p className="mt-4 max-w-[min(88vw,26rem)] px-1 font-serif text-[0.95rem] leading-relaxed text-white/80 sm:mt-5 sm:text-[1.02rem]">
            Passionate UI/UX designer with a foundation in web development,
            crafting seamless experiences.
          </p>

          <ul className="mt-6 flex items-center justify-center gap-4 sm:mt-7">
            {social.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:opacity-90"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-[1] mt-2 flex flex-1 items-end justify-center px-5 sm:mt-0 sm:px-6">
          <div className="relative flex h-[clamp(19rem,54vw,28rem)] w-[min(92vw,34rem)] items-end justify-center sm:w-[min(80vw,34rem)]">
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-[clamp(17rem,48vw,25.5rem)] w-[min(112vw,42rem)] -translate-x-1/2 rounded-t-[50%] border-[2px] border-arch-outline/80 sm:w-[calc(100%+5rem)] md:w-[calc(100%+8rem)]"
            />
            <div
              aria-hidden
              className="absolute bottom-0 left-1/2 z-[1] h-[clamp(15.5rem,43vw,23.5rem)] w-[min(90vw,36rem)] -translate-x-1/2 rounded-t-[50%] bg-white shadow-[0_10px_28px_rgba(0,0,0,0.10)] sm:w-[min(78vw,38rem)]"
            >
            </div>
            <img
              src={portrait}
              alt="Professional portrait of Charlene Barrientos wearing a cream blazer."
              className="absolute bottom-0 left-1/2 z-[2] h-auto w-[min(88vw,24rem)] max-w-none -translate-x-1/2 object-contain object-bottom sm:w-[min(65vw,26rem)] md:w-[min(56vw,38rem)]"
              width={520}
              height={680}
              decoding="async"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
