import './App.css';
import Navigation from './components/header/Navigation';
import Hero from './components/header/UI/Hero';
import Counter from './components/header/UI/Counter';
import Services from './components/header/UI/Services';

function App() {
  return (
    <div className="App">
      <>
      <Navigation />
      <Hero />
      <Counter />
      <Services />
      </>
    </div>
  );
}

export default App;
