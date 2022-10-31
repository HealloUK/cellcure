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
  type,
  title,
}) => {
  const PostContent = contentComponent || Content;
  const url = typeof window !== 'undefined' ? window.location.href : '';
  
  return (
    <section className="blog-details">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
            <li class="breadcrumb-item"><Link to={type == "disease" ? "/diseases" : "/blog"}>{type == "disease" ? "Diseases" : "Blog"}</Link></li>
            <li class="breadcrumb-item active" aria-current="page">{title}</li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-one__single">
              
              <div className="blog-one__content">
                
                <h2 className="blog-one__title text-center">
                    {title}
                </h2>
                
                <PostContent content={content} />
                
              </div>
            </div>

            <div className="share-block">
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
                <h3 className="sidebar__title">Suggested:</h3>
                <div className="sidebar__post-wrap">
                  
                  <BlogRollPostPageLatest/>
                  
                </div>
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
