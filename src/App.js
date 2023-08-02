import './App.css';
import Navigation from './components/header/Navigation';
import Hero from './components/header/UI/Hero';
import Counter from './components/header/UI/Counter';
import Services from './components/header/UI/Services';
import About from './components/header/UI/About';

function App() {
  return (
    <div className="App">
      <>
      <Navigation />
      <Hero />
      <Counter />
      <Services />
      <About />
      </>
    </div>
  );
}

export default App;
