import React, { Component } from "react";
import about1 from "../assets/images/older-couple.jpg";
export default class AboutTwo extends Component {
  constructor() {
    super();
    this.state = {
      startCounter: false
    };
  }
  
  /*
  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ startCounter: true });
    }
  };
  */

  render() {
    return (
      <section className="about-two">
        <div className="container">
          <div className="row">


            <div className="col-xl-6">
              <div className="about-two__content">
                <div className="block-title text-left">
                  <h3 className="block-title__title">
                  Stem cell treatment and innovative therapies at Top Class Clinic
                  </h3>
                </div>
                <p className="about-two__text">
                We provide an integrative and person-centered recovery approach that helps patients with arthritis, diabetes type 2, multiple sclerosis, autism, stroke, COPD, Parkinson's and many more hard-to-treat diseases to improve their condition and reclaim their quality of life.
                </p>

                <div className="cta-three__single-wrap">
                  <div className="cta-three__single">
                    
                    <p className="cta-three__single-text">
                      Certificated Labs
                    </p>
                  </div>
                  <div className="cta-three__single">
                    
                    <p className="cta-three__single-text">Cutting-Edge Tech</p>
                  </div>

                  <div className="cta-three__single">
                    
                    <p className="cta-three__single-text">Best Doctors</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-xl-6 d-flex justify-content-xl-end justify-content-sm-center">
              <div className="about-two__image">
                <span className="about-two__image-dots"></span>
                <img src={about1} alt="" />
                <div className="about-two__count">
                  <div className="about-two__count-text">
                    Trusted by
                    <span className="counter">
                    1000+
                    </span>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    );
  }
}
