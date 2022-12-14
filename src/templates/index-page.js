import React from "react";
import Layout from "../components/Layout";
import TopbarOnlyText from "../components/TopbarOnlyText";
import NavOne from "../components/NavOne";
import AboutTwo from "../components/AboutTwo";
import TopCourses from "../components/TopCourses";
import BlogThree from "../components/BlogThree";
import ApplicationForm from "../components/ApplicationForm";
import Footer from "../components/Footer";
import Seo from "../components/Seo";


const HomePage = () => (
  <Layout>
    <TopbarOnlyText />
    <NavOne />
    <AboutTwo />
    <ApplicationForm />
    <TopCourses />
    <BlogThree />
    <Footer />
  </Layout>
);

export default HomePage;

export const Head = ({location}) => <Seo 
                            title="Stem Cell Treatment Clinic"
                            description="We provide a tailored and comprehensive treatment approach that helps patients with difficult-to-treat diseases including autism, multiple sclerosis, diabetes type 2, stroke, arthritis, COPD, Parkinson's improve their condition and quality of life."
                            location={location.pathname}
                          />