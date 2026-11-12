import { Link } from 'react-router-dom';
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="nav-logo" style={{ marginBottom: 12 }}>
              <span className="nav-logo-mark">TK</span>
              TAMAsang KITA
            </div>
            <p style={{ fontSize: 14, color: '#6b6b6b', maxWidth: 320 }}>
              A free farm price calculator helping farmers, traders and
              agribusinesses estimate revenue, costs and profit per harvest.
            </p>
          </div>

          <div>
            <span className="overline">Product</span>
            <Link to="/price-calculator" className="footer-link">
              Price Calculator
            </Link>
            <Link to="/tutorial" className="footer-link">
              Tutorial
            </Link>
          </div>

          <div>
            <span className="overline">Company</span>
            <Link to="/about" className="footer-link">
              About
            </Link>
            <Link to="/contact" className="footer-link">
              Contact
            </Link>
          </div>

          <div>
            <span className="overline">Legal</span>
            <Link to="/legal" className="footer-link">
              Terms &amp; Privacy
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} TAMAsang KITA. All rights reserved.</span>
          <span>Built for the farming community</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
