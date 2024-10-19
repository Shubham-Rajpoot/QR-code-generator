import Navbar from './component/Navbar'
import { HeroSection } from './component/HeroSection'
import "./App.css" ;
import { useState } from 'react';


const App = () => {
  const [display, setDisplay] = useState("none");
  return (
    <div>
      <Navbar setDisplay={setDisplay} display={display} />
      <HeroSection setDisplay={setDisplay}/>
    </div>
    
  )
}

export default App