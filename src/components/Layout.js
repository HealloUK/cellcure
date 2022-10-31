import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../assets/plugins/fontawesome-free-5.11.2-web/css/all.min.css";
import "../assets/plugins/kipso-icons/style.css";
import "../assets/css/animate.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

const Layout = (props) => {


  return (
    <div>
      <div className="page-wrapper">{props.children}</div>
    </div>
  );
};

export default Layout;
