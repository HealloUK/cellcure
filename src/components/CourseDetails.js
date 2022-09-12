import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby";

const CourseDetails = ({details}) => {
  function scrollToQuote() {
    document.getElementById('quote-form').scrollIntoView({
      behavior: 'auto',
      block: 'center',
  });
  }

  const heroImage = getImage(details.image) || details.image;

  return (
    <section className="course-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="course-details__content">

              <div className="course-details__top">
                <div className="course-details__top-left">
                  <h2 className="course-details__title">
                    {details.title}
                  </h2>
                </div>
                
              </div>
              <div className="course-one__image">
                <GatsbyImage placeholder="blurred" image={heroImage} alt="" />
              </div>



              <ul className="course-details__tab-navs list-unstyled nav nav-tabs">
                <li>
                  <a
                    className="active"
                    id="overview-tab"
                    data-bs-toggle="tab" 
                    data-bs-target="#overview"
                    href="#overview"
                    role="tab"
                    type="button"
                    aria-controls="overview" 
                    aria-selected="true"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className=""
                    id="consider-tab"
                    data-bs-toggle="tab" 
                    data-bs-target="#consider"
                    href="#consider"
                    role="tab"
                    type="button"
                    aria-controls="consider" 
                    aria-selected="false"
                  >
                    When to Consider?
                  </a>
                </li>
                <li>
                <a
                    className=""
                    id="expectations-tab"
                    data-bs-toggle="tab" 
                    data-bs-target="#expectations"
                    href="#expectations"
                    role="tab"
                    type="button"
                    aria-controls="expectations" 
                    aria-selected="false"
                  >
                    Expectations
                  </a>
                </li>
              </ul>

              <div className="tab-content course-details__tab-content ">
                <div
                  className="tab-pane show active"
                  role="tabpanel"
                  id="overview"
                  aria-labelledby="overview-tab"
                >
                  <p className="course-details__tab-text">
                  {details.description}
                  </p>
                </div>


                <div
                  className="tab-pane"
                  role="tabpanel"
                  id="consider"
                  aria-labelledby="consider-tab"
                >
                  <ul className="course-details__curriculum-list list-unstyled">

                  {details.whenconsider.map((item) => (
                    <li>
                    <div className="course-details__curriculum-list-left treatment-detail-item">
                      <div className="course-details__meta-icon video-icon">
                      </div>
                      <div>{item}</div>{" "}
                    </div>
                  </li>
                  ))}
                    
                  </ul>
                </div>


                <div
                  className="tab-pane"
                  role="tabpanel"
                  id="expectations"
                  aria-labelledby="expectations-tab"
                >
                  <ul className="course-details__curriculum-list list-unstyled">

                  {details.expectations.map((item) => (
                    <li>
                    <div className="course-details__curriculum-list-left treatment-detail-item">
                      <div className="course-details__meta-icon video-icon">
                      </div>
                      <div>{item}</div>{" "}
                    </div>
                  </li>
                  ))}
                    
                  </ul>
                </div>


                
              </div>

            </div>
          </div>




          <div className="col-lg-4">
            <div className="course-details__price">
              <p className="course-details__price-text">Average price </p>
              <p className="course-details__price-amount">${details.price}</p>
              <a onClick={scrollToQuote} href="#none" className="thm-btn course-details__price-btn">
                Get Free Quote
              </a>
            </div>

            <div className="course-details__meta">
              <a href="#none" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <i className="far fa-clock"></i>
                </span>
                Duration: <span>{details.duration}</span>
              </a>
              <a href="#none" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                <i className="fas fa-regular fa-capsules"></i>
                </span>
                Anesthesia: <span>{details.anesthesia}</span>
              </a>
              <a href="#none" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <i className="fas fa-play"></i>
                </span>
                Recovery: <span>{details.recovery}</span>
              </a>
              <a href="#none" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                <i className="fas fa-check"></i>
                </span>
                Result: <span>{details.result}</span>
              </a>
            </div>


            <div className="course-details__list">
              <h2 className="course-details__list-title">Popular Questions</h2>

              <div className="course-details__list-item">
                
                <div className="course-details__list-content">
                  
                  <h3>
                    <Link to="/faq">Why is Turkey a great destination for health tourism?</Link>
                  </h3>
                  
                </div>

              </div>

              <div className="course-details__list-item">
                
                <div className="course-details__list-content">
                  
                  <h3>
                    <Link to="/faq#better-alternative">Why is Heallo a better alternative than local treatments?</Link>
                  </h3>

                  
                </div>
              </div>

              <div className="course-details__list-item">
                
                <div className="course-details__list-content">
                  
                  <h3>
                    <Link to="/faq#how-do-i-know">How do I know if I can trust the doctors and hospitals you partner with?</Link>
                  </h3>

                  
                </div>
              </div>
            
            </div>






            

          </div>




        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
