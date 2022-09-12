import React, { Component } from "react";

class Topbar extends Component {
  render() {

    function scrollToQuote() {
      document.getElementById('quote-form').scrollIntoView({
        behavior: 'auto',
        block: 'center',
    });
    }

    return (
      <div className="topbar-one-only-text">
        <div className="container">
          <div className="topbar-one-only-text__left">
            <a href="#none">If you think you deserve better</a>
          </div>
          <div className="topbar-one-only-text__right">
            <a onClick={scrollToQuote} href="#none">Get Free Quote Now</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
