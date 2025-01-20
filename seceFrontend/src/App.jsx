import { useState } from 'react'
import './App.css'
import About from './components/FunctionalComponents/About';
import ClassCompEG from './components/classComponents/ClassCompEG';
import Home from './components/FunctionalComponents/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Home/>
      <About/>
      <ClassCompEG/>
    </div>
    </>
  )
}

export default App
