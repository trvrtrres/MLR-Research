import { useCallback, useEffect, useState } from 'react';

const steps = [
  {
    selector: null,
    title: 'Welcome to TAMAsang KITA:',
    text: 'Take a quick 1-minute tour of the site. We will walk you through the navigation, the price calculator and where to find help.',
  },
  {
    selector: '.nav-logo',
    title: 'The brand',
    text: 'This is TAMAsang KITA — a free farm price calculator. Clicking the logo always brings you back home from any page.',
  },
  {
    selector: '.nav-links',
    title: 'Navigation',
    text: 'Every page of the site lives here: the Price Calculator, About, Contact, Legal Works and the written Tutorial.',
  },
  {
    selector: '.nav-cta',
    title: 'How it Works',
    text: 'This button takes you to the step-by-step tutorial, including a worked pricing example you can follow along with.',
  },
  {
    selector: 'main',
    title: 'The main stage',
    text: 'Everything in this area is the page content — on the home page it is the hero and feature cards; on the calculator page it is where you enter your numbers.',
  },
  {
    selector: '.footer',
    title: 'Quick links',
    text: 'The footer collects shortcuts to the calculator, tutorial, about page and legal information on every single page.',
  },
  {
    selector: null,
    title: "You're all set",
    text: 'Head to the Price Calculator and run your first harvest numbers. Good luck with the season!',
  },
];

const fmtRect = (rect) => ({
  top: rect.top - 6,
  left: rect.left - 6,
  width: rect.width + 12,
  height: rect.height + 12,
});

function Tour({ onClose }) {
  const [index, setIndex] = useState(0);
  const [rect, setRect] = useState(null);
  const step = steps[index];
  const last = index === steps.length - 1;

  useEffect(() => {
    if (!step.selector) {
      setRect(null);
      return undefined;
    }
    const el = document.querySelector(step.selector);
    if (!el) {
      setRect(null);
      return undefined;
    }
    el.scrollIntoView({ block: 'center', behavior: 'smooth' });

    const measure = () => {
      const r = el.getBoundingClientRect();
      setRect(r.width > 0 && r.height > 0 ? fmtRect(r) : null);
    };
    const t = setTimeout(measure, 350);
    window.addEventListener('resize', measure);
    window.addEventListener('scroll', measure, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', measure);
      window.removeEventListener('scroll', measure);
    };
  }, [index, step.selector]);

  const next = useCallback(() => {
    if (last) onClose();
    else setIndex((i) => i + 1);
  }, [last, onClose]);

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' || e.key === 'Enter') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev, onClose]);

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const cardH = 300;

  const tooltipStyle = rect
    ? (() => {
        const below = rect.top + rect.height + 12;
        const fitsBelow = below + cardH <= vh;
        const top = fitsBelow
          ? Math.max(below, 12)
          : Math.max(Math.min(rect.top - cardH - 12, vh - cardH - 12), 12);
        const left = Math.max(
          12,
          Math.min(rect.left + rect.width / 2 - 180, vw - 372)
        );
        return { top, left };
      })()
    : undefined;

  const cardContent = (
    <>
      <span className="overline">
        Step {index + 1} of {steps.length}
      </span>
      <h3 className="subhead" style={{ margin: '8px 0' }}>
        {step.title}
      </h3>
      <p style={{ fontSize: 14, color: '#6b6b6b', margin: '0 0 20px' }}>
        {step.text}
      </p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}
      >
        <button type="button" className="btn btn-ghost btn-sm" onClick={onClose}>
          Skip tour
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {steps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to step ${i + 1}`}
              className={`tour-dot${i === index ? ' tour-dot-active' : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {index > 0 && (
            <button type="button" className="btn btn-secondary btn-sm" onClick={prev}>
              Back
            </button>
          )}
          <button type="button" className="btn btn-primary btn-sm" onClick={next}>
            {last ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div className="tour-root" role="dialog" aria-label="Site tour">
      {rect && (
        <div
          className="tour-spotlight"
          style={{
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
          }}
        />
      )}
      <div className="tour-backdrop" />

      {rect ? (
        <div className="tour-card" style={tooltipStyle}>
          {cardContent}
        </div>
      ) : (
        <div className="tour-center">
          <div className="tour-card">{cardContent}</div>
        </div>
      )}
    </div>
  );
}

export default Tour;
