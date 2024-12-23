import { Link } from "react-router-dom";
import React, { useState } from 'react';
const Footer = () => {
    const [showAppointmentSidebar, setShowAppointmentSidebar] = useState(false);
    const [showClubMembership, setShowClubMembership] = useState(false);
    // const [showAppointmentSidebar, setShowAppointmentSidebar] = useState(false);
    const [activeTab, setActiveTab] = useState('book-appointment');
    // const [activeTab, setActiveTab] = useState('book-appointment');
    return (
        <div>
            {/* Book Appointment */}
            <section className="over_lay">
                <div className={`book_appointment_sidebar_wepper ${showAppointmentSidebar ? 'open' : ''}`} style={{ right: showAppointmentSidebar ? '0' : '-100%' }}>
                    <div className="d-flex align-items-start book_appointment_inner">
                        <div className="nav flex-column nav-pills left_side_wepper" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <div className="one_line"></div>
                            <Link to="/get-quote-step" className="nav-link" aria-selected="false" tabIndex="-1" role="tab"> Get Quotation <i className="fa-solid fa-chevron-right"></i></Link>
                            <div className="one_line"></div>
                            <a className={`nav-link ${activeTab === 'book-appointment' ? 'active' : ''}`} id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true" onClick={() => setActiveTab('book-appointment')}>Book An Appointment <i className="fa-solid fa-chevron-right"></i>
                            </a>
                            <div className="one_line"></div>
                            <a className={`nav-link ${activeTab === 'contact-us' ? 'active' : ''}`} id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" onClick={() => setActiveTab('contact-us')}>Contact Us <i className="fa-solid fa-chevron-right"></i></a>
                            <div className="one_line"></div>
                            <a className={`nav-link club_membership_btn ${activeTab === 'club-membership' ? 'active' : ''}`} id="club_membership-tab" data-bs-toggle="pill" data-bs-target="#club_membership" type="button" role="tab" aria-controls="club_membership" aria-selected="false" onClick={() => setActiveTab('club-membership')}> <img src="images/club-taz.svg" alt="" /> Club Membership</a>
                            <div className="club_membership_text"><p>Uncover the Power of Savings with a <br /> Club Membership!</p></div>
                            <div className="Reach_hedding"><h2>Reach Us -</h2><ul><li><i className="fa-solid fa-location-dot"></i> 14 Inverness Drive East G-120 Englewood, <br />CO 80112</li><li><i className="fa-regular fa-envelope"></i>help@sparks-hvac.com 80112</li><li><i className="fa-solid fa-phone"></i>303-521-4037</li><li><i className="fa-regular fa-clock"></i>Mon - Fri (09.00 am - 10.00 pm)</li></ul></div>
                            <div className="book_appointment_logo"><img src="images/logo-white.png" alt="" /></div>
                        </div>
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className={`tab-pane fade show ${activeTab === 'book-appointment' ? 'active' : ''}`} id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
                                <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel"
                                    aria-labelledby="v-pills-profile-tab" tabIndex="0">
                                    <div className="from_hedding">
                                        <h2>Book Appointment</h2>
                                    </div>
                                    <div className="close_btn" onClick={() => setShowAppointmentSidebar(false)}>
                                        <i className="fa-solid fa-xmark"></i>
                                    </div>
                                    <form action="">
                                        <div className="row form_data">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="message">Firstsdfdsf Name*</label>
                                                    <input type="text" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="message">Last Name*</label>
                                                    <input type="text" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="message">Email Address</label>
                                                    <input type="text" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="message">Phone Number</label>
                                                    <input type="number" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="message">Above Ground Level Sqft*</label>
                                                    <input type="text" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="message">Type of Service Needed</label>
                                                    <select name="cars" id="cars">
                                                        <option value="Add New AC">Add New AC</option>
                                                        <option value="AC">AC</option>
                                                        <option value="AC1">AC1</option>
                                                        <option value="AC2">AC2</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="Preferred Day #1">Preferred Day #1</label>
                                                    <input type="date" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="Time #1">Time #1</label>
                                                    <input type="time" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="Preferred Day #1">Preferred Day #2</label>
                                                    <input type="date" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="Time #1">Time #2</label>
                                                    <input type="time" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="note_wepper">
                                                <p>(Select 2 different days and times that you would prefer and we will do our best
                                                    to
                                                    accomodate your request. Our experts will contact you shortly)</p>

                                                <hr />
                                                <h2><strong>Upload Images</strong></h2>
                                                <div className="uplod_data">
                                                    <p>AC Image / Model Serial Image</p>
                                                    <label className="filelabel">

                                                        <input className="FileUpload1" id="FileInput" name="booking_attachment"
                                                            type="file" />
                                                        <span className="title">
                                                            Choose Image
                                                        </span>
                                                        <i className="fa fa-paperclip">
                                                        </i>
                                                    </label>
                                                </div>
                                                <div className="uplod_data">
                                                    <p>Furnace Image / Model Serial Image</p>
                                                    <label className="filelabel">

                                                        <span className="title">
                                                            Choose Image
                                                        </span>
                                                        <input className="FileUpload1" id="FileInput" name="booking_attachment"
                                                            type="file" />

                                                        <i className="fa fa-paperclip">
                                                        </i>
                                                    </label>
                                                </div>
                                                <div className="uplod_data">
                                                    <p>Area around AC/Furnace - Take Photo 5ft Back</p>
                                                    <label className="filelabel">

                                                        <span className="title">
                                                            Choose Image
                                                        </span>
                                                        <input className="FileUpload1" id="FileInput" name="booking_attachment"
                                                            type="file" />

                                                        <i className="fa fa-paperclip">
                                                        </i>
                                                    </label>
                                                </div>
                                                <div className="checkboxes_wepper">
                                                    <h2><strong>House Status*</strong></h2>
                                                    <div className="checkboxes__row">
                                                        <div className="checkboxes__item">
                                                            <label className="checkbox style-c">
                                                                <input type="checkbox" />
                                                                <div className="checkbox__checkmark"></div>
                                                                <div className="checkbox__body">Vacant</div>
                                                            </label>
                                                        </div>
                                                        <div className="checkboxes__item">
                                                            <label className="checkbox style-c">
                                                                <input type="checkbox" />
                                                                <div className="checkbox__checkmark"></div>
                                                                <div className="checkbox__body">Occupied</div>
                                                            </label>
                                                        </div>
                                                        <div className="checkboxes__item">
                                                            <label className="checkbox style-c">
                                                                <input type="checkbox" />
                                                                <div className="checkbox__checkmark"></div>
                                                                <div className="checkbox__body">Attic</div>
                                                            </label>
                                                        </div>
                                                        <div className="checkboxes__item">
                                                            <label className="checkbox style-c">
                                                                <input type="checkbox" />
                                                                <div className="checkbox__checkmark"></div>
                                                                <div className="checkbox__body">Crawlspace</div>
                                                            </label>
                                                        </div>
                                                        <div className="checkboxes__item">
                                                            <label className="checkbox style-c">
                                                                <input type="checkbox" />
                                                                <div className="checkbox__checkmark"></div>
                                                                <div className="checkbox__body">Mechanical</div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="street_address_wepper row">

                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <label htmlFor="message">Street Address*</label>
                                                            <input type="text" name="fname" id="" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <label htmlFor="Zip Code">Zip Code</label>
                                                            <input type="date" name="fname" id="" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <label htmlFor="City">City</label>
                                                            <input type="date" name="fname" id="" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <label htmlFor="State">State</label>
                                                            <input type="date" name="fname" id="" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <label htmlFor="How did you hear about us?">How did you hear about
                                                                us?</label>
                                                            <input type="date" name="fname" id="" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <div className="form-group additional_message">
                                                            <label htmlFor="Additional Message">Additional Message</label>
                                                            <textarea name="" id="" className="form-control"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="note_wepper club_member_ship_image_uplode">
                                                        <a href="#">SUBMIT NOW</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className={`tab-pane fade ${activeTab === 'contact-us' ? 'show active' : ''}`} id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex="0">
                                <div className="tab-pane" id="v-pills-messages" role="tabpanel"
                                    aria-labelledby="v-pills-messages-tab" tabIndex="0">
                                    <div className="from_hedding">
                                        <h2>Contact Us</h2>
                                    </div>
                                    <div className="close_btn" onClick={() => setShowAppointmentSidebar(false)}>
                                        <i className="fa-solid fa-xmark"></i>
                                    </div>
                                    <form action="">
                                        <div className="row form_data">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="message">First Name*</label>
                                                    <input type="text" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="message">Last Name*</label>
                                                    <input type="text" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="message">Email Address</label>
                                                    <input type="text" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="message">Phone Number</label>
                                                    <input type="number" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="message">Type of Service Needed</label>
                                                    <select name="cars" id="cars">
                                                        <option value="Add New AC">Add New AC</option>
                                                        <option value="AC">AC</option>
                                                        <option value="AC1">AC1</option>
                                                        <option value="AC2">AC2</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="Street Address*">Street Address*</label>
                                                    <input type="text" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="Zip Code">Zip Code</label>
                                                    <input type="tel" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="City">City</label>
                                                    <input type="text" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="City">State</label>
                                                    <input type="text" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="City">How did you hear about us?</label>
                                                    <input type="text" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="City">Additional Message</label>
                                                    <textarea name="message" id="message" rows="4" data-name="Message"
                                                        className="form-control" required=""></textarea>
                                                </div>
                                            </div>
                                            <div className="note_wepper club_member_ship_image_uplode">
                                                <a href="#">SUBMIT NOW</a>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                            <div className={`tab-pane fade ${activeTab === 'club-membership' ? 'show active' : ''}`} id="club_membership" role="tabpanel" aria-labelledby="club_membership-tab" tabIndex="0">
                                <div className="tab-pane" id="club_membership" role="tabpanel"
                                    aria-labelledby="club_membership-tab" tabIndex="0">
                                    <div className="from_hedding">
                                        <h2>Club Membership</h2>
                                    </div>
                                    <div className="close_btn" onClick={() => setShowAppointmentSidebar(false)}>
                                        <i className="fa-solid fa-xmark"></i>
                                    </div>
                                    <form action="">
                                        <div className="row form_data">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="message">First Name*</label>
                                                    <input type="text" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="message">Last Name*</label>
                                                    <input type="text" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="message">Street Address</label>
                                                    <input type="text" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="Landmark">Landmark</label>
                                                    <input type="tel" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="City">City</label>
                                                    <input type="tel" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="State">State</label>
                                                    <input type="tel" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="Zipcode">Zipcode</label>
                                                    <input type="tel" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="Email Address">Email Address</label>
                                                    <input type="email" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="Phone Number">Phone Number</label>
                                                    <input type="number" name="fname" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="message">How did you hear about us?</label>
                                                    <select name="cars" id="cars">
                                                        <option value="Add New AC">Add New AC</option>
                                                        <option value="AC">AC</option>
                                                        <option value="AC1">AC1</option>
                                                        <option value="AC2">AC2</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="note_wepper club_member_ship_image_uplode">
                                                <div className="uplod_data">
                                                    <p>Upload Signature Image</p>
                                                    <label className="filelabel">

                                                        <span className="title">
                                                            Choose Image
                                                        </span>
                                                        <input className="FileUpload1" id="FileInput" name="booking_attachment"
                                                            type="file" />

                                                        <i className="fa fa-paperclip">
                                                        </i>
                                                    </label>
                                                </div>
                                                <a href="#">Get Membership Now</a>
                                                <hr />
                                                <strong>Uncover the Power of Savings with a Club Membership!</strong>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Book Appointment End */}
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                            <div className="footer_logo">
                                <img src="images/logo-white.png" alt="" />
                                <h2>Contact Us</h2>
                                <p>9250 E. Costilla Ave #620 Greenwood Village CO 80112</p>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                            <div className="footer_logo quick_link">
                                <h2>Quick Links</h2>
                                <div className="quick_link_inner">
                                    <ul>
                                        <li><Link to="/aboutus"><img src="images/footer-arrow.svg" alt="" /> About Us</Link>
                                        </li>
                                        <li><a href="#"><img src="images/footer-arrow.svg" alt="" /> HVAC Tune Up Services</a>
                                        </li>
                                        <li><a href="#"><img src="images/footer-arrow.svg" alt="" /> HVAC Replacement</a></li>
                                        <li><a href="#"><img src="images/footer-arrow.svg" alt="" /> Apply for Financing</a>
                                        </li>
                                        <li><a href="#"><img src="images/footer-arrow.svg" alt="" /> Privacy Policy</a></li>
                                        <li><a href="#"><img src="images/footer-arrow.svg" alt="" /> Sitemap</a></li>
                                    </ul>
                                    <ul>
                                        <li className="book_appointment_click" onClick={() => setShowAppointmentSidebar(true)}><img src="images/footer-arrow.svg" alt="" /> Book an
                                            Appointmen</li>
                                        <li className="club_membership_click" onClick={() => setShowAppointmentSidebar(true)}><img src="images/footer-arrow.svg" alt="" /> Club
                                            Membership</li>

                                        <li className="book_appointment_click" onClick={() => setShowAppointmentSidebar(true)}><    ><img src="images/footer-arrow.svg" alt="" /> Contact Us</></li>
                                        {/* <li><a href="#"><img src="images/footer-arrow.svg" alt="" /> Contact Us</li></a> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                            <div className="quick_link_email">
                                <ul>
                                    <li><a href="mailto:Help@sparks-hvac.com"><img src="images/email.svg" alt="" />
                                        Help@sparks-hvac.com</a></li>
                                    <li><a href="tel:3035214037"><img src="images/call.svg" alt="" />303-521-4037</a></li>
                                </ul>
                                <div className="follow_wepper">
                                    <h2>Follow Us On -</h2>
                                    <div className="social_media">
                                        <ul>
                                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="copy_right">
                        <hr />
                        <p>Copyright © 2024</p>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer;