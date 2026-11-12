import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import '../App.css';

const steps = [
  [
    'Choose your crop and unit',
    'Pick the crop you are pricing and the unit it is sold in — kg, tonne, 50kg bag or crate. All quantities below use this unit.',
  ],
  [
    'Enter quantity and market price',
    'Type how much you expect to sell and the price per unit a buyer has offered. Revenue updates instantly as quantity × price.',
  ],
  [
    'Add your cost items',
    'Production covers seed, fertilizer and fuel; transport covers getting the harvest to the buyer; labor covers hired help. Replace these with your own numbers.',
  ],
  [
    'Read the result panel',
    'Net profit shows revenue minus total costs. The margin tells you profit per unit of revenue; break-even quantity is the minimum you must sell at this price to cover all costs.',
  ],
  [
    'Compare before you sell',
    'Change the price field to test different buyer offers, or adjust cost items to see how input prices affect your season. Try values from the tutorial above.',
  ],
];

function Tutorial() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <span className="overline">Tutorial</span>
          <h1 className="section-heading" style={{ marginTop: 8 }}>
            How to use TAMAsang KITA
          </h1>
          <p style={{ maxWidth: 560 }}>
            Five steps from raw numbers to a confident selling decision. The
            calculator updates live — there is no save button.
          </p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="container" style={{ maxWidth: 820 }}>
          {steps.map(([title, text], i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="card card-hover" style={{ marginBottom: 20 }}>
              <div className="card-content" style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: 44,
                    height: 44,
                    borderRadius: 9999,
                    background: i === 4 ? 'var(--color-amber)' : 'var(--color-moss)',
                    color: '#f9f8f6',
                    display: 'grid',
                    placeItems: 'center',
                    fontFamily: "'General Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="subhead" style={{ marginBottom: 6 }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: 14, color: '#6b6b6b', margin: 0 }}>
                    {text}
                  </p>
                  {i === 4 && (
                    <span
                      className="chip"
                      style={{
                        marginTop: 12,
                        background: 'rgba(255,191,0,0.15)',
                        color: '#8a6100',
                      }}
                    >
                      Tip: run three offers before choosing a buyer
                    </span>
                  )}
                </div>
              </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="card">
              <div className="card-content" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ maxWidth: 520 }}>
                  <h3 className="subhead" style={{ marginBottom: 8 }}>
                    Worked example
                  </h3>
                  <p style={{ fontSize: 14, color: '#6b6b6b', margin: 0 }}>
                    1,000 kg of maize at 0.50 per kg = 500 revenue. Costs: 150 + 40
                    + 60 = 250. Net profit = 250 at a 50% margin.
                  </p>
                </div>
                <Link to="/price-calculator" className="btn btn-primary btn-lg">
                  Try it now
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Tutorial;
