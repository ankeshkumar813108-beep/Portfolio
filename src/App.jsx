import { useEffect, useMemo, useState } from 'react'
import emailjs from '@emailjs/browser'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import {
  FaArrowUp,
  FaAward,
  FaBriefcase,
  FaCertificate,
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaEye,
  FaGithub,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaMoon,
  FaPaperPlane,
  FaPhoneAlt,
  FaSun,
} from 'react-icons/fa'
import {
  achievements,
  certifications,
  education,
  experiences,
  profile,
  projects,
  skillGroups,
  socialLinks,
} from './data/portfolio'

const navItems = ['home', 'about', 'education', 'skills', 'projects', 'experience', 'certifications', 'resume', 'contact']

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`section ${className}`}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="section-heading">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </motion.section>
  )
}

function Loader() {
  return (
    <motion.div className="loader" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <motion.div
        className="loader-ring"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
      />
      <p>Loading portfolio</p>
    </motion.div>
  )
}

function TypingText({ words }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [letterCount, setLetterCount] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    const doneTyping = letterCount === current.length
    const doneDeleting = letterCount === 0
    const delay = deleting ? 45 : doneTyping ? 1200 : 85

    const timer = setTimeout(() => {
      if (!deleting && doneTyping) setDeleting(true)
      else if (deleting && doneDeleting) {
        setDeleting(false)
        setWordIndex((index) => (index + 1) % words.length)
      } else {
        setLetterCount((count) => count + (deleting ? -1 : 1))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [deleting, letterCount, wordIndex, words])

  return <span className="typing">{words[wordIndex].slice(0, letterCount)}</span>
}

function Header({ theme, setTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Ankesh Kumar home">
        <img src="/logo.png" alt="Ankesh Kumar logo" />
      </a>
      <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
        <span />
        <span />
        <span />
      </button>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item}`} onClick={() => setOpen(false)}>
            {item}
          </a>
        ))}
      </nav>
      <button className="icon-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <ParticleField />
      <div className="hero-copy">
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          Available for internships and freelance projects
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
          {profile.name}
        </motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
          {profile.title}
        </motion.h2>
        <motion.p className="hero-typing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.24 }}>
          I build as a <TypingText words={profile.roles} />
        </motion.p>
        <motion.p className="hero-summary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.32 }}>
          {profile.summary}
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <a className="button primary" href={profile.resumeUrl} download>
            <FaDownload /> Resume
          </a>
          <a className="button ghost" href="#contact">
            <FaEnvelope /> Contact
          </a>
        </motion.div>
        <motion.div className="social-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.48 }}>
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a href={href} key={label} aria-label={label} target="_blank" rel="noreferrer">
              <Icon />
            </a>
          ))}
        </motion.div>
      </div>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}>
        <div className="profile-orbit">
          <img src="/profile-photo.png" alt="Professional portrait of Ankesh Kumar" loading="eager" />
        </div>
      </motion.div>
    </section>
  )
}

function ParticleField() {
  return (
    <div className="particles" aria-hidden="true">
      {Array.from({ length: 26 }).map((_, index) => (
        <span key={index} style={{ '--i': index }} />
      ))}
    </div>
  )
}

function About() {
  return (
    <Section id="about" eyebrow="About me" title="Curious builder with a full stack mindset">
      <div className="about-grid">
        <div className="glass-panel">
          <h3>Introduction</h3>
          <p>{profile.summary}</p>
        </div>
        <div className="glass-panel">
          <h3>Career Objective</h3>
          <p>{profile.objective}</p>
        </div>
        <div className="interest-list">
          {['Responsive UI', 'React Apps', 'Java Programming', 'REST APIs', 'Databases', 'Problem Solving'].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic timeline">
      <div className="timeline">
        {education.map((item, index) => (
          <motion.article
            className="timeline-item"
            key={item.degree}
            initial={{ opacity: 0, x: index % 2 ? 28 : -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <FaGraduationCap />
            <div>
              <h3>{item.degree}</h3>
              <p>{item.place}</p>
              <span>{item.year}</span>
              <strong>{item.score}</strong>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technologies I work with">
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            {group.skills.map(({ name, level, icon: Icon }) => (
              <div className="skill" key={name}>
                <div className="skill-top">
                  <span>
                    <Icon /> {name}
                  </span>
                  <strong>{level}%</strong>
                </div>
                <div className="progress" aria-label={`${name} proficiency ${level} percent`}>
                  <motion.span initial={{ width: 0 }} whileInView={{ width: `${level}%` }} viewport={{ once: true }} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  )
}

function Projects() {
  const categories = useMemo(() => ['All', ...new Set(projects.map((project) => project.category))], [])
  const [active, setActive] = useState('All')
  const visibleProjects = active === 'All' ? projects : projects.filter((project) => project.category === active)

  return (
    <Section id="projects" eyebrow="Projects" title="Selected development work">
      <div className="filters" role="tablist" aria-label="Project filters">
        {categories.map((category) => (
          <button className={active === category ? 'active' : ''} onClick={() => setActive(category)} key={category}>
            {category}
          </button>
        ))}
      </div>
      <div className="project-grid">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.article
              className="project-card"
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              style={{ '--accent': project.accent }}
            >
              <div className="project-image">
                <span>{project.title}</span>
              </div>
              <div className="project-body">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
                <span>{project.description}</span>
                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <small key={tech}>{tech}</small>
                  ))}
                </div>
                <div className="card-actions">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub /> GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Training, readiness, and opportunities">
      <div className="experience-grid">
        {experiences.map((item) => (
          <article className="experience-card" key={item.title}>
            <FaBriefcase />
            <span>{item.type}</span>
            <h3>{item.title}</h3>
            <strong>{item.meta}</strong>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Certifications() {
  const [selected, setSelected] = useState(null)

  return (
    <Section id="certifications" eyebrow="Certifications" title="Learning credentials">
      <div className="cert-grid">
        {certifications.map((certificate) => (
          <button className="cert-card" key={certificate.title} onClick={() => setSelected(certificate)}>
            <FaCertificate />
            <span>{certificate.year}</span>
            <h3>{certificate.title}</h3>
            <p>{certificate.issuer}</p>
          </button>
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="modal" initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 24, opacity: 0 }}>
              <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close certificate preview">
                x
              </button>
              <FaAward />
              <h3>{selected.title}</h3>
              <p>{selected.issuer} | {selected.year}</p>
              <span>{selected.details}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}

function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Progress in numbers">
      <div className="achievement-grid">
        {achievements.map((item) => (
          <CounterCard key={item.label} {...item} />
        ))}
      </div>
    </Section>
  )
}

function CounterCard({ label, value }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const step = Math.max(1, Math.ceil(value / 36))
    const timer = setInterval(() => {
      setCount((current) => {
        if (current >= value) {
          clearInterval(timer)
          return value
        }
        return Math.min(value, current + step)
      })
    }, 36)
    return () => clearInterval(timer)
  }, [value])

  return (
    <article className="achievement-card">
      <strong>{count}+</strong>
      <span>{label}</span>
    </article>
  )
}

function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="Ready to share with recruiters">
      <div className="resume-panel">
        <div>
          <span>Resume Preview</span>
          <h3>{profile.name}</h3>
          <p>{profile.title}</p>
          <p>Skills: React.js, JavaScript, Java, Node.js, Express.js, MySQL, MongoDB, Git, GitHub</p>
        </div>
        <div className="resume-actions">
          <a className="button primary" href={profile.resumeUrl} download>
            <FaDownload /> Download Resume
          </a>
          <a className="button ghost" href={profile.resumeUrl} target="_blank" rel="noreferrer">
            <FaEye /> View Resume
          </a>
        </div>
      </div>
    </Section>
  )
}

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('Sending...')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus('EmailJS keys are not configured yet. Add them in .env.local.')
      return
    }

    try {
      await emailjs.sendForm(serviceId, templateId, event.currentTarget, { publicKey })
      event.currentTarget.reset()
      setStatus('Message sent successfully.')
    } catch {
      setStatus('Message could not be sent. Please try again or email directly.')
    }
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Let us build something useful">
      <div className="contact-grid">
        <div className="contact-info">
          <a href={`mailto:${profile.email}`}><FaEnvelope /> {profile.email}</a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`}><FaPhoneAlt /> {profile.phone}</a>
          <span><FaMapMarkerAlt /> {profile.location}</span>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="from_name" placeholder="Name" required />
          <input name="from_email" type="email" placeholder="Email" required />
          <input name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Message" rows="5" required />
          <button className="button primary" type="submit">
            <FaPaperPlane /> Send Message
          </button>
          <p aria-live="polite">{status}</p>
        </form>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <img className="footer-logo" src="/logo.png" alt="Ankesh Kumar logo" />
        <p>Copyright 2026 Ankesh Kumar. All rights reserved.</p>
      </div>
      <div className="footer-links">
        {navItems.slice(0, 5).map((item) => (
          <a key={item} href={`#${item}`}>{item}</a>
        ))}
      </div>
      <a className="back-top" href="#home" aria-label="Back to top">
        <FaArrowUp />
      </a>
    </footer>
  )
}

function AnimatedCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const onMove = (event) => setPos({ x: event.clientX, y: event.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return <div className="cursor" style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }} />
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('dark')
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 950)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <AnimatedCursor />
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
