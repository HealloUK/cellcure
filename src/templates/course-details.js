import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import { getImage } from "gatsby-plugin-image"
import Footer from "../components/Footer";
import CourseDetails from "../components/CourseDetails";
import CourseCatOne from "../components/CourseCatOne";
import TopCourses from "../components/TopCourses";
import { graphql } from 'gatsby';

const CoursesPage = ({ data }) => {
    const { markdownRemark: post } = data;

    const heroImage = getImage(post.frontmatter.image) || post.frontmatter.image;
    
    return (
      <Layout
        pageTitle={post.frontmatter.title}
        description={post.frontmatter.description.substr(0, post.frontmatter.description.indexOf(".")) + "..."}
        image={heroImage.images.fallback.src}
      >
            <NavOne />
            <CourseDetails details= {post.frontmatter}/>
            <CourseCatOne />
            <br/><br/>
            <TopCourses />
            <Footer />
        </Layout>
    );
};

export default CoursesPage;

export const treatmentDetailPageQuery = graphql`
  query TreatmentDetailPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        price
        duration
        anesthesia
        recovery
        result
        description
        whenconsider
        expectations
      }
    }
  }
`;