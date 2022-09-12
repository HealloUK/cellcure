import React from "react";
import Layout from "../../components/Layout";
import NavOne from "../../components/NavOne";
import Footer from "../../components/Footer";

// eslint-disable-next-line
export default () => (
  <Layout pageTitle="Contact">
            <NavOne />
            <div className="text-center" style={{ minHeight: "750px", marginTop: "200px" }}>
            <h1>Thank you!</h1>
            <p className="alert alert-success">We will contact you as soon as possible. Don't forget to check your email!</p>
            </div>
            <Footer />
  </Layout>
);
