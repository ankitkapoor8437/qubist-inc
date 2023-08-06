import './App.css';
import Navigation from './components/header/Navigation';
import Hero from './components/UI/Hero';
import Counter from './components/UI/Counter';
import Services from './components/UI/Services';
import About from './components/UI/About';
import Team from './components/UI/Team';
import Blog from './components/UI/Blog';
import Testimonial from './components/UI/Testimonial';
import Newsletter from './components/UI/Newsletter';
import Footer from './components/UI/Footer';
import { useEffect, useState } from 'react';


function App() {
  const [theme, setTheme] = useState('')

  const toggleTheme = () => {
    theme === '' ? setTheme('light-theme') : setTheme('')
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])


  return (
    <div className="App">
      <>
        <Navigation theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <Counter />
        <Services />
        <About />
        <Team />
        <Blog />
        <Testimonial />
        <Newsletter />
        <Footer />
      </>
    </div>
  );
}

export default App;
