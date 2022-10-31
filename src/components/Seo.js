/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 import appleTouch from "../assets/images/favicons/apple-touch-icon.png";
 import fav32 from "../assets/images/favicons/favicon-32x32.png";
 import fav16 from "../assets/images/favicons/favicon-16x16.png";
 
 function Seo({ description, title, image, location, children }) {
   const { site } = useStaticQuery(
     graphql`
       query {
         site {
           siteMetadata {
             title
             description
           }
         }
       }
     `
   )
 
   const metaDescription = description || ""
   const defaultTitle = site.siteMetadata?.title
   const currentLocation = location !== undefined ? "https://stemcellpoint.com" + location : "https://stemcellpoint.com/"
   const titleWithBrand = defaultTitle ? `${title} | ${defaultTitle}` : title
 
   return (
     <>
       <meta name={`robots`} content={`index, follow`}/>
       <title>{titleWithBrand}</title>
       {metaDescription && (<meta name="description" content={metaDescription}/>)}
       <meta property="og:title" content={titleWithBrand} />
       {metaDescription && (<meta property="og:description" content={metaDescription}/>)}
       <meta property="og:type" content="website" />
       <meta property="og:locale" content="en_GB"/>
       <meta property="og:site_name" content={defaultTitle}/>
       <meta property="og:url" content={currentLocation}/>
       {image && (<meta property="og:image" content={image}></meta>)}
       <meta name="twitter:card" content="summary" />
       <meta name="twitter:creator" content={defaultTitle} />
       <meta name="twitter:title" content={titleWithBrand} />
       {metaDescription && (<meta name={`twitter:description`} content={metaDescription}/>)}
       {image && (<meta name="twitter:image" content={image}></meta>)}
       <link rel="apple-touch-icon" sizes="180x180" href={appleTouch} />
       <link rel="icon" type="image/png" sizes="32x32" href={fav32} />
       <link rel="icon" type="image/png" sizes="16x16" href={fav16} />
       {children}
     </>
   )
 }
 
 Seo.defaultProps = {
   description: ``,
 }
 
 Seo.propTypes = {
   description: PropTypes.string,
   title: PropTypes.string.isRequired,
 }
 
 export default Seo