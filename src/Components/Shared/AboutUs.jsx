import { Link } from "react-router-dom";

const Aboutus = () => {
    return (
        <section className="same_space">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="about_hedding">
                            <h2>About Us</h2>
                            <p> Sparks Heating and Air, LLC was founded with the vision of making comfort affordable for
                                everyone. We have been serving the residents of Colorado, helping them stay fresh and cozy.
                                Be it any condition, Sparks can provide the right indoor ambiance to stay contented.
                                As a full-service HVAC company in Denver CO, we provide a myriad of services and financing
                                options. We have our client’s best interests in our hearts. We make sure that they get the
                                best of the deals possible.
                                What’s with all the thinking? Hire an expert HVAC company that is the best HVAC Company
                                Denver has to offer and transform your house into a home.</p>
                            <Link to="/aboutus" className="same_btn">Know More About Us <img src="images/right-arrow.svg" alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="about_img_book">
                            <img src="images/about.png" alt="" className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}


export default Aboutus;