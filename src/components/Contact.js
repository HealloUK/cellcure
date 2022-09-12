import React from "react";


const Contact = ({ handleChange, handleSubmit, isLoading}) => {


  return (
    <div>
      
      <section className="contact-one">
        <div className="container">
          <h2 className="contact-one__title text-center">
            Contact Us
          </h2>
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
                <div className="text-center">
                  <button type="submit" className="contact-one__btn thm-btn">
                  {
                      isLoading ? (<><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      <span class="sr-only">Loading...</span></>) : "Send"
                  }
                  </button>
                </div>
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
