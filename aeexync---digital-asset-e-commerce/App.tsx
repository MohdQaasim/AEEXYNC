
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Store from './pages/Store';
import FreePresets from './pages/FreePresets';
import ProjectFiles from './pages/ProjectFiles';
import Checkout from './pages/Checkout';
import Success from './pages/Success';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/free-presets" element={<FreePresets />} />
              <Route path="/project-files" element={<ProjectFiles />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-success" element={<Success />} />
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
