import React, { useState } from "react";
import DropDown from "../assets/bar.png"
import HamMenu from "./HamMenu";
import logo from "../assets/logo.png" ;

function Navbar({setDisplay, display}) {
  const width = window.screen.width;
  const [position, setPosition] = useState({});
  return (
    <>
      <HamMenu display={display} position={position}/>
      <header>
        <div className="container">
          <div className="grid  navbar-grid">
            <div className="logo">
              <img src={logo} alt="logo" width={"75px"} />
              <h1>qr-code-generator</h1>
            </div>

            {width > 990 ? (
              <nav>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#"><button>Login/SignUp</button></a>
                  </li>
                </ul>
              </nav>
            ) : (
              <img
                src={DropDown}
                alt="Ham-Menu-Dropdown"
                style={{width: "32px"}}
                onClick={ (e) => {
                  setDisplay("block"); 
                  setPosition({left: e.clientX - 70, top:e.clientY + 50})
                }}
              />
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
