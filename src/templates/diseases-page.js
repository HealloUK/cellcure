import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Courses from "../components/Courses";

const CoursesPage = () => {
    return (
        <Layout 
            pageTitle="Diseases"
            description="Stem cell therapy can be used for the listed diseases and more."
        >
            <NavOne />
            <Courses />
            <Footer />
        </Layout>
    );
};

export default CoursesPage;
