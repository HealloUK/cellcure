import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import BlogCard from './BlogCard'

class BlogRollLatestTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <>
        {posts &&
          posts.map(({ node: post }) => (

            <BlogCard post= { post }/>

          ))}
      </>
    )
  }
}

BlogRollLatest.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function BlogRollLatest() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollLatestQuery {
          allMarkdownRemark(
            limit: 3
            sort: { order: DESC, fields: [frontmatter___date] }
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
      `}
      render={(data, count) => <BlogRollLatestTemplate data={data} count={count} />}
    />
  );
}
