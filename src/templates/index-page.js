import React from "react";
import Layout from "../components/Layout";
import TopbarOnlyText from "../components/TopbarOnlyText";
import NavOne from "../components/NavOne";
import AboutTwo from "../components/AboutTwo";
import TopCourses from "../components/TopCourses";
import BlogThree from "../components/BlogThree";
import CourseCatOne from "../components/CourseCatOne";
import Footer from "../components/Footer";


const HomePage = () => (
  <Layout 
    pageTitle="We design your perfect medical journey in Turkey"
    description="We have a wide range of aesthetic treatments including bariatric surgery, hair transplant and dental for you to choose from-all at an affordable price in Turkey."
  >
    <TopbarOnlyText />
    <NavOne />
    <AboutTwo />
    <TopCourses />
    <BlogThree />
    <CourseCatOne />
    <Footer />
  </Layout>
);

export default HomePage;
