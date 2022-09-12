import React from "react";
import BlogRollLatest from "../components/BlogRollLatest";
import { Link, graphql } from "gatsby";

const BlogThree = () => {
  return (
    <section className="blog-one  blog-one__home-two">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
          Latest Health News
          </h2>
          <br />
          <h6><Link to="/health-news" style={{ color: "#7c4bc0" }}>More Health News</Link></h6>
        </div>
        <div className="row">

        <BlogRollLatest />

        </div>
      </div>
    </section>
  );
};

export default BlogThree;
