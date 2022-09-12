import React from 'react';
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { Link } from 'gatsby'
import { kebabCase, startCase } from "lodash";

const BlogCard = ({ post }) => {
    return (
        <div className="col-lg-4" key={post.id}>
            <div className="blog-one__single">
              <div className="blog-one__image">

              <Link to={post.fields.slug}>
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

                  <div className="blog-one__plus">
                    <i className="kipso-icon-plus-symbol"></i>
                  </div>
                </Link>
                
              </div>
              <div className="blog-one__content text-center">
                
                <h2 className="blog-one__title">
                <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                </h2>
          
          
            <span>
                {post.frontmatter.tags &&
                  post.frontmatter.tags.map(( tag, i ) => (
                  <>
                  <Link to={`/tags/${kebabCase(tag)}`} className="blog-one__link">
                      {startCase(tag)}
                  </Link>
                  {i == post.frontmatter.tags.length - 1 ? "" : ", "}
                  </>
                ))}
            </span>


              </div>
            </div>
          </div>
    );
};

export default BlogCard;
