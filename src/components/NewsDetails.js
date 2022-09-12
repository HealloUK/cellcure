import React from "react";
import PropTypes from "prop-types";
//import PreviewCompatibleImage from "./PreviewCompatibleImage";
import Content, { HTMLContent } from "../components/Content";
import { kebabCase, startCase } from "lodash";
import { Link } from "gatsby";
import BlogRollPostPageLatest from "./BlogRollPostPageLatest";


const NewsDetails = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  group
}) => {
  const PostContent = contentComponent || Content;
  const url = typeof window !== 'undefined' ? window.location.href : '';
  
  return (
    <section className="blog-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-one__single">
              
              <div className="blog-one__content">
                
                <h2 className="blog-one__title text-center">
                    {title}
                </h2>

                <p>{description}</p>
                
                <PostContent content={content} />
                
              </div>
            </div>
            <div className="share-block">
              <div className="left-block">
                <p>
                  Tags: 
                  
                  {tags.map((tag) => (
                      <Link key={tag + `tag`} to={`/tags/${kebabCase(tag)}/` }>{startCase(tag)}</Link>
                  ))}

                </p>
              </div>
              <div className="social-block">
                <a target="_blank" href={`https://twitter.com/intent/tweet/?text=${title}&url=${url}`}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a target="_blank" href={`https://www.facebook.com/sharer.php?t=${title}&u=${url}`}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a target="_blank" href={`https://linkedin.com/shareArticle?mini=true&title=${title}&url=${url}`}>
                  <i className="fab fa-linkedin"></i>
                </a>
                <a target="_blank" href={`mailto:?subject=${title}&body=${url}`}>
                <i class="fas fa-envelope"></i>
                </a>
              </div>
            </div>
            


          </div>
          <div className="col-lg-4">
            <div className="sidebar">
            
              <div className="sidebar__single sidebar__post">
                <h3 className="sidebar__title">Latest News</h3>
                <div className="sidebar__post-wrap">
                  
                  <BlogRollPostPageLatest/>
                  
                </div>
              </div>
              



              <div className="sidebar__single sidebar__category">
                <h3 className="sidebar__title">Categories</h3>
                <ul className="sidebar__category-list">
                  
                  
                  {group &&
                    group.map((tag) => (

                      <li className="sidebar__category-list-item" key={tag.fieldValue + tag.totalCount}>
                              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>{startCase(tag.fieldValue)}</Link>
                      </li>

                  ))}
                  
                  
                </ul>
              </div>






            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

NewsDetails.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  featuredimage: PropTypes.string,
  title: PropTypes.string,
  group: PropTypes.array,
};

export default NewsDetails;
