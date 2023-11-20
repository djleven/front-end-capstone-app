import logo from '../logo.svg';
import React from "react";

const Header = () => {
    return (
        <header className="App-Header">
            <div className="center-text">
                <img src={logo} role="logo" className="logo" alt="logo" />
            </div>
      </header>
    )
  };
export default Header;
