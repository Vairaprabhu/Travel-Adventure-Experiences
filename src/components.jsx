import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { imageUrl } from './data'

export function Metadata({ title, description }) {
  useEffect(() => {
    document.title = `${title} | NOMAD`
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', description)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', `${title} | NOMAD`)
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) ogDescription.setAttribute('content', description)
  }, [title, description])
  return null
}

export function Image({ src, alt, className = '', width = 1200, ...props }) {
  return <img className={className} src={imageUrl(src, width)} alt={alt} loading={props.loading || 'lazy'} {...props} />
}

export function Reveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow${light ? ' eyebrow-light' : ''}`}>{children}</p>
}

export function SectionHeading({ eyebrow, title, copy, light = false, className = '' }) {
  return (
    <div className={`section-heading${light ? ' section-heading-light' : ''} ${className}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

export function TextLink({ to, children, light = false, className = '' }) {
  return <Link className={`text-link${light ? ' text-link-light' : ''} ${className}`} to={to}>{children}<ArrowUpRight size={16} aria-hidden="true" /></Link>
}

export function Header() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)
  const links = [
    { to: '/discover', label: 'Discover' },
    { to: '/destinations', label: 'Destinations' },
    { to: '/experiences', label: 'Experiences' },
    { to: '/journal', label: 'Travel Journal' },
  ]
  return (
    <header className="site-header">
      <Link to="/" className="brand-lockup" aria-label="NOMAD home" onClick={closeMenu}><span className="wordmark">NOMAD<span className="wordmark-dot">.</span></span><span className="brand-sub">A TRAVEL FIELD JOURNAL</span></Link>
      <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open}>
        <span>{open ? 'CLOSE' : 'INDEX'}</span><i>{open ? <X size={17} /> : <Menu size={17} />}</i>
      </button>
      <nav className={`primary-nav${open ? ' nav-open' : ''}`} aria-label="Main navigation">
        {links.map(({ to, label }) => <NavLink key={to} to={to} onClick={closeMenu}>{label}</NavLink>)}
        <NavLink className="mobile-plan-link" to="/plan" onClick={closeMenu}>Plan your trip <ArrowUpRight size={15} /></NavLink>
      </nav>
      <Link className="header-plan" to="/plan" onClick={closeMenu}><span>Have a place in mind?</span><strong>Plan your trip <ArrowUpRight size={16} /></strong></Link>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="wordmark wordmark-light">NOMAD<span className="wordmark-dot">.</span></Link>
          <p>For the roads less certain.<br />And the stories that stay.</p>
          <span className="footer-coordinates">INDEPENDENTLY WANDERING SINCE 2018</span>
        </div>
        <div className="footer-column"><span className="footer-label">Find your way</span><Link to="/discover">Discover</Link><Link to="/destinations">Destinations</Link><Link to="/experiences">Experiences</Link></div>
        <div className="footer-column"><span className="footer-label">Read & dream</span><Link to="/journal">Travel Journal</Link><Link to="/plan">Plan your trip</Link><a href="mailto:hello@nomad.travel">Get in touch</a></div>
        <div className="footer-column"><span className="footer-label">Elsewhere</span><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">Pinterest ↗</a><a href="mailto:hello@nomad.travel">hello@nomad.travel</a></div>
      </div>
      <div className="footer-bottom"><span>© 2025 NOMAD Travel Journal</span><span>Thoughtful travel. Lighter footprints.</span><Link to="/discover">Back to the beginning ↑</Link></div>
    </footer>
  )
}

export function Layout({ children }) {
  return <><Header /><main>{children}</main><Footer /></>
}

export function ScrollCue({ light = true }) {
  return <a className={`scroll-cue${light ? ' scroll-cue-light' : ''}`} href="#stories"><span>Scroll to wander</span><ArrowDown size={15} /></a>
}

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  function submit(event) {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    setError('')
    setSubmitted(true)
  }
  return (
    <section className="newsletter">
      <div className="newsletter-copy"><Eyebrow>Letters from elsewhere</Eyebrow><h2>A little more<br /><em>wild</em> in your inbox.</h2><p>Field notes, faraway places, and the occasional reason to close your laptop.</p></div>
      <form className="newsletter-form" onSubmit={submit} noValidate>
        <label htmlFor="newsletter-email">Your email address</label>
        <div className="input-with-button"><input id="newsletter-email" name="email" type="email" placeholder="you@somewhere.com" value={email} onChange={(event) => { setEmail(event.target.value); setError('') }} required aria-describedby="newsletter-message" /><button type="submit" aria-label="Subscribe to the newsletter"><ArrowRight size={20} /></button></div>
        <p id="newsletter-message" className={`form-note${error ? ' form-error' : ''}`} aria-live="polite">{submitted ? 'You’re on the list — this demo hasn’t sent or stored your email.' : error || 'No noise. Just a note when we have something worth sharing.'}</p>
        <button className="newsletter-submit" type="submit">Subscribe to our journal <ArrowRight size={16} /></button>
      </form>
    </section>
  )
}
