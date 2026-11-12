import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const crops = ['Maize', 'Rice', 'Wheat', 'Potato', 'Tomato', 'Cassava', 'Soybean'];

const units = ['kg', 'tonne', 'bag (50kg)', 'crate'];

const fmt = (n) =>
  n.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

function PriceCalculator() {
  const [crop, setCrop] = useState(crops[0]);
  const [unit, setUnit] = useState(units[0]);
  const [quantity, setQuantity] = useState('1000');
  const [marketPrice, setMarketPrice] = useState('0.50');
  const [productionCost, setProductionCost] = useState('150');
  const [transportCost, setTransportCost] = useState('40');
  const [laborCost, setLaborCost] = useState('60');

  const result = useMemo(() => {
    const qty = parseFloat(quantity) || 0;
    const price = parseFloat(marketPrice) || 0;
    const prod = parseFloat(productionCost) || 0;
    const trans = parseFloat(transportCost) || 0;
    const labor = parseFloat(laborCost) || 0;

    const revenue = qty * price;
    const costs = prod + trans + labor;
    const profit = revenue - costs;
    const margin = revenue > 0 ? (profit / revenue) * 100 : 0;
    const breakEven = price > 0 ? costs / price : 0;

    return { revenue, costs, profit, margin, breakEven };
  }, [quantity, marketPrice, productionCost, transportCost, laborCost]);

  const positive = result.profit >= 0;

  return (
    <>
      <div className="page-head">
        <div className="container">
          <span className="overline">Price Calculator</span>
          <h1 className="section-heading" style={{ marginTop: 8 }}>
            Farm-Gate Profit Calculator
          </h1>
          <p style={{ maxWidth: 560 }}>
            Enter your crop details and cost items to see revenue, total cost
            and net profit — calculated live as you type.
          </p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="container grid-2">
          <form className="card card-content" onSubmit={(e) => e.preventDefault()}>
            <h3 className="subhead" style={{ marginBottom: 20 }}>
              Harvest Details
            </h3>

            <div className="grid-2" style={{ gap: 16 }}>
              <div>
                <label className="field-label" htmlFor="crop">Crop</label>
                <select
                  id="crop"
                  className="select"
                  value={crop}
                  onChange={(e) => setCrop(e.target.value)}
                >
                  {crops.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="field-label" htmlFor="unit">Unit</label>
                <select
                  id="unit"
                  className="select"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                >
                  {units.map((u) => (
                    <option key={u}>{u}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ marginTop: 16 }}>
              <label className="field-label" htmlFor="quantity">
                Quantity ({unit})
              </label>
              <input
                id="quantity"
                className="input"
                type="number"
                min="0"
                step="any"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div style={{ marginTop: 16 }}>
              <label className="field-label" htmlFor="price">
                Market price per {unit} (currency)
              </label>
              <input
                id="price"
                className="input"
                type="number"
                min="0"
                step="any"
                value={marketPrice}
                onChange={(e) => setMarketPrice(e.target.value)}
              />
            </div>

            <h3 className="subhead" style={{ margin: '24px 0 12px' }}>
              Cost Items
            </h3>

            <div className="grid-3" style={{ gap: 16 }}>
              {[
                ['productionCost', 'Production', productionCost, setProductionCost],
                ['transportCost', 'Transport', transportCost, setTransportCost],
                ['laborCost', 'Labor', laborCost, setLaborCost],
              ].map(([id, label, value, setter]) => (
                <div key={id}>
                  <label className="field-label" htmlFor={id}>{label}</label>
                  <input
                    id={id}
                    className="input"
                    type="number"
                    min="0"
                    step="any"
                    value={value}
                    onChange={(e) => setter(e.target.value)}
                  />
                </div>
              ))}
            </div>

            <button type="submit" className="btn btn-primary btn-md" style={{ marginTop: 24 }}>
              Calculate (live)
            </button>
          </form>

          <div>
            <div className="card" style={{ position: 'sticky', top: 80 }}>
              <div className="card-content">
                <span className="chip">{crop}</span>
                <h3 className="subhead" style={{ margin: '16px 0 4px' }}>
                  Net Profit
                </h3>
                <div
                  style={{
                    fontFamily: "'General Sans', sans-serif",
                    fontSize: 48,
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    color: positive ? 'var(--color-moss)' : '#EF4444',
                  }}
                >
                  {fmt(result.profit)}
                </div>
                <span
                  className="chip"
                  style={{
                    background: positive ? 'var(--color-moss)' : '#EF4444',
                    color: '#f9f8f6',
                  }}
                >
                  {positive ? 'Profitable' : 'Loss-making'} · {fmt(result.margin)}% margin
                </span>

                <div style={{ marginTop: 24 }}>
                  <div className="list-row">
                    <span style={{ color: '#6b6b6b', fontSize: 14 }}>Revenue</span>
                    <strong>{fmt(result.revenue)}</strong>
                  </div>
                  <div className="list-row">
                    <span style={{ color: '#6b6b6b', fontSize: 14 }}>Total costs</span>
                    <strong>{fmt(result.costs)}</strong>
                  </div>
                  <div className="list-row">
                    <span style={{ color: '#6b6b6b', fontSize: 14 }}>
                      Break-even quantity ({unit})
                    </span>
                    <strong>{fmt(result.breakEven)}</strong>
                  </div>
                </div>

                <p style={{ fontSize: 13, color: 'var(--color-taupe)', marginTop: 16 }}>
                  Tip: see the{' '}
                  <Link to="/tutorial">tutorial</Link> for what each cost item
                  should include.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PriceCalculator;
