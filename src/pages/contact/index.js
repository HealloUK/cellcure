import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import NavOne from "../../components/NavOne";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false, isLoading: false };
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
      <Layout pageTitle="Contact">
            <NavOne />
            <Contact handleChange={this.handleChange} handleSubmit={this.handleSubmit} isLoading={this.state.isLoading}  />
            <Footer />
      </Layout>
    );
  }
}
