import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import '../App.css';

const values = [
  [
    'Practical',
    'Built around the real decisions farmers face at the farm gate: when to sell, at what price, and whether a season made money.',
  ],
  [
    'Simple',
    'No accounts, no dashboards to learn. One calculator, a handful of inputs, and an honest answer in seconds.',
  ],
  [
    'Transparent',
    'Every number we compute is shown with its formula. Nothing is hidden and nothing is estimated for you.',
  ],
];

function About() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <span className="overline">About</span>
          <h1 className="section-heading" style={{ marginTop: 8 }}>
            Pricing knowledge for every farmer
          </h1>
          <p style={{ maxWidth: 640 }}>
            TAMAsang KITA started from a simple observation: farmers often know their
            yields, but rarely know whether the price they are offered actually
            covers their costs. We built a calculator to close that gap.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="subhead" style={{ marginBottom: 24 }}>
            What we believe
          </h2>
          <div className="grid-3">
            {values.map(([title, desc], i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="card card-hover">
                  <div className="card-content">
                    <h3 className="subhead" style={{ marginBottom: 8 }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: 14, color: '#6b6b6b', margin: 0 }}>
                      {desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="card">
              <div className="card-content" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ maxWidth: 520 }}>
                  <h3 className="subhead" style={{ marginBottom: 8 }}>
                    Ready to price your harvest?
                  </h3>
                  <p style={{ fontSize: 14, color: '#6b6b6b', margin: 0 }}>
                    Open the calculator and run your numbers in under a minute.
                  </p>
                </div>
                <Link to="/price-calculator" className="btn btn-primary btn-lg">
                  Open the Calculator
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default About;
