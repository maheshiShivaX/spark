const OurHVACService = () => {
    return (
        <section className="same_space pt-0 our_ac_service_wepper">
            <div className="container">
                <div className="our_service_hedding">
                    <h2>Our HVAC Service</h2>
                    <p>Offering Factory Direct Pricing to the public</p>
                </div>
                <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="ac_services_box">
                            <div className="ac_services_hedding">
                                <h2>New <br/> Installation</h2>
                                {/* <span>
                                    <img src="images/services-arrow.svg" alt="" />
                                </span> */}
                            </div>
                            <p>Our HVAC experts will work with you to find HVAC solutions that suits your heating and
                                cooling needs.</p>
                            <div className="ac_services_content">
                                <img src="images/secvics1.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="ac_services_box">
                            <div className="ac_services_hedding">
                                <h2>Furnace Works</h2>
                                {/* <span>
                                    <img src="images/services-arrow.svg" alt="" />
                                </span> */}
                            </div>
                            <p>We will check, tune-up, repair and do maintenance for your furnace with utmost care.</p>
                            <div className="ac_services_content">
                                <img src="images/secvics2.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="ac_services_box">
                            <div className="ac_services_hedding">
                                <h2>Air Conditioning Services</h2>
                                {/* <span>
                                    <img src="images/services-arrow.svg" alt="" />
                                </span> */}
                            </div>
                            <p>Maintaining a cool and comfortable environment inside your home during hot Colorado summers
                                is imperative.</p>
                            <div className="ac_services_content">
                                <img src="images/secvics1.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="ac_services_box">
                            <div className="ac_services_hedding">
                                <h2>Commercial</h2>
                                {/* <span>
                                    <img src="images/services-arrow.svg" alt="" />
                                </span> */}
                            </div>
                            <p>Need a new RTU? We can help. We offer the most competitive pricing for all your commercial
                                needs.</p>
                            <div className="ac_services_content">
                                <img src="images/secvics3.png" alt="" className="services2_img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurHVACService;