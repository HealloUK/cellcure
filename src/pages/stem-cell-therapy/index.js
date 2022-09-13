import React from 'react';
import Layout from "../../components/Layout";
import NavOne from "../../components/NavOne";
import Footer from "../../components/Footer";
import StemTexts from '../../components/StemTexts';
import ApplicationForm from '../../components/ApplicationForm';


const AboutPage = () => {
    return (
        <Layout
        pageTitle="Stem Cell Treatments in Turkey"
        description="Stem Cell Treatments in Turkey"
      >
            <NavOne decor="none" />
            <StemTexts />
            <ApplicationForm />
            <Footer />
        </Layout>
    );
};

export default AboutPage;
