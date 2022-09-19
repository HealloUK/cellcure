import React from "react";

const Footer = () => {
  
  return (
    <>
    <div class="site-footer__extra">
        <div class="container">
          <div class="site-footer__extra-title">Disclaimer</div>
          <p>The result of the treatment may vary depending on the type of disease, the patient's condition, the number of 
              sessions of the treatment and many other factors. Articles, images, patient feedbacks, testimonials and all other materials on the site 
              are for informational purposes only. Stem cells are not a guaranteed cure for every disease.
          </p>
        </div>
      </div>
      
      <footer className="site-footer">
        
        <div className="site-footer__bottom">
          <div className="container">
            
            <p className="site-footer__copy">
              &copy; Copyright 2022 - Edge Medica
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


      
    </>
  );
};
export default Footer;
