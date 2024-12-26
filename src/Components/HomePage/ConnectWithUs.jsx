import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactUs from './ContactUs';
import BookAppointment from './BookAppointment';
import ClubMembership from './ClubMembership';
import OverLay from './OverLay';
const ConnectWithUs = () => {
    const [showAppointmentSidebar, setShowAppointmentSidebar] = useState(false);
    const [activeTab, setActiveTab] = useState('book-appointment');
    
    return (
        <div>

            {/* Book Appointment */}
            <section className="over_lay">

                
                <OverLay
                    showAppointmentSidebar={showAppointmentSidebar}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    setShowAppointmentSidebar={setShowAppointmentSidebar} 
                  
                />

            </section>

            {/* Book Appointment End */}


            <section className="pt-0 same_space">
                <div className="container">
                    <div className="with_us_wepper">
                        <h2>How You can Connect With Us</h2>
                        <Link to="#" className='book_appointment_click' onClick={() => setShowAppointmentSidebar(true)}>Let’s Connect <img src="images/cicrcl.svg" alt="" /></Link>
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="withus_bg">
                                            <h3>Get Your Quotation</h3>
                                            <p>We strive to be as efficient as possible, therefore we are able to give you the
                                                absolutely best price in Denver.</p>
                                            <Link to="/get-quote-step">Get Instant Quote Now {'>'}</Link>
                                            <div className="withus_img_book">
                                                <img src="images/with-service1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0">
                                        <div className="withus_bg">
                                            <h3>Book an Appointment</h3>
                                            <p>Book your appointment for one of our experienced technicians to help answer any
                                                question you might have</p>
                                            <span className="book_appointment_click" onClick={() => setShowAppointmentSidebar(true)}>Book Appointment {'>'}</span>
                                            <div className="withus_img_book">
                                                <img src="images/with-service2.png" alt="" className="with_service2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="with_service_right_side_wepper">
                                    <img src="images/with-service-right-side.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default ConnectWithUs;