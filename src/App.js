import './App.css';
import Navigation from './components/header/Navigation';
import Hero from './components/header/UI/Hero';
import Counter from './components/header/UI/Counter';

function App() {
  return (
    <div className="App">
      <>
      <Navigation />
      <Hero />
      <Counter />
      </>
    </div>
  );
}

export default App;
