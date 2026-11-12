import { useState } from 'react';
import Reveal from '../components/Reveal';
import '../App.css';

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <div className="page-head">
        <div className="container">
          <span className="overline">Contact</span>
          <h1 className="section-heading" style={{ marginTop: 8 }}>
            Talk to the team
          </h1>
          <p style={{ maxWidth: 560 }}>
            Found a bug, want a new crop added, or need help with the
            calculator? Send us a message.
          </p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="container grid-2">
          <Reveal>
            <form
              className="card card-content"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <h3 className="subhead" style={{ marginBottom: 8 }}>
                  Message sent
                </h3>
                <p style={{ fontSize: 14, color: '#6b6b6b' }}>
                  Thanks for reaching out — we usually reply within two working
                  days.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary btn-md"
                  onClick={() => setSent(false)}
                >
                  Send another
                </button>
              </div>
            ) : (
              <>
                <div className="grid-2" style={{ gap: 16 }}>
                  <div>
                    <label className="field-label" htmlFor="name">Name</label>
                    <input id="name" className="input" required placeholder="Your name" />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="email">Email</label>
                    <input id="email" className="input" type="email" required placeholder="you@example.com" />
                  </div>
                </div>
                <div style={{ marginTop: 16 }}>
                  <label className="field-label" htmlFor="subject">Subject</label>
                  <input id="subject" className="input" placeholder="e.g. Fertilizer cost feature" />
                </div>
                <div style={{ marginTop: 16 }}>
                  <label className="field-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="textarea"
                    rows="5"
                    required
                    placeholder="Tell us what is on your mind…"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-md" style={{ marginTop: 24 }}>
                  Send message
                </button>
              </>
            )}
          </form>
          </Reveal>

          <Reveal delay={100}>
            <div className="card">
              <div className="card-content">
                <h3 className="subhead" style={{ marginBottom: 12 }}>
                  Other ways to reach us
                </h3>
                <div className="list-row">
                  <span style={{ color: '#6b6b6b', fontSize: 14 }}>Email</span>
                  <a href="mailto:hello@tamasangkita.example">hello@tamasangkita.example</a>
                </div>
                <div className="list-row">
                  <span style={{ color: '#6b6b6b', fontSize: 14 }}>Support hours</span>
                  <strong>Mon–Fri, 9:00–17:00</strong>
                </div>
                <div className="list-row">
                  <span style={{ color: '#6b6b6b', fontSize: 14 }}>Documentation</span>
                  <a href="/tutorial">Tutorial</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Contact;
