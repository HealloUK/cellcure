import React from "react";
import { Helmet } from "react-helmet";
import appleTouch from "../assets/images/favicons/apple-touch-icon.png";
import fav32 from "../assets/images/favicons/favicon-32x32.png";
import fav16 from "../assets/images/favicons/favicon-16x16.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../assets/plugins/fontawesome-free-5.11.2-web/css/all.min.css";
import "../assets/plugins/kipso-icons/style.css";
import "../assets/css/animate.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

const Layout = (props) => {

  const metaDescription = props.description || ""
  const title = props.pageTitle || ""
  const image = props.image || ""

  return (
    <div>
      <Helmet
        title={title}
        titleTemplate={`%s | Heallo UK`}
        htmlAttributes={{
          lang: "en"
        }}
      >

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name={`robots`} content={`index, follow`}/>
        {metaDescription && (<meta name={`description`} content={metaDescription}/>)}
        <meta name={`og:title`} content={title}/>
        {metaDescription && (<meta name={`og:description`} content={metaDescription}/>)}
        <meta name={`og:type`} content={`website`}/>
        <meta property="og:locale" content="en_GB"/>
        <meta property="og:site_name" content="Heallo UK"/>
        <meta property="og:url" content="https://heallo.co.uk/"/>
        {image && (<meta property="og:image" content={image}></meta>)}
        <meta name={`twitter:card`} content={`summary`}/>
        <meta name={`twitter:creator`} content="Heallo UK"/>
        <meta name={`twitter:title`} content={title}/>
        {metaDescription && (<meta name={`twitter:description`} content={metaDescription}/>)}
        {image && (<meta name="twitter:image" content={image}></meta>)}
        
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouch} />
        <link rel="icon" type="image/png" sizes="32x32" href={fav32} />
        <link rel="icon" type="image/png" sizes="16x16" href={fav16} />

      {/*
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,500i,600,700,800%7CSatisfy&display=swap"
          rel="stylesheet"
        />

      */}

      </Helmet>

      <div className="page-wrapper">{props.children}</div>
    </div>
  );
};

export default Layout;
