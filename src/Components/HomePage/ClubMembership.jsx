import { useEffect, useState } from "react";
import { endpoints } from "../../_config";
import { post, get } from "../../_services/apiService";
import { toast } from "react-toastify";

const ClubMembership = () => {


    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showAppointmentSidebar, setShowAppointmentSidebar] = useState(false);
    const [activeTab, setActiveTab] = useState('book-appointment');


    const [formData, setFormData] = useState({
        clubMembershipId: 0,
        firstName: '',
        lastName: '',
        emailId: '',
        contactNo: "",
        referralSource: "",
        additionalMsg: "",
        streetAddress: '',
        zipcode: '',
        landmark: '',
        city: '',
        state: "",
        isActive: true,
        createdBy: 0,
        file: ''
    });


    const handleChange = (e) => {
        const { name, value, type} = e.target;

        if (type === 'file') {
            // For file inputs, store the selected file
            setFormData(prevState => ({
                ...prevState,
                [name]: e.target.files[0], // Handle file uploads
            }));
        } else {
            // For other input types (text, date, etc.), update the value
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    


    const onContactUs = async (e) => {

        e.preventDefault();

        const formDataToSend = new FormData();

        // Append form data fields
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }



        try {
            const response = await post(endpoints.SaveClubMembership, formDataToSend);
            if (response.isSuccess === 200) {

                toast.success("Club Membership submit successfully");
                onReset();
            } else {
                toast.error("Failed to submit form data");
            }
        } catch (error) {
            toast.error("Please try again later.");
        } finally {

        }
    };

    const onReset=()=>{
        setFormData({
            clubMembershipId: 0,
            firstName: '',
            lastName: '',
            emailId: '',
            contactNo: "",
            referralSource: "",
            additionalMsg: "",
            streetAddress: '',
            zipcode: '',
            landmark: '',
            city: '',
            state: "",
            isActive: true,
            createdBy: 0,
            file: ''
        });
    }

    return (

        <div className="tab-pane" id="club_membership" role="tabpanel"
            aria-labelledby="club_membership-tab" tabIndex="0">
            <div className="from_hedding">
                <h2>Club Membership</h2>
            </div>
            {/* <div className="close_btn" onClick={() => setShowAppointmentSidebar(false)}>
                <i className="fa-solid fa-xmark"></i>
            </div> */}
            <form onSubmit={onContactUs}>
                <div className="row form_data">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="message">First Name*</label>
                            <input type="text" name="firstName" id="firstName" className="form-control" placeholder="First Name" required value={formData.firstName} onChange={handleChange} />

                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="message">Last Name*</label>
                            <input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="message">Street Address</label>
                            <input type="text" name="streetAddress" id="streetAddress" className="form-control" placeholder="Street Address" required value={formData.streetAddress} onChange={handleChange} />

                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="Landmark">Landmark</label>
                            <input type="text" name="landmark" id="landmark" className="form-control" placeholder="Landmark" required value={formData.landmark} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="City">City</label>
                            <input type="text" name="city" id="city" className="form-control" placeholder="City" value={formData.city} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="State">State</label>
                            <input type="text" name="state" id="state" className="form-control" placeholder="State" value={formData.state} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="Zipcode">Zipcode</label>
                            <input type="text" name="zipcode" id="zipcode" className="form-control" placeholder="Zip Code" value={formData.zipcode} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="Email Address">Email Address</label>
                            <input type="text" name="emailId" id="emailId" className="form-control" placeholder="Email Id" required value={formData.emailId} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="Phone Number">Phone Number</label>
                            <input type="text" name="contactNo" id="contactNo" className="form-control" placeholder="Phone Number" value={formData.contactNo} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="message">How did you hear about us?</label>
                            <input type="text" name="referralSource" id="referralSource" className="form-control" placeholder="How did you hear about us?" value={formData.referralSource} onChange={handleChange} />

                        </div>
                    </div>



                    <div className="note_wepper club_member_ship_image_uplode">
                        <div className="uplod_data">
                            <p>Upload Signature Image</p>
                            <label className="filelabel">Upload Sign

                                <input type="file" className="form-control" id="file" name="file" accept="image/png, image/jpeg" onChange={handleChange} />
                            </label>
                        </div>

                        <button type="submit" className="all_sumbit_button" >Get Membership Now</button>

                        <hr />
                        <strong>Uncover the Power of Savings with a Club Membership!</strong>
                    </div>
                </div>
            </form>
        </div>


    )
}

export default ClubMembership;