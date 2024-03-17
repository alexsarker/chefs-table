import { useState } from 'react';
import './App.css';
import Cook from './components/Cook';
import Header from './components/Header';
import Hero from './components/Hero';
import Recipe from './components/Recipe';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [cooks, setCooks] = useState([]);


  const handleAddToCooks = item => {
    const isExist = cooks.find(cook => cook.recipe_id === item.recipe_id);

    if (isExist) {
      toast.error("You & the item already exist");
    } else {
      const newCooks = [...cooks, item];
      setCooks(newCooks);
    }
  };






  return (
    <>
      <Header />
      <Hero />
      <div className='container flex flex-col lg:flex-row mx-auto'>
        <Recipe handleAddToCooks={handleAddToCooks} />
        <Cook cooks={cooks} setCooks={setCooks} />
      </div>
      <ToastContainer />
      <div className='mb-8 lg:mb-24'></div>
    </>
  );
}

export default App;