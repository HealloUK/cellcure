import React from "react";
import { Link } from "gatsby";
import BlogCard from './BlogCard'

const News = ({ posts, pageContext, pagination=true }) => {

  const {currentPage, numPages} = pageContext
  const isFirst = currentPage === 1
  const ifLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  return (
    <section className="blog-one blog-page" style={{paddingTop: "120px"}}>
      <div className="container" style={{ minHeight: "680px"}}>
        <div className="row">

        {posts &&
          posts.map(({ node: post }) => (

            <BlogCard post= { post } />

          ))}

        </div>

        <div className="post-pagination">
        
        {!isFirst && pagination && (<Link to= {`/health-news${prevPage}`}>
            <i className="fa fa fa-angle-left"></i> Previous
          </Link>)
        }

        {!ifLast && pagination && (<Link to= {`/health-news${nextPage}`}>
        Next <i className="fa fa-angle-right"></i>
          </Link>)
        }

        </div>
      </div>
    </section>
  );
};

export default News;
