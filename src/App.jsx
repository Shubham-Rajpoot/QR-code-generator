import Navbar from './component/Navbar'
import { HeroSection } from './component/HeroSection'
import "./App.css" ;
import { useState } from 'react';
import Utility from './component/Utility';


const App = () => {
  const [display, setDisplay] = useState("none");
  return (
    <div>
      <Navbar setDisplay={setDisplay} display={display} />
      <HeroSection setDisplay={setDisplay}/>
      <Utility/>

    </div>
    
  )
}

export default App