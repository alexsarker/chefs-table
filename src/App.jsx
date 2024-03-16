import './App.css'
import Cook from './components/Cook'
import Header from './components/Header'
import Hero from './components/Hero'
import Recipe from './components/Recipe'

function App() {

  return (
    <>
      <Header></Header>
      <Hero></Hero>

      <div className='container flex mx-auto'>
      <Recipe></Recipe>
      <Cook></Cook>
      </div>
    </>
  )
}

export default App
