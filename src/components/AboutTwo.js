import React, { Component } from "react";
//import CountUp from "react-countup";
//import VisibilitySensor from "react-visibility-sensor";
import about1 from "../assets/images/about-1-1.jpg";
export default class AboutTwo extends Component {
  constructor() {
    super();
    /*
    this.state = {
      startCounter: false
    };
    */

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
            <div className="col-xl-12">
              <div className="about-two__content">

                <div className="block-title text-left">
                  <h2 className="block-title__title">
                    Choose Your Treatment in Turkey
                  </h2>
                </div>
                
                <p className="about-two__text">
                We have a wide range of aesthetic treatments including bariatric surgery, hair transplant and dental for you to choose from-all at an affordable price in Turkey.
                Our experienced team is ready for you with a wide range of treatment options. Just decide the date and leave the rest to us.
                </p>

                <div className="about-two__single-wrap">
                  
                  <div className="about-two__single">
                    <div className="about-two__single-icon">
                      <i className="kipso-icon-professor"></i>
                    </div>
                    <div className="about-two__single-content">
                      <p className="about-two__single-text">
                        Find Best Doctors
                      </p>
                    </div>
                  </div>

                  <div className="about-two__single">
                    <div className="about-two__single-icon">
                      <i className="kipso-icon-knowledge"></i>
                    </div>
                    <div className="about-two__single-content">
                      <p className="about-two__single-text">
                        Get Consultation
                      </p>
                    </div>
                  </div>

                  <div className="about-two__single">
                    <div className="about-two__single-icon">
                    <i class="kipso-icon-health"></i>
                    </div>
                    <div className="about-two__single-content">
                      <p className="about-two__single-text">
                      Start Your Medical Journey
                      </p>
                    </div>
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
