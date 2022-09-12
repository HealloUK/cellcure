import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

const TopCourses = () => {
  return (
    <section className="top-course-one top-course-page">
      <div className="container">
        <div className="row">

        <div className="col-lg-4">
            <Link to="/stem-cell-therapy">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="none" src="../../static/img/treatments/stem-1.jpg" alt="Stem Cell Therapy" layout="fullWidth" />
                </div>
                <div className="treatment-one__content">
                  <span className="treatment-one__category">
                  Stem Cell Therapy
                  </span>
                </div>
              </div>
            </Link>
          </div>

        <div className="col-lg-4">
            <Link to="/treatments/nose-job-rhinoplasty">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="none" src="../../static/img/treatments/rhino-1.jpg" alt="Rhinoplasty" layout="fullWidth" />
                </div>
                <div className="treatment-one__content">
                  <span className="treatment-one__category">
                  Rhinoplasty
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4">
            <Link to="/treatments/hair-transplantation">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="none" src="../../static/img/treatments/hair-1.jpg" alt="Hair Transplant" layout="fullWidth" />
                </div>
                <div className="treatment-one__content">
                  <span className="treatment-one__category">
                  Hair Transplant
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4">
            <Link to="/treatments/breast-augmentation-boob-job">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="none" src="../../static/img/treatments/breast-1.jpg" alt="Breast Augmentation" layout="fullWidth" />
                </div>
                <div className="treatment-one__content">
                  <span className="treatment-one__category">
                  Breast Augmentation
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4">
            <Link to="/treatments/breast-reduction">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="none" src="../../static/img/treatments/breast-reduction.jpg" alt="Breast Reduction" layout="fullWidth" />
                </div>
                <div className="treatment-one__content">
                  <span className="treatment-one__category">
                  Breast Reduction
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4">
            <Link to="/treatments/gastric-sleeve-surgery-weight-loss">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="none" src="../../static/img/treatments/gastric.jpg" alt="Gastric Sleeve" layout="fullWidth" />
                </div>
                <div className="treatment-one__content">
                  <span className="treatment-one__category">
                  Gastric Sleeve
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4">
            <Link to="/treatments/tummy-tuck-abdominoplasty">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="none" src="../../static/img/treatments/tummy-1.jpg" alt="Tummy Tuck" layout="fullWidth" />
                </div>
                <div className="treatment-one__content">
                  <span className="treatment-one__category">
                  Tummy Tuck
                  </span>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="col-lg-4">
            <Link to="/treatments/brazilian-butt-lift-bbl-buttock-lift">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="none" src="../../static/img/treatments/butt-1.jpg" alt="Butt Lift" layout="fullWidth" />
                </div>
                <div className="treatment-one__content">
                  <span className="treatment-one__category">
                    Butt Lift
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4">
            <Link to="/treatments/face-lift-surgery-rhytidectomy">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="none" src="../../static/img/treatments/face-lift.jpg" alt="Face Lift" layout="fullWidth" />
                </div>
                <div className="treatment-one__content">
                  <span className="treatment-one__category">
                    Face Lift
                  </span>
                </div>
              </div>
            </Link>
          </div>
          
          

        </div>


        <div className="all-items-link">
          
          <a href="/treatments" className="thm-btn">
            View All Treatments
          </a>
          
        </div>
        

      </div>
    </section>
  );
};

export default TopCourses;
