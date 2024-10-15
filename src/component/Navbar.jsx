import React from 'react'
// import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <>
        <header>
            <div className="container" >
                <div className="grid  navbar-grid">
                    <div className="logo">
                        <h1>qr-code-generator</h1>
                    </div>
                    <nav>
                         <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href='#'>Service</a>
                            </li>
                         </ul>
                    </nav>
                    {/* <div className="ham-menu">
                  
                    </div> */}
                </div>
            </div>
        </header>
    </>
    
        
  )
}

export default Navbar
