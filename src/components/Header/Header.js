import React from "react";
import './Header.css'; 
import logo from './images/skedaddle-black.png';
export function Header(){
  return(
    <div className='header'>
      <img id='logo-header' src={logo} alt='skedaddle logo'/>
    </div>
  );
} 

export default Header;
