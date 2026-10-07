import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Github,
  Globe,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Send,
  Server,
  Sparkles,
  X,
  Zap,
} from 'lucide-react'
import {
  about,
  contact,
  experience,
  navItems,
  projects,
  services,
  skills,
  stats,
} from './data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <motion.div
      className="section-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  )
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="navbar">
        <div className="container nav-inner">
          <button className="brand" onClick={() => scrollTo('home')} aria-label="Go home">
            <span className="brand-mark">P</span>
            <span>PRASHANT<span className="brand-dot">.</span></span>
          </button>

          <nav className="desktop-nav">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>

          <button className="nav-cta" onClick={() => scrollTo('contact')}>
            Let's Talk <ArrowUpRight size={16} />
          </button>

          <button
            className="menu-button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {navItems.map((item) => (
                <button key={item.id} onClick={() => scrollTo(item.id)}>
                  {item.label}
                </button>
              ))}
              <button className="mobile-contact" onClick={() => scrollTo('contact')}>
                Let's Talk <ArrowUpRight size={16} />
              </button>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <motion.div
              className="hero-copy"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.div variants={fadeUp} className="availability">
                <span className="pulse" /> Available for freelance projects
              </motion.div>

              <motion.h1 variants={fadeUp}>
                Building digital
                <span className="gradient-text"> products that work.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="hero-text">
                I'm Prashant, a Java & Full-Stack Developer focused on building reliable
                backends, clean React interfaces, and production-ready web applications.
              </motion.p>

              <motion.div variants={fadeUp} className="hero-actions">
                <button className="button button-primary" onClick={() => scrollTo('projects')}>
                  View My Work <ArrowUpRight size={18} />
                </button>
                <a className="button button-secondary" href="/resume.pdf" download>
                  Download Resume
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="hero-trust">
                <span>Specialized in</span>
                <strong>Java</strong>
                <strong>Spring Boot</strong>
                <strong>React</strong>
                <strong>PostgreSQL</strong>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="code-card">
                <div className="code-topbar">
                  <div className="window-dots"><i /><i /><i /></div>
                  <span>developer.java</span>
                </div>
                <pre><code>
