import React from "react";
import PropTypes from "prop-types";
//import PreviewCompatibleImage from "./PreviewCompatibleImage";
import Content, { HTMLContent } from "./Content";
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
            <li class="breadcrumb-item active" aria-current="page">{title}</li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-one__single">
              
              <div className="blog-one__content">
                
                <h2 className="blog-one__title text-center">
                    {title}
                </h2>
                
                <PostContent content={content} />
                
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
};

export default NewsDetails;
