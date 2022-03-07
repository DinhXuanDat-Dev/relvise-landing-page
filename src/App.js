import './App.scss';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Features from './container/features/Features';

function App() {
  return (
    <div className="relvise-page">
      <div className="section-header">
        <Navbar/>
        <Hero />
        <Features />
      </div>
    </div>
  );
}

export default App;
