import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import CourseList from "./CourseList";

const TopCourses = () => {
  return (
    <section className="top-course-one top-course-page">

      <div className="container text-center">
        <div className="block-title">
          <h2 className="block-title__title">
            What diseases<br /> can we treat with the comprehensive strategy?
          </h2>
        </div>
        <p className="block-subtitle">
        We design tailored and comprehensive care plans to meet the unique needs of each individual. 
        Stem cell therapy can be combined with other therapeutic approaches to improve the effectiveness of the treatment when applying stem cells alone is insufficient. We have seen different levels of progress in 
        our treatments for the diseases listed below(many more not on the list):
        </p>
      </div>

      <CourseList/>

    </section>
  );
};

export default TopCourses;
