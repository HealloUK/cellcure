import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import NewsDetails from "../components/NewsDetails";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";
import Seo from "../components/Seo";



const HTMLFORM = 
'<div class="card mb-4 px-0 border-0 shadow rounded">' +

'<div class="card-header bg-transparent py-3 border-0 rounded">' +
'<h5 class="card-title">Get a free online consultation</h5>' +
'<p class="card-text">Get in touch with us to learn if stem cell therapy will be effective for your condition, what are the expected results, what is the cost and duration of therapy.</p>' +
' </div>' +

'<div class="card-body bg-light border-0 rounded">' +
'<form class="row g-3">' +
' <div class="col-md-4">' +
'   <label for="validationDefault01" class="form-label">NAME</label>' +
'   <input type="text" class="form-control" id="validationDefault01" required/>' +
' </div>' +
' <div class="col-md-4">' +
'   <label for="validationDefault02" class="form-label">PHONE</label>' +
'   <input type="text" class="form-control" id="validationDefault02" required/>' +
' </div>' +
' <div class="col-md-4">' +
'   <label for="validationDefault02" class="form-label">E-MAIL</label>' +
'   <input type="text" class="form-control" id="validationDefault02" required/>' +
' </div>' +
' <div class="col-12">' +
'   <div class="form-check">' +
'     <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>' +
'     <label class="form-check-label" for="invalidCheck2">' +
'       I agree to the <a href="terms-of-use">Terms of Use</a> and <a href="privacy-policy">Privacy Policy</a>' +
'     </label>' +
'   </div>' +
' </div>' +
' <div class="col-12">' +
'   <button class="btn btn-danger btn-sm px-4 py-2" type="submit">GET CONSULTATION</button>' +
' </div>' +
'</form>' +
' </div>' +
' </div>';






const BlogPost = ({ data }) => {
  const { allMarkdownRemark, markdownRemark: post } = data;
  const { group } = allMarkdownRemark;
  var editedContent = post.html.replace("<!--form-->", HTMLFORM);


  return (
    
    <Layout>
        <NavOne />
        <NewsDetails 
          content={editedContent}
          contentComponent={HTMLContent}
          tags={post.frontmatter.tags}
          type={post.frontmatter.type}
          title={post.frontmatter.title}
          group={group}
        />
        <ApplicationForm />
        <Footer />
    </Layout>
    
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        type
      }
    }
  }
`;


export const Head = ({location, data}) => <Seo 
                            title={data.markdownRemark.frontmatter.title}
                            description={data.markdownRemark.frontmatter.description}
                            location={location.pathname}
                          />
                          