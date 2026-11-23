import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BicepsFlexed, Crosshair, Dumbbell, Gauge, Instagram, Laptop, MapPin, Menu, Mountain, Quote, X, Zap } from 'lucide-react'
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { coachProfile, consultation, instagram, navigation, posts, programs, services, testimonials, threads } from './content'

const serviceIcons = [Zap, Laptop, Dumbbell, BicepsFlexed, Crosshair]
const programIcons = [Mountain, Zap, Gauge]

function Brand() {
  return (
    <Link to="/" aria-label="Banx Performance home" className="brand">
      <img src="/media/banx.svg" alt="" width="35" height="32" />
      <span><strong>BANX</strong><small>PERFORMANCE</small></span>
    </Link>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Brand />
        <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        <nav className={open ? 'site-nav is-open' : 'site-nav'} id="site-nav" aria-label="Main navigation" onKeyDown={(event) => { if (event.key === 'Escape') setOpen(false) }}>
          {navigation.map(({ path, label }) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
        </nav>
        <Link className="button header-cta" to="/contact">Train with Banx <ArrowUpRight /></Link>
      </div>
    </header>
  )
}

function Overline({ children }: { children: ReactNode }) {
  return <p className="overline"><span aria-hidden="true" />{children}</p>
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-main">
          <div className="footer-identity"><div><Brand /><p>Strength & performance coaching.<br />Denver, Colorado · Online</p></div><img src="/media/emblem.webp" width="76" height="66" alt="" loading="lazy" /></div>
          <div className="footer-social">
            <a href={instagram}><Instagram size={16} /> Instagram <ArrowUpRight size={14} /></a>
            <a href={threads}>Threads <ArrowUpRight size={14} /></a>
          </div>
          <nav aria-label="Footer navigation">{navigation.map(({ path, label }) => <Link key={path} to={path}>{label}</Link>)}</nav>
        </div>
        <div className="footer-base"><small>© {new Date().getFullYear()} Banx Performance</small><small>Built for the work.</small></div>
      </div>
    </footer>
  )
}

function NextStep({ title = 'LET’S GET TO WORK.' }: { title?: string }) {
  return (
    <section className="next-step">
      <div className="shell next-inner">
        <div><Overline>Take the next step</Overline><h2>{title}</h2><p>Tell Coach Banx where you are and what you want to work toward.</p></div>
        <Link className="button" to="/contact">Let’s talk training <ArrowUpRight /></Link>
      </div>
    </section>
  )
}

function Home() {
  const featured = [
    { icon: Dumbbell, tag: '01 / IN PERSON', title: 'Personal training', description: 'Build strength with a coach who knows your goals and adapts the work as you progress.', path: '/services#personal-training' },
    { icon: Zap, tag: '02 / SPORT', title: 'Athletic performance', description: 'Get stronger, faster, and better prepared for the demands of your sport.', path: '/services#performance-training' },
    { icon: Laptop, tag: '03 / REMOTE', title: 'Online coaching', description: 'Get a plan built for you and the accountability to follow it, wherever you train.', path: '/services#custom-online-training' },
  ]
  return (
    <>
      <section className="hero">
        <img className="hero-photo" src="/media/hero.webp" alt="" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="shell hero-content">
          <Overline>Strength & performance coaching</Overline>
          <h1>TRAIN WITH<br /><em>PURPOSE.</em></h1>
          <p>Build strength, move faster, and show up ready. Train with Coach Banx in Denver or get a plan you can follow from anywhere.</p>
          <div className="hero-actions">
            <Link to="/services" className="button">Explore coaching <ArrowUpRight /></Link>
            <Link to="/programs" className="button outline">View programs <ArrowRight /></Link>
          </div>
          <a className="hero-location" href="#training"><ArrowDown size={15} /> Denver, CO <span /> Online coaching</a>
        </div>
        <div className="hero-mark" aria-hidden="true"><Crosshair size={21} /><span>01 / BANX PERFORMANCE</span></div>
      </section>
      <div className="values-strip" aria-label="Banx core values">
        <div className="shell values-inner">
          {['Belief', 'Accountability', 'Toughness', 'Dedication'].map((value) => <span key={value}><i aria-hidden="true" />{value}</span>)}
        </div>
      </div>
      <section className="section shell" id="training">
        <div className="section-intro">
          <div><Overline>01 / Find your fit</Overline><h2>WAYS TO TRAIN.</h2></div>
          <p>Get a plan that fits what you want to do, whether that’s lifting with confidence, getting faster for your sport, or keeping your training consistent on your own.</p>
        </div>
        <div className="card-grid">
          {featured.map(({ icon: Icon, tag, title, description, path }) => (
            <Link to={path} className="feature-card" key={title}>
              <div className="card-top"><span className="card-icon"><Icon size={24} strokeWidth={1.7} /></span><ArrowUpRight className="card-arrow" size={20} /></div>
              <div><p className="tag">{tag}</p><h3>{title}</h3><p>{description}</p></div>
            </Link>
          ))}
        </div>
      </section>
      <section className="coach-section section" aria-labelledby="coach-heading">
        <div className="shell coach-grid">
          <figure className="coach-image"><img src="/media/coach.webp" alt="Banks Telkamp, Coach Banx" loading="lazy" /><figcaption>BANKS TELKAMP / CSCS</figcaption></figure>
          <div>
            <Overline>02 / Meet the coach</Overline>
            <h2 id="coach-heading">I’M COACH <em>BANX.</em></h2>
            <p>I’m Banks Telkamp, a Certified Strength and Conditioning Specialist. I take what works in exercise science and turn it into training you can repeat, measure, and build on.</p>
            <p>In Denver, I coach out of Core Progression Elite Personal Training at Sloan’s Lake. If you’re not local, we can work together online.</p>
            <a href={coachProfile} className="text-link">See my coaching profile <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </section>
      <section className="section shell testimonials">
        <div className="section-intro"><div><Overline>03 / Athlete feedback</Overline><h2>FROM THE PEOPLE<br /> DOING THE WORK.</h2></div></div>
        <div className="card-grid">
          {testimonials.map(({ name, quote }) => <figure key={name} className="quote-card"><Quote size={26} /><blockquote>{quote}</blockquote><figcaption>— {name}</figcaption></figure>)}
        </div>
      </section>
      <NextStep />
    </>
  )
}

function PageIntro({ kicker, title, accent, children }: { kicker: string; title: string; accent?: string; children: ReactNode }) {
  return (
    <section className="page-intro">
      <div className="shell">
        <Overline>{kicker}</Overline>
        <h1>{title}{accent && <> <em>{accent}</em></>}</h1>
        <p>{children}</p>
      </div>
    </section>
  )
}

function Services() {
  return (
    <>
      <PageIntro kicker="Coaching services" title="BUILT AROUND" accent="YOU.">Choose individual coaching for your goals, from strength and conditioning to speed development and a return to sport.</PageIntro>
      <section className="section shell" aria-label="Coaching options">
        <div className="service-list">
          {services.map(({ title, tag, description, url }, index) => {
            const Icon = serviceIcons[index]
            return (
              <article className="service-row" key={title} id={title.toLowerCase().replaceAll(' ', '-')}>
                <span className="card-icon"><Icon size={25} strokeWidth={1.7} /></span>
                <div><p className="tag">{tag}</p><h2>{title}</h2></div>
                <p>{description}</p>
                {url ? <a href={url} className="text-link">Get started <ArrowUpRight size={17} /></a> : <Link className="text-link" to="/contact">Ask about online coaching <ArrowUpRight size={17} /></Link>}
              </article>
            )
          })}
        </div>
        <aside className="consult-box"><div><h2>NOT SURE WHERE TO START?</h2><p>Book a consultation to talk through your goals with Coach Banx.</p></div><a href={consultation} className="button">Book a consult <ArrowUpRight /></a></aside>
      </section>
    </>
  )
}

function Programs() {
  return (
    <>
      <PageIntro kicker="Plug & play programs" title="A PLAN YOU CAN" accent="FOLLOW.">Prefer to train on your own? Choose a ready-to-follow program based on what you want to get better at.</PageIntro>
      <section className="section shell">
        <div className="section-intro"><div><Overline>Choose your focus</Overline><h2>THREE WAYS TO START.</h2></div><p>Plans are available through Trainerize. Check the checkout page for current pricing and enrollment details.</p></div>
        <div className="card-grid">
          {programs.map(({ name, goal, description, url }, index) => {
            const Icon = programIcons[index]
            return <article className="program-card" key={name}>
              <div className="card-top"><span className="card-icon"><Icon size={25} strokeWidth={1.7} /></span><span className="tag">PLAN / 0{index + 1}</span></div>
              <p className="tag">{goal}</p><h3>{name}</h3><p>{description}</p>
              <a className="text-link" href={url}>View {name} <ArrowUpRight size={17} /></a>
            </article>
          })}
        </div>
      </section>
      <NextStep title="NEED A CUSTOM PLAN?" />
    </>
  )
}

function Blog() {
  return (
    <>
      <PageIntro kicker="The training journal" title="BETTER QUESTIONS." accent="BETTER TRAINING.">Coach Banx on speed, strength, and how to apply both in the gym and on the field.</PageIntro>
      <section className="section shell" aria-label="Latest articles">
        <div className="section-intro"><div><Overline>From the journal</Overline><h2>LATEST ARTICLES.</h2></div></div>
        <div className="card-grid">
          {posts.map(({ slug, image, category, title, intro }) => <article className="blog-card" key={slug}>
            <Link to={'/blog/' + slug} className="blog-link">
              <img src={'/media/' + image} alt="" loading="lazy" />
              <div><p className="tag">{category}</p><h3>{title}</h3><p>{intro}</p><span className="text-link">Read article <ArrowUpRight size={17} /></span></div>
            </Link>
          </article>)}
        </div>
      </section>
      <NextStep />
    </>
  )
}

function Article() {
  const { slug } = useParams()
  const post = posts.find((item) => item.slug === slug)
  if (!post) return <NotFound />
  return (
    <>
      <PageIntro kicker={post.category + ' / ' + post.date} title={post.title}>{post.intro}</PageIntro>
      <article className="section shell article">
        <Link className="text-link" to="/blog"><ArrowLeft size={17} /> Back to the journal</Link>
        <p className="tag">Written by Johan Telkamp</p>
        <img src={'/media/' + post.image} alt="" />
        {post.sections.map(({ title, body }) => <section key={title}><h2>{title}</h2><p>{body}</p></section>)}
      </article>
      <NextStep />
    </>
  )
}

function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'invalid' | 'error'>('idle')
  const sending = status === 'sending'

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (sending) return
    const form = event.currentTarget
    const body = Object.fromEntries(new FormData(form))
    setStatus('sending')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (response.ok && (await response.json()).ok === true) {
        form.reset()
        setStatus('success')
      } else {
        setStatus(response.status === 400 ? 'invalid' : 'error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageIntro kicker="Contact Coach Banx" title="LET’S TALK" accent="TRAINING.">Tell me what you’re working toward, what’s getting in the way, and where you’d like to start.</PageIntro>
      <div className="section shell contact-grid">
        <section className="contact-details">
          <Overline>Denver & online</Overline><h2>GET IN TOUCH.</h2>
          <p>Have a question about working together? Send a note or book a consultation to talk through your goals.</p>
          <div className="contact-location"><MapPin size={22} /><div><h3>In-person coaching</h3><p>Core Progression Elite Personal Training<br />Sloan’s Lake · Denver, Colorado</p></div></div>
          <a className="text-link" href={consultation}>Book a consultation <ArrowUpRight size={17} /></a>
          <a className="text-link" href={instagram}>Find @coachbanx on Instagram <ArrowUpRight size={17} /></a>
        </section>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>WRITE A MESSAGE.</h2><p>Tell me a little about your goals so we can figure out where to start.</p>
          <label htmlFor="name">Name <span>(required)</span></label><input name="name" id="name" autoComplete="name" maxLength={120} required disabled={sending} />
          <label htmlFor="email">Email <span>(required)</span></label><input name="email" id="email" type="email" autoComplete="email" maxLength={254} required disabled={sending} />
          <label htmlFor="message">Message <span>(required)</span></label><textarea name="message" id="message" rows={5} maxLength={1500} required disabled={sending} />
          <div hidden><label htmlFor="website">Leave this field empty</label><input name="website" id="website" tabIndex={-1} autoComplete="off" /></div>
          <button className="button" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send message'} <ArrowUpRight /></button>
          {status === 'success' && <p className="form-status success" role="status">Thanks for reaching out. Your message was sent to Coach Banx.</p>}
          {status === 'invalid' && <p className="form-status error" role="alert">Check that your name, email, and message are filled in correctly.</p>}
          {status === 'error' && <p className="form-status error" role="alert">We couldn’t send your message. Please try again in a few minutes.</p>}
        </form>
      </div>
    </>
  )
}

function NotFound() {
  return <><PageIntro kicker="404 / Page not found" title="OFF" accent="TRACK.">We couldn’t find that page. Head back home to get your bearings.</PageIntro><div className="shell section"><Link to="/" className="button">Back to home <ArrowRight /></Link></div></>
}

export default function App() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const label = navigation.find(({ path }) => path === pathname)?.label ?? posts.find(({ slug }) => pathname === '/blog/' + slug)?.title ?? 'Page not found'
    document.title = pathname === '/' ? 'Banx Performance | Denver Strength & Performance Coaching' : label + ' | Banx Performance'
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
