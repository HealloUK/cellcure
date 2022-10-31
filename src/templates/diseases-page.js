import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import Courses from "../components/Courses";
import Seo from '../components/Seo';

const CoursesPage = () => {
    return (
        <Layout>
            <NavOne />
            <Courses />
            <Footer />
        </Layout>
    );
};

export default CoursesPage;

export const Head = ({location}) => <Seo 
                            title="Diseases"
                            description="Stem cell therapy can be used for the listed diseases and more."
                            location={location.pathname}
                          />