<span className="code-purple">public class</span> <span className="code-blue">Developer</span> {'{'}
{'\n'}  <span className="code-purple">private</span> String name = <span className="code-green">"Prashant"</span>;
{'\n'}  <span className="code-purple">private</span> String[] stack = {'{'}
{'\n'}    <span className="code-green">"Java"</span>, <span className="code-green">"Spring Boot"</span>,
{'\n'}    <span className="code-green">"React"</span>, <span className="code-green">"PostgreSQL"</span>
{'\n'}  {'}'};
{'\n'}
{'\n'}  <span className="code-purple">public</span> <span className="code-blue">String</span> build() {'{'}
{'\n'}    <span className="code-purple">return</span> <span className="code-green">"Ideas → Products"</span>;
{'\n'}  {'}'}
{'\n'}{'}'}
                </code></pre>
                <div className="code-badge">
                  <Zap size={16} /> Clean code. Real results.
                </div>
              </div>
              <div className="floating-card floating-card-one">
                <Code2 size={19} />
                <div><strong>Full-Stack</strong><span>Development</span></div>
              </div>
              <div className="floating-card floating-card-two">
                <CheckCircle2 size={19} />
                <div><strong>Production</strong><span>Ready</span></div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="stats-strip">
          <div className="container stats-grid">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <div className="container about-grid">
            <div className="about-visual">
              <div className="portrait-placeholder">
                <div className="portrait-letter">P</div>
                <span>JAVA • REACT • API</span>
              </div>
              <div className="about-note">
                <Sparkles size={18} />
                <span>Turning complex requirements into simple experiences.</span>
              </div>
            </div>
            <div className="about-copy">
              <SectionHeading
                eyebrow="About me"
                title="A developer who cares about the details."
                text={about}
              />
              <div className="mini-points">
                <div><CheckCircle2 size={18} /><span>Scalable backend architecture</span></div>
                <div><CheckCircle2 size={18} /><span>Responsive, accessible UI</span></div>
                <div><CheckCircle2 size={18} /><span>Clean APIs & database design</span></div>
                <div><CheckCircle2 size={18} /><span>Git-based development workflow</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="My toolkit"
              title="Technologies I work with"
              text="A practical stack for taking a product from database to browser."
            />
            <div className="skills-grid">
              {skills.map((skill) => (
                <motion.div
                  className="skill-card"
                  key={skill.name}
                  whileHover={{ y: -5 }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <h3>{skill.name}</h3>
                  <p>{skill.items.join(' · ')}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <SectionHeading
              eyebrow="What I do"
              title="Services for your next project"
              text="From a focused feature to a complete web application, I can help turn your idea into a working product."
            />
            <div className="services-grid">
              {services.map((service, index) => (
                <motion.article
                  className="service-card"
                  key={service.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  <span className="service-number">0{index + 1}</span>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-tags">
                    {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects that solve real problems"
              text="Replace these demo details with your live projects, screenshots and GitHub repositories."
            />
            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.article
                  className="project-card"
                  key={project.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  <div className={`project-cover cover-${index + 1}`}>
                    <div className="project-cover-top">
                      <span>{project.category}</span>
                      <ExternalLink size={18} />
                    </div>
                    <div className="project-cover-icon">{project.icon}</div>
                    <div className="project-grid-lines" />
                  </div>
                  <div className="project-content">
                    <div className="project-heading">
                      <div>
                        <h3>{project.title}</h3>
                        <span>{project.subtitle}</span>
                      </div>
                      <span className="project-year">{project.year}</span>
                    </div>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                    </div>
                    <div className="project-links">
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Live Demo <ArrowUpRight size={16} />
                      </a>
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github size={16} /> GitHub
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container experience-grid">
            <SectionHeading
              eyebrow="Experience"
              title="How I approach projects"
              text="A straightforward process keeps development transparent and focused."
            />
            <div className="timeline">
              {experience.map((item, index) => (
                <motion.div
                  className="timeline-item"
                  key={item.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="timeline-dot">{index + 1}</span>
                  <div>
                    <span className="timeline-label">{item.label}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-card">
              <div className="contact-copy">
                <span className="eyebrow">Let's work together</span>
                <h2>Have an idea? <span>Let's build it.</span></h2>
                <p>
                  Tell me what you're building, what problem you need solved, and where you
                  want to go. I'll get back to you with the next steps.
                </p>
                <div className="contact-details">
                  <a href={`mailto:${contact.email}`}><Mail size={18} /> {contact.email}</a>
                  <a href={`tel:${contact.phone}`}><Phone size={18} /> {contact.phone}</a>
                </div>
              </div>
              <form
                className="contact-form"
                onSubmit={(event) => {
                  event.preventDefault()
                  const data = new FormData(event.currentTarget)
                  const subject = encodeURIComponent(`Freelance enquiry from ${data.get('name')}`)
                  const body = encodeURIComponent(
                    `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`,
                  )
                  window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
                }}
              >
                <label>
                  Your name
                  <input name="name" placeholder="John Doe" required />
                </label>
                <label>
                  Email address
                  <input name="email" type="email" placeholder="john@example.com" required />
                </label>
                <label>
                  Tell me about your project
                  <textarea name="message" rows="5" placeholder="I need help building..." required />
                </label>
                <button className="button button-primary" type="submit">
                  Send Enquiry <Send size={17} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <button className="brand" onClick={() => scrollTo('home')}>
              <span className="brand-mark">P</span>
              <span>PRASHANT<span className="brand-dot">.</span></span>
            </button>
            <p>Java & Full-Stack Developer building useful things for the web.</p>
          </div>
          <div className="socials">
            <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href={`mailto:${contact.email}`} aria-label="Email"><Mail /></a>
          </div>
          <span className="copyright">© {new Date().getFullYear()} Prashant Singh. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
