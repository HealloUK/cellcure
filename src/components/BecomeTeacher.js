import React from 'react';
import { navigate } from "gatsby-link";

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  class BecomeTeacher extends React.Component {

    url = typeof window !== 'undefined' ? window.location.href : '';
    

    constructor(props) {
        super(props);
        this.state = { isValidated: false, isLoading: false, url: this.url };
      }

      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        this.setState({isLoading: true});
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": form.getAttribute("name"),
            ...this.state,
          }),
        })
          .then(() => navigate(form.getAttribute("action")))
          .catch((error) => alert(error));
      };

render() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="become-teacher__content">
                            <h2 className="become-teacher__title">About Heallo</h2>
                            <p className="become-teacher__text">We connect patients our trusted doctors, clinics, hospitals. 
                            We have a wide range of services and treatments for you to choose from all at an affordable price.</p>
                            <h2 className="become-teacher__subtitle">Experienced team of Professionals</h2>
                            <p className="become-teacher__text">We are dedicated to helping our clients look and feel their best. 
Our experienced team of professionals will work with you to create a personalized treatment plan that meets your needs and fits your budget.</p>
                            <h2 className="become-teacher__subtitle">Perfect Journey</h2>
                            <p className="become-teacher__text">We design every step of your medical journey from the moment you 
leave your home to the moment you return home.

Our team is passionate about providing excellent customer service 
and we are dedicated to ensuring that you have wonderful experience.

Contact us today to schedule a consultation!</p>
                        </div>
                    </div>
                    <div className="col-lg-6" id="quote-form">
                        <div className="become-teacher__form">
                            <div className="become-teacher__form-top">
                                <h2 className="become-teacher__form-title">
                                    Get Free Quote
                                </h2>
                            </div>
                            <form 
                                  className="become-teacher__form-content contact-form-validated"
                                  name="get-a-quote"
                                  method="post"
                                  action="/contact/thanks/"
                                  data-netlify="true"
                                  data-netlify-honeypot="bot-field"
                                  onSubmit={this.handleSubmit}
                            >

                                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                                <input type="hidden" name="form-name" value="get-a-quote" />
                                <div hidden>
                                <label>
                                    Don’t fill this out:{" "}
                                    <input name="bot-field" onChange={this.handleChange} />
                                </label>
                                </div>


                                <input
                                    className="input"
                                    type={"text"}
                                    name={"name"}
                                    onChange={this.handleChange}
                                    id={"name"}
                                    required={true}
                                    placeholder="Name"
                                />


                                <input
                                    className="input"
                                    type={"email"}
                                    name={"email"}
                                    onChange={this.handleChange}
                                    id={"email"}
                                    required={true}
                                    placeholder="Email"
                                />

                                <input
                                    className="input"
                                    type={"phone"}
                                    name={"phone"}
                                    onChange={this.handleChange}
                                    id={"phone"}
                                    required={true}
                                    placeholder="Phone Number"
                                />

                                <input type="hidden" name="url" value={`${this.state.url}`}/>

                                <button type="submit" className="thm-btn become-teacher__form-btn">
                                    {
                                        this.state.isLoading ? (<><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        <span class="sr-only">Loading...</span></>) : "Apply For It"
                                    }
                                </button>
                            </form>
                            <div className="result text-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }


};

export default BecomeTeacher;
