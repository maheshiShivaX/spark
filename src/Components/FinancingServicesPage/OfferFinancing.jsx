import { Link } from "react-router-dom";
import CustomerFeedback from "../Shared/CustomerFeedback";
import ScheduleYourService from "../Shared/ScheduleYourService";

const OfferFinancing = () => {
    return (
        <div className="financing_services_page">
            <section className="same_space why_financing">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="about_hedding">
                                <h2>Why do we offer Financing?</h2>
                                <p>As HVAC experts, we, at Sparks Heating and Air, understand that installing or replacing HVAC
                                    systems in your home is hefty on your budget. We also understand that most people opt to
                                    repair their old and less efficient HVAC systems. They forget the fact that it comes at the
                                    cost of their health and humungous power bills.</p>
                                <p>
                                    We don’t blame our customers for their choice. After all, everyone is working hard. Spending
                                    their hard-earned money just like that on the replacement or new installation is not a
                                    luxury that we can afford. We understand that fitting an installation or replacement in your
                                    budget is difficult. So, we have partnered with the best finance companies to help you with
                                    your decision.
                                </p>
                                <p>Our financing program offers the following such that you can install or replace your HVAC
                                    system without breaking the bank.</p>
                                <ul>
                                    <li>Fast and Easy Approval Process</li>
                                    <li>Payments as Low as $59</li>
                                    <li>Low-Interest Rates</li>
                                    <li>No Down Payment</li>
                                </ul>
                                <p>To know more about the financing options, contact us and talk with our financing experts who
                                    will answer all your queries and doubts.</p>
                                <Link to="https://portal.foundationfinance.com/links/ESWjLmuZKtpKG4ziKj9bRNzddVQTNCpwUESzEmh1Tnw= "  target="_blank" className="same_btn">Apply Now <img src="images/right-arrow.svg"
                                    alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="about_img_book">
                                <img src="images/financing-services.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CustomerFeedback/>
            <ScheduleYourService/>
        </div>
    )
}

export default OfferFinancing;