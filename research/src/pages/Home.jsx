import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Tilt from '../components/Tilt';
import CountUp from '../components/CountUp';
import '../App.css';

const features = [
  {
    chip: 'Calculator',
    title: 'Farm-Gate Profit',
    desc: 'Estimate revenue, production cost and net profit per harvest — before you sell.',
    to: '/price-calculator',
  },
  {
    chip: 'Guide',
    title: 'Step-by-Step Tutorial',
    desc: 'Learn how to use the calculator correctly with a simple walkthrough.',
    to: '/tutorial',
  },
  {
    chip: 'Support',
    title: 'Talk to Us',
    desc: 'Questions about pricing models or inputs? Get in touch with the team.',
    to: '/contact',
  },
];

function Home() {
  return (
    <>
      <section className="hero hero-dark">
        <div className="container">
          <span className="overline">Agriculture · Pricing Tools</span>
          <h1 className="display" style={{ margin: '12px 0 20px' }}>
            Agricultural Product Price Calculator
          </h1>
          <p style={{ fontSize: 18 }}>
            TAMAsang KITA is a simple, free calculator for farmers and
            agribusinesses — estimate revenue, costs and profit for any crop
            before it leaves the farm gate.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
            <Link to="/price-calculator" className="cta-pill">
              <span>Calculator</span>
              <span className="nav-cta-arrow">→</span>
            </Link>
          </div>

          <div className="grid-2" style={{ marginTop: 64 }}>
            <Reveal variant="left">
              <div
                className="photo-card"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/hero-cta.gif)` }}
              />
            </Reveal>
            <Reveal variant="right" delay={100}>
              <div className="glass" style={{ minHeight: 280, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span
                  className="overline"
                  style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 12 }}
                >
                  Why price at the farm gate
                </span>
                <h3 className="subhead" style={{ marginBottom: 10 }}>
                  Sell with numbers, not guesswork
                </h3>
                <p style={{ fontSize: 15, margin: 0 }}>
                  Know your break-even quantity, test buyer offers and see your
                  profit margin before committing to a sale — all in one live
                  calculation.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="overline">Why TAMAsang KITA</span>
          <h2 className="section-heading" style={{ margin: '8px 0 32px' }}>
            Everything you need to price with confidence
          </h2>
          <div className="grid-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 100} variant={i === 0 ? 'left' : i === 2 ? 'right' : 'up'}>
                <Tilt>
                  <Link to={f.to} className="card card-hover card-glass" style={{ color: 'inherit', display: 'block', height: '100%' }}>
                    <div className="card-content">
                      <span className="chip">{f.chip}</span>
                      <h3 className="subhead" style={{ margin: '16px 0 8px' }}>
                        {f.title}
                      </h3>
                      <p style={{ fontSize: 14, color: '#6b6b6b', margin: 0 }}>
                        {f.desc}
                      </p>
                    </div>
                  </Link>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
            <Reveal variant="blur">
            <div className="card card-glass">
              <div className="card-content grid-3" style={{ textAlign: 'center' }}>
                {[
                  [<CountUp to={7} key="c" />, 'crops supported'],
                  [<CountUp to={4} key="u" />, 'selling units'],
                  [<CountUp to={100} key="f" suffix="%" />, 'free, forever'],
                ].map(([num, label], i) => (
                  <div key={label}>
                    <div
                      style={{
                        fontFamily: "'General Sans', sans-serif",
                        fontSize: 40,
                        fontWeight: 700,
                        letterSpacing: '-0.03em',
                        color: i === 2 ? 'var(--color-amber)' : '#ffffff',
                      }}
                    >
                      {num}
                    </div>
                    <span className="overline">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-3">
            {[
              ['0 cost', 'Completely free to use, no signup required'],
              ['Any crop', 'Grains, vegetables, livestock and more'],
              ['Live results', 'Instant breakdown as you type each value'],
            ].map(([title, desc], i) => (
              <Reveal key={title} delay={i * 100} variant="scale">
                <Tilt>
                  <div className="card card-8 card-glass">
                    <div className="card-content">
                      <h3 className="subhead" style={{ marginBottom: 8 }}>
                        {title}
                      </h3>
                      <p style={{ fontSize: 14, color: '#6b6b6b', margin: 0 }}>{desc}</p>
                    </div>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
