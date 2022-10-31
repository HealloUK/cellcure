import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import News from "../components/News";
import { graphql } from "gatsby";
import Seo from '../components/Seo';

const NewsPage = ({ pageContext, data }) => {
    
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
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
    filter: { frontmatter: { templateKey: { eq: "blog-post" }, type: { ne: "disease" } } }
  ) {
    edges {
      node {
        excerpt(pruneLength: 80)
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
          path
        }
      }
    }
  }
}
`;

export const Head = ({location}) => <Seo 
                            title="Blog"
                            description="Check out latest news about the stem cell treatments."
                            location={location.pathname}
                          />