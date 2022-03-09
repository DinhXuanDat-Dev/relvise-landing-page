import './App.scss';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Features from './container/features/Features';
import Clients from './container/clients/Clients';
import Advises from './container/advises/Advises';
import About from './components/about/About';
import Brand from './components/brand/Brand';
import Contact from './components/brand/contact/Contact';

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
          <Advises />
          <About />
          <Brand />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
