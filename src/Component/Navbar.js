// Navbar.js
import React from 'react'; 
import Senior from './Images/Senior.png';
import SeniorLogo from './Images/SeniorLogo.png';
import { useContext } from "react";
import { Context } from "../Context/Context";
const Navbar = () => {
  const { theme, setTheme, textColor, setTextColor } = useContext(Context);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setTextColor(textColor === "dark" ? "light" : "dark");
  };

 
  const imgLogo = () => {
    if (theme === "dark") {
      return <div className='d-flex'>
      <img src={SeniorLogo} alt='Senior' />
      <h1 style={{ color: "white", fontSize: "1.5rem", paddingTop:"0.1rem", paddingLeft:"0.5rem"}}>Senior.az</h1>
    </div>    
    } else {
      return <img src={Senior} alt='Senior' />;
    }
  }

  return (
    <div>
      <nav className={`navbar ${theme}`}>
        <div className="container-fluid">
          <a className="navbar-brand">
            {imgLogo()}
          </a>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="darkLightSwitch"
              checked={theme === "dark"} 
              onChange={changeTheme}
              style={{ transform: 'scale(1.6)' }}
            />
          </div>
        </div>
      </nav>
    <div className={`bg-${ theme === "light" ? "light" : "dark"}`} style={{height:"1.2rem"}}
></div >    </div>

  );
}

export default Navbar;
