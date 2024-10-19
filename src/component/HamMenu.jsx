import React from "react";

const HamMenu = ({display, position}) => {
  if(display === 'none' || display === "") {
    return 
  }
  
  return (display === 'block') ?  (
    <div className="ham-menu-bar" style={position} >
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Service</a>
    </div>
  ) : ""
};

export default HamMenu;
