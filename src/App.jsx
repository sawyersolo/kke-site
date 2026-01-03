import { useEffect, useMemo, useState } from 'react'
import Seo from './components/Seo.jsx'

function StickyQuoteCTA(){
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0
      setShow(y > 80)
      if (y <= 80) setOpen(false)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={"sticky-cta " + (show ? "is-visible" : "")}>
      <button className={"cta-pill " + (open ? "is-open" : "")} onClick={() => setOpen(v => !v)}>
        <span className="cta-dot" aria-hidden="true"></span>
        <span className="cta-text">Get a quote now</span>
        <span className="cta-caret" aria-hidden="true">▾</span>
      </button>
      {open && (
        <div className="cta-menu" role="menu" aria-label="Phone numbers">
          <a role="menuitem" href="tel:6047045089">Call / Text: 604-704-5089</a>
          <a role="menuitem" href="tel:2365125307">Call: 236-512-5307</a>
        </div>
      )}
    </div>
  )
}

function ScrollPill(){
  return (
    <div className="scroll-pill" aria-hidden="true">
      <span>SCROLL</span>
    </div>
  )
}

function Lightbox({src, alt, onClose}){
  if(!src) return null;
  return (
    <div className="lightbox" onClick={onClose}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default function App(){
  const [lb, setLb] = useState(null);

  const projects = useMemo(() => ([
    { img: "/gallery/project_1.png", title: "Custom soffit & fascia", meta: "Modern residence • clean lines" },
    { img: "/gallery/project_2.png", title: "Roof cap system", meta: "Commercial detail • durable finish" },
    { img: "/gallery/project_3.png", title: "Architectural roofline", meta: "Soffit detail • precision fit" },
    { img: "/gallery/project_4.png", title: "Metal siding install", meta: "Residential • new build" },
    { img: "/gallery/project_5.png", title: "Commercial exterior", meta: "Large-scale • consistent panels" },
    { img: "/gallery/project_6.png", title: "Vertical panel siding", meta: "Modern profile • crisp seams" },
    { img: "/gallery/project_7.png", title: "Covered soffit detail", meta: "Finish work • clean lighting" },
  ]), [])

  return (
    <>
      <Seo
        title="Klassen Kustom Exteriors | Metal Soffit & Metal Siding BC"
        description="Premium metal soffit, siding, roof caps, and trim systems built for BC weather. Clean installs and clear communication."
      />

      <StickyQuoteCTA />
      <ScrollPill />

      <div className="bg-fixed" aria-hidden="true"></div>
      <div className="bg-overlay" aria-hidden="true"></div>

      <header className="hero-wrap fade-hero" id="top">
        <div className="hero-inner">
          <div className="hero-card">
            <div className="brand-row">
              <img className="brand-logo" src="/brand/logo.png" alt="Klassen Kustom Exteriors LTD logo" />
              <div className="brand-actions">
                <a className="btn ghost" href="#gallery">View Work</a>
                <a className="btn solid" href="#contact">Request Quote</a>
              </div>
            </div>

            <div className="hero-grid">
              <div className="hero-copy">
                <h1>Metal Exteriors, Done Right</h1>
                <p className="lead">
                  Metal soffit, siding, fascia, roof caps, and custom trims built to last BC weather — installed clean,
                  communicated clearly.
                </p>
                <div className="trust-strip" aria-label="Key service highlights">
                  <div className="trust-item"><span className="k">24‑Gauge</span><span className="v">Steel</span></div>
                  <div className="trust-item"><span className="k">Low</span><span className="v">Maintenance</span></div>
                  <div className="trust-item"><span className="k">BC</span><span className="v">residential & commercial</span></div>
                </div>
              </div>

              <div className="hero-media">
                <div className="media-card">
                  <img src={projects[0].img} alt="Featured project" />
                  <div className="media-caption">
                    <div className="t">{projects[0].title}</div>
                    <div className="m">{projects[0].meta}</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      <main className="page">

        <section className="section split" id="mission">
          <div className="container wide split-grid">
            <div className="split-text">
              <h2>Built for harsh weather. Finished with precision.</h2>
              <p>
                We specialize in exterior metal systems that look sharp and stay sharp — long term.
                Expect disciplined installs, tight details, and consistent communication from quote to completion.
              </p>
              <div className="pill-row">
                <span className="pill">Metal soffit & siding</span>
                <span className="pill">Fascia & trims</span>
                <span className="pill">Roof caps</span>
                <span className="pill">Vent covers</span>
                <span className="pill">Custom fabrication</span>
              </div>
            </div>

            <div className="split-media">
              <div className="img-stack">
                <img className="img-a" src={projects[2].img} alt="Project detail" />
                <img className="img-b" src={projects[6].img} alt="Project detail" />
              </div>
            </div>
          </div>
        </section>

        <section className="section catalog" id="services">
          <div className="container wide">
            <div className="section-head">
              <h2>Services</h2>
              <p className="sub">High-quality exterior metalwork for homeowners and builders across British Columbia.</p>
            </div>

            <div className="catalog-grid">
              <article className="catalog-card">
                <div className="catalog-media">
                  <img src={projects[3].img} alt="Metal siding project" />
                </div>
                <div className="catalog-body">
                  <h3>Metal Siding</h3>
                  <p>Clean profiles, consistent seams, and durable finishes that hold up in BC conditions.</p>
                  <ul>
                    <li>Vertical and panel styles</li>
                    <li>Woodgrain and solid colours</li>
                    <li>Residential & commercial</li>
                  </ul>
                </div>
              </article>

              <article className="catalog-card reverse">
                <div className="catalog-media">
                  <img src={projects[1].img} alt="Roof cap project" />
                </div>
                <div className="catalog-body">
                  <h3>Roof Caps & Flashing</h3>
                  <p>Precision fit for clean rooflines, weatherproof performance, and a sharp finished look.</p>
                  <ul>
                    <li>Custom roof caps</li>
                    <li>Chimney caps & vent covers</li>
                    <li>Detail trims & transitions</li>
                  </ul>
                </div>
              </article>

              <article className="catalog-card">
                <div className="catalog-media">
                  <img src={projects[0].img} alt="Soffit and fascia project" />
                </div>
                <div className="catalog-body">
                  <h3>Soffit, Fascia & Trims</h3>
                  <p>Low maintenance and easy to clean — a long-term, cost-effective investment in your exterior.</p>
                  <ul>
                    <li>Metal soffit systems</li>
                    <li>Fascia panels</li>
                    <li>Window & door coverings</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="container wide">
            <div className="section-head row">
              <div>
                <h2>Project Gallery</h2>
                <p className="sub">A few recent examples of our metal siding, soffit, and roof cap work.</p>
              </div>
              <a className="btn solid" href="#contact">Get a Quote</a>
            </div>

            <div className="masonry">
              {projects.map((p, idx) => (
                <figure onClick={() => setLb({src: p.img, alt: p.title})}
                  className={"m-item " + (idx % 6 === 0 ? "tall" : idx % 6 === 3 ? "wide" : "")}
                  key={p.img}
                >
                  <img src={p.img} alt={p.title} loading="lazy" />
                  <figcaption>
                    <div className="cap-title">{p.title}</div>
                    <div className="cap-meta">{p.meta}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonials" id="testimonials">
          <div className="container">
            <div className="section-head">
              <h2>What clients say</h2>
              <p className="sub">Clear communication and clean installs — that’s what gets remembered.</p>
            </div>

            <div className="quote-grid">
              <blockquote className="q">
                “Clean install, clear pricing, and the metal finish looks excellent. Would hire again.”
                <footer>— Homeowner, Lower Mainland</footer>
              </blockquote>
              <blockquote className="q">
                “Reliable scheduling and professional work. Easy to coordinate with our build timeline.”
                <footer>— Builder, BC</footer>
              </blockquote>
              <blockquote className="q">
                “Attention to detail was top-notch. The roofline and soffit finish came out sharp.”
                <footer>— Homeowner, BC</footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container wide contact-grid">
            <div className="contact-card">
              <h2>Get a free quote</h2>
              <p className="sub">Tell us what you’re building — we’ll reply quickly with next steps.</p>
              <form className="form" name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <input name="name" placeholder="Name" required />
                <input name="email" placeholder="Email" required />
                <input name="phone" placeholder="Phone" />
                <textarea name="message" placeholder="Tell us about your project" required></textarea>
                <button className="btn solid">Send Request</button>
              </form>

              <div className="phones">
                <a href="tel:6047045089">604-704-5089</a>
                <span className="sep">•</span>
                <a href="tel:2365125307">236-512-5307</a>
              </div>
            </div>

            <div className="map-card">
              <iframe
                title="Service Area Map"
                src="https://www.google.com/maps?q=British%20Columbia%20Canada&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="map-caption">Serving the Lower Mainland and communities across British Columbia</div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container wide footer-inner">
            <div className="footer-brand">
              <img src="/brand/logo.png" alt="Klassen Kustom Exteriors LTD" />
            </div>
            <div className="footer-links">
              <a href="#services">Services</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-meta">
              <div>Klassen Kustom Exteriors LTD</div>
              <div><a href="tel:6047045089">604-704-5089</a></div>
            </div>
          </div>
        </footer>

      <Lightbox src={lb?.src} alt={lb?.alt} onClose={() => setLb(null)} />

      </main>
    </>
  )
}
