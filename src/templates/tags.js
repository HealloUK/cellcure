import * as React from "react";
import NavOne from "../components/NavOne";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import News from "../components/News";

class TagRoute extends React.Component {
  render() {


    const posts = this.props.data.allMarkdownRemark.edges;
    const pageContext = this.props.pageContext;


    const tag = pageContext.tag;


    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`;

    return (
      <Layout pageTitle={tag}>
            <NavOne />
            <News posts= { posts } pageContext= {pageContext} pagination= {false}/>
            <Footer />
        </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
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
