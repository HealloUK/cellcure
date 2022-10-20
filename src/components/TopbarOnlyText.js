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
            <a href="#none">Do you want to talk to Medical Advisor?</a>
          </div>
          <div className="topbar-one-only-text__right">
            <a onClick={scrollToQuote} href="#none">Get a free consultation</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
