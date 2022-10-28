import { StaticImage } from "gatsby-plugin-image";
import React, { Component } from "react";
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
                We provide a tailored and comprehensive treatment approach that helps patients with difficult-to-treat diseases including autism, multiple sclerosis, diabetes type 2, stroke, arthritis, COPD, Parkinson's improve their condition and quality of life.
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
                <StaticImage
                  src="../../static/img/older-couple.jpg"
                  aspectRatio={1/1}
                  placeholder="none"
                  objectFit="contain"
                  quality={100}
                />
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
