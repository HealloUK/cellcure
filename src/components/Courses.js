import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

const Courses = () => {
  return (
    <section className="course-one course-page">
      <div className="container">
        


      <div className="row">

<div className="col-lg-4">
    <Link to="/treatments/nose-job-rhinoplasty">
      <div className="course-one__single">
        <div className="treatment-one__image">
          <StaticImage placeholder="blurred" src="../../static/img/treatments/rhino-1.jpg" alt="" />
        </div>
        <div className="treatment-one__content">
          <a className="treatment-one__category">
          Rhinoplasty
          </a>
        </div>
      </div>
    </Link>
  </div>

  <div className="col-lg-4">
    <Link to="/treatments/hair-transplantation">
      <div className="course-one__single">
        <div className="treatment-one__image">
          <StaticImage placeholder="blurred" src="../../static/img/treatments/hair-1.jpg" alt="" />
        </div>
        <div className="treatment-one__content">
          <a className="treatment-one__category">
          Hair Transplant
          </a>
        </div>
      </div>
    </Link>
  </div>

  <div className="col-lg-4">
    <Link to="/treatments/breast-augmentation-boob-job">
      <div className="course-one__single">
        <div className="treatment-one__image">
          <StaticImage placeholder="blurred" src="../../static/img/treatments/breast-1.jpg" alt="" />
        </div>
        <div className="treatment-one__content">
          <a className="treatment-one__category">
          Breast Augmentation
          </a>
        </div>
      </div>
    </Link>
  </div>

  <div className="col-lg-4">
    <Link to="/treatments/breast-reduction">
      <div className="course-one__single">
        <div className="treatment-one__image">
          <StaticImage placeholder="blurred" src="../../static/img/treatments/breast-reduction.jpg" alt="" />
        </div>
        <div className="treatment-one__content">
          <a className="treatment-one__category">
          Breast Reduction
          </a>
        </div>
      </div>
    </Link>
  </div>

  <div className="col-lg-4">
    <Link to="/treatments/gastric-sleeve-surgery-weight-loss">
      <div className="course-one__single">
        <div className="treatment-one__image">
          <StaticImage placeholder="blurred" src="../../static/img/treatments/gastric.jpg" alt="" />
        </div>
        <div className="treatment-one__content">
          <a className="treatment-one__category">
          Gastric Sleeve
          </a>
        </div>
      </div>
    </Link>
  </div>

  <div className="col-lg-4">
    <Link to="/treatments/tummy-tuck-abdominoplasty">
      <div className="course-one__single">
        <div className="treatment-one__image">
          <StaticImage placeholder="blurred" src="../../static/img/treatments/tummy-1.jpg" alt="" />
        </div>
        <div className="treatment-one__content">
          <a className="treatment-one__category">
          Tummy Tuck
          </a>
        </div>
      </div>
    </Link>
  </div>

  <div className="col-lg-4">
    <Link to="/treatments/liposuction">
      <div className="course-one__single">
        <div className="treatment-one__image">
          <StaticImage placeholder="blurred" src="../../static/img/treatments/lipo-1.jpg" alt="" />
        </div>
        <div className="treatment-one__content">
          <a className="treatment-one__category">
          Liposuction
          </a>
        </div>
      </div>
    </Link>
  </div>
  
  <div className="col-lg-4">
    <Link to="/treatments/brazilian-butt-lift-bbl-buttock-lift">
      <div className="course-one__single">
        <div className="treatment-one__image">
          <StaticImage placeholder="blurred" src="../../static/img/treatments/butt-1.jpg" alt="" />
        </div>
        <div className="treatment-one__content">
          <a className="treatment-one__category">
            Butt Lift
          </a>
        </div>
      </div>
    </Link>
  </div>

  <div className="col-lg-4">
    <Link to="/treatments/face-lift-surgery-rhytidectomy">
      <div className="course-one__single">
        <div className="treatment-one__image">
          <StaticImage placeholder="blurred" src="../../static/img/treatments/face-lift.jpg" alt="" />
        </div>
        <div className="treatment-one__content">
          <a className="treatment-one__category">
            Face Lift
          </a>
        </div>
      </div>
    </Link>
  </div>
  
  

</div>


    { /*
        <div className="post-pagination">
          <a href="#none">
            <i className="fa fa-angle-double-left"></i>
          </a>
          <a className="active" href="#none">
            1
          </a>
          <a href="#none">2</a>
          <a href="#none">3</a>
          <a href="#none">4</a>
          <a href="#none">
            <i className="fa fa-angle-double-right"></i>
          </a>
        </div>

    */}


      </div>
    </section>
  );
};

export default Courses;
