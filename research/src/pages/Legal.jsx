import '../App.css';
import Reveal from '../components/Reveal';

const sections = [
  {
    id: 'terms',
    title: 'Terms of Use',
    rows: [
      ['1. Purpose', 'TAMAsang KITA provides free pricing tools for farmers, traders and agribusinesses. The calculator is a planning aid, not financial advice.'],
      ['2. Acceptable use', 'You may use TAMAsang KITA for personal and commercial planning. Automated scraping or reselling the tool as your own is not permitted.'],
      ['3. No warranty', 'Results depend entirely on the values you enter. We do not guarantee market prices, and we are not liable for decisions made using the calculator.'],
      ['4. Changes', 'We may update formulas, crops and these terms. Continued use after changes means you accept the revised terms.'],
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    rows: [
      ['1. No accounts', 'TAMAsang KITA requires no signup. We collect no personal data from calculator use.'],
      ['2. Local processing', 'All calculations run in your browser. Values you type are never sent to a server.'],
      ['3. Contact messages', 'Messages sent through the contact form are used only to respond to you and are not shared with third parties.'],
      ['4. Cookies', 'We use no tracking cookies. Essential browser storage only, and nothing is stored between visits.'],
    ],
  },
  {
    id: 'disclaimer',
    title: 'Agricultural Data Disclaimer',
    rows: [
      ['1. Market prices', 'Prices vary by region, season and buyer. Always verify current local prices before selling.'],
      ['2. Cost estimates', 'Default cost items are editable placeholders. Replace them with your own records for meaningful results.'],
      ['3. Professional advice', 'For loans, subsidies or contractual decisions, consult a qualified agricultural advisor.'],
    ],
  },
];

function Legal() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <span className="overline">Legal</span>
          <h1 className="section-heading" style={{ marginTop: 8 }}>
            Legal Works
          </h1>
          <p style={{ maxWidth: 560 }}>
            The terms, privacy commitments and data disclaimers that govern your
            use of TAMAsang KITA.
          </p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="container" style={{ maxWidth: 820 }}>
          {sections.map((s) => (
            <Reveal key={s.id} id={s.id}>
              <div className="card" style={{ marginBottom: 24 }}>
                <div className="card-content">
                  <h2 className="subhead" style={{ marginBottom: 8 }}>
                    {s.title}
                  </h2>
                  <div>
                    {s.rows.map(([label, text]) => (
                      <div className="list-row" key={label} style={{ padding: '12px 0' }}>
                        <strong style={{ fontSize: 14, minWidth: 140 }}>{label}</strong>
                        <span style={{ fontSize: 14, color: '#6b6b6b' }}>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <p style={{ fontSize: 13, color: 'var(--color-taupe)' }}>
            Last updated: November 2026 · Questions? Use the{' '}
            <a href="/contact">contact page</a>.
          </p>
        </div>
      </section>
    </>
  );
}

export default Legal;
