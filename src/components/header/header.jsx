import React from 'react';
import './header.css'
const Header = () => {
    return(
        <div className="header">
            <div className="header-logo">
            <a href="">
                            <img
                              decoding="async"
                              loading="lazy"
                              width="200"
                              height="100"
                              src="https://www.digitalpaani.com/wp-content/uploads/2023/10/DigitalPaani-Webiste.png"
                              alt=""
                              className="wp-image-23944563"
                            />
                          </a>
    
            </div>
            <div className="header-navbar">
                <div className="navbar-tabs navbar-home">HOME</div>
                <div className="navbar-tabs navbar-about">ABOUT</div>
                <div className="navbar-tabs navbar-connect">CONNECT</div>
            </div>
        </div>
    )
};



export default Header;
