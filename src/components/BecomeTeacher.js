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
                            

                            <h2 className="become-teacher__title">Get a free online consultation with a medical adviser</h2>
                            <p className="become-teacher__text">Fill out the form to discuss the disease and treatment options with an expert! 
                            You’ll be contacted by a Medical Adviser who will collect information for the doctor and answer your basic questions.
                            </p>

                            <p className="become-teacher__text">
                            Based on your medical reports, the doctors will assess whether you’re a candidate for the therapy. They will consider:
                            </p>

                            <ul class="become-teacher__list">
                            <li>Whether stem cell therapy will be effective in your specific case?</li>
                            <li>What the treatment involves?</li>
                            <li>How much does it cost?</li>
                            </ul>

                            
                            
                        </div>
                    </div>
                    <div className="col-lg-6" id="quote-form">
                        <div className="become-teacher__form">
                            
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

                                <label class="label" for="name">NAME</label>
                                <input
                                    className="input"
                                    type={"text"}
                                    name={"name"}
                                    onChange={this.handleChange}
                                    id={"name"}
                                    required={true}
                                />

                                <label class="label" for="email">E-MAIL</label>
                                <input
                                    className="input"
                                    type={"email"}
                                    name={"email"}
                                    onChange={this.handleChange}
                                    id={"email"}
                                    required={true}
                                />

                                <label class="label" for="phone">PHONE</label>
                                <input
                                    className="input"
                                    type={"phone"}
                                    name={"phone"}
                                    onChange={this.handleChange}
                                    id={"phone"}
                                    required={true}
                                />

                                <label class="label" for="diagnosis">DIAGNOSIS</label>
                                <input
                                    className="input"
                                    type={"diagnosis"}
                                    name={"diagnosis"}
                                    onChange={this.handleChange}
                                    id={"diagnosis"}
                                    required={true}
                                />

                                <input type="hidden" name="url" value={`${this.state.url}`}/>



                                
                                <label class="become-teacher__form-agree">
                        
                                <input type="checkbox" name="agree"/>
                                
                                <span class="become-teacher__form-agree-checkbox">
                                <i className="fa fa-check"></i>
                                </span>
                                <span class="become-teacher__form-agree-text">I agree to the <a href="https://heallo.co.uk/term-of-use">Terms of Use</a> and <a href="https://heallo.co.uk/privacy-policy">Privacy Policy</a>.</span>
                                </label>
                                


                                <button type="submit" className="become-teacher__form-btn">
                                    {
                                        this.state.isLoading ? (<><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        <span class="sr-only">Loading...</span></>) : "GET CONSULTATION"
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
