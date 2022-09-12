import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRollPostPageLatestTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <>
        {posts &&
          posts.map(({ node: post }) => (

            <div className="sidebar__post__single" key={post.id}>
                    <div className="sidebar__post-image">
                      <div className="inner-block">
                        {post.frontmatter.featuredimage ? (
                          <div className="featured-thumbnail">
                            <PreviewCompatibleImage
                              imageInfo={{
                                image: post.frontmatter.featuredimage,
                                alt: post.frontmatter.title,
                                width:
                                  post.frontmatter.featuredimage.childImageSharp
                                    .gatsbyImageData.width,
                                height:
                                  post.frontmatter.featuredimage.childImageSharp
                                    .gatsbyImageData.height,
                              }}
                            />
                          </div>
                    ) : null}
                      </div>
                    </div>
                    <div className="sidebar__post-content">
                      <h4 className="sidebar__post-title">
                        <Link to={post.fields.slug}>
                          {post.frontmatter.title}
                        </Link>
                      </h4>
                    </div>
                  </div>

          ))}
      </>
    )
  }
}

BlogRollPostPageLatest.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function BlogRollPostPageLatest() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollPostPageLatestQuery {
          allMarkdownRemark(
            limit: 5
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
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
      render={(data, count) => <BlogRollPostPageLatestTemplate data={data} count={count} />}
    />
  );
}
