import './App.css';
import Navigation from './components/header/Navigation';
import Hero from './components/UI/Hero';
import Counter from './components/UI/Counter';
import Services from './components/UI/Services';
import About from './components/UI/About';
import Team from './components/UI/Team';
import Blog from './components/UI/Blog';


function App() {
  return (
    <div className="App">
      <>
      <Navigation />
      <Hero />
      <Counter />
      <Services />
      <About />
      <Team />
      <Blog />
      </>
    </div>
  );
}

export default App;
