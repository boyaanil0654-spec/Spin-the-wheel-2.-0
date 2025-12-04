import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WheelCanvas from './components/WheelCanvas';
import CustomizationPanel from './components/CustomizationPanel';
import Dashboard from './components/Dashboard';
import ThemeSelector from './components/ThemeSelector';
import BottomNav from './components/BottomNav';
import Loader from './components/Loader';
import { useWheel } from './hooks/useWheel';
import './styles/global.css';

function App() {
  const [theme, setTheme] = useState('Neon Blue');
  const [loading, setLoading] = useState(true);
  const { wheel, spin, customize, history } = useWheel();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Futuristic loader
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <div className={`app ${theme.toLowerCase().replace(' ', '-')}`}>
        <div className="background-particles"></div> {/* Dynamic particles */}
        <ThemeSelector theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<WheelCanvas wheel={wheel} spin={spin} />} />
          <Route path="/customize" element={<CustomizationPanel customize={customize} />} />
          <Route path="/dashboard" element={<Dashboard history={history} />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
