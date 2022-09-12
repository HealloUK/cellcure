import React from "react";

const Footer = () => {
  
  return (
    <div>
      <footer className="site-footer">
        
        <div className="site-footer__bottom">
          <div className="container">
            
            <p className="site-footer__copy">
              &copy; Copyright 2022 - Heallo
            </p>

            <div className="site-footer__social">
              
              
            <a target="blank" href="https://www.facebook.com/heallouk">
                  <i className="fab fa-facebook-square"></i>
            </a>
              
            <a target="blank" href="https://www.instagram.com/heallouk/">
                  <i className="fab fa-instagram"></i>
            </a>
            
            </div>

          </div>
        </div>

      </footer>

      {/*
      <div className="search-popup">
        <div className="search-popup__overlay custom-cursor__overlay search-overlay"></div>
        <div className="search-popup__inner">
          <form action="#" className="search-popup__form">
            <input
              type="text"
              name="search"
              placeholder="Type here to Search...."
            />
            <button type="submit">
              <i className="kipso-icon-magnifying-glass"></i>
            </button>
            <div className="cancel"></div>
          </form>
        </div>
      </div>
      */}


    </div>
  );
};
export default Footer;
