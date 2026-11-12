import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PriceCalculator from './pages/PriceCalculator';
import About from './pages/About';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Tutorial from './pages/Tutorial';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/price-calculator" element={<PriceCalculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/tutorial" element={<Tutorial />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
