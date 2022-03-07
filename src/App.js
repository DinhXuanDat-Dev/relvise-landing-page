import './App.scss';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Features from './container/features/Features';
import Clients from './container/clients/Clients';

function App() {
  return (
    <div className="App">
      <div className="relvise-page">
        <div className="section-header">
          <Navbar/>
          <Hero />
          <Features />
        </div>
        <div className="section-main">
          <Clients />
        </div>
      </div>
    </div>
  );
}

export default App;
