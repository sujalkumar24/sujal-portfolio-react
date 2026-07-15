import Nav from '../components/Nav'
import Marquee from '../components/Marquee'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Home() {
  useScrollReveal()

  return (
    <div>
      <Nav />

      {/* HERO */}
      <header className="hero">
        <div className="hero-top">
          <h1 className="hero-name">
            <span>SUJAL</span>
            <span>
              KUM<span className="accent-i">A</span>R
            </span>
          </h1>
          <div className="hero-meta">
            Based in <b>India</b>
            <br />
            Available for freelance
            <br />
            <b>2026</b>
          </div>
        </div>

        <div className="hero-role">
          <span>Full Stack Developer</span>
          <span className="divider-x">&amp;</span>
          <span>AI Engineer</span>
        </div>

        <div className="hero-bottom">
          <div className="hero-status">
            <span>
              <i className="dot"></i>Available for Freelance
            </span>
            <span>
              <i className="dot"></i>Open Source
            </span>
            <span>
              <i className="dot"></i>Building AI Products
            </span>
          </div>
          <div className="hero-links">
            <a href="https://github.com" target="_blank" rel="noopener">
              Github
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener">
              LinkedIn
            </a>
            <a href="#" download>
              Resume
            </a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="scroll-cue">
          <span className="arrow">↓</span>
          Scroll
        </div>
      </header>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="wrap">
          <div className="eyebrow reveal">01 — About</div>
          <h2 className="section-title reveal">
            Who<br />
            <span className="thin">I Am.</span>
          </h2>

          <div className="about-grid">
            <div className="about-text reveal">
              <p>
                I'm Sujal Kumar, a Full Stack MERN Developer passionate about AI, scalable backend systems, and modern
                frontend experiences. I enjoy transforming ideas into real-world products using React, Next.js, Node.js,
                and AI technologies.
              </p>
            </div>

            <div className="about-cols reveal">
              <div>
                <h4>What I am</h4>
                <ul>
                  <li>Developer</li>
                  <li>Problem Solver</li>
                  <li>AI Builder</li>
                </ul>
              </div>
              <div>
                <h4>How I build</h4>
                <ul>
                  <li>Clean Code</li>
                  <li>Scalable Architecture</li>
                  <li>Modern UI</li>
                  <li>Performance First</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I BUILD */}
      <section className="section" id="work">
        <div className="wrap">
          <div className="eyebrow reveal">02 — Capabilities</div>
          <h2 className="section-title reveal">
            What<br />
            <span className="thin">I Build.</span>
          </h2>
          <p className="build-desc reveal">
            I create digital products that combine elegant design with scalable engineering, from AI assistants and SaaS
            platforms to dashboards and developer tools.
          </p>
          <div className="build-grid reveal">
            <div className="build-item">AI Applications</div>
            <div className="build-item">Full Stack Apps</div>
            <div className="build-item">Dashboards</div>
            <div className="build-item">REST APIs</div>
            <div className="build-item">Authentication</div>
            <div className="build-item">Responsive Websites</div>
            <div className="build-item">Developer Tools</div>
            <div className="build-item">Automation</div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="wrap">
          <div className="eyebrow reveal">03 — Toolkit</div>
          <h2 className="section-title reveal">
            Tools I'm<br />
            <span className="thin">Fluent In.</span>
          </h2>

          <div className="skills-grid">
            <div className="skill-card reveal">
              <h4>
                <span className="n">01</span> Frontend
              </h4>
              <div className="skill-tags">
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Framer Motion</span>
              </div>
            </div>

            <div className="skill-card reveal">
              <h4>
                <span className="n">02</span> Backend
              </h4>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">Firebase</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>

            <div className="skill-card reveal">
              <h4>
                <span className="n">03</span> AI
              </h4>
              <div className="skill-tags">
                <span className="skill-tag">OpenAI APIs</span>
                <span className="skill-tag">Gemini API</span>
                <span className="skill-tag">Prompt Engineering</span>
                <span className="skill-tag">AI Chatbots</span>
              </div>
            </div>

            <div className="skill-card reveal">
              <h4>
                <span className="n">04</span> DevOps
              </h4>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Vercel</span>
                <span className="skill-tag">Netlify</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="wrap">
          <div className="eyebrow reveal">04 — Journey</div>
          <h2 className="section-title reveal">
            Where I've<br />
            <span className="thin">Learned.</span>
          </h2>

          <div className="timeline reveal">
            <div className="tl-item">
              <div className="tl-year">2025 — Present</div>
              <div>
                <div className="tl-role">AI Career Coach</div>
              </div>
              <div className="tl-desc">
                Built an AI-powered career platform with resume generation, interview preparation, and industry insights.
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-year">2025</div>
              <div>
                <div className="tl-role">Freelance Developer</div>
              </div>
              <div className="tl-desc">Designed and developed responsive websites and dashboards for clients.</div>
            </div>

            <div className="tl-item">
              <div className="tl-year">2024</div>
              <div>
                <div className="tl-role">Started MERN Stack Journey</div>
              </div>
              <div className="tl-desc">Built multiple full-stack projects and mastered React, Node.js, and MongoDB.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS — DARK */}
      <section className="dark-section">
        <div className="wrap section" style={{ paddingBottom: 0 }}>
          <div className="eyebrow reveal">05 — Selected Work</div>
          <h2 className="section-title reveal">
            Featured<br />
            <span className="thin">Projects.</span>
          </h2>
        </div>

        <div className="wrap">
          <div className="project-card reveal">
            <div>
              <div className="project-index">01 / 03</div>
            </div>
            <div>
              <div className="project-name">Hero AI</div>
              <div className="project-tags">
                <span>AI Career Coach</span>
                <span>Resume Builder</span>
                <span>Interview Prep</span>
                <span>Industry Insights</span>
                <span>Authentication</span>
                <span>Dashboard</span>
              </div>
              <div className="project-links">
                <a href="#">Live Demo →</a>
                <a href="#">Github →</a>
                <a href="#">Case Study →</a>
              </div>
            </div>
          </div>

          <div className="project-card reveal">
            <div>
              <div className="project-index">02 / 03</div>
            </div>
            <div>
              <div className="project-name">Portfolio</div>
              <div className="project-tags">
                <span>Next.js</span>
                <span>Framer Motion</span>
                <span>Responsive</span>
                <span>Minimal Design</span>
              </div>
              <div className="project-links">
                <a href="#">Live Demo →</a>
                <a href="#">Github →</a>
              </div>
            </div>
          </div>

          <div className="project-card reveal">
            <div>
              <div className="project-index">03 / 03</div>
            </div>
            <div>
              <div className="project-name">AI Chatbot</div>
              <div className="project-tags">
                <span>Gemini API</span>
                <span>Chat Interface</span>
                <span>Markdown Support</span>
                <span>Streaming Response</span>
              </div>
              <div className="project-links">
                <a href="#">Live Demo →</a>
                <a href="#">Github →</a>
              </div>
            </div>
          </div>
        </div>

        {/* NUMBERS */}
        <div className="numbers-strip reveal">
          <div className="num-item">
            <div className="num">15+</div>
            <div className="label">Projects</div>
          </div>
          <div className="num-item">
            <div className="num">3+</div>
            <div className="label">AI Applications</div>
          </div>
          <div className="num-item">
            <div className="num">50+</div>
            <div className="label">GitHub Contributions</div>
          </div>
          <div className="num-item">
            <div className="num">24/7</div>
            <div className="label">Learning</div>
          </div>
        </div>
      </section>

      {/* TECH MARQUEE */}
      <Marquee />

      {/* CONTACT — DARK */}
      <section className="dark-section section" id="contact">
        <div className="wrap">
          <div className="eyebrow reveal">06 — Contact</div>
          <h2 className="contact-title reveal">
            Let's Create<br />
            Something<br />
            <span style={{ color: 'var(--accent-dark)' }}>Amazing.</span>
          </h2>
          <p className="contact-desc reveal">
            I'm always open to discussing new opportunities, freelance work, and exciting AI projects.
          </p>
          <div className="contact-links reveal">
            <a className="cbtn primary" href="mailto:sujalshaw7674@gmail.com">
              Email →
            </a>
            <a className="cbtn" href="https://github.com" target="_blank" rel="https://github.com/sujalkumar24">
              Github
            </a>
            <a className="cbtn" href="https://linkedin.com" target="_blank" rel="https://www.linkedin.com/in/sujal-kumar-092366122/">
              LinkedIn
            </a>
            <a className="cbtn" href="https://drive.google.com/file/d/1gyIxKZcp93_xKTarYM6YkiYfQQn_JwOa/view?usp=sharing" download>
              Resume
            </a>
          </div>
        </div>
      </section>

      <footer className="footer dark-section">
        <div>Sujal Kumar — Full Stack Developer, India, 2026</div>
        <div>Designed &amp; developed by Sujal Kumar.</div>
      </footer>
    </div>
  )
}

