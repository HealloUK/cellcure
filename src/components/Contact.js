import { Link } from "gatsby";
import React from "react";


const Contact = ({ handleChange, handleSubmit, isLoading }) => {


  return (
    <div>

      <section className="contact-one">
        <div className="container">

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item"><Link to="/">Home</Link></li>
              <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
            </ol>
          </nav>


          <h2 className="contact-one__title">
            Contact Us
          </h2>

          <h5 className="mb-3 text-black">Fill out the form and we will reach you as soon as possible.</h5>

          <form
            className="contact-one__form contact-form-validated"
            name="contact"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >

            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </div>

            <div className="row low-gutters">

              <div className="col-lg-6">
                <label className="label" htmlFor={"name"}>
                  First name *
                </label>
                <input
                  className="input"
                  type={"text"}
                  name={"name"}
                  onChange={handleChange}
                  id={"name"}
                  required={true}
                />
              </div>

              <div className="col-lg-6">
                <label className="label" htmlFor={"lastname"}>
                  Last name *
                </label>
                <input
                  className="input"
                  type={"text"}
                  name={"lastname"}
                  onChange={handleChange}
                  id={"lastname"}
                  required={true}
                />
              </div>

              <div className="col-lg-6">
                <label className="label" htmlFor={"email"}>
                  Email *
                </label>
                <input
                  className="input"
                  type={"email"}
                  name={"email"}
                  onChange={handleChange}
                  id={"email"}
                  required={true}
                />
              </div>

              <div className="col-lg-6">
                <label className="label" htmlFor={"name"}>
                  Phone Number *
                </label>
                <input
                  className="input"
                  type={"phone"}
                  name={"phone"}
                  onChange={handleChange}
                  id={"phone"}
                  required={true}
                />
              </div>





              <div className="col-lg-12">
                <label className="label" htmlFor={"message"}>
                  Message
                </label>
                <textarea
                  className="textarea"
                  name={"message"}
                  onChange={handleChange}
                  id={"message"}
                  required={true}
                />
              </div>

              <div class="col-12">
                <label class="become-teacher__form-agree">

                  <input type="checkbox" name="agree" />

                  <span class="become-teacher__form-agree-checkbox">
                    <i className="fa fa-check"></i>
                  </span>
                  <span class="become-teacher__form-agree-text">I agree to the <Link to="/terms-of-use">Terms of Use</Link> and <Link to="/privacy-policy">Privacy Policy</Link>.</span>
                </label>
              </div>

              <div className="col-12">
                <button type="submit" className="become-teacher__form-btn">
                  {
                    isLoading ? (<><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      <span class="sr-only">Loading...</span></>) : "Send"
                  }
                </button>
              </div>

            </div>
          </form>
          <div className="result text-center"></div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
