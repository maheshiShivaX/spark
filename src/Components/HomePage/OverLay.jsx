import { Link } from "react-router-dom";
import BookAppointment from "./BookAppointment";
import ClubMembership from "./ClubMembership";
import ContactUs from "./ContactUs";

const OverLay = (props) => {
    const { showAppointmentSidebar, activeTab, setActiveTab, setShowAppointmentSidebar } = props
    
    console.log('OverLay Props:', { showAppointmentSidebar, activeTab, setActiveTab, setShowAppointmentSidebar });
    return (
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

                <div className="close_btn"  onClick={()=>setShowAppointmentSidebar(false)}>
            <i className="fa-solid fa-xmark"></i>
        </div>

                    <div className={`tab-pane fade show ${activeTab === 'book-appointment' ? 'active' : ''}`} id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">

                        <BookAppointment />
                    </div>


                    <div className={`tab-pane fade ${activeTab === 'contact-us' ? 'show active' : ''}`} id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex="0">
                        <ContactUs />
                    </div>
                       <div className={`tab-pane fade ${activeTab === 'club-membership' ? 'show active' : ''}`} id="club_membership" role="tabpanel" aria-labelledby="club_membership-tab" tabIndex="0">
                        <ClubMembership />
                    </div>


                </div>
            </div>
        </div>

    )
}
export default OverLay; 