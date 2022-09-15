import React from "react";
import BlogRollLatest from "../components/BlogRollLatest";
import { Link, graphql } from "gatsby";

const BlogThree = () => {
  return (
    <section className="blog-one  blog-one__home-two">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
          Learn more about Stem Cell treatment
          </h2>
          <br />
          <h6><Link to="/blog" style={{ color: "#7c4bc0" }}>View All Articles</Link></h6>
        </div>
        <div className="row">

        <BlogRollLatest />

        </div>
      </div>
    </section>
  );
};

export default BlogThree;
