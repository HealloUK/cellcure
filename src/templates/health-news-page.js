import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import News from "../components/News";
import { graphql } from "gatsby";

const NewsPage = ({ pageContext, data }) => {
    
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout
        pageTitle="Health News"
        description="Check out latest news about the aesthetic treatments and medical tourism."
      >
            <NavOne />
            {/*<PageHeader title="News" />*/}
            <News posts= { posts } pageContext= {pageContext}/>
            <Footer />
        </Layout>
    );
};

export default NewsPage;


export const newsPageQuery = graphql`
query NewsPageQuery($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    limit: $limit
    skip: $skip
    filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
  ) {
    edges {
      node {
        excerpt(pruneLength: 400)
        id
        fields {
          slug
        }
        frontmatter {
          title
          templateKey
          date(formatString: "MMMM DD, YYYY")
          featuredpost
          tags
          featuredimage {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
  }
}
`;
