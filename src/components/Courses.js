import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import CourseList from "./CourseList";

const Courses = () => {
  return (
    <section className="course-one course-page">
      <div className="container">
      <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Diseases</li>
          </ol>
      </nav>
      <h1>Diseases</h1>
      <br/>
      </div>
      <CourseList/>
    </section>
  );
};

export default Courses;
