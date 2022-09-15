import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Courses from "../components/Courses";

const CoursesPage = () => {
    return (
        <Layout 
            pageTitle="Aesthetic Treatments in Turkey"
            description="Our skilled surgeons offers a wide range of procedures, including rhinoplasty, tummy tuck, bbl, liposuction, facelift, and breast surgery with affordable prices."
        >
            <NavOne />
            <Courses />
            <Footer />
        </Layout>
    );
};

export default CoursesPage;
