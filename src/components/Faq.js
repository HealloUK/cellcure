import React from 'react';

const Faq = () => {
    return (
        <section className="faq-one">
            <div className="container">
                <div className="row no-gutters">

                    <div className="col-lg-6">
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content" id="great-destination">
                                <h2 className="faq-one__title">Why is Turkey a great destination for health tourism?</h2>
                                <p className="faq-one__text">Turkey is an excellent destination for health tourism because of its many 
                                top-quality hospitals and medical facilities. Approximately <b>1 million patients</b> come to Turkey every year to receive medical treatment.
                                The cost of medical treatment in Turkey is much lower than in other countries.
                                </p>
                                <br/>
                                <p>
                                The healthcare infrastructure in Turkey is highly developed, with world-class hospitals and clinics located throughout 
                                the country. Turkish hospitals are equipped with <b>state-of-the-art technology</b> and offer a wide range of medical treatments. Turkish doctors are some of the <b>most qualified and experienced</b> in the world, and patients can be 
                                confident that they will receive <b>top-notch care</b> while in Turkey.
                                </p>
                                <p>
                                Another reason why people choose to travel to Turkey for healthcare is because the country offers an <b>amazing variety of 
                                tourist attractions.</b> Istanbul, Ankara, and Antalya are just some of the beautiful cities that you can visit while 
                                receiving treatment in Turkey. 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content" id="better-alternative">
                                <h2 className="faq-one__title">Why is Heallo a better alternative than local treatments?</h2>
                                <p className="faq-one__text">
                                There are many reasons why health tourism is a better alternative than local treatments.
                                </p>
                                <br/>
                                <p>
                                First, health tourism offers access to the <b>latest medical technologies and treatments</b> that may not be available in the patient's 
                                home country. 
                                </p>
                                <p>
                                Second, health tourists can receive <b>high-quality care</b> at a <b>fraction of the cost</b> of treatment in their home country. 
                                </p>
                                <p>
                                Finally, by traveling for medical treatment, patients can enjoy a relaxing vacation while they undergo treatment.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6" style={{paddingBottom: `0px`, borderBottom: `0px none`}}>
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content" id="how-do-i-know">
                                <h2 className="faq-one__title">How do I know if I can trust the doctors and hospitals you partner with?</h2>
                                <p className="faq-one__text">
                                The quality of Turkey's hospitals is highly rated by international organizations such as 
                                the <b>World Health Organization (WHO)</b> and the <b>Joint Commission International (JCI).</b> 
                                Many hospitals in Turkey are accredited 
                                by both organizations, ensuring that patients receive <b>high-quality care.</b> 
                                </p>
                                <br/>
                                <p>
                                In addition, <b>Turkish doctors</b> are considered to be 
                                some of the <b>best in the world.</b> They have been trained at some of Europe's most prestigious universities and 
                                use <b>state-of-the art equipment and technology</b> in their clinics.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6" style={{paddingBottom: `0px`, borderBottom: `0px none`}}>
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content" id="treatment-goes-wrong">
                                <h2 className="faq-one__title">What to do if medical treatment goes wrong?</h2>
                                <p className="faq-one__text">All doctors providing medical assistance in Turkey must have <b>occupational obligation 
                                insurance.</b> 
                                </p>
                                <br/>
                                <p>
                                In case of any medical malpractice or error, the patient is <b>counterpoised by insurance.</b> 
                                </p>
                                <p>
                                All hospitals in Turkey provide their services according to national accreditation criteria and are reviewed 
                                twice a year.</p>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    );
};

export default Faq;
