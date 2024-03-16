import { useState } from 'react';
import './App.css';
import Cook from './components/Cook';
import Header from './components/Header';
import Hero from './components/Hero';
import Recipe from './components/Recipe';

function App() {
  const [cooks, setCooks] = useState([]);

  const handleAddToCooks = item => {
    const newCooks = [...cooks, item];
    setCooks(newCooks);
  };

  return (
    <>
      <Header />
      <Hero />
      <div className='container flex mx-auto'>
        <Recipe handleAddToCooks={handleAddToCooks} />
        <Cook cooks={cooks} />
      </div>
    </>
  );
}

export default App;